import { principles } from "@/lib/content";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { PrincipleCard } from "@/components/ui/PrincipleCard";
import { GridOverlay } from "@/components/ui/GridOverlay";

export function KeyPrinciples() {
  return (
    <section id="about" className="group/grid relative px-4 py-16 sm:py-20">
      <GridOverlay />
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-6 text-center">
        <SectionEyebrow>Key Principles</SectionEyebrow>
        <h2 className="font-display text-[36px] font-bold text-black sm:text-[56px]">
          I follow. I believe.
        </h2>
        <p className="max-w-[900px] font-display text-[16px] font-light leading-[1.6] text-[#595959] sm:text-[22px]">
          I design for products where trust is the feature — fintech tools where an
          unclear confirmation screen costs someone real money. Visual craft is
          table stakes; what I&apos;m actually paid for is shortening the distance
          between a user&apos;s intent and a business outcome. After five years and a
          team of four, I&apos;ve stopped treating &ldquo;beautiful&rdquo; and
          &ldquo;functional&rdquo; as a tradeoff — the work is to make the right
          thing also the obvious thing.
        </p>
      </div>

      <div className="principle-row mx-auto mt-14 flex max-w-[1200px] flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-center sm:gap-0">
        {principles.map((principle, index) => (
          <PrincipleCard key={principle.id} principle={principle} overlap={index > 0} />
        ))}
      </div>
    </section>
  );
}
