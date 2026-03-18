const Footer = () => (
  <footer className="px-5 md:px-10 py-8 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
    <div className="flex items-center gap-6">
      <a href="#" className="flex items-center gap-2 no-underline">
        <div className="w-6 h-6 bg-foreground rounded-md flex items-center justify-center">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <span className="text-sm font-bold text-foreground tracking-tight">Sentinel</span>
      </a>
      <div className="flex gap-5">
        {["Docs", "Twitter", "Telegram", "Privacy", "Terms"].map(l => (
          <a key={l} href="#" className="text-[13px] text-ink-4 no-underline hover:text-ink-3 transition-colors">{l}</a>
        ))}
      </div>
    </div>
    <span className="text-[12.5px] text-ink-4 font-mono-data">Built on Solana · © 2025 Sentinel</span>
  </footer>
);

export default Footer;
