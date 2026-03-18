const stats = [
  { n: "15s", l: "Price check interval" },
  { n: "24/7", l: "Engine runs continuously" },
  { n: "0%", l: "Token custody — non-custodial" },
  { n: "2x", l: "Execution routes: spot + perps" },
];

const Stats = () => (
  <section className="max-w-[1120px] mx-auto px-5 md:px-10 py-12 md:py-16 border-b border-line grid grid-cols-2 md:grid-cols-4 gap-6">
    {stats.map((s, i) => (
      <div key={i} className={`${i < 3 ? 'md:border-r md:border-line' : ''} ${i === 0 ? '' : 'md:pl-8'}`}>
        <div className="text-[42px] font-extrabold tracking-[-0.04em] text-foreground leading-none">{s.n}</div>
        <div className="text-[13.5px] text-ink-3 mt-1.5">{s.l}</div>
      </div>
    ))}
  </section>
);

export default Stats;
