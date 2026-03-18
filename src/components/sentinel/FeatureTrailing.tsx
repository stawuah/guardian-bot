const trailData = [
  { price: "$195.00", tag: "TP target", type: "tp" },
  { price: "$182.00", tag: "current", type: "current" },
  { price: "$172.90", tag: "trailing SL (5%)", type: "trail" },
  { price: "$148.20", tag: "entry price", type: "entry" },
];

const barClass: Record<string, string> = {
  tp: "bg-sentinel-green/35",
  current: "bg-foreground",
  trail: "bg-[repeating-linear-gradient(90deg,hsl(var(--amber))_0,hsl(var(--amber))_5px,transparent_5px,transparent_10px)]",
  entry: "bg-line-2",
};
const priceColor: Record<string, string> = { tp: "text-sentinel-green", current: "text-foreground font-bold", trail: "text-sentinel-amber", entry: "text-ink-4" };
const tagColor: Record<string, string> = { tp: "text-sentinel-green", current: "text-foreground font-mono-data", trail: "text-sentinel-amber", entry: "text-ink-4" };

const FeatureTrailing = () => (
  <section className="max-w-[1120px] mx-auto px-5 md:px-10 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
    {/* Text */}
    <div className="order-2 md:order-1">
      <p className="text-xs font-semibold tracking-[0.08em] uppercase text-ink-4 mb-3">Protect your gains</p>
      <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold tracking-[-0.03em] text-foreground leading-tight mb-3.5">
        Trailing stop that <em className="not-italic text-sentinel-green">locks in profit</em>
      </h2>
      <p className="text-[15px] text-ink-3 leading-relaxed mb-6">
        Set a trail distance and Sentinel's stop loss follows the price as it rises — locking gains automatically. If price reverses, the stop holds at its highest point.
      </p>
      <div className="flex flex-col gap-2.5">
        {[
          "Set trail as % below peak price",
          "Adjusts upward automatically, never downward",
          "Works on Jupiter spot and Drift perps",
          "Override or cancel anytime from the app",
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

    {/* Panel */}
    <div className="order-1 md:order-2 bg-surface border border-line rounded-[14px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,.04),0_4px_16px_rgba(0,0,0,.05)]">
      <div className="px-[18px] py-3.5 border-b border-line text-[12.5px] font-semibold text-foreground">
        SOL / USDC · Trailing stop active
      </div>
      <div className="px-[18px] py-5">
        {trailData.map((d, i) => (
          <div key={i} className="flex items-center gap-3 py-[11px] border-b border-line last:border-b-0">
            <span className={`text-xs font-mono-data min-w-[72px] font-medium ${priceColor[d.type]}`}>{d.price}</span>
            <div className={`flex-1 h-[2px] rounded-sm relative ${barClass[d.type]}`}>
              {d.type === 'current' && <div className="absolute -right-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-surface border-[2.5px] border-foreground rounded-full" />}
            </div>
            <span className={`text-[11px] font-semibold min-w-[80px] text-right ${tagColor[d.type]}`}>{d.tag}</span>
          </div>
        ))}
      </div>
      <div className="mx-[18px] mb-4 bg-background rounded-lg p-3 border border-line">
        <p className="text-[12.5px] text-ink-3 leading-snug">
          If price drops to $172.90, Sentinel exits automatically — locking in <strong className="text-sentinel-green font-semibold">+$1,235 profit</strong> regardless of further downside.
        </p>
      </div>
    </div>
  </section>
);

export default FeatureTrailing;
