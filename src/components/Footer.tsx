export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="/" className="text-2xl font-display font-bold text-white tracking-tighter">
            HM<span className="text-brand-blue">.</span>
          </a>
          <p className="text-white/20 text-xs font-sans tracking-widest uppercase">
            Building the web, one line at a time.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center gap-6 mb-2">
            <a href="https://github.com/harshit-001-it" target="_blank" className="text-white/40 hover:text-white transition-colors text-xs font-display tracking-widest uppercase">GitHub</a>
            <a href="https://www.linkedin.com/in/harshit-mishra-51275b219/" target="_blank" className="text-white/40 hover:text-white transition-colors text-xs font-display tracking-widest uppercase">LinkedIn</a>
          </div>
          <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">
            &copy; {currentYear} Harshit Mishra. Built with Next.js & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
