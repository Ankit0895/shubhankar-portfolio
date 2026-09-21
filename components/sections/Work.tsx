import { projects } from "@/lib/content";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { GridOverlay } from "@/components/ui/GridOverlay";

export function Work() {
  return (
    <section id="work" className="group/grid relative px-4 py-16 sm:py-20">
      <GridOverlay />
      <SectionWatermark>Work</SectionWatermark>
      <div className="relative mx-auto grid max-w-[1100px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
