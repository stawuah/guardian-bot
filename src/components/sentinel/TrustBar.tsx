import jupiterLogo from "@/assets/logos/jupiter.png";
import driftLogo from "@/assets/logos/drift.png";
import birdeyeLogo from "@/assets/logos/birdeye.png";
import solanaLogo from "@/assets/logos/solana.png";
import coingeckoLogo from "@/assets/logos/coingecko.png";

const logos = [
  { name: "Jupiter", src: jupiterLogo },
  { name: "Drift Protocol", src: driftLogo },
  { name: "Birdeye", src: birdeyeLogo },
  { name: "Solana", src: solanaLogo },
  { name: "CoinGecko", src: coingeckoLogo },
];

const TrustBar = () => (
  <section className="border-y border-line px-5 md:px-10 py-7 flex flex-wrap items-center justify-center gap-5 md:gap-12">
    <span className="text-xs font-medium text-ink-4 tracking-widest uppercase whitespace-nowrap">
      Executes via
    </span>
    <div className="flex items-center gap-8 md:gap-12">
      {logos.map((l) => (
        <div
          key={l.name}
          className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity cursor-default"
        >
          <img
            src={l.src}
            alt={`${l.name} logo`}
            className="h-6 w-6 object-contain"
          />
          <span className="text-sm font-bold text-ink-3 tracking-tight hidden sm:inline">
            {l.name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default TrustBar;
