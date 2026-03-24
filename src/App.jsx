import { 
  Calendar, 
  Mail, 
  BookOpen, 
  ChevronRight, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare
} from 'lucide-react'
import profileImage from './assets/mark.jpg'

const symbol = '>';

const Github = ({ size = 24, ...props }) => (
  <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Instagram = ({ size = 24, ...props }) => (
  <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const SectionTitle = ({ children, viewAllLink }) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-xl font-bold text-zinc-900">{children}</h2>
    {viewAllLink && (
      <a href={viewAllLink} className="text-slate-400 hover:text-slate-600 text-xs flex items-center gap-1 transition-colors">
        View All <ChevronRight size={12} />
      </a>
    )}
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      {/* Header */}
      <header className="bg-white max-w-4xl mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-col md:flex-row md:items-center md:gap-8">
          <div className="flex-shrink-0 flex justify-center md:block">
            <img src={profileImage} alt="Mark Acedo" className="w-40 h-40 rounded-2xl object-cover border-2 border-slate-100 shadow-xl" />
          </div>
          
          <div className="flex-1 mt-6 md:mt-0">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight">Mark Acedo</h1>
                <CheckCircle2 size={18} className="text-blue-500 fill-blue-500" />
              </div>
              
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                <span>Metro Manila, Philippines</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[15px] font-medium text-slate-600">AI | Software Developer | Mythical Glory</span>
                <div className="h-4 w-[1px] bg-slate-200 hidden md:block"></div>
                <div className="bg-blue-500 text-white text-[10px] font-bold px-3 py-1.5 rounded flex items-center gap-2 shadow-sm shadow-blue-500/20">
                  <div className="w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
                  Top Global Masha
                  <ChevronRight size={12} className="opacity-60" />
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {/* <button className="bg-zinc-950 text-white px-5 py-2.5  text-sm font-semibold flex items-center gap-2 hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10 active:scale-95">
                  <Calendar size={14} />
                  Schedule a Call
                  <ChevronRight size={14} className="ml-1 opacity-50" />
                </button> */}
                <button className="bg-white border border-slate-200 text-slate-700 px-5 py-2.5 text-sm font-semibold flex items-center gap-2 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95">
                  <Mail size={14} className="text-slate-400" />
                  Send Email
                </button>
                {/* <button className="bg-white border border-slate-200 text-slate-700 px-5 py-2.5  text-sm font-semibold flex items-center gap-2 hover:bg-slate-50 hover:border-slate-300 transition-all group active:scale-95">
                  <BookOpen size={14} className="text-slate-400" />
                  Read my Blog
                  <ChevronRight size={14} className="ml-2 text-slate-300 group-hover:translate-x-1 transition-transform" />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
        {/* Left Column */}
        <div className="space-y-12">
          {/* About Section */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold text-zinc-900">About</h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-slate-600 max-w-2xl">
              <p>
                I'm a full-stack software engineer specializing in developing solutions with JavaScript, Python, and PHP. I work on projects including building modern web applications, mobile apps, search engine optimization, digital marketing, and making code tutorials.
              </p>
              <p>
                I've helped startups and MSMEs grow and streamline their processes through software solutions. I've also built a community of over 200,000 developers sharing knowledge and mentorship.
              </p>
              <p>
                Lately, I've been diving deeper into the world of artificial intelligence, focusing on integrating AI tools and techniques into modern applications. My work now includes developing AI-powered solutions, creating intelligent applications, and leveraging generative AI to optimize development workflows and deliver cutting-edge technology.
              </p>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="font-bold text-base text-zinc-900">Tech Stack</div>
                <a href="#" className="text-xs text-slate-400 hover:text-blue-500 flex items-center gap-1">View All <ChevronRight size={14} /></a>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-xs text-slate-500 mb-2">Frontend</div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS'].map(tech => (
                      <span key={tech} className="bg-slate-100 px-2 py-1 rounded">{tech}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-xs text-slate-500 mb-2">Backend</div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {['Node.js', 'Python', 'PHP', 'Laravel', 'PostgreSQL', 'MongoDB'].map(tech => (
                      <span key={tech} className="bg-slate-100 px-2 py-1 rounded">{tech}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-xs text-slate-500 mb-2">DevOps & Cloud</div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'].map(tech => (
                      <span key={tech} className="bg-slate-100 px-2 py-1 rounded">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Projects */}
          <section>
            <SectionTitle viewAllLink="#">Recent Projects</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'JuanCharge', desc: 'Smart Iot Reverse vendo', link: 'juan-charge.vercel.app' },
                { title: 'SAGE AI', desc: 'AI Story telling game', link: 'sage-ai.vercel.app' },
                { title: 'Virmonte', desc: 'AI-powered virus simulation', link: 'virmonte.vercel.app' },
                { title: 'Elevate', desc: 'LMS', link: 'elevate.enterprisesuite.ph' }
              ].map((proj) => (
                <div key={proj.title} className="group p-5 bg-white border border-slate-100 rounded-xl hover:border-slate-300 hover:bg-slate-50/50 transition-all cursor-pointer">
                  <h3 className="font-bold text-zinc-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{proj.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-3">{proj.desc}</p>
                  <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-slate-100 rounded text-[10px] font-medium text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    {proj.link}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column / Sidebar */}
        <div className="space-y-10">
          {/* Access Card */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-zinc-900/20 bg-zinc-900">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 p-6 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 font-black text-[120px] select-none pointer-events-none">
                MARK
              </div>
              
              <div className="space-y-4 relative">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <span className="text-white font-mono text-lg font-bold">{symbol}_</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-blue-400 font-bold text-xs uppercase tracking-widest">Devs One Thousand</h3>
                  <p className="text-white/60 text-[10px] uppercase font-medium tracking-tighter">Access Card</p>
                </div>
              </div>

              <div className="space-y-6 relative">
                <div className="space-y-1">
                  <p className="text-white/30 text-[8px] uppercase font-bold tracking-[0.2em]">Berthing Number</p>
                  <p className="text-white font-black text-3xl tracking-tight">MWRK</p>
                </div>
                <div className="flex justify-between items-end">
                  <div className="p-2 bg-white/5 rounded-md border border-white/10 backdrop-blur-sm animate-pulse">
                    <div className="w-12 h-12 bg-white/20"></div>
                  </div>
                  <p className="text-white/20 font-mono text-[8px]">084-123-344</p>
                </div>
              </div>
            </div>
          </div>

          {/* Banner */}
          {/* <div className="bg-indigo-600 rounded-xl p-4 flex items-center justify-between group cursor-pointer hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform">
                <span className="text-indigo-600 font-black text-xs">PH</span>
              </div>
              <div className="text-white">
                <p className="text-[10px] font-bold uppercase tracking-tight opacity-80">I'm part of</p>
                <p className="text-lg font-black leading-none">PH100</p>
              </div>
            </div>
            <div className="bg-white/20 p-1.5 rounded-full text-white">
              <ChevronRight size={14} />
            </div>
          </div> */}

          {/* Experience Timeline */}
          <section className="space-y-6">
            <h2 className="text-lg font-bold text-zinc-900">Experience</h2>
            <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-px before:bg-slate-100">
              {[
                { role: 'Software Developer', company: 'Decode Technologies', year: '2026' },
                { role: 'Intern Developer', company: 'Decode Technologies', year: '2025' },
                { role: 'BS Computer Science', company: 'University of Caloocan City', year: '2022' },
                { role: 'Hello World! 🚀', company: 'Wrote my first line of code', year: '2020' },
              ].map((exp, idx) => (
                <div key={exp.role + idx} className="flex gap-4 relative group">
                  <div className="mt-1.5 w-[22px] h-[22px] rounded border border-slate-200 bg-white flex items-center justify-center shrink-0 z-10 group-hover:border-blue-500 transition-colors">
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full group-hover:bg-blue-500 transition-colors"></div>
                  </div>
                  <div className="flex-1 -mt-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-bold text-zinc-900 leading-tight">{exp.role}</h4>
                      <span className="text-[10px] font-bold text-slate-400 font-mono tracking-tighter">{exp.year}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-snug mt-1">{exp.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Full Width Sections */}
      <div className="max-w-4xl mx-auto px-6 pb-20 space-y-20">
        {/* Recommendations & Certifications Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <section>
            <SectionTitle viewAllLink="#">Recent Certifications</SectionTitle>
            <div className="space-y-3">
              {[
                { title: 'Huawei Developer Expert', issuer: 'Huawei' },
                { title: 'Generative AI Leader', issuer: 'Google' },
                { title: 'Software Engineering', issuer: 'HackerRank' },
                { title: 'Generative AI Professional', issuer: 'Oracle' }
              ].map(cert => (
                <div key={cert.title} className="p-4 bg-slate-50 rounded-xl border border-transparent hover:border-slate-200 hover:bg-white transition-all group flex justify-between items-center cursor-default">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">{cert.title}</h4>
                    <p className="text-[11px] text-slate-500">{cert.issuer}</p>
                  </div>
                  <ExternalLink size={14} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>Recommendations</SectionTitle>
            <div className="relative p-8 bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none">
                <MessageSquare size={120} strokeWidth={4} />
              </div>
              <div className="space-y-6 relative">
                <p className="text-white text-lg font-medium leading-relaxed italic">
                  "Intelligent software engineer. Mark takes lead during software development and can handle and manage teams well."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-700 animate-pulse"></div>
                  <div>
                    <h4 className="text-white text-sm font-bold">Ken Gorre</h4>
                    <p className="text-slate-400 text-xs">Senior Developer at Tutsode</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-1.5 mt-8">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
            </div>
          </section>
        </div>

        {/* 4-Column Footer Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-slate-100 pt-16">
          <section className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">A member of</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded bg-slate-100 shrink-0 group-hover:bg-slate-200 transition-colors"></div>
                <p className="text-[11px] font-bold text-slate-600 leading-tight">Analytics & AI Association of the Philippines (AAP)</p>
                <ExternalLink size={10} className="text-slate-300 ml-auto shrink-0" />
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded bg-slate-100 shrink-0 group-hover:bg-slate-200 transition-colors"></div>
                <p className="text-[11px] font-bold text-slate-600 leading-tight">Philippine Software Industry Association</p>
                <ExternalLink size={10} className="text-slate-300 ml-auto shrink-0" />
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Social Links</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                <Linkedin size={18} />
                <span className="text-sm font-bold">LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-zinc-950 transition-colors">
                <Github size={18} />
                <span className="text-sm font-bold">GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-pink-600 transition-colors">
                <Instagram size={18} />
                <span className="text-sm font-bold">Instagram</span>
              </a>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Speaking</h3>
            <div className="space-y-4">
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Available for speaking at events about software engineering and emerging technologies.
              </p>
              <div className="pt-2">
                <a href="#" className="text-[10px] font-bold text-zinc-900 flex items-center gap-1 group">
                  GET IN TOUCH
                  <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Links</h3>
            <div className="space-y-3">
              {[
                { icon: Calendar, label: 'Schedule a Call' },
                // { icon: BookOpen, label: 'Read my Blog' },
                { icon: Mail, label: 'Contact me' }
              ].map((link, idx) => (
                <a key={idx} href="#" className="flex items-center justify-between p-3 bg-slate-50 rounded-xl group hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all border border-transparent hover:border-slate-100">
                  <div className="flex items-center gap-3">
                    <link.icon size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                    <span className="text-[11px] font-bold text-slate-600">{link.label}</span>
                  </div>
                  <ChevronRight size={14} className="text-slate-300 group-hover:text-slate-950 transition-transform group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* Gallery */}
        <section className="space-y-6 pt-10">
          <SectionTitle>Gallery</SectionTitle>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-[300px] h-[200px] rounded-2xl bg-slate-100 shrink-0 overflow-hidden border border-slate-200 group relative">
                <img src={`/api/placeholder/300/200?text=Gallery+${i}`} alt={`Gallery ${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                  <p className="text-white text-xs font-bold uppercase tracking-widest">Project Moment</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-bold text-slate-400">© 2025 Mark Acedo. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
