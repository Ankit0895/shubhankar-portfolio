import { assets } from "@/lib/assets";
import { GridOverlay } from "@/components/ui/GridOverlay";

const meta = [
  { label: "Role", value: "Senior UX Designer" },
  { label: "Timeline", value: "2024-2025" },
  { label: "Status", value: "Live" },
  { label: "Tools", value: null },
] as const;

export function VrAdvisorHero() {
  const tickerItems = Array(6).fill("Value Research Advisor App");

  return (
    <section className="group/grid relative flex flex-col items-center">
      <GridOverlay />
      <div className="flex flex-col items-center gap-4 px-4 pt-16 pb-10 text-center sm:pt-20">
        <h1 className="font-display text-[28px] font-bold text-black sm:text-[40px]">
          Value Research Advisor App
        </h1>
        <p className="text-[16px] text-slate sm:text-[22px]">
          Designing an Investment Platform That Adapts to Every User State
        </p>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border border-line bg-mist px-6 py-5 sm:flex sm:items-center sm:gap-x-10 sm:gap-y-0 sm:py-4">
          {meta.map((item, i) => (
            <div key={item.label} className="flex items-center gap-x-6 sm:gap-x-10">
              {i > 0 && <span className="hidden h-6 w-px bg-line sm:block" aria-hidden />}
              <div className="flex flex-col items-start gap-1 text-left">
                <span className="text-[11px] uppercase text-slate">{item.label}</span>
                {item.value ? (
                  <span className="text-[13px] font-medium text-black">{item.value}</span>
                ) : (
                  <img
                    src={assets.work.vrAdvisorApp.figmaIcon}
                    alt="Figma"
                    className="h-6 w-auto"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-ink py-3.5 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-8">
          {[...tickerItems, ...tickerItems].map((label, i) => (
            <span key={i} className="flex shrink-0 items-center gap-8">
              <span className="text-[14px] font-medium text-paper">{label}</span>
              <img src={assets.work.vrAdvisorApp.marqueeIcon} alt="" className="h-5 w-5" aria-hidden />
            </span>
          ))}
        </div>
      </div>

      <div className="flex w-full items-center justify-center overflow-hidden bg-[#b86acc]">
        <img
          src={assets.work.vrAdvisorApp.heroComposite}
          alt="Value Research Advisor app: portfolio, fund detail, and stock screener screens"
          className="w-full"
        />
      </div>
    </section>
  );
}
