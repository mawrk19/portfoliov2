/**
 * Source of truth for the employer chatbot.
 * Synced from Mark_Acedo_Resume.pdf — keep this aligned when the resume changes.
 */
export const resumeChunks = [
  {
    id: 'identity',
    section: 'Identity',
    text: `Name: Mark Relan Gercee Acedo (Mark Acedo).
Location: Caloocan City, Metro Manila, Philippines.
Phone: +63 9451933078.
Roles: Software Developer | AI-focused engineer.
Email: gercee19@gmail.com.
LinkedIn: https://www.linkedin.com/in/mark-acedo-402b17285
GitHub: https://github.com/mawrk19
Portfolio: https://portfolio-ni-mawrk.vercel.app/`,
  },
  {
    id: 'about',
    section: 'About',
    text: `Mark is a software developer focused on full-stack product work and applied AI.
He ships production web apps with JavaScript/TypeScript, PHP (Laravel), React, and Node.js,
and builds AI features using RAG (Retrieval-Augmented Generation), Qdrant vector search,
n8n automation, and chatbot / agent workflows.

Accomplishments & contributions:
- Ships live AI products end-to-end (Synthesize, Juan Charge) — not just demos.
- At Decode Technologies, built Laravel APIs for 30,000+ daily active users and React features
  that improved sign-up conversion.
- Integrates RAG, embeddings, NotebookLM, and intelligent chatbots into real LMS workflows.
- Comfortable across frontend, backend, testing, automation, and cloud tooling.`,
  },
  {
    id: 'education',
    section: 'Education',
    text: `Education (always answer education questions from this section):
- University of Caloocan City (Caloocan City) — BS Computer Science, Major in Software Engineering (2026).
  General Weighted Average (GWA): 1.53; Dean's Lister, 2022–2026.
  Relevant coursework: Data Structures & Algorithms, Software Engineering, Operating Systems,
  Database Systems, Web & Mobile Development.
- SEA GEM Training and Assessment Center, Inc. (Malate, Manila) — Intensive program for JAVA
  Programming by TESDA (2022).

When asked what education Mark went through / "edu" / school / degree: lead with UCC BS Computer
Science (Software Engineering major), GWA, Dean's Lister, then TESDA JAVA training.`,
  },
  {
    id: 'work-experience',
    section: 'Work Experience',
    text: `Work Experience:
- Decode Technologies (North Fairview, Quezon City) — Associate Software Developer (Aug 2025 – Present).
  • Built and shipped REST APIs in Laravel serving 30,000+ daily active users, cutting average response time by 30%.
  • Developed responsive front-end features in React and Tailwind CSS, increasing sign-up conversion by 25%.
  • Wrote unit and integration tests (PHPUnit), raising code coverage from 40% to 85% and reducing production bugs.
  • Integrated advanced AI into the LMS framework — internal documentation AI agents using Retrieval-Augmented
    Generation (RAG), NotebookLM for automated content generation, and intelligent chatbots.`,
  },
  {
    id: 'projects',
    section: 'Projects',
    text: `Projects:
- Synthesize (AI-powered tool, 2026) — full-stack AI workspace that turns meeting transcripts, brain dumps,
  and context files into SRS documents, Mermaid diagrams, database schemas, and gap analyses using Groq LLM
  and Whisper via async Laravel queue jobs.
  Architected modular Laravel REST API (Sanctum auth, RBAC) and React SPA (TanStack Router/Query, Ant Design)
  with 10+ domain modules, stakeholder review links, and a live Mermaid diagram studio.
  Designed multi-agent orchestration (Planner → Developer → Tester → Reviewer) with human-in-the-loop approval,
  GitHub PR automation, and CI validation; deployed on Vercel, Render, and Neon PostgreSQL.
  Live: https://synthesize-client-kappa.vercel.app
- Juan Charge (AI-powered IoT, 2025) — AI-driven smart kiosk powered by solar and wind energy for free
  community charging. Integrated YOLOv11 for real-time trash classification and recyclable detection.
  Engineered web/mobile dashboards & analytics (React/Laravel) for kiosk health, user management, and
  waste-collection visualization.
  Live: https://juan-charge.vercel.app
- Portfolio Resume Chatbot — employer-facing RAG chatbot grounded in Mark's resume (retrieval, guardrails,
  rate limiting). Demonstrates practical chatbot + RAG experience.`,
  },
  {
    id: 'ai-chatbots-rag',
    section: 'AI, Chatbots & Automation',
    text: `AI, chatbots, RAG, and automation experience:
- Chatbots: Production intelligent chatbots and documentation AI agents at Decode Technologies (LMS),
  plus a resume-grounded employer chatbot on this portfolio.
- RAG: Retrieval-Augmented Generation (NOT "Reactive, Adaptive, Generative") — retrieve relevant context
  first, then generate grounded answers. Used in Decode LMS agents and this portfolio assistant.
- Vector databases: Hands-on with Qdrant for vector/semantic retrieval in RAG-style systems.
- n8n automation: Uses n8n Automation for multi-step AI/ops workflows connecting APIs and triggers.
- Computer vision: YOLOv11 on Juan Charge for real-time classification.
- Multi-agent systems: Synthesize Planner → Developer → Tester → Reviewer pipeline with human-in-the-loop.

When asked if Mark has chatbot experience: yes — Decode LMS intelligent chatbots/agents plus this
portfolio RAG assistant, with RAG, Qdrant, and n8n in his stack.`,
  },
  {
    id: 'activities',
    section: 'Activities',
    text: `Activities / Memberships:
- Google Developer Student Club PUP (GDSC) — Member (Aug 2024 – May 2026), Quezon City.
  Helped organize 10+ hands-on coding workshops and a 3-day hackathon for 300+ students.`,
  },
  {
    id: 'certifications',
    section: 'Additional / Certifications',
    text: `Additional / Certifications & languages:
- Programming (JAVA) NC III — TESDA.
- Computer System Servicing NC II — TESDA.
- freeCodeCamp — Full-Stack Web Development.
Languages: English (fluent), Filipino (native).`,
  },
  {
    id: 'tech-stack',
    section: 'Tech Stack',
    text: `Technical Skills:
Proficient: JavaScript/TypeScript, PHP (Laravel), React, Node.js, MySQL, HTML/CSS.
Familiar: Python, C#, Git, Docker, REST APIs, CI/CD, AI, RAG (Retrieval-Augmented Generation),
YOLOv11, n8n Automation, Qdrant (vector database), Stripe, AWS.

Mark is strongest on Laravel + React full-stack delivery, with a clear applied-AI direction
(RAG, chatbots, Qdrant, n8n, multi-agent workflows).`,
  },
  {
    id: 'employer-fit',
    section: 'Why hire Mark',
    text: `Why employers may find Mark a strong candidate:
- Proven production impact: Laravel APIs at 30k+ DAU, measurable conversion and coverage gains.
- Full-stack foundation (React, Laravel, Node) with hands-on AI: RAG, Qdrant, n8n, chatbots, YOLOv11.
- Ships complex products (Synthesize multi-agent workspace, Juan Charge IoT AI kiosk).
- Strong academics: GWA 1.53, Dean's Lister; TESDA JAVA + freeCodeCamp full-stack.
- GDSC organizer experience with workshops and a large student hackathon.
- Based in Caloocan City, Metro Manila; contact gercee19@gmail.com, +63 9451933078, or LinkedIn.`,
  },
]
