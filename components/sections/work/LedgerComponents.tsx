import type { ReactNode } from "react";
import { assets } from "@/lib/assets";
import { GridOverlay } from "@/components/ui/GridOverlay";

function Heading({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 font-display text-[24px] font-bold text-black sm:text-[28px]"
    >
      {children}
    </h2>
  );
}

function HalfCol({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col gap-4 text-left">{children}</div>
    </div>
  );
}

export function LedgerComponents() {
  return (
    <article className="group/grid relative flex flex-col gap-16 px-4 pb-16 sm:gap-20 sm:pb-20">
      <GridOverlay />
      <HalfCol>
        <Heading id="data-visualization">Data visualization</Heading>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
          Advisor is fundamentally driven by data. Tables, performance charts, and numeric
          readouts are not secondary decorations, they are the core interface itself. Designing
          these components demanded the highest level of rigor, as they anchor the most
          information-dense, high-stakes surfaces across the platform.
        </p>
      </HalfCol>

      <img
        src={assets.work.ledgerDesignSystem.dataVisualizationComponents}
        alt="Ledger data-visualization components: performance charts, tables, and numeric readouts"
        className="w-full"
      />

      <HalfCol>
        <Heading id="components">Components</Heading>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
          Once the foundations were locked, we moved into component architecture under three
          strict constraints: zero hardcoded values (every element mapped strictly to design
          tokens), unified variant naming conventions, and dedicated, platform-specific builds for
          web and mobile rather than responsive afterthoughts. This process produced over 100
          production-ready components across four functional groups: form controls, navigation
          patterns, data visualization/display, and contextual feedback states.
        </p>
      </HalfCol>

      <img
        src={assets.work.ledgerDesignSystem.componentLibrary}
        alt="The Ledger component library: form controls, navigation, data display, and feedback states"
        className="w-full"
      />

      <HalfCol>
        <Heading id="in-production">In Production</Heading>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
          At the end of the day, the system exists entirely to power the interface in front of the
          user. Architecture matters only in service of what it makes possible on glass.
        </p>
      </HalfCol>

      <img
        src={assets.work.ledgerDesignSystem.inProductionMockup}
        alt="Ledger design system running in production across desktop and mobile"
        className="w-full"
      />

      <HalfCol>
        <Heading id="conclusion">Conclusion</Heading>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
          The design system acts as a pivotal bridge, translating Value Research&apos;s extensive
          financial expertise into intuitive and effective advisory products. By rigorously
          defining and codifying fundamental design elements — from core colors and type scales to
          foundational component blueprints — the system creates a reliable source of truth. This
          elimination of decision-making overhead regarding routine UI tasks liberates product
          teams to channel their focus entirely towards crafting exceptional user experiences and
          optimizing financial workflows.
        </p>
      </HalfCol>
    </article>
  );
}
