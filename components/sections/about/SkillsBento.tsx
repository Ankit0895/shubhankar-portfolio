import { assets } from "@/lib/assets";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { GridOverlay } from "@/components/ui/GridOverlay";

const cards = assets.about.skillCards;

export function SkillsBento() {
  return (
    <section id="work" className="group/grid relative px-4 py-16 sm:py-20">
      <GridOverlay />
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionEyebrow>My Skills</SectionEyebrow>
          <h2 className="font-display text-[36px] font-bold text-black sm:text-[56px]">
            From Concept to Contact
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          <img
            src={cards.stakeholderBuyin}
            alt="Click-through stakeholder buy-in"
            className="h-[328px] w-full rounded-2xl"
          />
          <img
            src={cards.realSignals}
            alt="Real signals, not personas"
            className="h-[328px] w-full rounded-2xl"
          />
          <img
            src={cards.handoffSpecs}
            alt="Handoff specs devs actually read"
            className="h-[328px] w-full rounded-2xl"
          />
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-4">
          <img
            src={cards.sessionRecording}
            alt="Session-recording driven"
            className="h-[328px] w-full rounded-2xl sm:col-span-1"
          />
          <img
            src={cards.edgeCases}
            alt="Edge cases before happy paths"
            className="h-[328px] w-full rounded-2xl sm:col-span-2"
          />
          <img
            src={cards.lowFiHighSignal}
            alt="Low-fi, high signal"
            className="h-[328px] w-full rounded-2xl sm:col-span-1"
          />
        </div>
      </div>
    </section>
  );
}
