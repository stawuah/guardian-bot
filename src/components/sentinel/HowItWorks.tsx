const steps = [
  {
    icon: <><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></>,
    title: "Connect your wallet",
    desc: "Non-custodial. Sentinel never holds your tokens. Link your Solana wallet and import open positions from Jupiter or Drift in under a minute.",
  },
  {
    icon: <><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></>,
    title: "Set your targets",
    desc: "Enter a take profit and stop loss price. Pick a preset or set custom levels. Enable trailing stop to automatically lock in gains as price climbs.",
  },
  {
    icon: <><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></>,
    title: "Sentinel executes",
    desc: "Every 15 seconds, Sentinel checks prices. When a target is hit it fires a Jupiter sell or Drift close automatically. You get a notification. Done.",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="max-w-[1120px] mx-auto px-5 md:px-10 py-20">
    <p className="text-xs font-semibold tracking-[0.08em] uppercase text-ink-4 mb-3.5">How it works</p>
    <h2 className="text-[clamp(28px,3.5vw,42px)] font-extrabold tracking-[-0.03em] text-foreground leading-tight mb-12">
      Set it once.<br />Then <em className="not-italic text-sentinel-green">close the app</em>.
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line rounded-xl overflow-hidden">
      {steps.map((s, i) => (
        <div key={i} className="bg-surface p-7 md:p-8">
          <div className="text-[11px] font-bold tracking-[0.1em] text-ink-4 mb-5 font-mono-data">0{i + 1} / 03</div>
          <div className="w-10 h-10 border border-line-2 rounded-[10px] flex items-center justify-center mb-4">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">{s.icon}</svg>
          </div>
          <h3 className="text-[17px] font-bold text-foreground tracking-tight mb-2">{s.title}</h3>
          <p className="text-sm text-ink-3 leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
