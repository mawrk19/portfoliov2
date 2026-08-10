import {
  Mail,
  ExternalLink,
  Zap,
  ShieldCheck,
  Sparkles,
  Home,
  FolderKanban,
  Briefcase,
  Award,
  Images,
  Menu,
  X,
  MessageCircle,
  Sun,
  Moon,
  Monitor,
} from 'lucide-react'
import { useState } from 'react'
import { useTheme } from './hooks/useTheme'
import profileImage from './assets/mark.jpg'
import synthesize1 from './assets/synthesize-1.png'
import synthesize2 from './assets/synthesize-2.png'
import synthesize3 from './assets/synthesize-3.png'
import synthesize4 from './assets/synthesize-4.png'
import synthesize5 from './assets/synthesize-5.png'
import synthesize6 from './assets/synthesize-6.png'
import ciscoModernAiCert from './assets/cisco-modern-ai.png'
import tesdaJavaNcIiiCert from './assets/tesda-java-nciii.png'
import gdscLogo from './assets/gdsc-logo.png'
import ResumeChatbot from './components/ResumeChatbot'

const GithubIcon = ({ size = 16, ...props }) => (
  <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const LinkedinIcon = ({ size = 16, ...props }) => (
  <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const InstagramIcon = ({ size = 16, ...props }) => (
  <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const NAV = [
  { href: '#top', label: 'Home', icon: Home },
  { href: '#projects', label: 'Projects', icon: FolderKanban },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#certifications', label: 'Certifications', icon: Award },
  { href: '#gallery', label: 'Gallery', icon: Images },
  { href: '#chat', label: 'Ask about me', icon: MessageCircle },
]

const STATS = [
  { value: '3+', label: 'Live products' },
  { value: '2+', label: 'Yrs coding' },
  { value: '4', label: 'Certifications' },
  { value: 'AI', label: 'Focus area' },
]

const PROJECTS = [
  {
    title: 'Juan Charge',
    desc: 'AI-powered IoT smart kiosk — hardware thinking meets intelligent software, shipped live.',
    tag: 'IoT · AI',
    link: 'https://juan-charge.vercel.app',
    color: 'bg-neutral-900',
    icon: Zap,
  },
  {
    title: 'Synthesize',
    desc: 'AI systems analyst for specs & handoffs — helps teams move from ideas to clear documentation faster.',
    tag: 'AI product',
    link: 'https://synthesize-client-kappa.vercel.app',
    color: 'bg-neutral-800',
    icon: Sparkles,
  },
  {
    title: 'Virmonte',
    desc: 'Virus transmission simulator that turns a complex problem into a clear, interactive experience.',
    tag: 'Simulation',
    link: 'https://virmonte.vercel.app',
    color: 'bg-neutral-700',
    icon: ShieldCheck,
  },
]

const EXPERIENCE = [
  {
    year: '2025',
    role: 'Associate Software / AI Developer',
    company: 'Decode Technologies',
    points: [
      'Building software and AI-focused features in a production environment',
      'Applying RAG (Retrieval-Augmented Generation), vector databases, and n8n automation to real product workflows',
    ],
  },
  {
    year: '2022',
    role: 'Contractual Software Developer',
    company: 'Kopilism',
    points: [
      'Delivered client software end-to-end under lean timelines',
      'Gained professional delivery habits early in the journey',
    ],
  },
  {
    year: '2022',
    role: 'BS Computer Science',
    company: 'University of Caloocan City',
    points: [],
  },
  {
    year: '2020',
    role: 'Hello World',
    company: 'Wrote my first line of code',
    points: [],
  },
]

const STACK = {
  Frontend: ['JavaScript', 'TypeScript', 'React', 'HTML/CSS', 'Tailwind CSS'],
  Backend: ['Node.js', 'Python', 'PHP', 'Laravel', 'MySQL', 'REST APIs'],
  'DevOps & AI': [
    'Docker',
    'Git',
    'AWS',
    'CI/CD',
    'RAG',
    'Vector DBs',
    'n8n',
  ],
}

const CERTS = [
  { title: 'Introduction to Modern AI', issuer: 'Cisco Networking Academy', image: ciscoModernAiCert },
  { title: 'Programming (JAVA) NC III', issuer: 'TESDA', image: tesdaJavaNcIiiCert },
  { title: 'Computer System Servicing NC II', issuer: 'TESDA' },
  { title: 'Cloud Computing 101', issuer: 'Amazon Web Services' },
]

const GALLERY = [
  { img: synthesize1, label: 'Landing' },
  { img: synthesize2, label: 'Capabilities' },
  { img: synthesize3, label: 'Workflow' },
  { img: synthesize4, label: 'Dashboard' },
  { img: synthesize5, label: 'SRS Document' },
  { img: synthesize6, label: 'Diagrams' },
]

const THEME_OPTIONS = [
  { id: 'light', label: 'Light', icon: Sun },
  { id: 'dark', label: 'Dark', icon: Moon },
  { id: 'system', label: 'System', icon: Monitor },
]

function SectionHead({ num, title, href, linkLabel }) {
  return (
    <div className="flex items-end justify-between gap-4 mb-8">
      <h2 className="text-[13px] font-medium tracking-wide text-[var(--color-mute)] lowercase">
        <span className="font-mono text-[var(--color-faint)]">{num}</span>
        <span className="mx-2 text-[var(--color-line)]">—</span>
        <span className="text-[var(--color-ink)]">{title}</span>
      </h2>
      {href && (
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-faint)] hover:text-[var(--color-ink)] transition-colors flex items-center gap-1"
        >
          {linkLabel} <ExternalLink size={10} />
        </a>
      )}
    </div>
  )
}

function ThemeToggle({ theme, setTheme }) {
  return (
    <div
      className="inline-flex items-center border border-[var(--color-line)] p-0.5"
      role="group"
      aria-label="Color theme"
    >
      {THEME_OPTIONS.map((option) => {
        const active = theme === option.id
        return (
          <button
            key={option.id}
            type="button"
            onClick={(e) => setTheme(option.id, e)}
            title={option.label}
            aria-label={option.label}
            aria-pressed={active}
            className={`p-1.5 transition-colors ${
              active
                ? 'bg-[var(--color-ink)] text-[var(--color-bg)]'
                : 'text-[var(--color-faint)] hover:text-[var(--color-ink)]'
            }`}
          >
            <option.icon size={13} strokeWidth={1.75} />
          </button>
        )
      })}
    </div>
  )
}

function Sidebar({ open, onClose, theme, setTheme }) {
  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-dvh w-[240px] border-r border-[var(--color-line)] bg-[var(--color-bg)] px-6 py-8 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-start justify-between">
          <a href="#top" className="font-semibold tracking-tight text-[15px]" onClick={onClose}>
            MARK ACEDO
          </a>
          <button type="button" className="lg:hidden p-1 text-[var(--color-faint)]" onClick={onClose} aria-label="Close">
            <X size={16} />
          </button>
        </div>

        <nav className="mt-10 space-y-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-2.5 py-1.5 text-[13px] text-[var(--color-mute)] hover:text-[var(--color-ink)] transition-colors"
            >
              <item.icon size={14} strokeWidth={1.75} />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-10 space-y-3 text-[11px]">
          <div className="flex items-center justify-between">
            <span className="text-[var(--color-faint)]">Status</span>
            <span className="flex items-center gap-1.5 text-[var(--color-ink)] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Open to work
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[var(--color-faint)]">Focus</span>
            <span className="text-[var(--color-ink)] font-medium">AI + Full-stack</span>
          </div>
        </div>

        <div className="mt-auto pt-10 space-y-4">
          <ThemeToggle theme={theme} setTheme={setTheme} />

          <div className="flex items-center gap-3 text-[var(--color-mute)]">
            <a href="https://github.com/mawrk19" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-ink)] transition-colors" aria-label="GitHub">
              <GithubIcon size={15} />
            </a>
            <a href="https://ph.linkedin.com/in/mark-acedo-402b17285" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-ink)] transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={15} />
            </a>
            <a href="https://www.instagram.com/gerceeacedo" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-ink)] transition-colors" aria-label="Instagram">
              <InstagramIcon size={15} />
            </a>
          </div>
          <p className="text-[11px] text-[var(--color-faint)] leading-relaxed">
            Based in Metro Manila,<br />Philippines
          </p>
          <a href="mailto:gercee19@gmail.com" className="block text-[12px] text-[var(--color-mute)] hover:text-[var(--color-ink)] transition-colors">
            gercee19@gmail.com
          </a>
        </div>
      </aside>
    </>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div id="top" className="min-h-dvh bg-[var(--color-bg)] text-[var(--color-ink)]">
      <Sidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-30 flex items-center justify-between px-5 py-4 bg-[var(--color-bg)]/90 backdrop-blur border-b border-[var(--color-line)]">
        <button type="button" onClick={() => setMenuOpen(true)} className="p-1 text-[var(--color-ink)]" aria-label="Open menu">
          <Menu size={18} />
        </button>
        <span className="text-[13px] font-semibold tracking-tight">MARK ACEDO</span>
        <a href="mailto:gercee19@gmail.com" className="p-1 text-[var(--color-mute)]" aria-label="Email">
          <Mail size={16} />
        </a>
      </div>

      <main className="lg:ml-[240px]">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 py-10 sm:py-16">
          {/* Hero */}
          <section className="pb-14">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-start">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 shrink-0 overflow-hidden rounded-sm bg-[var(--color-soft)]">
                <img
                  src={profileImage}
                  alt="Mark Acedo"
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
                />
                <div
                  className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-45 dark:mix-blend-soft-light dark:opacity-35"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #000 0.55px, transparent 0.65px)',
                    backgroundSize: '2.75px 2.75px',
                  }}
                  aria-hidden
                />
              </div>

              <div className="min-w-0 pt-1">
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Mark Acedo</h1>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-mute)] max-w-md">
                  Full-stack engineer focused on generative AI — turning rough ideas into products people actually use.
                  I ship web apps, IoT experiments, and AI tooling for startups and growing teams.
                </p>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[13px]">
                  <a href="https://github.com/mawrk19" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-[var(--color-line)] hover:decoration-[var(--color-ink)] transition-colors">
                    github
                  </a>
                  <a href="https://ph.linkedin.com/in/mark-acedo-402b17285" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-[var(--color-line)] hover:decoration-[var(--color-ink)] transition-colors">
                    linkedin
                  </a>
                  <a href="https://www.instagram.com/gerceeacedo" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-[var(--color-line)] hover:decoration-[var(--color-ink)] transition-colors">
                    instagram
                  </a>
                  <a href="mailto:gercee19@gmail.com" className="underline underline-offset-4 decoration-[var(--color-line)] hover:decoration-[var(--color-ink)] transition-colors">
                    email
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 border border-[var(--color-line)] divide-x divide-y sm:divide-y-0 divide-[var(--color-line)]">
              {STATS.map((stat) => (
                <div key={stat.label} className="px-4 py-4 bg-[var(--color-paper)]">
                  <p className="text-xl font-semibold tracking-tight">{stat.value}</p>
                  <p className="mt-1 text-[11px] text-[var(--color-faint)] uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 01 Projects */}
          <section id="projects" className="section-rule py-14">
            <SectionHead num="01" title="projects" href="https://github.com/mawrk19" linkLabel="All projects" />

            {/* Stacked cards — desktop */}
            <div className="relative hidden sm:block h-[300px] mb-2">
              {PROJECTS.map((proj, i) => {
                const offsets = [
                  'left-0 top-6 rotate-[-4deg] z-10',
                  'left-1/2 -translate-x-1/2 top-0 rotate-0 z-30',
                  'right-0 top-8 rotate-[4deg] z-20',
                ]
                return (
                  <a
                    key={proj.title}
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute w-[58%] max-w-[280px] bg-[var(--color-card)] border border-[var(--color-line)] shadow-[var(--shadow-card)] p-5 transition-transform hover:-translate-y-1 hover:z-40 ${offsets[i]}`}
                  >
                    <div className={`w-8 h-8 rounded-md ${proj.color} text-white dark:text-black flex items-center justify-center mb-4 dark:bg-[var(--color-ink)]`}>
                      <proj.icon size={14} />
                    </div>
                    <p className="text-[10px] uppercase tracking-wider text-[var(--color-faint)] mb-1">{proj.tag}</p>
                    <h3 className="text-[15px] font-semibold tracking-tight">{proj.title}</h3>
                    <p className="mt-2 text-[12px] leading-relaxed text-[var(--color-mute)] line-clamp-3">{proj.desc}</p>
                    <p className="mt-4 text-[11px] font-medium text-[var(--color-ink)] flex items-center gap-1">
                      Visit live <ExternalLink size={10} />
                    </p>
                  </a>
                )
              })}
            </div>

            {/* Stack list — mobile */}
            <div className="grid grid-cols-1 gap-3 sm:hidden">
              {PROJECTS.map((proj) => (
                <a
                  key={`m-${proj.title}`}
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[var(--color-line)] p-4"
                >
                  <p className="text-[10px] uppercase tracking-wider text-[var(--color-faint)] mb-1">{proj.tag}</p>
                  <h3 className="text-sm font-semibold">{proj.title}</h3>
                  <p className="mt-1 text-[12px] text-[var(--color-mute)]">{proj.desc}</p>
                </a>
              ))}
            </div>
          </section>

          {/* 02 Experience */}
          <section id="experience" className="section-rule py-14">
            <SectionHead num="02" title="experience" href="mailto:gercee19@gmail.com" linkLabel="Get in touch" />

            <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {EXPERIENCE.map((exp) => (
                <div key={exp.role + exp.year} className="py-4 grid grid-cols-[52px_1fr] sm:grid-cols-[64px_1fr_auto] gap-x-4 gap-y-1 items-start">
                  <span className="font-mono text-[12px] text-[var(--color-faint)] pt-0.5">{exp.year}</span>
                  <div>
                    <p className="text-[14px] font-semibold tracking-tight">{exp.role}</p>
                    {exp.points.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {exp.points.map((p) => (
                          <li key={p} className="text-[12px] text-[var(--color-mute)] leading-relaxed">
                            {p}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <p className="text-[13px] text-[var(--color-faint)] sm:text-right col-span-2 sm:col-span-1 sm:pt-0.5">
                    {exp.company}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <div className="flex items-end justify-between mb-4">
                <p className="text-[11px] uppercase tracking-wider text-[var(--color-faint)]">Stack</p>
              </div>
              <div className="space-y-4">
                {Object.entries(STACK).map(([group, items]) => (
                  <div key={group}>
                    <p className="text-[11px] text-[var(--color-faint)] mb-2">{group}</p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((tech) => (
                        <span
                          key={tech}
                          className="text-[12px] px-2.5 py-1 border border-[var(--color-line)] bg-[var(--color-paper)] text-[var(--color-mute)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 03 Certifications */}
          <section id="certifications" className="section-rule py-14">
            <SectionHead num="03" title="certifications" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTS.map((cert) => {
                const inner = (
                  <>
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt=""
                        className="w-12 h-9 object-cover rounded-sm border border-[var(--color-line)] shrink-0"
                      />
                    ) : (
                      <div className="w-12 h-9 rounded-sm bg-[var(--color-soft)] border border-[var(--color-line)] shrink-0" />
                    )}
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold tracking-tight leading-snug">{cert.title}</p>
                      <p className="text-[11px] text-[var(--color-faint)] mt-1">{cert.issuer}</p>
                    </div>
                  </>
                )
                const className =
                  'flex items-center gap-3 p-4 border border-[var(--color-line)] bg-[var(--color-paper)] hover:border-[var(--color-mute)] transition-colors'

                return cert.image ? (
                  <a key={cert.title} href={cert.image} target="_blank" rel="noopener noreferrer" className={className}>
                    {inner}
                  </a>
                ) : (
                  <div key={cert.title} className={className}>
                    {inner}
                  </div>
                )
              })}
            </div>
          </section>

          {/* 04 Affiliations */}
          <section className="section-rule py-14">
            <SectionHead num="04" title="affiliations" />
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-3">
                <img
                  src={gdscLogo}
                  alt="GDSC"
                  className="w-9 h-9 object-contain border border-[var(--color-line)] bg-[var(--color-card)] p-1"
                />
                <div>
                  <p className="text-[13px] font-semibold">Google Developer Student Club</p>
                  <p className="text-[11px] text-[var(--color-faint)]">PUP · Member</p>
                </div>
              </div>
            </div>
          </section>

          {/* 05 Gallery */}
          <section id="gallery" className="section-rule py-14">
            <SectionHead num="05" title="gallery" />
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 hide-scrollbar">
              {GALLERY.map((item) => (
                <div
                  key={item.label}
                  className="relative w-[240px] h-[150px] shrink-0 overflow-hidden border border-[var(--color-line)] bg-[var(--color-soft)] group"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-[10px] font-medium uppercase tracking-[0.15em]">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[12px] text-[var(--color-faint)]">
              Product shots from Synthesize — AI systems analyst for specs & handoffs.
            </p>
          </section>

          {/* 06 About / contact CTA */}
          <section id="chat" className="section-rule py-14">
            <SectionHead num="06" title="about & contact" />
            <div className="dot-grid border border-[var(--color-line)] p-6 sm:p-8">
              <p className="text-[15px] leading-relaxed text-[var(--color-mute)] max-w-xl">
                I help startups and MSMEs ship software that actually moves the needle — and lately I&apos;ve been deep in AI,
                RAG (Retrieval-Augmented Generation), vector databases, n8n automation, and generative tooling. If you&apos;re
                hiring for full-stack or AI-adjacent roles, let&apos;s talk.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:gercee19@gmail.com"
                  className="inline-flex items-center gap-2 bg-[var(--color-inverse)] text-[var(--color-on-inverse)] text-[13px] font-medium px-4 py-2.5 hover:opacity-90 transition-opacity"
                >
                  <Mail size={14} />
                  gercee19@gmail.com
                </a>
                <a
                  href="https://ph.linkedin.com/in/mark-acedo-402b17285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[var(--color-line)] text-[13px] font-medium px-4 py-2.5 text-[var(--color-mute)] hover:border-[var(--color-mute)] transition-colors"
                >
                  <LinkedinIcon size={14} />
                  LinkedIn
                </a>
              </div>
              <p className="mt-5 text-[12px] text-[var(--color-faint)]">
                Or use the chat button — ask anything about my resume, grounded in my real background.
              </p>
            </div>
          </section>

          <footer className="section-rule pt-8 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px] text-[var(--color-faint)]">
            <p>© 2026 Mark Acedo</p>
            <p className="font-mono">Metro Manila · PH</p>
          </footer>
        </div>
      </main>

      <ResumeChatbot />
    </div>
  )
}

export default App
