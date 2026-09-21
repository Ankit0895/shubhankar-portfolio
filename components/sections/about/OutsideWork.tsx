import { assets } from "@/lib/assets";
import { outsidePhotos } from "@/lib/content";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { GridOverlay } from "@/components/ui/GridOverlay";

function Photo({ item, className = "" }: { item: (typeof outsidePhotos)[number]; className?: string }) {
  return (
    <div className={`relative ${item.rotate} ${className}`}>
      <img
        src={assets.about.outsideWork[item.photo]}
        alt=""
        className="aspect-3/4 w-full rounded-xl border border-line object-cover shadow-md transition-all duration-300 hover:z-10 hover:rotate-0 hover:shadow-[0px_21px_12px_0px_rgba(0,0,0,0.05),0px_9px_9px_0px_rgba(0,0,0,0.09),0px_2px_5px_0px_rgba(0,0,0,0.1)]"
      />
      {item.note && (
        <span className="font-handwritten absolute -top-7 right-1 z-10 rotate-6 text-[18px] whitespace-nowrap text-black">
          {item.note}
        </span>
      )}
    </div>
  );
}

export function OutsideWork() {
  const [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10] = outsidePhotos;

  const textBlock = (
    <div className="flex flex-col items-center gap-4 text-center">
      <SectionEyebrow>Adventurer</SectionEyebrow>
      <h2 className="font-display text-[32px] font-bold text-black sm:text-[48px]">
        Outside of work
      </h2>
      <p className="max-w-105 text-[15px] leading-[1.6] text-[#595959] sm:text-[18px]">
        I ride. Mountains, backroads, terrain that takes a full day to reach and
        a longer one to come back from. It&apos;s where I do my best not-thinking.
      </p>
    </div>
  );

  return (
    <section className="group/grid relative px-4 py-16 sm:py-20">
      <GridOverlay />
      {/* Ring layout: text centered, photos surrounding it on every side. */}
      <div className="mx-auto hidden max-w-300 grid-cols-4 grid-rows-4 items-center gap-5 sm:grid">
        <Photo item={p1} className="col-start-1 row-start-1" />
        <Photo item={p2} className="col-start-2 row-start-1" />
        <Photo item={p3} className="col-start-3 row-start-1" />
        <Photo item={p4} className="col-start-4 row-start-1" />

        <Photo item={p5} className="col-start-1 row-start-2" />
        <div className="col-start-2 col-span-2 row-start-2 row-span-2">{textBlock}</div>
        <Photo item={p6} className="col-start-4 row-start-2" />

        <Photo item={p7} className="col-start-1 row-start-3" />
        <Photo item={p8} className="col-start-4 row-start-3" />

        <Photo item={p9} className="col-start-2 row-start-4" />
        <Photo item={p10} className="col-start-3 row-start-4" />
      </div>

      {/* Mobile: text first, photos in a simple wrapped gallery below. */}
      <div className="flex flex-col items-center gap-10 sm:hidden">
        {textBlock}
        <div className="flex flex-wrap items-start justify-center gap-4">
          {outsidePhotos.map((item) => (
            <Photo key={item.id} item={item} className="w-[42vw] max-w-42.5" />
          ))}
        </div>
      </div>
    </section>
  );
}
