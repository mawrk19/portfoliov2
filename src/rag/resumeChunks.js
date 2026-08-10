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
building AI-powered solutions, and using generative AI to improve development workflows.

Accomplishments & contributions:
- Ships live products end-to-end (Juan Charge, Synthesize, Virmonte) — not just demos.
- Helps startups and MSMEs streamline operations with practical software.
- Actively applies RAG (Retrieval-Augmented Generation), vector databases, generative AI,
  and n8n automation in real applications — including a resume-grounded chatbot on this portfolio.
- Comfortable across frontend, backend, automation, and cloud tooling on lean teams.`,
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
  Builds software and AI-focused features in a production engineering environment.
  Applies modern AI tooling to real product workflows — including RAG (Retrieval-Augmented Generation),
  vector databases for semantic retrieval, and n8n automation for multi-step AI/ops pipelines.
- Kopilism — Contractual Software Developer (2022).
  Delivered client software end-to-end; learned to ship under deadlines with lean execution.
He started coding in 2020 ("Hello World"), showing steady growth from learner to professional developer.`,
  },
  {
    id: 'projects',
    section: 'Projects',
    text: `Projects (selected work that shows initiative and range):
- Portfolio Resume Chatbot — employer-facing RAG chatbot grounded in Mark's resume.
  Uses Retrieval-Augmented Generation (retrieve relevant resume chunks, then generate grounded answers),
  scope guardrails, and rate limiting. Demonstrates practical chatbot + RAG experience, not just theory.
- Juan Charge — AI-powered IoT smart kiosk. Shows ability to combine hardware/IoT concepts with AI.
  Live: https://juan-charge.vercel.app
- Synthesize — AI systems analyst for specs and handoffs. Strong example of practical AI product thinking.
  Live: https://synthesize-client-kappa.vercel.app
- Virmonte — Virus transmission simulator. Demonstrates problem-solving and building useful simulations.
  Live: https://virmonte.vercel.app

These projects show Mark can take ideas from concept to deployed product, including conversational AI.`,
  },
  {
    id: 'ai-chatbots-rag',
    section: 'AI, Chatbots & Automation',
    text: `AI, chatbots, RAG, and automation experience:
- Chatbots: Built a resume-grounded employer chatbot on this portfolio with retrieval, grounding,
  guardrails, and rate limiting — relevant experience for conversational AI / assistant features.
- RAG: Uses Retrieval-Augmented Generation (NOT "Reactive, Adaptive, Generative") — retrieve relevant
  context first, then generate answers grounded in that context to reduce hallucination.
- Vector databases: Works with vector/semantic search concepts for retrieving relevant knowledge chunks
  when building RAG-style assistants and AI features.
- n8n automation: Builds and wires n8n workflows to automate multi-step processes — connecting APIs,
  AI steps, and operational triggers without brittle one-off scripts.
- Broader AI product work: Juan Charge (AI-powered IoT kiosk) and Synthesize (AI systems analyst)
  show he can apply AI beyond chat UIs into real product workflows.

When asked if Mark has chatbot experience: yes — he has hands-on chatbot + RAG experience from this
portfolio assistant, plus related AI product work and automation with n8n and vector retrieval.`,
  },
  {
    id: 'activities',
    section: 'Activities',
    text: `Activities / Memberships:
- Google Developer Student Club PUP (GDSC) — member.
  Reflects community involvement and staying connected to the developer ecosystem.`,
  },
  {
    id: 'certifications',
    section: 'Additional / Certifications',
    text: `Additional / Certifications:
- Introduction to Modern AI — Cisco Networking Academy.
- Programming (JAVA) NC III — TESDA.
- Computer System Servicing NC II — TESDA.
- Cloud Computing 101 — Amazon Web Services (AWS).

Shows continuous learning across AI, programming, systems, and cloud fundamentals.`,
  },
  {
    id: 'tech-stack',
    section: 'Tech Stack',
    text: `Tech Stack:
Frontend: JavaScript, TypeScript, React, HTML/CSS, Tailwind CSS.
Backend: Node.js, Python, PHP, Laravel, MySQL, REST APIs.
DevOps & AI: Docker, Git, AWS, CI/CD, RAG (Retrieval-Augmented Generation), vector databases, n8n automation.

Mark is comfortable working across the stack, which makes him adaptable for full-stack or AI-adjacent roles.`,
  },
  {
    id: 'employer-fit',
    section: 'Why hire Mark',
    text: `Why employers may find Mark a strong candidate:
- Full-stack foundation with a clear AI direction — useful for teams modernizing products with AI.
- Hands-on with chatbots, RAG (Retrieval-Augmented Generation), vector databases, and n8n automation.
- Has shipped multiple live projects, which shows ownership and follow-through.
- Experience with startups/MSMEs suggests he can work with limited resources and wear multiple hats.
- Certifications and GDSC involvement show he keeps learning beyond day-to-day work.
- Based in Metro Manila, Philippines; open to contact via gercee19@gmail.com or LinkedIn.`,
  },
]
