import { ChevronRight } from 'lucide-react';

const SectionTitle = ({ children, viewAllLink }) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-xl font-bold text-zinc-900">{children}</h2>
    {viewAllLink && (
      <a href={viewAllLink} className="text-slate-400 hover:text-slate-600 text-xs flex items-center gap-1 transition-colors">
        View All <ChevronRight size={12} />
      </a>
    )}
  </div>
);

export default SectionTitle;
