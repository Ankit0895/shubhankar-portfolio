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

export function LedgerFoundations() {
  return (
    <article className="group/grid relative flex flex-col gap-16 px-4 py-16 sm:gap-20 sm:py-20">
      <GridOverlay />
      <HalfCol>
        <Heading id="tokens">Tokens</Heading>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
          Built on three distinct tiers, the architecture follows a single rule: never let a
          component reach past its tier. It begins with primitives, the raw values like color
          ramps, numeric scales, font sizes, and radii that define what something is rather than
          where it goes (neutral-7, blue-500, size-16). Semantic tokens sit above them to apply
          context (bg-surface-1, stroke-default), ensuring components request a functional role
          instead of a hardcoded value to unlock seamless theming.
        </p>
      </HalfCol>

      <img
        src={assets.work.ledgerDesignSystem.tokensVariablesPanel}
        alt="Ledger design tokens: radius, typography primitives, typography tokens, and color variables in Figma"
        className="w-full"
      />

      <HalfCol>
        <Heading id="colors">Colors</Heading>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
          The foundation relies on a ten-step neutral ramp, dedicated surface and stroke tokens,
          and an eight-hue semantic palette (red, pink, orange, yellow, blue, aqua, green, lime),
          architected for a multi-brand ecosystem beyond just the advisor product. Surfaces
          operate as structural layers rather than flat backgrounds. Tokens like bg-surface-1 and
          bg-surface-2 establish depth and visual separation between base pages and interactive
          components. Each layer is documented with clear do&apos;s and don&apos;ts mapped
          directly to live product interfaces, including the SEBI Riskometer and
          fund-versus-index performance charts.
        </p>
      </HalfCol>

      <img
        src={assets.work.ledgerDesignSystem.colorPalette1}
        alt="Ledger color system: neutral ramp and semantic palette"
        className="w-full"
      />
      <img
        src={assets.work.ledgerDesignSystem.colorPalette2}
        alt="Ledger color system: primary and secondary graph colors"
        className="w-full"
      />

      <HalfCol>
        <Heading id="typography">Typography</Heading>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
          Two type families establish the hierarchy: Plus Jakarta Sans brings personality and
          presence to headings, while Inter handles dense data legibility. Both include full
          weight ramps, defined mobile scales, and documented character sets spanning fractions,
          punctuation, and symbols. Numerals drove the entire decision. In a financial product
          where numbers dominate the screen, tabular clarity and data readability took priority
          over everything else.
        </p>
      </HalfCol>

      <img
        src={assets.work.ledgerDesignSystem.typographySpecimens}
        alt="Ledger typography: Plus Jakarta Sans and Inter specimens with the font-size ladder from 10px to 24px"
        className="w-full"
      />

      <HalfCol>
        <Heading id="iconography">Iconography</Heading>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
          Financial interfaces demand extreme data density. When standard icon libraries scale
          down to 12px, 16px, 20px, or 24px, they tend to degrade quickly, resulting in muddy
          strokes, soft corners, and lost detail. To eliminate that friction, every icon was
          custom-crafted from scratch for these exact constraints. Each glyph shares a unified
          stroke weight, tuned specifically for sub-pixel crispness at a 16px baseline. Instead of
          evaluating assets in isolation on a blank artboard, every icon was stress-tested inside
          its native UI component: dropdown carets, inline table locks for premium data, calendar
          pickers in date fields, and bell badges in navigation bars. The result is a dedicated
          icon system built to stay sharp and legible inside tight, data-heavy layouts.
        </p>
      </HalfCol>

      <img
        src={assets.work.ledgerDesignSystem.iconWall}
        alt="The full Ledger custom icon set laid out in a grid"
        className="w-full"
      />
      <img
        src={assets.work.ledgerDesignSystem.iconGridStyles}
        alt="Ledger icon pixel grid alignment and the linear, fill, and duotone icon styles"
        className="w-full"
      />

      <HalfCol>
        <Heading id="voice">Voice</Heading>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
          Financial advice requires deep user trust, and language is where that credibility is won
          or lost. To ensure consistency across the product, the system formalizes content design
          with the same rigor as visual components, anchoring voice around four core tensions
          defined directly against their adjacent failure modes: Authoritative, not arrogant
          (evidence-backed confidence without condescension), Warm, not casual (supportive and
          human without being flippant), Clear, not simplistic (demystifying complex jargon rather
          than stripping away depth), and Objective, not alarmist (grounded data and context over
          market hype). Defining the exact line where a positive attribute tips into an
          anti-pattern transforms vague brand guidance into actionable, practical constraints that
          writers and designers can apply under real-world product deadlines.
        </p>
      </HalfCol>

      <HalfCol>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <img
            src={assets.work.ledgerDesignSystem.voiceAuthoritative}
            alt="Voice principle: Authoritative, not arrogant"
            className="w-full"
          />
          <img
            src={assets.work.ledgerDesignSystem.voiceWarm}
            alt="Voice principle: Warm, not casual"
            className="w-full"
          />
          <img
            src={assets.work.ledgerDesignSystem.voiceClear}
            alt="Voice principle: Clear, not simplistic"
            className="w-full"
          />
          <img
            src={assets.work.ledgerDesignSystem.voiceObjective}
            alt="Voice principle: Objective, not alarmist"
            className="w-full"
          />
        </div>
      </HalfCol>

      <HalfCol>
        <Heading id="illustrations">Illustrations</Heading>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
          Financial interfaces easily feel sterile under the weight of dense tables, risk metrics,
          and numbers. Custom illustration provides the human counterbalance, infusing high-stakes
          screens with warmth and personality. The visual style relies on intentional
          imperfection: loose, hand-drawn lines, visible brushwork, and soft watercolor bleeds.
          Expressive characters with exaggerated proportions paired with an earthy palette of
          sage, terracotta, dusty pink, and soft blue give the interface approachable breathing
          room while keeping the product grounded.
        </p>
      </HalfCol>

      <img
        src={assets.work.ledgerDesignSystem.illustrationsGallery}
        alt="Six custom illustrations from the Ledger system, hand-drawn with soft watercolor bleeds"
        className="w-full"
      />

      <HalfCol>
        <Heading id="spacing-grid">Spacing &amp; Grid</Heading>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
          A grid is the invisible structure that holds a page together. Users never see it, but
          they always feel it. When the grid is followed, content breathes, hierarchy is clear,
          and the eye moves naturally. When it&apos;s ignored, pages feel accidental and for a
          financial product, that feeling is fatal to trust. VRA uses two types of grids: Fixed
          and Fluid. Knowing which one to use, and when, is one of the most important layout
          decisions you&apos;ll make.
        </p>
      </HalfCol>

      <img
        src={assets.work.ledgerDesignSystem.spacingGridTokens}
        alt="Ledger web and mobile grid specifications alongside the spacing, semantic, and radius token tables"
        className="w-full"
      />
    </article>
  );
}
