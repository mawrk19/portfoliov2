import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, X, Loader2, Sparkles } from 'lucide-react'
import { askAboutMark } from '../rag/askGroq'

const SUGGESTIONS = [
  "What is Mark's education?",
  'Where has Mark worked?',
  'What projects has he built?',
  'What tech stack does he use?',
]

export default function ResumeChatbot({ darkMode = false }) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi — I'm Mark's resume assistant. Ask me about his education, experience, projects, or skills.",
    },
  ])
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
      inputRef.current?.focus()
    }
  }, [open, messages, loading])

  async function send(text) {
    const question = (text ?? input).trim()
    if (!question || loading) return

    const nextHistory = [...messages, { role: 'user', content: question }]
    setMessages(nextHistory)
    setInput('')
    setLoading(true)

    try {
      const historyForApi = nextHistory
        .filter((m) => m.role === 'user' || m.role === 'assistant')
        .slice(1) // skip greeting
        .slice(0, -1) // current question sent separately

      const { answer, sources } = await askAboutMark(question, historyForApi)
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

  const panel = darkMode
    ? 'bg-zinc-950 border-zinc-800 text-white'
    : 'bg-white border-slate-200 text-zinc-900'
  const muted = darkMode ? 'text-zinc-500' : 'text-slate-500'
  const bubbleUser = 'bg-blue-500 text-white'
  const bubbleBot = darkMode
    ? 'bg-zinc-900 border border-zinc-800 text-zinc-200'
    : 'bg-slate-50 border border-slate-100 text-slate-700'

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          className={`theme-container w-[min(100vw-2.5rem,380px)] h-[min(70vh,520px)] rounded-2xl border shadow-2xl flex flex-col overflow-hidden ${panel}`}
        >
          <header
            className={`flex items-center justify-between px-4 py-3 border-b ${darkMode ? 'border-zinc-800' : 'border-slate-100'}`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center shrink-0">
                <Sparkles size={14} className="text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold truncate">Ask about Mark</p>
                <p className={`text-[10px] ${muted}`}>Resume-grounded · Groq RAG</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className={`p-1.5 rounded-lg transition-colors ${darkMode ? 'hover:bg-zinc-800' : 'hover:bg-slate-100'}`}
              aria-label="Close chat"
            >
              <X size={16} className={muted} />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 hide-scrollbar">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                    m.role === 'user' ? bubbleUser : bubbleBot
                  } ${m.error ? 'border-red-300 text-red-600' : ''}`}
                >
                  {m.content}
                  {m.sources?.length > 0 && (
                    <p className={`mt-2 text-[10px] ${muted}`}>
                      Sources: {m.sources.join(' · ')}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className={`rounded-2xl px-3.5 py-2.5 ${bubbleBot} flex items-center gap-2 text-[13px]`}>
                  <Loader2 size={14} className="animate-spin text-blue-500" />
                  <span className={muted}>Thinking…</span>
                </div>
              </div>
            )}

            {messages.length === 1 && !loading && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className={`text-[11px] px-2.5 py-1.5 rounded-lg border transition-colors ${
                      darkMode
                        ? 'border-zinc-800 text-zinc-400 hover:border-blue-500/50 hover:text-blue-400'
                        : 'border-slate-200 text-slate-500 hover:border-blue-300 hover:text-blue-600'
                    }`}
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
            className={`p-3 border-t flex gap-2 ${darkMode ? 'border-zinc-800' : 'border-slate-100'}`}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about experience, skills…"
              disabled={loading}
              className={`flex-1 text-sm rounded-xl px-3 py-2.5 outline-none border transition-colors ${
                darkMode
                  ? 'bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-blue-500'
                  : 'bg-slate-50 border-slate-200 text-zinc-900 placeholder:text-slate-400 focus:border-blue-400'
              }`}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 disabled:opacity-40 disabled:hover:bg-blue-500 transition-colors shrink-0"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-2xl bg-blue-500 text-white shadow-lg shadow-blue-500/30 flex items-center justify-center hover:bg-blue-600 active:scale-95 transition-all"
        aria-label={open ? 'Close resume chat' : 'Open resume chat'}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  )
}
