/** Short canned replies — no LLM call, zero tokens. */
const REPLIES = {
  greeting: [
    "Hey! 👋 I'm Mark's resume assistant. Ask me about his experience, projects, skills, or whether he's a fit for your team.",
    "Hi there — happy to help. I can walk you through Mark's education, work at Decode, AI projects, and tech stack.",
    "Hello! Think of me as Mark's recruiter sidekick. What do you want to know — background, skills, or recent projects?",
  ],
  thanks: [
    "You're welcome! Happy to help if anything else comes up about Mark.",
    "Anytime — feel free to ask more about his background.",
    "Glad that helped! I'm here if you have more questions.",
  ],
  bye: [
    "Take care! Reach Mark at gercee19@gmail.com if you'd like to connect directly.",
    "Bye — good luck with your hiring search. Mark's worth a conversation.",
    "See you! Drop Mark a line anytime at gercee19@gmail.com.",
  ],
  who: [
    "I'm Mark's portfolio assistant — I answer recruiter-style questions using his real resume. Try asking about his education, Decode experience, or AI projects like Synthesize.",
    "Resume assistant for Mark Acedo. I know his background, skills, and projects — ask away.",
  ],
  howAreYou: [
    "Doing great, thanks for asking! Ready to talk about Mark whenever you are.",
    "All good on my end — what would you like to know about Mark?",
  ],
  help: [
    "I can answer questions about Mark's education, work experience, projects, skills, certifications, and contact info. Try: \"What did he do at Decode?\" or \"Does he have chatbot experience?\"",
  ],
}

function pick(list, seed) {
  return list[Math.abs(seed) % list.length]
}

function normalize(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s']/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Returns a friendly canned reply for greetings / light chitchat, or null.
 * Keeps personality without calling the LLM.
 */
export function getChitChatReply(query) {
  const raw = (query || '').trim()
  if (!raw || raw.length > 100) return null

  const q = normalize(raw)
  const seed = q.split('').reduce((n, c) => n + c.charCodeAt(0), 0)

  // hii, heyy, hello, yo, sup, etc.
  if (
    /^(hi+|hey+|hello+|hiya+|heya+|yo+|sup+|wassup|whats up|what s up|good (morning|afternoon|evening|day)|howdy|greetings|gm|ga)( there| mark| everyone| all| ya| u| you)?$/.test(
      q,
    )
  ) {
    return pick(REPLIES.greeting, seed)
  }

  if (/^(thanks|thank you|thank u|ty|thx|tysm|appreciate it|cheers)$/.test(q)) {
    return pick(REPLIES.thanks, seed)
  }

  if (/^(bye|goodbye|good bye|see ya|see you|cya|later|gotta go|gtg)$/.test(q)) {
    return pick(REPLIES.bye, seed)
  }

  if (
    /^(who are you|what are you|what can you do|what do you do|help|help me|what is this)$/.test(
      q,
    )
  ) {
    return pick(REPLIES.who, seed)
  }

  if (/^(how are you|how r you|how are u|hows it going|how s it going|you good|u good)$/.test(q)) {
    return pick(REPLIES.howAreYou, seed)
  }

  if (/^(what can i ask|what should i ask|examples|suggestions)$/.test(q)) {
    return pick(REPLIES.help, seed)
  }

  return null
}

export function isChitChat(query) {
  return getChitChatReply(query) !== null
}
