const logos = ["Jupiter", "Drift Protocol", "Birdeye", "Solana", "CoinGecko"];

const TrustBar = () => (
  <section className="border-y border-line px-5 md:px-10 py-7 flex flex-wrap items-center justify-center gap-5 md:gap-12">
    <span className="text-xs font-medium text-ink-4 tracking-widest uppercase whitespace-nowrap">Executes via</span>
    <div className="flex items-center gap-6 md:gap-9">
      {logos.map(l => (
        <span key={l} className="text-[15px] font-bold text-ink-3 tracking-tight opacity-55 hover:opacity-90 transition-opacity cursor-default">{l}</span>
      ))}
    </div>
  </section>
);

export default TrustBar;
