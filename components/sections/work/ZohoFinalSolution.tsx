import type { ReactNode } from "react";
import { assets } from "@/lib/assets";
import { GridOverlay } from "@/components/ui/GridOverlay";

function HalfCol({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col gap-4 text-left">{children}</div>
    </div>
  );
}

export function ZohoFinalSolution() {
  return (
    <section className="group/grid relative flex flex-col gap-16 py-16 sm:gap-20 sm:py-20">
      <GridOverlay />
      <div className="flex w-full flex-col gap-4 px-4">
        <HalfCol>
          <h2 className="font-display text-[24px] font-semibold text-ink sm:text-[28px]">
            Final Solution
          </h2>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            A website designed to educate, build trust, and convert. The final
            solution wasn&apos;t just a visual redesign. It was a complete
            restructuring of how Dynamic Mavens presents its services online.
            Instead of overwhelming visitors with technical information, the
            experience now guides users through a clear decision-making
            journey, helping them understand their problems before
            introducing the right Zoho solution. The redesign consists of one
            landing page and four dedicated service pages, all built using a
            shared design system.
          </p>
        </HalfCol>
      </div>

      <div className="w-full px-4">
        <img
          src={assets.work.zohoMarketing.finalSolutionDesktopMockup}
          alt="Final solution: Zoho landing page on desktop and mobile, and the five redesigned service pages"
          className="w-full"
        />
      </div>

      <div className="w-full px-4">
        <img
          src={assets.work.zohoMarketing.finalMobileImages}
          alt="The five redesigned service pages shown on mobile: Landing Page, Zoho ERP, Zoho POS, Zoho One, and Zoho Solutions"
          className="w-full"
        />
      </div>
    </section>
  );
}
