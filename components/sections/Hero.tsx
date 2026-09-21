import { assets } from "@/lib/assets";
import { brandLogos } from "@/lib/content";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { GridOverlay } from "@/components/ui/GridOverlay";

const logos = [
  { name: brandLogos[0].name, src: assets.brands.valueResearchMark },
  { name: brandLogos[1].name, src: assets.brands.relaxo },
  { name: brandLogos[2].name, src: assets.brands.amazon },
  { name: brandLogos[3].name, src: assets.brands.bajajAuto },
];

export function Hero() {
  return (
    <section id="top" className="group/grid relative overflow-hidden px-4 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <GridOverlay />
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-10 text-center">
        <p className="font-display text-[32px] leading-[1.3] font-normal text-black sm:text-[48px] lg:text-[64px]">
          &ldquo;I want to use design to make people feel{" "}
          <span className="font-bold text-accent">understood</span> and{" "}
          <span className="font-bold text-accent">empowered</span> to take better
          decisions.&rdquo;
        </p>

        <p className="max-w-xl text-[18px] text-body sm:text-[24px]">
          &ldquo;Currently designing intuitive digital products at{" "}
          <span className="font-medium text-[#595959]">Value Research</span> Pvt.
          Ltd.&rdquo;
        </p>

        <ResumeButton
          href="#"
          icon={
            <span className="relative inline-block size-4">
              <img
                src={assets.icons.download}
                alt=""
                className="absolute inset-0 size-4 opacity-100 transition-opacity duration-300 ease-out group-hover:opacity-0"
              />
              <img
                src={assets.icons.downloadHover}
                alt=""
                className="absolute inset-0 size-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
              />
            </span>
          }
        >
          Download My Resume
        </ResumeButton>
      </div>

      <div className="mx-auto mt-16 max-w-[900px]">
        <LogoMarquee logos={logos} />
      </div>
    </section>
  );
}
