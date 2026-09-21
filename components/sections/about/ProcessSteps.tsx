import { processSteps } from "@/lib/content";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ProcessCard } from "@/components/ui/ProcessCard";
import { GridOverlay } from "@/components/ui/GridOverlay";

export function ProcessSteps() {
  return (
    <section className="group/grid relative px-4 py-16 sm:py-20">
      <GridOverlay />
      <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionEyebrow>My Process</SectionEyebrow>
          <h2 className="font-display text-[36px] font-bold text-black sm:text-[56px]">
            Complexity In. Clarity Out.
          </h2>
        </div>

        <div className="flex w-full flex-col items-stretch gap-6 sm:flex-row sm:items-stretch sm:justify-center">
          {processSteps.map((step) => (
            <ProcessCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
