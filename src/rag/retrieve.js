import { resumeChunks } from './resumeChunks'
import { isEducationIntent, normalizeQuery } from './normalizeQuery'

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s/+.-]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 1)
}

function termFreq(tokens) {
  const tf = new Map()
  for (const t of tokens) tf.set(t, (tf.get(t) || 0) + 1)
  return tf
}

function cosine(a, b) {
  let dot = 0
  let normA = 0
  let normB = 0
  const keys = new Set([...a.keys(), ...b.keys()])
  for (const k of keys) {
    const av = a.get(k) || 0
    const bv = b.get(k) || 0
    dot += av * bv
    normA += av * av
    normB += bv * bv
  }
  if (!normA || !normB) return 0
  return dot / (Math.sqrt(normA) * Math.sqrt(normB))
}

const indexed = resumeChunks.map((chunk) => ({
  ...chunk,
  tf: termFreq(tokenize(`${chunk.section} ${chunk.text}`)),
}))

/**
 * Retrieve the top-k most relevant resume chunks for a query.
 * Normalizes typos/slang first; pins Education when schooling intent is clear.
 */
export function retrieveChunks(query, topK = 4) {
  const normalized = normalizeQuery(query)
  const qTf = termFreq([...tokenize(query), ...tokenize(normalized)])

  let ranked = indexed
    .map((chunk) => ({
      id: chunk.id,
      section: chunk.section,
      text: chunk.text,
      score: cosine(qTf, chunk.tf),
    }))
    .sort((a, b) => b.score - a.score)

  // Hard pin: education questions must include the Education chunk first.
  if (isEducationIntent(query)) {
    const edu = ranked.find((c) => c.id === 'education')
    if (edu) {
      ranked = [edu, ...ranked.filter((c) => c.id !== 'education')]
      edu.score = Math.max(edu.score, 1)
    }
  }

  return ranked.slice(0, topK).filter((c, i) => i === 0 || c.score > 0)
}

export function formatContext(chunks) {
  return chunks
    .map((c) => `[${c.section}]\n${c.text}`)
    .join('\n\n---\n\n')
}

/** Resume / employer topics we treat as in-scope even with weak lexical overlap. */
const SCOPE_HINTS =
  /\b(mark|acedo|gercee|resume|cv|experience|edu|educat|school|universit|degree|tesda|dean|gwa|work|job|employ|decode|project|juan\s*charge|synthesize|skill|tech|stack|react|python|javascript|php|laravel|node|docker|aws|ai|rag|retrieval|vector|qdrant|embed|n8n|automat|chatbot|chat\s*bot|assistant|certif|gdsc|google\s*developer|contact|email|linkedin|github|hire|portfolio|caloocan|manila|about\s+(him|mark)|who\s+is|background|strength|weakness|availab|salary|rate|role|position|thru|through|gonr?|dis)\b/i

/** Clearly off-topic patterns (math, coding puzzles, general Q&A, jailbreaks, etc.). */
const OUT_OF_SCOPE_PATTERNS = [
  /\b(what\s+is|what's|calculate|solve|compute)\s+\d/i,
  /\d+\s*[\+\-\*\/x×÷]\s*\d+/,
  /\b(write|generate|fix|debug|refactor)\s+(me\s+)?(a\s+|some\s+)?(code|function|script|sql|regex)/i,
  /\b(weather|stock|crypto|news|recipe|joke|poem|story|translate)\b/i,
  /\b(capital\s+of|who\s+won|president\s+of|how\s+many\s+people)\b/i,
  /\b(ignore|disregard|forget)\s+(all\s+)?(previous|prior|above|system)\s+(instructions?|rules?|prompts?)\b/i,
  /\b(you\s+are\s+now|act\s+as|pretend\s+to\s+be|jailbreak|dan\s+mode)\b/i,
  /\b(system\s+prompt|reveal\s+(your|the)\s+(prompt|instructions)|show\s+me\s+your\s+(prompt|instructions))\b/i,
  /\b(do\s+anything\s+now|developer\s+mode|no\s+restrictions)\b/i,
]

/**
 * Guardrail: true only when the question looks resume/employer-related.
 */
export function isInScope(query, chunks, minScore = 0.08) {
  const q = (query || '').trim()
  if (!q) return false

  if (OUT_OF_SCOPE_PATTERNS.some((re) => re.test(q))) return false

  if (isEducationIntent(q)) return true

  const topScore = chunks[0]?.score ?? 0
  if (topScore >= minScore) return true

  const normalized = normalizeQuery(q)
  if (SCOPE_HINTS.test(q) || SCOPE_HINTS.test(normalized)) return true

  return false
}
