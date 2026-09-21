import type { Project } from "@/lib/content";
import { assets } from "@/lib/assets";
import { Pill } from "@/components/ui/Button";

const accentClasses: Record<Project["accent"], string> = {
  coral: "bg-coral",
  dark: "bg-ink",
  grass: "bg-grass",
  cream: "bg-cream",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-[20px] border border-ink ${
        project.size === "full" ? "md:col-span-2" : ""
      }`}
    >
      <div className={`aspect-video w-full ${accentClasses[project.accent]}`}>
        <img
          src={assets.workCovers[project.cover]}
          alt=""
          aria-hidden
          className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-4 bg-mist px-5 py-5 justify-between h-full">
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] font-medium tracking-[-0.4px] text-ink-deep">
            {project.eyebrow}
          </span>
          <h3 className="text-[19px] leading-snug font-bold sm:text-[22px]">
            {project.title}
          </h3>
        </div>

        <div className="flex shrink-0 gap-3">
          <Pill href={project.caseStudyHref ?? "#"} size="sm" variant="solid">
            View Case study
          </Pill>
          <Pill href="#" size="sm" variant="outline">
            View Live
          </Pill>
        </div>
      </div>
    </article>
  );
}
