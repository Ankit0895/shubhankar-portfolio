import type { CSSProperties } from "react";
import { assets } from "@/lib/assets";
import type { Principle } from "@/lib/content";

export function PrincipleCard({
  principle,
  overlap = false,
}: {
  principle: Principle;
  overlap?: boolean;
}) {
  return (
    <div
      className={`principle-card group relative aspect-square w-[350px] shrink-0 overflow-hidden rounded-2xl transition-shadow duration-300 hover:shadow-2xl ${overlap ? "sm:-ml-10" : ""}`}
      style={{ "--rot": `${principle.rotate}deg` } as CSSProperties}
    >
      <img
        src={assets.about.principleCards[principle.card]}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full"
      />
      <img
        src={assets.about.principleCardsHover[principle.card]}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  );
}
