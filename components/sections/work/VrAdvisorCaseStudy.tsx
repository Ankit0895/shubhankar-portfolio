import type { ReactNode } from "react";
import { assets } from "@/lib/assets";
import { GridOverlay } from "@/components/ui/GridOverlay";

const projectOverviewItems = [
  { image: "cardResearch", alt: "Research mutual funds and stocks" },
  { image: "cardInvest", alt: "Invest through SIPs and lump sum investments" },
  { image: "cardTrackPortfolio", alt: "Track portfolios" },
  { image: "cardManageSubscriptions", alt: "Manage subscriptions" },
  { image: "cardCompleteTransactions", alt: "Complete investment transactions" },
  { image: "cardAccountSettings", alt: "Handle account settings and mandates" },
] as const;

const problemPoints = [
  { image: "problem1", text: "Different users saw the same interface" },
  { image: "problem2", text: "Product experiences lacked consistency" },
  { image: "problem3", text: "Trust had to be designed intentionally" },
  { image: "problem4", text: "One hub to manage 6 family accounts friction-free" },
] as const;

const solutionItems = [
  "A state-aware Home experience",
  "Improved Fund and Stock Detail pages",
  "Streamlined investment flows",
  "Contextual subscription journeys",
  "Unified Account Hub",
  "Cross-platform design system",
  "Consistent interaction patterns across mobile and web",
];

function Heading({ children }: { children: string }) {
  return (
    <h2 className="font-display text-[24px] font-bold text-black sm:text-[28px]">{children}</h2>
  );
}

function HalfCol({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col gap-4 text-left">{children}</div>
    </div>
  );
}

export function VrAdvisorCaseStudy() {
  return (
    <article className="group/grid relative flex flex-col gap-16 px-4 py-16 sm:gap-20 sm:py-20">
      <GridOverlay />
      <HalfCol>
        <Heading>Overview</Heading>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
          For over three decades, Value Research has helped millions make informed financial
          decisions through independent analysis. As the platform expanded into execution,
          portfolio management, and subscriptions, the user experience grew increasingly complex
          across overlapping goals and permissions.
        </p>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
          Rather than just redesigning screens, my team and I overhauled the mobile experience by
          building a scalable design system. This system adapts to diverse user states,
          maintaining simplicity, trust, and consistency across the entire ecosystem.
        </p>
      </HalfCol>

      <div className="flex w-full flex-col gap-8">
        <HalfCol>
          <Heading>Project Overview</Heading>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            Value Research Advisor is a comprehensive investment platform that enables users to:
          </p>
        </HalfCol>
        <HalfCol>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {projectOverviewItems.map((item) => (
              <img
                key={item.image}
                src={assets.work.vrAdvisorApp[item.image]}
                alt={item.alt}
                className="w-full"
              />
            ))}
          </div>
        </HalfCol>
        <HalfCol>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            Unlike many financial products that focus on a single workflow, this platform
            supports users across the entire investment lifecycle, from first-time exploration to
            long-term portfolio management. This meant the product had to accommodate users with
            different levels of experience, permissions, and intent, all within a single
            ecosystem.
          </p>
        </HalfCol>
      </div>

      <div className="w-full bg-mist px-6 py-12 sm:px-16 sm:py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Heading>The Problems</Heading>
            <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
              The existing product had evolved organically over time. Different modules had been
              designed independently, leading to inconsistencies in navigation, content
              hierarchy, and user flows. Some experiences prioritised business goals over user
              needs, while others introduced unnecessary friction or lacked clarity during
              critical financial actions.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {problemPoints.map((point) => (
                <div key={point.text} className="flex items-center gap-3">
                  <img
                    src={assets.work.vrAdvisorApp[point.image]}
                    alt=""
                    aria-hidden
                    className="h-11 w-11 shrink-0"
                  />
                  <p className="text-[15px] leading-[1.5] text-black sm:text-[16px]">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={assets.work.vrAdvisorApp.problemSS}
            alt="Older design: fund and home page screens"
            className="w-full"
          />
        </div>
      </div>

      <img
        src={assets.work.vrAdvisorApp.smartphoneRockMockup}
        alt="Value Research Advisor app portfolio home screen, shown as a premium smartphone mockup"
        className="w-full"
      />

      <div className="flex w-full flex-col gap-10">
        <HalfCol>
          <Heading>Who It&apos;s For</Heading>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            Value Research Advisor caters to a broad audience across varying levels of expertise,
            access, and financial goals. The platform dynamically adapts to serve five core user
            states across the investment lifecycle.
          </p>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            New investors get guided touchpoints to build confidence, while active investors gain
            frictionless access to portfolios and transactions. Paid subscribers receive instant
            access to premium research and recommendations, free users experience core value
            paired with natural upgrade prompts, and lapsed subscribers encounter targeted
            triggers to re-engage them.
          </p>
        </HalfCol>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <img
            src={assets.work.vrAdvisorApp.orderConfirmationHands}
            alt="Hands holding a phone showing an order-placed confirmation screen"
            className="w-full"
          />
          <img
            src={assets.work.vrAdvisorApp.fundDetailAndScreenerPhones}
            alt="Fund detail and stock screener screens shown side by side"
            className="w-full"
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-8">
        <HalfCol>
          <Heading>The Solution</Heading>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            Rather than redesigning isolated screens, the outcome was a cohesive investment
            platform where every major experience adapts to the user&apos;s context while
            remaining familiar and predictable. The redesign included:
          </p>
        </HalfCol>
        <HalfCol>
          <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-accent">
            {solutionItems.map((item) => (
              <li key={item} className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
                {item}
              </li>
            ))}
          </ul>
        </HalfCol>
      </div>
    </article>
  );
}
