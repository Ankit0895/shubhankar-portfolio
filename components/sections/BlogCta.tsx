import { assets } from "@/lib/assets";
import { GridOverlay } from "@/components/ui/GridOverlay";

export function BlogCta() {
  return (
    <section id="insights" className="group/grid group/medium relative px-4 py-20 sm:py-28">
      <GridOverlay />
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-6 text-center">
        <div className="flex items-center justify-center">
          <img src={assets.icons.medium} alt="Medium" className="size-14 shrink-0" />
          <div className="max-w-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover/medium:ml-3 group-hover/medium:max-w-64 group-hover/medium:opacity-100">
            <img src={assets.icons.mediumWordmark} alt="" className="h-14 w-auto max-w-none" />
          </div>
        </div>
        <p className="text-[28px] leading-[1.3] text-black/75 sm:text-[40px]">
          From Figma drafts to published thoughts
        </p>
        <a
          href="https://medium.com/@shubhankardesignux"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[18px] text-ink underline-offset-4 transition-colors duration-300 hover:underline group-hover/medium:text-accent"
        >
          Read Now
        </a>
      </div>
    </section>
  );
}
