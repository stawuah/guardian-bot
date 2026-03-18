const features = [
  "Jupiter spot TP/SL",
  "Drift perps TP/SL",
  "Trailing stop loss",
  "Non-custodial",
  "Mobile app",
  "Simple UI for new traders",
];

const matrix: boolean[][] = [
  [true, false, false, false, false],
  [true, false, false, true, false],
  [true, true, false, false, false],
  [true, false, false, true, false],
  [true, true, true, false, true],
  [true, false, false, false, false],
];

const competitors = ["Sentinel", "GoodCryptoX", "Bitsgap", "Drift native", "Coinrule"];

const Check = () => (
  <span className="w-[18px] h-[18px] bg-sentinel-green-surface rounded-full flex items-center justify-center">
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.2 2.2L8 3" stroke="hsl(var(--green))" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </span>
);

const Cross = () => (
  <span className="w-[18px] h-[18px] bg-line rounded-full flex items-center justify-center">
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 2l4 4M6 2l-4 4" stroke="hsl(var(--ink4))" strokeWidth="2" strokeLinecap="round"/></svg>
  </span>
);

const Comparison = () => (
  <section id="compare" className="max-w-[1120px] mx-auto px-5 md:px-10 pb-20">
    <p className="text-xs font-semibold tracking-[0.08em] uppercase text-ink-4 mb-3.5">Comparison</p>
    <h2 className="text-[clamp(28px,3.5vw,42px)] font-extrabold tracking-[-0.03em] text-foreground leading-tight mb-12">
      The only tool covering<br />both Jupiter and <em className="not-italic text-sentinel-green">Drift</em>
    </h2>

    <div className="border border-line rounded-xl overflow-hidden overflow-x-auto">
      {/* Header */}
      <div className="grid grid-cols-[2fr_repeat(5,1fr)] bg-foreground px-5 py-3.5 min-w-[600px]">
        <span className="text-xs font-semibold text-primary-foreground/50">Feature</span>
        {competitors.map((c, i) => (
          <span key={c} className={`text-xs font-semibold text-center ${i === 0 ? 'text-primary-foreground' : 'text-primary-foreground/90'}`}>{c}</span>
        ))}
      </div>

      {/* Rows */}
      {features.map((feat, fi) => (
        <div key={feat} className="grid grid-cols-[2fr_repeat(5,1fr)] px-5 py-[13px] border-b border-line bg-surface hover:bg-background transition-colors items-center last:border-b-0 min-w-[600px]">
          <span className="text-[13.5px] font-medium text-ink-2">{feat}</span>
          {matrix[fi].map((v, ci) => (
            <div key={ci} className="flex items-center justify-center">{v ? <Check /> : <Cross />}</div>
          ))}
        </div>
      ))}
    </div>
  </section>
);

export default Comparison;
