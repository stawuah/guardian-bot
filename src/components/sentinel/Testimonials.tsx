const testimonials = [
  { q: "SOL pumped to my TP at 3am while I was asleep. Woke up to a Telegram message — sold right at the top. Sentinel paid for itself in one trade.", name: "Ama K.", handle: "@amak_sol · Accra", initials: "AK" },
  { q: "Was in a pitch meeting when WIF dumped. Sentinel caught my SL and saved me $800. Without it I'd have lost everything before I even saw the chart.", name: "Kwame B.", handle: "@kwameb · Lagos", initials: "KB" },
  { q: "I trade Drift perps and Jupiter spot. Having both in one place with auto-execution is exactly what was missing. Nothing else does this cleanly.", name: "Tunde O.", handle: "@tundeo_defi · Nairobi", initials: "TO" },
];

const Testimonials = () => (
  <section className="max-w-[1120px] mx-auto px-5 md:px-10 py-20">
    <p className="text-xs font-semibold tracking-[0.08em] uppercase text-ink-4 mb-3.5">From the community</p>
    <h2 className="text-[clamp(28px,3.5vw,42px)] font-extrabold tracking-[-0.03em] text-foreground leading-tight mb-10">
      Traders who stopped<br />watching charts
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {testimonials.map(t => (
        <div key={t.initials} className="bg-surface border border-line rounded-xl p-6">
          <div className="flex gap-[3px] mb-3.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-[13px] h-[13px] bg-sentinel-amber" style={{ clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }} />
            ))}
          </div>
          <p className="text-[14.5px] text-ink-2 leading-relaxed mb-[18px]">{t.q}</p>
          <div className="flex items-center gap-2.5">
            <div className="w-[34px] h-[34px] rounded-full bg-background border border-line flex items-center justify-center text-[11px] font-bold text-ink-3">{t.initials}</div>
            <div>
              <div className="text-[13px] font-semibold text-foreground">{t.name}</div>
              <div className="text-[11.5px] text-ink-4 mt-[1px]">{t.handle}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
