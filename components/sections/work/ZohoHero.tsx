import { assets } from "@/lib/assets";
import { GridOverlay } from "@/components/ui/GridOverlay";

export function ZohoHero() {
  const tickerItems = Array(6).fill("ZOHO X DMC");

  return (
    <section className="group/grid relative flex flex-col items-center">
      <GridOverlay />
      <div className="flex flex-col items-center gap-6 px-4 pt-16 pb-10 text-center sm:pt-20">
        <h1 className="font-display text-[26px] font-bold text-ink sm:text-[36px]">
          Designing a Scalable Marketing Experience for a Zoho Implementation
          Partner
        </h1>

        <div className="grid grid-cols-2 gap-x-6 gap-y-5 border border-line bg-mist px-6 py-5 sm:flex sm:items-center sm:gap-x-10 sm:gap-y-0 sm:py-4">
          <div className="flex flex-col items-start gap-1 text-left">
            <span className="text-[11px] uppercase text-slate">Role</span>
            <span className="text-[13px] font-medium text-ink">
              Senior UX Designer (Freelance)
            </span>
          </div>

          <span className="hidden h-6 w-px bg-line sm:block" aria-hidden />

          <div className="flex flex-col items-start gap-1 text-left">
            <span className="text-[11px] uppercase text-slate">Timeline</span>
            <span className="text-[13px] font-medium text-ink">4 Weeks</span>
          </div>

          <span className="hidden h-6 w-px bg-line sm:block" aria-hidden />

          <div className="flex flex-col items-start gap-1 text-left">
            <span className="text-[11px] uppercase text-slate">Status</span>
            <span className="text-[13px] font-medium text-ink">
              Development
            </span>
          </div>

          <span className="hidden h-6 w-px bg-line sm:block" aria-hidden />

          <div className="flex flex-col items-start gap-1 text-left">
            <span className="text-[11px] uppercase text-slate">Tools</span>
            <div className="flex items-center gap-1.5">
              <img
                src={assets.work.zohoMarketing.toolIconFigma}
                alt="Figma"
                className="h-6 w-auto"
              />
              <img
                src={assets.work.zohoMarketing.toolIconClaude}
                alt="Claude"
                className="h-6 w-6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-ink py-3.5 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-8">
          {[...tickerItems, ...tickerItems].map((label, i) => (
            <span key={i} className="flex shrink-0 items-center gap-8">
              <span className="text-[14px] font-medium text-paper">
                {label}
              </span>
              <img
                src={assets.work.zohoMarketing.marqueeIcon}
                alt=""
                aria-hidden
                className="h-6 w-6"
              />
            </span>
          ))}
        </div>
      </div>

      <div className="w-full bg-[#ff7c3f] py-14 sm:py-20">
        <img
          src={assets.work.zohoMarketing.heroMockup}
          alt="Dynamic Mavens Zoho landing page shown on a laptop"
          className="w-full"
        />
      </div>
    </section>
  );
}
