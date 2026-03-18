const plans = [
  {
    name: "Free",
    price: "$0",
    note: "No credit card needed",
    items: ["Up to 3 positions", "Manual TP/SL only", "Email notifications"],
    dimItems: ["Auto-execution engine", "Trailing stop loss", "Drift perps support"],
    btn: "Get started",
    best: false,
  },
  {
    name: "Pro",
    price: "$39",
    note: "Billed monthly · pay in USDC",
    items: ["Unlimited positions", "Auto TP/SL execution", "Trailing stop loss", "Jupiter + Drift support", "Telegram + push alerts", "Backtesting + analytics"],
    dimItems: [],
    btn: "Start Pro",
    best: true,
    badge: "Most popular",
  },
  {
    name: "Elite",
    price: "$99",
    note: "Billed monthly · pay in USDC",
    items: ["Everything in Pro", "Backtesting engine", "Monte Carlo simulation", "Strategy analytics", "Priority RPC execution", "Early feature access"],
    dimItems: [],
    btn: "Go Elite",
    best: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="bg-surface border-y border-line py-20 px-5 md:px-10">
    <div className="max-w-[960px] mx-auto">
      <p className="text-xs font-semibold tracking-[0.08em] uppercase text-ink-4 mb-3.5">Pricing</p>
      <h2 className="text-[clamp(28px,3.5vw,42px)] font-extrabold tracking-[-0.03em] text-foreground leading-tight mb-12">
        Straightforward.<br />No hidden fees.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {plans.map(p => (
          <div key={p.name} className={`rounded-xl p-7 relative border ${p.best ? 'bg-foreground border-foreground' : 'bg-background border-line'}`}>
            {p.badge && (
              <span className="absolute -top-[11px] left-1/2 -translate-x-1/2 bg-sentinel-green text-primary-foreground text-[10.5px] font-bold px-3 py-[3px] rounded-full tracking-wide whitespace-nowrap">
                {p.badge}
              </span>
            )}
            <div className={`text-xs font-bold tracking-[0.08em] uppercase mb-3.5 ${p.best ? 'text-primary-foreground/50' : 'text-ink-3'}`}>{p.name}</div>
            <div className={`text-[40px] font-extrabold tracking-[-0.04em] leading-none mb-1 ${p.best ? 'text-primary-foreground' : 'text-foreground'}`}>
              {p.price}<sub className={`text-sm font-normal ${p.best ? 'text-primary-foreground/60' : 'opacity-60'}`}>/mo</sub>
            </div>
            <div className={`text-xs mb-[22px] ${p.best ? 'text-primary-foreground/40' : 'text-ink-4'}`}>{p.note}</div>
            <div className={`h-px mb-5 ${p.best ? 'bg-primary-foreground/10' : 'bg-line'}`} />
            <ul className="flex flex-col gap-[9px] mb-6 list-none p-0">
              {p.items.map(item => (
                <li key={item} className={`text-[13.5px] flex items-center gap-[9px] ${p.best ? 'text-primary-foreground/80' : 'text-ink-2'}`}>
                  <span className={`w-3.5 h-3.5 rounded-full flex-shrink-0 bg-sentinel-green-surface flex items-center justify-center ${p.best ? 'bg-primary-foreground/10' : ''}`}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2L6.5 2" stroke={p.best ? "rgba(255,255,255,0.8)" : "hsl(var(--green))"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  {item}
                </li>
              ))}
              {p.dimItems.map(item => (
                <li key={item} className={`text-[13.5px] flex items-center gap-[9px] ${p.best ? 'text-primary-foreground/25' : 'text-ink-4'}`}>
                  <span className="w-3.5 h-3.5 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg text-sm font-semibold font-display cursor-pointer transition-all ${
              p.best
                ? 'bg-primary-foreground text-foreground border-transparent hover:opacity-90'
                : 'bg-surface text-foreground border-[1.5px] border-line-2 hover:border-ink-3'
            }`}>
              {p.btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
