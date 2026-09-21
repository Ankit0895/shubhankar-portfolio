import { ConnectCta } from "@/components/sections/ConnectCta";
import { SiteFooterRow } from "@/components/sections/SiteFooterRow";
import { GridOverlay } from "@/components/ui/GridOverlay";

export function AboutConnect() {
  return (
    <section id="contact" className="group/grid relative bg-paper px-4 py-20 sm:py-28">
      <GridOverlay />
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-16">
        <ConnectCta />
        <SiteFooterRow />
      </div>
    </section>
  );
}
