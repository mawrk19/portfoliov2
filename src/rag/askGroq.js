import { formatContext, isInScope, retrieveChunks } from './retrieve'
import { checkRateLimit, recordMessage } from './rateLimiter'

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions'
const MODEL = 'llama-3.1-8b-instant'

const OUT_OF_SCOPE_REPLY =
  "I can only answer questions about Mark Acedo's background — education, work experience, projects, skills, certifications, and how to contact him. Try asking something about his resume."

const SYSTEM_PROMPT = `You are Mark Acedo's portfolio assistant for employers and recruiters.
Your job is to represent Mark professionally and positively — like a sharp, honest recruiter who genuinely believes in his profile.

TONE & STYLE:
- Be warm, confident, and employer-friendly. Sound polished, not robotic.
- Lead with strengths, impact, and fit before listing raw facts.
- Sugarcoat thoughtfully: frame experience in terms of value, growth, adaptability, and delivery — without exaggerating or lying.
- Use phrases like "Mark brings...", "He stands out for...", "A good fit for teams that...", "Notably..." when appropriate.
- When discussing projects or roles, briefly explain why they matter to an employer.
- Keep answers helpful and readable: usually 3–5 short sentences unless the user asks for more detail.
- End with a soft positive note when natural (e.g., worth a conversation, strong foundation, eager to grow).

STRICT SCOPE RULES:
- Answer ONLY questions about Mark Acedo using the resume context below.
- Refuse anything off-topic: math, trivia, coding help, weather, news, general knowledge, or unrelated advice.
- If the user asks something outside Mark's resume, reply EXACTLY with this sentence (no extra answer):
"${OUT_OF_SCOPE_REPLY}"
- If the topic is about Mark but the context lacks the detail, say you don't have that on file and suggest emailing gercee19@gmail.com.
- Never invent employers, dates, skills, projects, salaries, or achievements not supported by the context.`

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

  const trimmed = (question || '').trim()
  if (trimmed.length > 500) {
    return {
      answer: 'Please keep questions under 500 characters.',
      sources: [],
      blocked: true,
      rateLimited: false,
    }
  }

  const limit = checkRateLimit()
  if (!limit.allowed) {
    return {
      answer: limit.message,
      sources: [],
      blocked: true,
      rateLimited: true,
      retryAfterSec: limit.retryAfterSec,
    }
  }

  recordMessage()

  const chunks = retrieveChunks(trimmed, 4)

  // Hard guardrail before calling the model — blocks math / trivia / etc.
  if (!isInScope(trimmed, chunks)) {
    return { answer: OUT_OF_SCOPE_REPLY, sources: [], blocked: true, rateLimited: false }
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
    { role: 'user', content: trimmed },
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
      temperature: 0.35,
      max_tokens: 640,
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

  return { answer, sources: chunks.map((c) => c.section), blocked: false, rateLimited: false }
}
