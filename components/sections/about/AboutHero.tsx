import { aboutBioPills } from "@/lib/content";
import { GridOverlay } from "@/components/ui/GridOverlay";

export function AboutHero() {
  return (
    <section className="group/grid relative px-4 pt-16 pb-20 sm:pt-24">
      <GridOverlay />
      <div className="mx-auto flex max-w-[700px] flex-col items-center gap-5 text-center">
        <p className="font-display text-[18px] font-medium text-accent">Senior UX/UI Designer</p>

        <h1 className="font-display text-[36px] font-semibold leading-[1.2] text-heading-strong sm:text-[48px]">
          Leading a Design Team at
          <br />
          Value Research
        </h1>

        <p className="text-[17px] leading-[1.6] sm:text-[24px]">
          <span className="text-slate">from architecting </span>
          <span className="font-semibold text-ink">design systems</span>
          <span className="text-slate">
            {" "}
            to tuning the 200ms a confirmation modal takes to feel right. The work
            I&apos;m proud of isn&apos;t the work that wins awards; it&apos;s the work that
            moves a{" "}
          </span>
          <span className="font-semibold text-ink">metric and survives</span>
          <span className="text-slate">
            {" "}
            the next quarter&apos;s roadmap. I care less about &ldquo;human-centered&rdquo;
            as a slogan and more about what someone is actually deciding at 11pm on
            their phone.
          </span>
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          {aboutBioPills.map((pill) => (
            <span
              key={pill}
              className="rounded-full bg-ink px-4 py-2 text-[16px] font-medium text-paper"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
