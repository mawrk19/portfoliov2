const Badge = ({ children, className = "" }) => (
  <span className={`bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${className}`}>
    {children}
  </span>
);

export default Badge;
