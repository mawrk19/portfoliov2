import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'

const STORAGE_KEY = 'mark-theme'

function getStoredTheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    if (value === 'light' || value === 'dark' || value === 'system') return value
  } catch {
    /* ignore */
  }
  return 'system'
}

export function resolveTheme(theme) {
  if (theme === 'dark') return 'dark'
  if (theme === 'light') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function applyResolved(resolved) {
  document.documentElement.classList.toggle('dark', resolved === 'dark')
}

function persistTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    /* ignore */
  }
}

function setExplosionOrigin(event) {
  const target = event.currentTarget
  const rect = target.getBoundingClientRect()
  const x = rect.left + rect.width / 2
  const y = rect.top + rect.height / 2
  const endRadius =
    Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    ) + 40

  const root = document.documentElement
  root.style.setProperty('--theme-x', `${x}px`)
  root.style.setProperty('--theme-y', `${y}px`)
  root.style.setProperty('--theme-r', `${endRadius}px`)
}

export function useTheme() {
  const [theme, setThemeState] = useState(getStoredTheme)
  const [resolved, setResolved] = useState(() =>
    typeof window === 'undefined' ? 'light' : resolveTheme(getStoredTheme()),
  )

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const sync = () => {
      const next = resolveTheme(theme)
      applyResolved(next)
      setResolved(next)
    }

    sync()
    persistTheme(theme)

    const onChange = () => {
      if (theme === 'system') sync()
    }

    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [theme])

  function commitTheme(next) {
    const nextResolved = resolveTheme(next)
    flushSync(() => {
      setThemeState(next)
      setResolved(nextResolved)
    })
    applyResolved(nextResolved)
    persistTheme(next)
  }

  function setTheme(next, event) {
    if (next === theme) return

    const currentResolved = resolveTheme(theme)
    const nextResolved = resolveTheme(next)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const shouldExplode =
      event?.currentTarget &&
      currentResolved !== nextResolved &&
      !reduced

    if (!shouldExplode) {
      commitTheme(next)
      return
    }

    setExplosionOrigin(event)

    if (typeof document.startViewTransition === 'function') {
      document.documentElement.classList.add('theme-exploding')
      const transition = document.startViewTransition(() => {
        commitTheme(next)
      })
      transition.finished.finally(() => {
        document.documentElement.classList.remove('theme-exploding')
      })
      return
    }

    // Fallback: solid circle explosion from the icon, then swap theme
    const x = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--theme-x'))
    const y = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--theme-y'))
    const r = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--theme-r'))
    const overlay = document.createElement('div')
    overlay.className = 'theme-explode-fallback'
    overlay.style.background = nextResolved === 'dark' ? '#0a0a0a' : '#ffffff'
    overlay.style.clipPath = `circle(0px at ${x}px ${y}px)`
    document.body.appendChild(overlay)

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.style.clipPath = `circle(${r}px at ${x}px ${y}px)`
      })
    })

    const finish = () => {
      commitTheme(next)
      overlay.remove()
    }

    overlay.addEventListener('transitionend', finish, { once: true })
    setTimeout(finish, 900)
  }

  return { theme, setTheme, resolved }
}
