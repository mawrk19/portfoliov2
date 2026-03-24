export default function ProjectCard({ title, desc, link }) {
  return (
    <div className="group p-6 bg-white border border-slate-100 rounded-2xl hover:border-slate-300 hover:bg-slate-50/50 transition-all cursor-pointer">
      <h3 className="font-black text-zinc-900 text-sm tracking-tight mb-1 group-hover:text-blue-600 uppercase transition-colors">
        {title}
      </h3>
      <p className="text-[11px] text-slate-400 font-medium mb-4">{desc}</p>
      <div className="inline-block px-2 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-500 group-hover:text-blue-600 transition-colors">
        {link}
      </div>
    </div>
  );
}