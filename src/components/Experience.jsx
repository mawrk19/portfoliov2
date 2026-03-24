export default function Experience() {
  const items = [
    { role: 'AI Engineer', co: 'Standard Chartered', yr: '2026' },
    { role: 'Software Lead', co: 'PocketDevs', yr: '2024' },
  ];

  return (
    <div className="space-y-8 relative before:absolute before:left-[9px] before:top-2 before:bottom-0 before:w-px before:bg-slate-100">
      {items.map((item, i) => (
        <div key={i} className="flex gap-4 relative group">
          <div className="mt-1.5 w-[20px] h-[20px] rounded border border-slate-200 bg-white flex items-center justify-center z-10 shrink-0">
            <div className="w-1.5 h-1.5 bg-slate-200 rounded-full group-hover:bg-blue-500 transition-colors"></div>
          </div>
          <div className="flex-1 flex justify-between items-start">
            <div>
              <h4 className="text-sm font-bold text-zinc-900">{item.role}</h4>
              <p className="text-[11px] text-slate-400 font-medium">{item.co}</p>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-300">{item.yr}</span>
          </div>
        </div>
      ))}
    </div>
  );
}