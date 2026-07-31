import { formatContext, isInScope, retrieveChunks } from './retrieve'

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions'
const MODEL = 'llama-3.1-8b-instant'

const OUT_OF_SCOPE_REPLY =
  "I can only answer questions about Mark Acedo's background — education, work experience, projects, skills, certifications, and how to contact him. Try asking something about his resume."

const SYSTEM_PROMPT = `You are Mark Acedo's portfolio assistant for employers and recruiters.

STRICT SCOPE RULES:
- Answer ONLY questions about Mark Acedo using the resume context below.
- Refuse anything off-topic: math, trivia, coding help, weather, news, general knowledge, or unrelated advice.
- If the user asks something outside Mark's resume, reply EXACTLY with this sentence (no extra answer):
"${OUT_OF_SCOPE_REPLY}"
- If the topic is about Mark but the context lacks the detail, say you don't have that on file and suggest emailing gercee19@gmail.com.
- Never invent employers, dates, skills, or projects.
- Be concise and professional (2–4 short sentences unless asked for more detail).`

/**
 * RAG: retrieve resume chunks → ground Groq response in that context.
 */
export async function askAboutMark(question, history = []) {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY
  if (!apiKey) {
    throw new Error(
      'Missing VITE_GROQ_API_KEY. Add it to a .env file in the project root.',
    )
  }

  const chunks = retrieveChunks(question, 4)

  // Hard guardrail before calling the model — blocks math / trivia / etc.
  if (!isInScope(question, chunks)) {
    return { answer: OUT_OF_SCOPE_REPLY, sources: [], blocked: true }
  }

  const context = formatContext(chunks)

  const messages = [
    {
      role: 'system',
      content: `${SYSTEM_PROMPT}\n\nResume context:\n${context}`,
    },
    ...history.slice(-6).map((m) => ({
      role: m.role,
      content: m.content,
    })),
    { role: 'user', content: question },
  ]

  const res = await fetch(GROQ_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      temperature: 0.2,
      max_tokens: 512,
    }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err?.error?.message || `Groq API error (${res.status})`)
  }

  const data = await res.json()
  const answer =
    data?.choices?.[0]?.message?.content?.trim() ||
    "I couldn't generate an answer. Please try again."

  return { answer, sources: chunks.map((c) => c.section), blocked: false }
}
