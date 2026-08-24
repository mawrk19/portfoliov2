# Mark Acedo — Portfolio

React + Vite portfolio with a **resume-grounded RAG chatbot** (Groq).

## Setup

```bash
npm install
cp .env.example .env
```

1. Create a free API key at [console.groq.com/keys](https://console.groq.com/keys)
2. Put it in `.env`:

```env
VITE_GROQ_API_KEY=gsk_your_key_here
```

3. Run the app:

```bash
npm run dev
```

Open the blue chat button (bottom-right) to ask employers-style questions about Mark.

## How the RAG works

1. Resume knowledge lives in `src/rag/resumeChunks.js` (source of truth)
2. `retrieve.js` scores chunks with local TF cosine similarity
3. Top chunks are injected into a Groq chat prompt (`openai/gpt-oss-20b` by default)
4. Answers stay grounded; unknown facts point to `gercee19@gmail.com`

Edit `resumeChunks.js` whenever your resume changes.

> **Note:** `VITE_` keys are exposed in the browser bundle. Fine for local demos / low-limit Groq keys; for production, proxy Groq through a small backend so the key stays private.
