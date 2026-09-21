import type { whatIfStories } from "@/lib/content";
import { Pill } from "@/components/ui/Button";

export function StoryRow({
  story,
  isLast,
}: {
  story: (typeof whatIfStories)[number];
  isLast: boolean;
}) {
  const isLive = story.status === "live";

  return (
    <div
      className={`flex flex-col gap-4 bg-mist px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6 ${
        isLast ? "" : "border-b border-black"
      }`}
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
    </div>
  );
}
