

import Github from './components/Github';
import Linkedin from './components/Linkedin';
import Instagram from './components/Instagram';
import SectionTitle from './components/SectionTitle';


export default function App() {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <div className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        {/* Main Content */}
        <div>
          {/* About */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <img src="/api/placeholder/80/80" alt="Profile" className="w-16 h-16 rounded-lg object-cover border border-slate-200" />
              <div>
                <h1 className="font-bold text-xl text-zinc-900 flex items-center gap-2">Mark Acedo <span className="text-blue-500">✔️</span></h1>
                <div className="text-slate-500 text-sm">Metro Manila, Philippines</div>
                <div className="text-xs text-slate-400 mt-1">AI | Software Engineer | Content Creator</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <button className="bg-zinc-900 text-white px-3 py-1 rounded text-xs">Schedule a Call</button>
              <button className="bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded text-xs">Send Email</button>
              {/* <button className="bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded text-xs">Read my Blog</button> */}
            </div>
            <div className="text-sm text-slate-700 mb-2 font-semibold">About</div>
            <div className="text-[13px] text-slate-600 leading-relaxed">
              I'm a full-stack software engineer specializing in developing solutions with JavaScript, Python, and PHP. I work on projects including building modern web applications, mobile apps, search engine optimization, digital marketing, and making code tutorials.<br /><br />
              I've helped startups and MSMEs grow and streamline their processes through software solutions. I've also built a community of over 200,000 developers sharing knowledge and mentorship.<br /><br />
              Lately, I've been diving deeper into the world of artificial intelligence, focusing on integrating AI tools and techniques into modern applications. My work now includes developing AI-powered solutions, creating intelligent applications, and leveraging generative AI to optimize development workflows and deliver cutting-edge technology.
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center mb-2">
              <div className="font-bold text-base text-zinc-900">Tech Stack</div>
              <a href="#" className="text-xs text-slate-400 hover:text-blue-500">View All</a>
            </div>
            <div className="mb-2">
              <div className="font-semibold text-xs text-slate-500 mb-1">Frontend</div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-slate-100 px-2 py-1 rounded">JavaScript</span>
                <span className="bg-slate-100 px-2 py-1 rounded">TypeScript</span>
                <span className="bg-slate-100 px-2 py-1 rounded">React</span>
                <span className="bg-slate-100 px-2 py-1 rounded">Next.js</span>
                <span className="bg-slate-100 px-2 py-1 rounded">Vue.js</span>
                <span className="bg-slate-100 px-2 py-1 rounded">Tailwind CSS</span>
              </div>
            </div>
            <div className="mb-2">
              <div className="font-semibold text-xs text-slate-500 mb-1">Backend</div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-slate-100 px-2 py-1 rounded">Node.js</span>
                <span className="bg-slate-100 px-2 py-1 rounded">Python</span>
                <span className="bg-slate-100 px-2 py-1 rounded">PHP</span>
                <span className="bg-slate-100 px-2 py-1 rounded">Laravel</span>
                <span className="bg-slate-100 px-2 py-1 rounded">PostgreSQL</span>
                <span className="bg-slate-100 px-2 py-1 rounded">MongoDB</span>
              </div>
            </div>
            <div>
              <div className="font-semibold text-xs text-slate-500 mb-1">DevOps & Cloud</div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-slate-100 px-2 py-1 rounded">AWS</span>
                <span className="bg-slate-100 px-2 py-1 rounded">Docker</span>
                <span className="bg-slate-100 px-2 py-1 rounded">Kubernetes</span>
                <span className="bg-slate-100 px-2 py-1 rounded">GitHub Actions</span>
              </div>
            </div>
          </div>

          {/* Recent Projects */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center mb-2">
              <div className="font-bold text-base text-zinc-900">Recent Projects</div>
              <a href="#" className="text-xs text-slate-400 hover:text-blue-500">View All</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded p-4">
                <div className="font-bold text-zinc-900 text-sm mb-1">CodeCred</div>
                <div className="text-xs text-slate-500 mb-2">Online certifications for programmers</div>
                <a href="https://codecred.dev" className="text-xs bg-white px-2 py-1 rounded border border-slate-200">codecred.dev</a>
              </div>
              <div className="bg-slate-50 rounded p-4">
                <div className="font-bold text-zinc-900 text-sm mb-1">BASE404</div>
                <div className="text-xs text-slate-500 mb-2">Online coding bootcamp</div>
                <a href="https://base-404.com" className="text-xs bg-white px-2 py-1 rounded border border-slate-200">base-404.com</a>
              </div>
              <div className="bg-slate-50 rounded p-4">
                <div className="font-bold text-zinc-900 text-sm mb-1">DIIN.PH</div>
                <div className="text-xs text-slate-500 mb-2">AI-powered wardrobe assistant</div>
                <a href="https://diin.ph" className="text-xs bg-white px-2 py-1 rounded border border-slate-200">diin.ph</a>
              </div>
              <div className="bg-slate-50 rounded p-4">
                <div className="font-bold text-zinc-900 text-sm mb-1">DYNAMIS Workout Tracker</div>
                <div className="text-xs text-slate-500 mb-2">AI-powered workout tracker</div>
                <a href="https://dynamis-app.online" className="text-xs bg-white px-2 py-1 rounded border border-slate-200">dynamis-app.online</a>
              </div>
            </div>
          </div>

          {/* Certifications & Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-2">
                <div className="font-bold text-base text-zinc-900">Recent Certifications</div>
                <a href="#" className="text-xs text-slate-400 hover:text-blue-500">View All</a>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between"><span>Huawei Developer Expert</span><span className="text-slate-400">Huawei</span></div>
                <div className="flex justify-between"><span>Generative AI Leader</span><span className="text-slate-400">Google</span></div>
                <div className="flex justify-between"><span>Software Engineering</span><span className="text-slate-400">TestDome</span></div>
                <div className="flex justify-between"><span>Generative AI Professional</span><span className="text-slate-400">Oracle</span></div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="font-bold text-base text-zinc-900 mb-2">Recommendations</div>
              <div className="text-xs text-slate-700 mb-2">“Bryl was the most talented software engineer I've mentored in a long time. He's a fast learner, and he always makes sure to deliver quality output given a period of time. He is also very keen on learning new technologies, and I find him to be objectively...”</div>
              <div className="font-bold text-xs text-slate-900">Cris Lawrence Adrian Militante</div>
              <div className="text-xs text-slate-400">ICT Director at GCM</div>
            </div>
          </div>

          {/* Membership, Social, Speaking, Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="font-bold text-xs text-slate-400 mb-2">A member of</div>
              <div className="space-y-2 text-xs">
                <div>Analytics & AI Association of the Philippines (AAP)</div>
                <div>Philippine Software Industry Association</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="font-bold text-xs text-slate-400 mb-2">Social Links</div>
              <div className="space-y-2 text-xs">
                <a href="#" className="flex items-center gap-2 text-slate-600 hover:text-blue-600"><Linkedin /> LinkedIn</a>
                <a href="#" className="flex items-center gap-2 text-slate-600 hover:text-zinc-900"><Github /> GitHub</a>
                <a href="#" className="flex items-center gap-2 text-slate-600 hover:text-pink-600"><Instagram /> Instagram</a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="font-bold text-xs text-slate-400 mb-2">Speaking</div>
              <div className="text-xs text-slate-700 mb-2">Available for speaking at events about software development and emerging technologies.</div>
              <a href="#" className="text-xs font-bold text-blue-600">Get in touch</a>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="font-bold text-xs text-slate-400 mb-2">Links</div>
              <div className="space-y-2 text-xs">
                <a href="#" className="block">Email brylim@gmail.com</a>
                <a href="#" className="block">Let's Talk</a>
                <a href="#" className="block">Blog</a>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="font-bold text-base text-zinc-900 mb-2">Gallery</div>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-[180px] h-[120px] rounded-lg bg-slate-100 shrink-0 overflow-hidden border border-slate-200">
                  <img src={`/api/placeholder/180/120?text=Gallery+Item+${i}`} alt="Gallery" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside>
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="font-bold text-base text-zinc-900 mb-2">Experience</div>
            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between"><span className="font-bold text-zinc-900">AI Engineer</span><span className="text-slate-400">2025</span></div>
              <div className="text-slate-500 mb-2">Standard Chartered</div>
              <div className="flex items-center justify-between"><span className="font-bold text-zinc-900">AI Ops Engineer</span><span className="text-slate-400">2025</span></div>
              <div className="text-slate-500 mb-2">Centre of Excellence for GenAI, Cambridge</div>
              <div className="flex items-center justify-between"><span className="font-bold text-zinc-900">Senior Full-Stack Developer</span><span className="text-slate-400">2024</span></div>
              <div className="text-slate-500 mb-2">Core Technology, Cambridge</div>
              <div className="flex items-center justify-between"><span className="font-bold text-zinc-900">Software Engineering Lead</span><span className="text-slate-400">2022</span></div>
              <div className="text-slate-500 mb-2">PocketDevs</div>
              <div className="flex items-center justify-between"><span className="font-bold text-zinc-900">Lead Application Developer</span><span className="text-slate-400">2021</span></div>
              <div className="text-slate-500 mb-2">Bluewind Asia</div>
              <div className="flex items-center justify-between"><span className="font-bold text-zinc-900">Software Engineer</span><span className="text-slate-400">2020</span></div>
              <div className="text-slate-500 mb-2">GCM</div>
              <div className="flex items-center justify-between"><span className="font-bold text-zinc-900">BS Information Technology</span><span className="text-slate-400">2019</span></div>
              <div className="text-slate-500 mb-2">University of San Carlos</div>
              <div className="flex items-center justify-between"><span className="font-bold text-zinc-900">Hello World!</span><span className="text-slate-400">2015</span></div>
              <div className="text-slate-500 mb-2">Wrote my first line of code</div>
            </div>
          </div>
          {/* Chat Button */}
          <div className="sticky top-24 flex justify-end">
            <button className="bg-zinc-900 text-white px-4 py-2 rounded-lg shadow flex items-center gap-2">
              <span>💬</span> Chat with Mark
            </button>
          </div>
        </aside>
      </div>
      <footer className="text-center text-xs text-slate-400 py-8">© 2026 Bryl Lim. All rights reserved.</footer>
    </div>
  );
}