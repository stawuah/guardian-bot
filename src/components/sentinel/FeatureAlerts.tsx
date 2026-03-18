const notifications = [
  { type: "tp" as const, title: "TP hit — SOL sold at $195.12", desc: "50 SOL sold via Jupiter · Realized +$1,346", time: "Today · 03:14 AM — while you slept", badge: "Take profit" },
  { type: "sl" as const, title: "SL triggered — JUP closed", desc: "Loss limited to −$310. Would've been −$890 without Sentinel.", time: "Yesterday · 11:42 PM", badge: "Stop loss" },
  { type: "warn" as const, title: "WIF approaching stop loss", desc: "Price $2.61 is within 5% of your SL at $3.10", time: "2 hours ago", badge: "Warning" },
];

const dotColors = { tp: "bg-sentinel-green-surface", sl: "bg-sentinel-red-surface", warn: "bg-sentinel-amber-surface" };
const strokeColors = { tp: "stroke-sentinel-green", sl: "stroke-sentinel-red", warn: "stroke-sentinel-amber" };
const badgeColors = { tp: "bg-sentinel-green-surface text-sentinel-green", sl: "bg-sentinel-red-surface text-sentinel-red", warn: "bg-sentinel-amber-surface text-sentinel-amber" };

const icons = {
  tp: <polyline points="20 6 9 17 4 12"/>,
  sl: <><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></>,
  warn: <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>,
};

const FeatureAlerts = () => (
  <section id="features" className="max-w-[1120px] mx-auto px-5 md:px-10 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
    {/* Panel */}
    <div className="bg-surface border border-line rounded-[14px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,.04),0_4px_16px_rgba(0,0,0,.05)]">
      <div className="px-[18px] py-3.5 border-b border-line text-[12.5px] font-semibold text-foreground flex items-center justify-between">
        Alerts <span className="text-[11px] text-ink-4 font-normal">3 unread</span>
      </div>
      <div className="py-2">
        {notifications.map((n, i) => (
          <div key={i} className="px-[18px] py-[11px] flex items-start gap-3 border-b border-line last:border-b-0 hover:bg-background transition-colors">
            <div className={`w-8 h-8 rounded-[9px] flex-shrink-0 flex items-center justify-center ${dotColors[n.type]}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={strokeColors[n.type]}>{icons[n.type]}</svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold text-foreground mb-[2px]">{n.title}</div>
              <div className="text-xs text-ink-3 leading-snug">{n.desc}</div>
              <div className="text-[10.5px] text-ink-4 mt-[3px] font-mono-data">{n.time}</div>
            </div>
            <span className={`text-[10.5px] font-semibold rounded px-[7px] py-[2px] flex-shrink-0 mt-[2px] ${badgeColors[n.type]}`}>{n.badge}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Text */}
    <div>
      <p className="text-xs font-semibold tracking-[0.08em] uppercase text-ink-4 mb-3">Always on</p>
      <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold tracking-[-0.03em] text-foreground leading-tight mb-3.5">
        Exits happen while you <em className="not-italic text-sentinel-green">rest</em>
      </h2>
      <p className="text-[15px] text-ink-3 leading-relaxed mb-6">
        Crypto doesn't sleep. SOL can pump 20% at 3am and dump back before you wake up. Sentinel's engine runs every 15 seconds and fires the moment a target is touched.
      </p>
      <div className="flex flex-col gap-2.5">
        {[
          "Instant execution via Jupiter swap or Drift close",
          "Telegram + push notifications on execution",
          "Full history with realized PnL per trade",
          "Near-SL warnings before your stop fires",
        ].map(item => (
          <div key={item} className="flex items-start gap-2.5 text-sm text-ink-2 leading-snug">
            <span className="w-4 h-4 rounded-full bg-sentinel-green-surface flex-shrink-0 mt-[1px] flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.2 2.2L8 3" stroke="hsl(var(--green))" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureAlerts;
