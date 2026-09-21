import { assets } from "@/lib/assets";

const tickerItems = Array(6).fill("Value Research Design System");

export function LedgerHero() {
  return (
    <section id="introduction" className="flex scroll-mt-24 flex-col items-center">
      <div className="relative w-full overflow-hidden bg-ink py-3.5 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-8">
          {[...tickerItems, ...tickerItems].map((label, i) => (
            <span key={i} className="flex shrink-0 items-center gap-8">
              <span className="text-[14px] font-medium text-paper">{label}</span>
              <span className="text-accent" aria-hidden>
                +
              </span>
            </span>
          ))}
        </div>
      </div>

      <div
        className="flex w-full flex-col items-center gap-4 bg-grass bg-cover bg-center px-6 py-20 text-center sm:py-28"
        style={{ backgroundImage: `url(${assets.work.ledgerDesignSystem.ledgerBg})` }}
      >
        {/* <p className="text-[13px] font-medium tracking-[0.08em] text-paper/80 uppercase sm:text-[14px]">
          Value Research Design System
        </p> */}
        <h1 className="font-display text-[40px] font-bold text-ink-deep sm:text-[56px]">Ledger</h1>
        <p className="text-[16px] leading-[1.5] text-paper sm:text-[20px] max-w-[740px]">Value Research Design System The first centralized design system for VR's advisory products — foundations, voice, and a component library, built to make a four-person team produce like one mind.</p>
      </div>
    </section>
  );
}
