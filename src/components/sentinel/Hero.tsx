import HeroWidget from "./HeroWidget";

const Hero = () => (
  <section className="max-w-[1120px] mx-auto px-5 md:px-10 pt-[60px] md:pt-[88px] pb-[48px] md:pb-[72px] grid grid-cols-1 md:grid-cols-[1fr_480px] gap-10 md:gap-16 items-start">
    <div>
      <div className="inline-flex items-center gap-[7px] bg-sentinel-green-surface rounded-full px-3 py-1 pl-2 mb-7">
        <span className="w-1.5 h-1.5 bg-sentinel-green rounded-full animate-blink" />
        <span className="text-xs font-semibold text-sentinel-green tracking-wide">Live on Solana · Jupiter + Drift</span>
      </div>

      <h1 className="text-[clamp(40px,5.5vw,68px)] font-extrabold leading-none tracking-[-0.04em] text-foreground mb-[22px]">
        Auto TP/SL.<br />While you <span className="underline decoration-sentinel-green underline-offset-[6px] decoration-[3px]">sleep</span>.
      </h1>

      <p className="text-[17px] text-ink-3 leading-relaxed max-w-[440px] mb-9">
        Sentinel watches your Solana positions every 15 seconds and fires your take profit or stop loss automatically — no babysitting charts, no missed exits.
      </p>

      <div className="flex items-center gap-2.5 mb-7">
        <button className="text-[15px] font-semibold text-primary-foreground bg-foreground border-none rounded-[9px] px-6 py-[13px] cursor-pointer font-display hover:opacity-82 transition-opacity inline-flex items-center gap-2">
          Start for free
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
        <button className="text-[15px] font-medium text-ink-2 bg-transparent border-[1.5px] border-line-2 rounded-[9px] px-[22px] py-3 cursor-pointer font-display hover:border-ink-4 hover:text-foreground transition-colors">
          See how it works
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex">
          {["AK", "KB", "TO", "SA", "+"].map((a, i) => (
            <span key={i} className={`w-7 h-7 rounded-full bg-line border-2 border-surface flex items-center justify-center text-[10px] font-bold text-ink-3 ${i > 0 ? '-ml-2' : ''}`}>{a}</span>
          ))}
        </div>
        <p className="text-[13px] text-ink-3"><strong className="text-foreground font-semibold">280+</strong> traders protecting positions right now</p>
      </div>
    </div>

    <HeroWidget />
  </section>
);

export default Hero;
