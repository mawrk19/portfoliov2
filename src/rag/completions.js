/**
 * Autocomplete candidates for the resume chatbot input.
 * Matched against what the user has typed so far.
 */
export const COMPLETIONS = [
  "What is Mark's education?",
  'Where has Mark worked?',
  'What projects has he built?',
  'What makes Mark a strong hire?',
  'Does he have experience with chatbots?',
  'What is his experience with RAG?',
  'Has he used vector databases?',
  'Does Mark work with n8n automation?',
  'What is his tech stack?',
  'Tell me about Juan Charge',
  'Tell me about Synthesize',
  'Tell me about Virmonte',
  'Where is Mark based?',
  'How can I contact Mark?',
  'What certifications does he have?',
  'What AI experience does Mark have?',
  'Is Mark a good fit for an AI developer role?',
  'What did he do at Decode Technologies?',
  'What did he do at Kopilism?',
  "What's Mark's background?",
]

/**
 * Return autocomplete suggestions for the current input.
 * Prefer prefix matches, then substring matches.
 */
export function getCompletions(input, limit = 5) {
  const q = (input || '').trim().toLowerCase()
  if (!q || q.length < 2) return []

  const scored = []
  for (const text of COMPLETIONS) {
    const lower = text.toLowerCase()
    if (lower === q) continue
    let score = 0
    if (lower.startsWith(q)) score = 3
    else if (lower.includes(q)) score = 2
    else {
      const words = q.split(/\s+/).filter(Boolean)
      if (words.length && words.every((w) => lower.includes(w))) score = 1
    }
    if (score > 0) scored.push({ text, score })
  }

  return scored
    .sort((a, b) => b.score - a.score || a.text.length - b.text.length)
    .slice(0, limit)
    .map((s) => s.text)
}

/** Ghost-text suffix for the best matching completion (Tab to accept). */
export function getGhostSuffix(input) {
  const q = (input || '').trim()
  if (!q || q.length < 2) return ''
  const match = COMPLETIONS.find((c) =>
    c.toLowerCase().startsWith(q.toLowerCase()),
  )
  if (!match || match.length <= q.length) return ''
  // Preserve what the user typed; append only the remaining characters.
  return match.slice(q.length)
}
