/**
 * Normalize messy employer chat queries before retrieval.
 * Handles slang, abbreviations, and light typos so questions like
 * "what edu dis he gon" still retrieve Education.
 */

/** Exact token replacements (typos, slang, abbreviations). */
const TOKEN_MAP = {
  // abbreviations
  edu: 'education',
  educ: 'education',
  educatn: 'education',
  eduction: 'education',
  edcuation: 'education',
  schl: 'school',
  schoolin: 'schooling',
  uni: 'university',
  univ: 'university',
  deg: 'degree',
  exp: 'experience',
  xp: 'experience',
  experince: 'experience',
  experence: 'experience',
  wrk: 'work',
  wok: 'work',
  jobb: 'job',
  proj: 'project',
  projek: 'project',
  skils: 'skills',
  skil: 'skills',
  techstack: 'tech stack',
  cert: 'certification',
  certs: 'certifications',
  bakground: 'background',
  bckground: 'background',
  contct: 'contact',
  emial: 'email',
  githb: 'github',
  linkedn: 'linkedin',
  portfoilio: 'portfolio',
  chatbt: 'chatbot',
  chatbots: 'chatbots',
  automatn: 'automation',
  vectr: 'vector',
  qdrnt: 'qdrant',
  // common chat typos / shorthand
  wht: 'what',
  wat: 'what',
  wut: 'what',
  hw: 'how',
  wer: 'where',
  wher: 'where',
  whn: 'when',
  id: 'did',
  dis: 'did',
  didd: 'did',
  d: 'did',
  hes: "he's",
  hee: 'he',
  gon: 'go',
  gonr: 'go',
  gone: 'go',
  goin: 'going',
  thru: 'through',
  thro: 'through',
  thrugh: 'through',
  abt: 'about',
  bout: 'about',
  plz: 'please',
  pls: 'please',
  hv: 'have',
  hav: 'have',
  haz: 'has',
  cn: 'can',
  cud: 'could',
  shud: 'should',
  teh: 'the',
  thx: 'thanks',
  frm: 'from',
  wth: 'with',
}

/** Dictionary for fuzzy correction of unknown tokens. */
const VOCAB = [
  'what',
  'where',
  'when',
  'who',
  'why',
  'how',
  'did',
  'does',
  'have',
  'has',
  'he',
  'his',
  'mark',
  'acedo',
  'education',
  'school',
  'university',
  'degree',
  'tesda',
  'experience',
  'work',
  'job',
  'employer',
  'decode',
  'project',
  'projects',
  'skills',
  'stack',
  'react',
  'python',
  'javascript',
  'php',
  'laravel',
  'node',
  'docker',
  'aws',
  'rag',
  'vector',
  'database',
  'qdrant',
  'n8n',
  'automation',
  'chatbot',
  'certification',
  'contact',
  'email',
  'linkedin',
  'github',
  'hire',
  'portfolio',
  'background',
  'through',
  'about',
  'strong',
  'salary',
  'available',
  'manila',
  'caloocan',
  'stripe',
  'yolo',
]

function levenshtein(a, b) {
  if (a === b) return 0
  if (!a.length) return b.length
  if (!b.length) return a.length
  const prev = new Array(b.length + 1)
  const curr = new Array(b.length + 1)
  for (let j = 0; j <= b.length; j++) prev[j] = j
  for (let i = 1; i <= a.length; i++) {
    curr[0] = i
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost)
    }
    for (let j = 0; j <= b.length; j++) prev[j] = curr[j]
  }
  return prev[b.length]
}

function fuzzyCorrect(token) {
  if (token.length < 3) return token
  let best = token
  let bestDist = Infinity
  for (const word of VOCAB) {
    if (Math.abs(word.length - token.length) > 2) continue
    const dist = levenshtein(token, word)
    const maxDist = token.length <= 4 ? 1 : 2
    if (dist > 0 && dist <= maxDist && dist < bestDist) {
      best = word
      bestDist = dist
    }
  }
  return best
}

function correctToken(token) {
  if (TOKEN_MAP[token]) return TOKEN_MAP[token]
  if (VOCAB.includes(token)) return token
  return fuzzyCorrect(token)
}

/** True when the (raw or normalized) query is asking about schooling. */
export function isEducationIntent(query) {
  const raw = (query || '').toLowerCase()
  const normalized = normalizeQuery(query).toLowerCase()
  const hay = `${raw} ${normalized}`
  return /\b(edu|educat|school|universit|degree|tesda|dean|gwa|coursework|college|graduat)\b/.test(
    hay,
  )
}

/**
 * Expand / clean a raw user question for retrieval + model understanding.
 */
export function normalizeQuery(query) {
  const raw = (query || '').trim()
  if (!raw) return ''

  const tokens = raw
    .toLowerCase()
    .replace(/[^a-z0-9\s/+.-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)

  const corrected = tokens.map(correctToken)
  let text = corrected.join(' ')

  // Any edu shorthand → strong education retrieval boost
  if (/\b(edu|education|school|university|degree|tesda|college)\b/.test(`${raw.toLowerCase()} ${text}`)) {
    text = `${text} education school university degree tesda coursework dean`
  }
  if (/\b(work|job|experience)\b/.test(text) && !/\beducation\b/.test(text)) {
    text = `${text} work experience employer decode`
  }
  if (/\b(skill|stack|tech)\b/.test(text)) {
    text = `${text} skills tech stack laravel react qdrant n8n`
  }

  return text.replace(/\s+/g, ' ').trim()
}
