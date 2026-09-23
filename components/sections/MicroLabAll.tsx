import { assets } from "@/lib/assets";
import { microLabItems } from "@/lib/content";

const PLACEHOLDER_COUNT = 4;

export function MicroLabAll() {
  const uniqueItems = microLabItems.filter(
    (item, idx, arr) => arr.findIndex((other) => other.key === item.key && other.type === item.type) === idx
  );

  return (
    <section className="px-4 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto max-w-[1100px]">
        <h1 className="font-display text-[56px] font-bold leading-[1.05] text-ink sm:text-[80px]">
          Micro Lab
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {uniqueItems.map((item) =>
            item.type === "video" ? (
              <video
                key={item.id}
                className="aspect-845/500 w-full rounded-[20px] border border-line bg-accent-blue object-cover"
                src={assets.microLab[item.key]}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                key={item.id}
                className="aspect-845/500 w-full rounded-[20px] border border-line bg-accent-blue object-cover"
                src={assets.microLab[item.key]}
                alt=""
              />
            )
          )}

          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <div
              key={`coming-soon-${i}`}
              className="flex aspect-845/500 w-full items-center justify-center rounded-[20px] border border-line bg-paper"
            >
              <span className="text-[15px] text-slate">Coming Soon</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
