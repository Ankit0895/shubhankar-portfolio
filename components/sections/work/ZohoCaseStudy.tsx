import type { ReactNode } from "react";
import { assets } from "@/lib/assets";
import { GridOverlay } from "@/components/ui/GridOverlay";

const challengeList = [
  "Simplify complex information",
  "Help users navigate multiple services",
  "Improve content discoverability",
  "Support SEO requirements",
  "Encourage consultation requests",
  "Scale easily as new services were added",
];

const auditPoints = [
  { icon: assets.work.zohoMarketing.auditIconGenericMessaging, label: "Generic messaging" },
  { icon: assets.work.zohoMarketing.auditIconDifficultToScan, label: "Difficult to scan" },
  { icon: assets.work.zohoMarketing.auditIconLowConversion, label: "Low conversion focus" },
  { icon: assets.work.zohoMarketing.auditIconMissingDecisionSupport, label: "Missing decision support" },
  { icon: assets.work.zohoMarketing.auditIconWeakDifferentiation, label: "Weak differentiation" },
  { icon: assets.work.zohoMarketing.auditIconInconsistentStructure, label: "Inconsistent page structure" },
];

const businessGoals = [
  "Increase consultation bookings",
  "Generate more WhatsApp enquiries",
  "Position Dynamic Mavens as a trusted implementation partner",
  "Improve search visibility through structured content",
  "Create a scalable page system for future services",
];

const userGoals = [
  "Understand what Zoho can solve",
  "Compare different solutions",
  "Learn the implementation process",
  "Build confidence in Dynamic Mavens",
  "Contact the team with minimal effort",
];

const strategyPoints = [
  {
    title: "1. Start with the user's problem",
    body: "Instead of introducing products immediately, every page begins by explaining the business challenges users are already experiencing. This creates stronger problem recognition before presenting the solution.",
  },
  {
    title: "2. Make long-form content easy to scan",
    body: "The content documents contained valuable information, but reading them felt overwhelming. I reorganized the information into clear sections, visual hierarchy, comparison tables, step-by-step processes, and expandable FAQs. This allowed users to find answers quickly without reading everything.",
  },
  {
    title: "3. Design a reusable system",
    body: "While reviewing the content, I noticed that every service page followed a similar structure: Business Problem, Product Overview, Benefits, Features, Comparison, Implementation Process, FAQ, CTA. Instead of designing four completely different pages, I created one reusable page framework that could support every service. This improved consistency, reduced design effort, and made future pages easier to build.",
  },
];

function Heading({ children }: { children: string }) {
  return (
    <h2 className="font-display text-[24px] font-semibold text-ink sm:text-[28px]">
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

export function ZohoCaseStudy() {
  return (
    <article className="group/grid relative flex flex-col gap-16 py-16 sm:gap-20 sm:py-20">
      <GridOverlay />
      <div className="flex w-full flex-col gap-16 px-4">
        <HalfCol>
          <Heading>Overview</Heading>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            Dynamic Mavens is an authorized Zoho implementation partner, but
            their old agency-template website buried their expertise in
            dense text and unclear user paths. Visitors struggled to grasp
            their value or select the right service.
          </p>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            I redesigned five core pages into a scalable, high-converting
            experience that clarifies their offering, builds credibility,
            and drives consultation bookings.
          </p>
        </HalfCol>

        <HalfCol>
          <Heading>The Challenge</Heading>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            Instead of providing wireframes or design requirements, the
            client shared five detailed content documents containing
            product information, SEO copy, FAQs, comparison tables, and
            implementation details.
          </p>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            The challenge wasn&apos;t creating content. It was organizing
            nearly 40 pages of information into an experience that business
            owners could quickly understand and confidently act on.
          </p>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            I needed to design a system that could:
          </p>
          <ul className="flex flex-col gap-2 pl-5">
            {challengeList.map((item) => (
              <li
                key={item}
                className="list-disc text-[15px] leading-[1.6] text-slate sm:text-[17px]"
              >
                {item}
              </li>
            ))}
          </ul>
        </HalfCol>
      </div>

      <div className="flex w-full flex-col gap-4 px-4">
        <h3 className="font-display text-[20px] font-semibold text-ink sm:text-[24px]">
          Old Design
        </h3>
        <img
          src={assets.work.zohoMarketing.oldDesignDeskMob}
          alt="Old Dynamic Mavens website: desktop and mobile homepage"
          className="w-full"
        />
      </div>

      <div className="flex w-full flex-col gap-10 px-4">
        <HalfCol>
          <Heading>Understanding the Existing Experience</Heading>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            Before starting the redesign, I audited the existing website to
            understand where users were likely struggling.
          </p>
        </HalfCol>
        <HalfCol>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {auditPoints.map((point) => (
              <div key={point.label} className="flex items-center gap-4">
                <img src={point.icon} alt="" aria-hidden className="h-8 w-8 shrink-0" />
                <span className="text-[15px] font-medium text-ink sm:text-[17px]">
                  {point.label}
                </span>
              </div>
            ))}
          </div>
        </HalfCol>
      </div>

      <div className="w-full bg-ink py-16 sm:py-20">
        <div className="flex w-full flex-col gap-8 px-4">
          <HalfCol>
            <h2 className="font-display text-[24px] font-semibold text-paper sm:text-[28px]">
              Project Goals
            </h2>
          </HalfCol>
          <HalfCol>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="border border-white/10 bg-white/5 p-6">
                <p className="mb-3 text-[17px] font-medium text-paper">
                  Business Goals
                </p>
                <ul className="flex flex-col gap-2 pl-5">
                  {businessGoals.map((item) => (
                    <li key={item} className="list-disc text-[15px] leading-[1.5] text-silver">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-white/10 bg-white/5 p-6">
                <p className="mb-3 text-[17px] font-medium text-paper">
                  User Goals
                </p>
                <ul className="flex flex-col gap-2 pl-5">
                  {userGoals.map((item) => (
                    <li key={item} className="list-disc text-[15px] leading-[1.5] text-silver">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </HalfCol>
        </div>
      </div>

      <div className="w-full bg-[#ffece3] py-16 sm:py-20">
        <div className="grid w-full grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div className="flex w-full flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Heading>Design Strategy</Heading>
              <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
                Rather than treating this as five independent pages, I
                approached it as one connected experience.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              {strategyPoints.map((point) => (
                <div key={point.title} className="flex flex-col gap-1.5">
                  <p className="text-[16px] font-medium text-ink">{point.title}</p>
                  <p className="text-[14px] leading-[1.6] text-slate sm:text-[15px]">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={assets.work.zohoMarketing.designStrategyPhoneMockup}
            alt="Zoho landing page shown on a phone resting on a desk"
            className="w-full"
          />
        </div>
      </div>

      <div className="w-full bg-[#ebfaff] py-16 sm:py-20">
        <div className="flex w-full flex-col gap-10 px-4">
          <HalfCol>
            <Heading>Key Design Decisions</Heading>
            <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
              Rather than focusing only on visual design, I made a series of
              strategic decisions to improve usability, trust, and
              conversion.
            </p>
          </HalfCol>
          <img
            src={assets.work.zohoMarketing.keyDesignPoints}
            alt="Key design decisions: start with the user's problem, turn dense content into scannable sections, make comparison tables a primary feature, build trust through process, improve conversion with dual CTAs, design mobile first, strengthen visual hierarchy"
            className="w-full"
          />
        </div>
      </div>
    </article>
  );
}
