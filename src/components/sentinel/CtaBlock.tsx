const CtaBlock = () => (
  <section className="mx-5 md:mx-10 mb-7 md:mb-10 bg-foreground rounded-2xl px-7 md:px-16 py-12 md:py-[72px] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-12 items-center">
    <div>
      <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-0.04em] text-primary-foreground leading-none mb-3">
        Stop watching.<br />Start <em className="not-italic text-sentinel-green-surface">sleeping</em>.
      </h2>
      <p className="text-[15px] text-primary-foreground/50">Set your targets once. Sentinel handles the rest.</p>
    </div>
    <div className="flex flex-col items-start md:items-end gap-2.5">
      <button className="text-[15px] font-bold text-foreground bg-primary-foreground border-none rounded-[9px] px-7 py-3.5 cursor-pointer font-display hover:opacity-88 transition-opacity whitespace-nowrap">
        Get early access — free
      </button>
      <span className="text-xs text-primary-foreground/35">No credit card · Non-custodial · Cancel anytime</span>
    </div>
  </section>
);

export default CtaBlock;
