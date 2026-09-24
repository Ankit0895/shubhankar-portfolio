import type { whatIfStories } from "@/lib/content";
import { assets } from "@/lib/assets";
import { Pill } from "@/components/ui/Button";

export function StoryRow({
  story,
  isFirst,
  isLast,
}: {
  story: (typeof whatIfStories)[number];
  isFirst: boolean;
  isLast: boolean;
}) {
  const isLive = story.status === "live";

  return (
    <div
      className={`group/preview relative flex flex-col gap-4 bg-mist px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6 ${
        isLast ? "" : "border-b border-black"
      } ${isFirst ? "rounded-t-[20px]" : ""} ${isLast ? "rounded-b-[20px]" : ""}`}
    >
      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] font-medium tracking-[-0.4px] text-ink-deep">
          {story.label}
        </span>
        <p className="text-[19px] font-bold sm:text-[24px]">{story.title}</p>
      </div>
      <Pill
        href={isLive ? "#" : undefined}
        size="sm"
        variant={isLive ? "solid" : "soon"}
        className="shrink-0 self-start sm:self-center"
      >
        {isLive ? "View Case study" : "Coming Soon"}
      </Pill>

      {story.previewImage ? (
        <img
          src={assets.whatIf[story.previewImage]}
          alt=""
          className="pointer-events-none absolute top-1/2 -left-50 z-20 hidden w-95 max-w-[40vw] -translate-y-1/2 scale-95 opacity-0 transition-all duration-300 ease-out group-hover/preview:scale-100 group-hover/preview:opacity-100 lg:block"
        />
      ) : null}
    </div>
  );
}
