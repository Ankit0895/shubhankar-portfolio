import { ConnectCta } from "@/components/sections/ConnectCta";
import { SiteFooterRow } from "@/components/sections/SiteFooterRow";
import { GridOverlay } from "@/components/ui/GridOverlay";

export function Contact() {
  return (
    <section id="contact" className="group/grid relative bg-paper px-4 py-20 sm:py-28">
      <GridOverlay />
        <ConnectCta />
        <SiteFooterRow />
    </section>
  );
}
