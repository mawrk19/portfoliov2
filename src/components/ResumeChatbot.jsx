import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, X, Loader2 } from 'lucide-react'
import { askAboutMark } from '../rag/askGroq'
import { checkRateLimit } from '../rag/rateLimiter'

const SUGGESTIONS = [
  "What is Mark's education?",
  'Where has Mark worked?',
  'What projects has he built?',
  'What makes Mark a strong hire?',
]

export default function ResumeChatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [cooldownSec, setCooldownSec] = useState(0)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi — I'm Mark's resume assistant. Ask about his experience, projects, skills, or fit for your team.",
    },
  ])
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (cooldownSec <= 0) return undefined
    const timer = setInterval(() => {
      const limit = checkRateLimit()
      if (limit.allowed) {
        setCooldownSec(0)
      } else {
        setCooldownSec(limit.retryAfterSec)
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [cooldownSec])

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
      inputRef.current?.focus()
    }
  }, [open, messages, loading])

  async function send(text) {
    const question = (text ?? input).trim()
    if (!question || loading || cooldownSec > 0) return

    const limit = checkRateLimit()
    if (!limit.allowed) {
      setCooldownSec(limit.retryAfterSec)
      setMessages((prev) => [
        ...prev,
        { role: 'user', content: question },
        {
          role: 'assistant',
          content: limit.message,
          error: true,
          rateLimited: true,
        },
      ])
      setInput('')
      return
    }

    const nextHistory = [...messages, { role: 'user', content: question }]
    setMessages(nextHistory)
    setInput('')
    setLoading(true)

    try {
      const historyForApi = nextHistory
        .filter((m) => m.role === 'user' || m.role === 'assistant')
        .slice(1)
        .slice(0, -1)

      const { answer, sources, rateLimited, retryAfterSec } =
        await askAboutMark(question, historyForApi)
      if (rateLimited && retryAfterSec) setCooldownSec(retryAfterSec)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: answer,
          sources,
        },
      ])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            err?.message ||
            'Something went wrong talking to Groq. Check your API key and try again.',
          error: true,
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  function onSubmit(e) {
    e.preventDefault()
    send()
  }

  const sendDisabled = loading || cooldownSec > 0 || !input.trim()

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[min(100vw-2.5rem,380px)] h-[min(70vh,520px)] border border-[var(--color-line)] bg-[var(--color-card)] shadow-[var(--shadow-float)] flex flex-col overflow-hidden">
          <header className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-line)]">
            <div className="min-w-0">
              <p className="text-[13px] font-semibold tracking-tight">Ask about Mark</p>
              <p className="text-[10px] text-[var(--color-faint)] mt-0.5 font-mono lowercase">
                00 — resume assistant
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-1.5 text-[var(--color-faint)] hover:text-[var(--color-ink)] transition-colors"
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 hide-scrollbar bg-[var(--color-paper)]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[88%] px-3.5 py-2.5 text-[13px] leading-relaxed border ${
                    m.role === 'user'
                      ? 'bg-[var(--color-inverse)] text-[var(--color-on-inverse)] border-[var(--color-inverse)]'
                      : 'bg-[var(--color-card)] text-[var(--color-mute)] border-[var(--color-line)]'
                  }`}
                >
                  {m.content}
                  {m.sources?.length > 0 && (
                    <p className="mt-2 text-[10px] text-[var(--color-faint)] font-mono">
                      {m.sources.join(' · ')}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-[var(--color-card)] border border-[var(--color-line)] px-3.5 py-2.5 flex items-center gap-2 text-[13px] text-[var(--color-faint)]">
                  <Loader2 size={13} className="animate-spin" />
                  Thinking…
                </div>
              </div>
            )}

            {messages.length === 1 && !loading && cooldownSec === 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    disabled={loading || cooldownSec > 0}
                    className="text-[11px] px-2.5 py-1.5 border border-[var(--color-line)] bg-[var(--color-card)] text-[var(--color-mute)] hover:border-[var(--color-mute)] hover:text-[var(--color-ink)] transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <form
            onSubmit={onSubmit}
            className="p-3 border-t border-[var(--color-line)] bg-[var(--color-card)] flex flex-col gap-2"
          >
            {cooldownSec > 0 && (
              <p className="text-[11px] text-[var(--color-faint)] font-mono">
                Wait {cooldownSec}s before sending again.
              </p>
            )}
            <div className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  cooldownSec > 0
                    ? `Wait ${cooldownSec}s…`
                    : 'Ask about experience, skills…'
                }
                disabled={loading || cooldownSec > 0}
                maxLength={500}
                className="flex-1 text-[13px] px-3 py-2.5 outline-none border border-[var(--color-line)] bg-[var(--color-paper)] text-[var(--color-ink)] placeholder:text-[var(--color-faint)] focus:border-[var(--color-mute)] transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={sendDisabled}
                className="w-10 h-10 bg-[var(--color-inverse)] text-[var(--color-on-inverse)] flex items-center justify-center hover:opacity-90 disabled:opacity-35 transition-opacity shrink-0"
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-12 h-12 bg-[var(--color-inverse)] text-[var(--color-on-inverse)] border border-[var(--color-inverse)] shadow-[var(--shadow-float)] flex items-center justify-center hover:opacity-90 active:scale-95 transition-all"
        aria-label={open ? 'Close resume chat' : 'Open resume chat'}
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
      </button>
    </div>
  )
}
