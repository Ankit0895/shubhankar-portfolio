import { assets } from "@/lib/assets";
import { GridOverlay } from "@/components/ui/GridOverlay";

const icons: Record<string, string> = {
  money: assets.icons.money,
  confidence: assets.icons.confidence,
  trust: assets.icons.trust,
};

export function Intro() {
  return (
    <section id="about" className="group/grid relative px-4 py-20 sm:py-28">
      <GridOverlay />
      <div className="mx-auto flex max-w-[834px] flex-col items-center gap-5 text-center">
        <div className="flex items-center gap-5">
          <img
            src={assets.photos.profile}
            alt="Shubhankar Singh"
            className="size-20 rounded-full bg-paper object-cover"
          />
          <p className="text-[20px] text-[#595959] sm:text-[24px]">
            Hi, I&apos;m Shubhankar Singh
          </p>
        </div>

        <p className="text-[17px] leading-[1.6] font-light text-[#595959] sm:text-[24px]">
          5+ years designing digital products at the intersection of clarity and
          care. I work in fintech and consumer apps — spaces where bad design
          costs people real{" "}
          <span className="inline-flex items-center gap-1 align-middle">
            money <img src={icons.money} alt="" className="inline size-6" />
          </span>
          , real{" "}
          <span className="inline-flex items-center gap-1 align-middle">
            confidence <img src={icons.confidence} alt="" className="inline size-5" />
          </span>
          , and real{" "}
          <span className="inline-flex items-center gap-1 align-middle">
            trust <img src={icons.trust} alt="" className="inline size-6" />
          </span>
          .
        </p>
      </div>
    </section>
  );
}
