/**
 * Source of truth for the employer chatbot.
 * Structured from Mark's resume, with portfolio details filling blank sections
 * (Projects / Additional) so answers stay useful for recruiters.
 */
export const resumeChunks = [
  {
    id: 'identity',
    section: 'Identity',
    text: `Name: Mark Relan Gercee Acedo (Mark Acedo).
Location: Metro Manila, Philippines.
Roles: AI | Software Developer.
Email: gercee19@gmail.com.
LinkedIn: https://ph.linkedin.com/in/mark-acedo-402b17285
GitHub: https://github.com/mawrk19
Instagram: https://www.instagram.com/gerceeacedo`,
  },
  {
    id: 'about',
    section: 'About',
    text: `Mark is a full-stack software engineer specializing in JavaScript, Python, and PHP.
He builds modern web applications, mobile apps, and works with SEO and digital marketing.
He has helped startups and MSMEs grow and streamline processes through software solutions.
He is diving deeper into artificial intelligence — integrating AI tools into applications,
building AI-powered solutions, and using generative AI to improve development workflows.`,
  },
  {
    id: 'education',
    section: 'Education',
    text: `Education:
- University of Caloocan City — BS Computer Science (2022).
- TESDA — Intensive program for JAVA Programming / Programming (JAVA) NC III.
- TESDA — Computer System Servicing NC II.`,
  },
  {
    id: 'work-experience',
    section: 'Work Experience',
    text: `Work Experience:
- Decode Technologies — Associate Software / AI Developer (2025).
- Kopilism — Contractual Software Developer (2022).
He started coding in 2020 ("Hello World").`,
  },
  {
    id: 'projects',
    section: 'Projects',
    text: `Projects:
- Juan Charge — AI-powered IoT smart kiosk. Live: https://juan-charge.vercel.app
- Synthesize — AI systems analyst for specs and handoffs. Live: https://synthesize-client-kappa.vercel.app
- Virmonte — Virus transmission simulator. Live: https://virmonte.vercel.app`,
  },
  {
    id: 'activities',
    section: 'Activities',
    text: `Activities / Memberships:
- Google Developer Student Club PUP (GDSC) — member.`,
  },
  {
    id: 'certifications',
    section: 'Additional / Certifications',
    text: `Additional / Certifications:
- Introduction to Modern AI — Cisco Networking Academy.
- Programming (JAVA) NC III — TESDA.
- Computer System Servicing NC II — TESDA.
- Cloud Computing 101 — Amazon Web Services (AWS).`,
  },
  {
    id: 'tech-stack',
    section: 'Tech Stack',
    text: `Tech Stack:
Frontend: JavaScript, TypeScript, React, HTML/CSS, Tailwind CSS.
Backend: Node.js, Python, PHP, Laravel, MySQL, REST APIs.
DevOps & Cloud: Docker, Git, AWS, CI/CD, AI / RAG.`,
  },
]
