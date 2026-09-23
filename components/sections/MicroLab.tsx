import { assets } from "@/lib/assets";
import { microLabItems } from "@/lib/content";
import { GridOverlay } from "@/components/ui/GridOverlay";

const loopItems = [...microLabItems, ...microLabItems];

export function MicroLab() {
  return (
    <section className="group/grid relative overflow-hidden py-16 sm:py-20">
      <GridOverlay />
      <p className="pointer-events-none -mb-[0.22em] select-none px-4 text-center font-bold text-black/75 leading-[1.1] text-[12vw] sm:text-[90px] lg:text-[130px]">
        Micro Lab
      </p>

      <div className="relative w-full overflow-hidden bg-paper [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="micro-lab-track flex w-max gap-5">
          {loopItems.map((item, i) =>
            item.type === "video" ? (
              <video
                key={`${item.id}-${i}`}
                className="aspect-845/500 w-[85vw] shrink-0 rounded-[20px] bg-accent-blue object-cover sm:w-211.25"
                src={assets.microLab[item.key]}
                autoPlay
                muted
                loop
                playsInline
                aria-hidden
              />
            ) : (
              <img
                key={`${item.id}-${i}`}
                className="aspect-845/500 w-[85vw] shrink-0 rounded-[20px] bg-accent-blue object-cover sm:w-211.25"
                src={assets.microLab[item.key]}
                alt=""
                aria-hidden
              />
            )
          )}
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-[1100px] items-center justify-end gap-4 px-4">
        <button
          type="button"
          aria-label="Previous"
          className="flex size-9 items-center justify-center rounded-full bg-mist"
        >
          <img src={assets.icons.chevronRight} alt="" className="size-5 rotate-180" />
        </button>
        <button
          type="button"
          aria-label="Next"
          className="flex size-9 items-center justify-center rounded-full bg-ink"
        >
          <img src={assets.icons.chevronRightWhite} alt="" className="size-5" />
        </button>
        <a href="/micro-lab" className="text-[18px] font-light text-ink">
          View all
        </a>
      </div>
    </section>
  );
}
