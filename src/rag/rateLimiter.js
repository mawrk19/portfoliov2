const STORAGE_KEY = 'mark-chat-rate-limit'

const MIN_INTERVAL_MS = 2_000
const WINDOW_MS = 60_000
const MAX_PER_MINUTE = 8
const HOURLY_WINDOW_MS = 60 * 60_000
const MAX_PER_HOUR = 30
const COOLDOWN_MS = 60_000

const MESSAGES = {
  too_fast: (s) => `Please wait ${s}s before sending another message.`,
  minute_limit: (s) =>
    `Too many messages in a short time. Try again in ${s}s.`,
  hour_limit: (s) =>
    `Hourly message limit reached. Try again in ${Math.ceil(s / 60)} min.`,
  cooldown: (s) =>
    `Chat paused due to unusual activity. Try again in ${s}s.`,
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { timestamps: [], blockedUntil: 0 }
    const parsed = JSON.parse(raw)
    return {
      timestamps: Array.isArray(parsed.timestamps) ? parsed.timestamps : [],
      blockedUntil: parsed.blockedUntil || 0,
    }
  } catch {
    return { timestamps: [], blockedUntil: 0 }
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

function pruneTimestamps(timestamps, now) {
  return timestamps.filter((t) => now - t < HOURLY_WINDOW_MS)
}

/**
 * Returns whether a chat request is allowed and a user-facing message if not.
 */
export function checkRateLimit() {
  const now = Date.now()
  const state = loadState()
  state.timestamps = pruneTimestamps(state.timestamps, now)

  if (state.blockedUntil > now) {
    const retryAfterSec = Math.ceil((state.blockedUntil - now) / 1000)
    return {
      allowed: false,
      reason: 'cooldown',
      retryAfterSec,
      message: MESSAGES.cooldown(retryAfterSec),
    }
  }

  const last = state.timestamps[state.timestamps.length - 1]
  if (last && now - last < MIN_INTERVAL_MS) {
    const retryAfterSec = Math.ceil((MIN_INTERVAL_MS - (now - last)) / 1000)
    return {
      allowed: false,
      reason: 'too_fast',
      retryAfterSec,
      message: MESSAGES.too_fast(retryAfterSec),
    }
  }

  const lastMinute = state.timestamps.filter((t) => now - t < WINDOW_MS)
  if (lastMinute.length >= MAX_PER_MINUTE) {
    state.blockedUntil = now + COOLDOWN_MS
    saveState(state)
    const retryAfterSec = Math.ceil(COOLDOWN_MS / 1000)
    return {
      allowed: false,
      reason: 'minute_limit',
      retryAfterSec,
      message: MESSAGES.minute_limit(retryAfterSec),
    }
  }

  if (state.timestamps.length >= MAX_PER_HOUR) {
    const oldest = state.timestamps[0]
    const retryAfterSec = Math.ceil(
      (HOURLY_WINDOW_MS - (now - oldest)) / 1000,
    )
    return {
      allowed: false,
      reason: 'hour_limit',
      retryAfterSec,
      message: MESSAGES.hour_limit(retryAfterSec),
    }
  }

  return { allowed: true, retryAfterSec: 0 }
}

/** Record a user message attempt (call only when a send is accepted). */
export function recordMessage() {
  const now = Date.now()
  const state = loadState()
  state.timestamps = pruneTimestamps(state.timestamps, now)
  state.timestamps.push(now)
  saveState(state)
}

export function getRateLimitConfig() {
  return {
    minIntervalMs: MIN_INTERVAL_MS,
    maxPerMinute: MAX_PER_MINUTE,
    maxPerHour: MAX_PER_HOUR,
    cooldownMs: COOLDOWN_MS,
  }
}
