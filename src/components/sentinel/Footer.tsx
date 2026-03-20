import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <footer className="px-5 md:px-10 py-12 border-t border-line">
      {/* Waitlist */}
      <div className="max-w-md mx-auto text-center mb-10">
        <h3 className="text-lg font-bold text-foreground tracking-tight mb-1">Join the Waitlist</h3>
        <p className="text-[13px] text-muted-foreground mb-4">Be the first to get early access to Sentinel.</p>
        {submitted ? (
          <div className="rounded-lg border border-line bg-muted/40 px-4 py-3 text-sm text-foreground font-medium">
            🎉 You're on the list! We'll reach out soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              required
              maxLength={255}
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <button
              type="submit"
              className="h-10 px-5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Join
            </button>
          </form>
        )}
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 no-underline">
            <div className="w-6 h-6 bg-foreground rounded-md flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <span className="text-sm font-bold text-foreground tracking-tight">Sentinel</span>
          </a>
          <div className="flex gap-5">
            {["Docs", "Twitter", "Telegram", "Privacy", "Terms"].map(l => (
              <a key={l} href="#" className="text-[13px] text-muted-foreground no-underline hover:text-foreground transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <span className="text-[12.5px] text-muted-foreground font-mono">Built on Solana · © 2025 Sentinel</span>
      </div>
    </footer>
  );
};

export default Footer;
