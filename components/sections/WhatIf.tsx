import { whatIfStories } from "@/lib/content";
import { StoryRow } from "@/components/ui/StoryRow";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { GridOverlay } from "@/components/ui/GridOverlay";

export function WhatIf() {
  return (
    <section className="group/grid relative px-4 py-16 sm:py-20">
      <GridOverlay />
      <SectionWatermark>What if</SectionWatermark>
      <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[20px] border border-ink bg-paper">
        {whatIfStories.map((story, i) => (
          <StoryRow key={story.id} story={story} isLast={i === whatIfStories.length - 1} />
        ))}
      </div>
    </section>
  );
}
