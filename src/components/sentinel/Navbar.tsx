const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-background/92 backdrop-blur-xl border-b border-line h-[60px] flex items-center justify-between px-5 md:px-10">
    <a href="#" className="flex items-center gap-2.5 no-underline">
      <div className="w-7 h-7 bg-foreground rounded-md flex items-center justify-center flex-shrink-0">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      </div>
      <span className="text-base font-bold text-foreground tracking-tight">Sentinel</span>
    </a>
    <div className="hidden md:flex items-center gap-1">
      {["How it works", "Features", "Pricing", "Compare"].map(item => (
        <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-sm font-medium text-ink-3 no-underline px-3 py-1.5 rounded-md hover:bg-line hover:text-foreground transition-colors">
          {item}
        </a>
      ))}
    </div>
    <div className="flex items-center gap-2">
      <button className="text-[13.5px] font-medium text-ink-2 bg-transparent border border-line-2 rounded-[7px] px-4 py-[7px] cursor-pointer font-display hover:border-ink-4 transition-colors">Log in</button>
      <button className="text-[13.5px] font-semibold text-primary-foreground bg-foreground border-none rounded-[7px] px-[18px] py-[7px] cursor-pointer font-display hover:opacity-85 transition-opacity">Get started free</button>
    </div>
  </nav>
);
export default Navbar;
