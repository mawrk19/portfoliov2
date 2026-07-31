import { 
  Calendar, 
  Mail, 
  BookOpen, 
  ChevronRight, 
  CheckCircle2, 
  ExternalLink,
  Moon,
  Sun,
  Zap,
  ShieldCheck,
  GraduationCap,
  Sparkles
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
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



const SectionTitle = ({ children, viewAllLink, darkMode }) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{children}</h2>
    {/* {viewAllLink 
    ? (
      <a href={viewAllLink} className={`${darkMode ? 'text-zinc-500 hover:text-zinc-300' : 'text-slate-400 hover:text-slate-600'} text-xs flex items-center gap-1 transition-colors`}>
        View All <ChevronRight size={12} />
      </a>
    ) : null} */}
  </div>
)

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const containerRef = useRef()

  useGSAP(() => {
    if (darkMode) {
      gsap.to(containerRef.current, {
        backgroundColor: '#000000',
        color: '#ffffff',
        duration: 0.5,
        ease: 'power2.inOut'
      })
      gsap.to('.theme-container', {
        backgroundColor: '#000000',
        color: '#ffffff',
        borderColor: '#18181b', // zinc-900
        duration: 0.5,
        ease: 'power2.inOut'
      })
      document.documentElement.classList.add('dark')
    } else {
      gsap.to(containerRef.current, {
        backgroundColor: '#ffffff',
        color: '#000000',
        duration: 0.5,
        ease: 'power2.inOut'
      })
      gsap.to('.theme-container', {
        backgroundColor: '#ffffff',
        color: '#000000',
        borderColor: '#f1f5f9', // slate-100
        duration: 0.5,
        ease: 'power2.inOut'
      })
      document.documentElement.classList.remove('dark')
    }
  }, { dependencies: [darkMode], scope: containerRef })

  return (
    <div ref={containerRef} className="min-h-screen overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* Header */}
      <header className={`theme-container ${darkMode ? 'bg-black text-white' : 'bg-white text-zinc-900'} max-w-4xl mx-auto px-6 pt-10 pb-6 border-b border-slate-100 dark:border-zinc-800`}>
        <div className="flex flex-col md:flex-row md:items-center md:gap-8">
          <div className="flex-shrink-0 flex justify-center md:block relative">
            <img src={profileImage} alt="Mark Acedo" className="w-40 h-40 rounded-2xl object-cover border-2 border-slate-100 dark:border-zinc-800 shadow-xl" />
          </div>
          
          <div className="flex-1 mt-6 md:mt-0 relative">
            {/* Dark Mode Rectangular Toggle */}
            <div className="absolute right-0 top-0">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="w-14 h-7 bg-slate-100 dark:bg-zinc-800 rounded-lg p-1 transition-all relative overflow-hidden group border border-slate-200 dark:border-zinc-700"
              >
                <div className={`absolute inset-0 bg-blue-500 transition-transform duration-500 ${darkMode ? 'translate-x-0' : '-translate-x-full'}`}></div>
                <div 
                  className={`w-5 h-5 bg-white dark:bg-zinc-100 rounded-md shadow-sm transition-all duration-300 relative z-10 flex items-center justify-center ${darkMode ? 'translate-x-7' : 'translate-x-0'}`}
                >
                  {darkMode ? <Moon size={10} className="text-blue-600" /> : <Sun size={10} className="text-amber-500" />}
                </div>
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <h1 className={`text-3xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Mark Acedo</h1>
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
                <a href="mailto:gercee19@gmail.com" className="bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 shadow-sm">
                  <Mail size={14} className="text-slate-400" />
                  Send Email
                </a>
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
            <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>About</h2>
            <div className={`space-y-4 text-[15px] leading-relaxed max-w-2xl ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
              <p>
                I'm a full-stack software engineer specializing in developing solutions with JavaScript, Python, and PHP. I work on projects including building modern web applications, mobile apps, search engine optimization and digital marketing.
              </p>
              <p>
                I've helped startups and MSMEs grow and streamline their processes through software solutions.
              </p>
              <p>
                Lately, I've been diving deeper into the world of artificial intelligence, focusing on integrating AI tools and techniques into modern applications. My work now includes developing AI-powered solutions, creating intelligent applications, and leveraging generative AI to optimize development workflows and deliver cutting-edge technology.
              </p>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <div className={`theme-container rounded-xl shadow-sm p-6 border ${darkMode ? 'bg-black text-white' : 'bg-white text-zinc-900'}`}>
              <div className="flex justify-between items-center mb-4">
                <div className={`font-bold text-base ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Tech Stack</div>
                <a href="#" className={`text-xs flex items-center gap-1 ${darkMode ? 'text-zinc-500 hover:text-blue-400' : 'text-slate-400 hover:text-blue-500'}`}>View All <ChevronRight size={14} /></a>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-xs text-slate-500 dark:text-zinc-500 mb-2">Frontend</div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {['JavaScript', 'TypeScript', 'React', 'HTML/CSS', 'Tailwind CSS'].map(tech => (
                      <span key={tech} className={`border px-2.5 py-1 rounded-md transition-all ${darkMode ? 'bg-black text-white border-zinc-800' : 'bg-white text-slate-600 border-slate-200'}`}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className={`font-semibold text-xs mb-2 ${darkMode ? 'text-zinc-500' : 'text-slate-500'}`}>Backend</div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {['Node.js', 'Python', 'PHP', 'Laravel', 'MySQL', 'REST APIs'].map(tech => (
                      <span key={tech} className={`border px-2.5 py-1 rounded-md transition-all ${darkMode ? 'bg-black text-white border-zinc-800' : 'bg-white text-slate-600 border-slate-200'}`}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className={`font-semibold text-xs mb-2 ${darkMode ? 'text-zinc-500' : 'text-slate-500'}`}>DevOps & Cloud</div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {['Docker', 'Git', 'AWS', 'CI/CD', 'AI / RAG'].map(tech => (
                      <span key={tech} className={`border px-2.5 py-1 rounded-md transition-all ${darkMode ? 'bg-black text-white border-zinc-800' : 'bg-white text-slate-600 border-slate-200'}`}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
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
            <h2 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Experience</h2>
            <div className={`space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-px ${darkMode ? 'before:bg-zinc-800' : 'before:bg-slate-100'}`}>
              {[
                { role: 'Associate Software / AI Developer', company: 'Decode Technologies', year: '2025' },
                { role: 'Contractual Software Developer', company: 'Kopilism', year: '2022' },
                { role: 'BS Computer Science', company: 'University of Caloocan City', year: '2022' },
                { role: 'Hello World! 🚀', company: 'Wrote my first line of code', year: '2020' },
              ].map((exp, idx) => (
                <div key={exp.role + idx} className="flex gap-4 relative group">
                  <div className={`mt-1.5 w-[22px] h-[22px] rounded border flex items-center justify-center shrink-0 z-10 group-hover:border-blue-500 transition-colors ${darkMode ? 'bg-black border-zinc-800' : 'bg-white border-slate-200'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full group-hover:bg-blue-500 transition-colors ${darkMode ? 'bg-zinc-800 border-zinc-700' : 'bg-white border-slate-200'} border`}></div>
                  </div>
                  <div className="flex-1 -mt-1">
                    <div className="flex justify-between items-start">
                      <h4 className={`text-sm font-bold leading-tight ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{exp.role}</h4>
                      <span className={`text-[10px] font-bold font-mono tracking-tighter ${darkMode ? 'text-zinc-600' : 'text-slate-400'}`}>{exp.year}</span>
                    </div>
                    <p className={`text-xs leading-snug mt-1 ${darkMode ? 'text-zinc-400' : 'text-slate-500'}`}>{exp.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Recent Projects (Full Width Row) */}
      <div className="max-w-4xl mx-auto px-6 pb-20 mt-12">
        <SectionTitle darkMode={darkMode} viewAllLink="#">Recent Projects</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Juan Charge', desc: 'AI-powered IoT smart kiosk', link: 'juan-charge.vercel.app', color: 'bg-blue-500', icon: Zap },
            { title: 'Synthesize', desc: 'AI systems analyst for specs & handoffs', link: 'synthesize-client-kappa.vercel.app', color: 'bg-violet-500', icon: Sparkles },
            { title: 'Virmonte', desc: 'Virus transmission simulator', link: 'virmonte.vercel.app', color: 'bg-indigo-500', icon: ShieldCheck },
            // { title: 'Elevate', desc: 'LMS Platform', link: 'elevate.enterprisesuite.ph', color: 'bg-emerald-500', icon: GraduationCap }
          ].map((proj) => (
            <a
              key={proj.title}
              href={`https://${proj.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`theme-container group p-5 border rounded-2xl hover:border-slate-300 dark:hover:border-zinc-700 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-zinc-900/50 shadow-sm transition-shadow cursor-pointer flex flex-col justify-between h-full ${darkMode ? 'bg-black' : 'bg-white'}`}
            >
              <div>
                <div className={`w-8 h-8 rounded-lg ${proj.color} mb-4 flex items-center justify-center`}>
                  <proj.icon size={16} className="text-white fill-white/10" />
                </div>
                <h3 className={`font-bold text-sm group-hover:text-blue-600 transition-colors uppercase tracking-tight ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{proj.title}</h3>
                <p className={`text-[11px] mt-2 mb-4 leading-relaxed ${darkMode ? 'text-zinc-500' : 'text-slate-500'}`}>{proj.desc}</p>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-white border border-slate-200 dark:border-zinc-800 text-[10px] font-bold text-slate-500 dark:text-zinc-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 transition-colors w-fit rounded-md">
                {proj.link}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Full Width Sections */}
      <div className="max-w-4xl mx-auto px-6 pb-20 space-y-20">
        {/* Certifications */}
        <div>
          <section>
            <SectionTitle darkMode={darkMode} viewAllLink="#">Recent Certifications</SectionTitle>
            <div className="space-y-3 max-w-xl">
              {[
                { title: 'Introduction to Modern AI', issuer: 'Cisco Networking Academy', image: ciscoModernAiCert },
                { title: 'Programming (JAVA) NCIII', issuer: 'TESDA', image: tesdaJavaNcIiiCert },
                { title: 'Computer System Servicing NCII', issuer: 'TESDA' },
                { title: 'Cloud Computing 101 by AWS', issuer: 'Amazon Web Services' }
              ].map(cert => {
                const content = (
                  <>
                    <div className="flex items-center gap-3 min-w-0">
                      {cert.image && (
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-14 h-10 object-cover rounded-md border border-slate-200 dark:border-zinc-700 shrink-0"
                        />
                      )}
                      <div className="min-w-0">
                        <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{cert.title}</h4>
                        <p className={`text-[11px] ${darkMode ? 'text-zinc-500' : 'text-slate-500'}`}>{cert.issuer}</p>
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-slate-300 group-hover:text-blue-500 transition-colors shrink-0" />
                  </>
                )

                const className = `theme-container p-4 rounded-xl border hover:border-slate-300 dark:hover:border-zinc-700 hover:shadow-lg hover:shadow-slate-200/20 transition-shadow group flex justify-between items-center gap-3 ${darkMode ? 'bg-black' : 'bg-white'} ${cert.image ? 'cursor-pointer' : 'cursor-default'}`

                return cert.image ? (
                  <a key={cert.title} href={cert.image} target="_blank" rel="noopener noreferrer" className={className}>
                    {content}
                  </a>
                ) : (
                  <div key={cert.title} className={className}>
                    {content}
                  </div>
                )
              })}
            </div>
          </section>

          {/* Recommendations — hidden for now
          <section>
            <SectionTitle darkMode={darkMode}>Recommendations</SectionTitle>
            <div className={`theme-container relative p-8 rounded-3xl overflow-hidden shadow-xl border ${darkMode ? 'bg-black' : 'bg-white'}`}>
              <div className="absolute top-0 right-0 p-8 text-black/5 dark:text-white/5 pointer-events-none">
                <MessageSquare size={120} strokeWidth={4} />
              </div>
              <div className="space-y-6 relative">
                <p className={`text-lg font-medium leading-relaxed italic ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                  "Intelligent software engineer. Mark takes lead during software development and can handle and manage teams well."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-zinc-800"></div>
                  <div>
                    <h4 className="text-zinc-900 dark:text-zinc-100 text-sm font-bold">Ken Gorre</h4>
                    <p className="text-slate-500 dark:text-zinc-500 text-xs">Senior Developer at Tutsode</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-1.5 mt-8">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
              </div>
            </div>
          </section>
          */}
        </div>

        {/* 4-Column Footer Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-slate-100 pt-16">
          <section className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">A member of</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <img src={gdscLogo} alt="GDSC" className="w-8 h-8 rounded object-contain border border-slate-100 dark:border-zinc-800 shrink-0 bg-white p-0.5" />
                <p className="text-[11px] font-bold text-slate-600 dark:text-zinc-400 leading-tight">Google Developers Student Club(GDSC)</p>
                <ExternalLink size={10} className="text-slate-300 dark:text-zinc-600 ml-auto shrink-0" />
              </div>
              {/* <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded bg-slate-100 shrink-0 group-hover:bg-slate-200 transition-colors"></div>
                <p className="text-[11px] font-bold text-slate-600 leading-tight">Philippine Software Industry Association</p>
                <ExternalLink size={10} className="text-slate-300 ml-auto shrink-0" />
              </div> */}
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Social Links</h3>
            <div className="space-y-3">
              <a href="https://ph.linkedin.com/in/mark-acedo-402b17285" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                <Linkedin size={18} />
                <span className="text-sm font-bold">LinkedIn</span>
              </a>
              <a href="https://github.com/mawrk19" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-zinc-950 transition-colors">
                <Github size={18} />
                <span className="text-sm font-bold">GitHub</span>
              </a>
              <a href="https://www.instagram.com/gerceeacedo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-pink-600 transition-colors">
                <Instagram size={18} />
                <span className="text-sm font-bold">Instagram</span>
              </a>
            </div>
          </section>

          {/* <section className="space-y-4">
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
          </section> */}

          <section className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Links</h3>
            <div className="space-y-3">
              {[
                { icon: Mail, label: 'Contact me' }
              ].map((link, idx) => (
                <a key={idx} href={link.label === 'Contact me' ? 'mailto:gercee19@gmail.com' : '#'} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-zinc-900/50 rounded-xl group hover:bg-white dark:hover:bg-zinc-800 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-zinc-900/50 transition-all border border-transparent hover:border-slate-100 dark:hover:border-zinc-700">
                  <div className="flex items-center gap-3">
                    <link.icon size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                    <span className="text-[11px] font-bold text-slate-600 dark:text-zinc-300">{link.label}</span>
                  </div>
                  <ChevronRight size={14} className="text-slate-300 dark:text-zinc-600 group-hover:text-slate-950 dark:group-hover:text-zinc-100 transition-transform group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* Gallery */}
        <section className="space-y-6 pt-10">
          <SectionTitle darkMode={darkMode}>Gallery</SectionTitle>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[
              { img: synthesize1, label: 'Landing' },
              { img: synthesize2, label: 'Capabilities' },
              { img: synthesize3, label: 'Workflow' },
              { img: synthesize4, label: 'Dashboard' },
              { img: synthesize5, label: 'SRS Document' },
              { img: synthesize6, label: 'Diagrams' },
            ].map((item, i) => (
              <div key={i} className="w-[300px] h-[200px] rounded-2xl bg-slate-100 dark:bg-zinc-900/50 shrink-0 overflow-hidden border border-slate-200 dark:border-zinc-800 group relative">
                <img src={item.img} alt={item.label} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end font-medium">
                  <p className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-bold text-slate-400">© 2026 Mark Acedo. All rights reserved.</p>
        </footer>
      </div>

      <ResumeChatbot darkMode={darkMode} />
    </div>
  )
}

export default App
