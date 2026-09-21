import type { ReactNode } from "react";
import { assets } from "@/lib/assets";
import { GridOverlay } from "@/components/ui/GridOverlay";

const processPhases = [
  {
    title: "Phase 1: Product Discovery",
    body: "Understand the business model, product ecosystem, and user lifecycle before making design decisions.",
  },
  {
    title: "Phase 2: Product Audit",
    body: "Evaluate the existing experience to identify inconsistencies, usability issues, and opportunities for improvement. Rather than reviewing individual screens, I audited the product as a connected system.",
  },
  {
    title: "Phase 3: State Mapping",
    body: "This became the turning point of the project. While reviewing the product, I realised every major feature behaved differently depending on the user's relationship with the platform. Instead of organising the redesign around screens, I mapped the different user states that existed across the product.",
  },
  {
    title: "Phase 4: Research & Insights",
    body: "Rather than relying on assumptions, I analysed how users interact with investment products and identified recurring behavioural patterns across the platform.",
  },
  {
    title: "Phase 5: Information Architecture",
    body: "With the user states clearly defined, I restructured the product around the investment journey rather than individual features. Instead of treating each module independently, the experience was organised into connected stages that reflect how users naturally interact with the platform.",
  },
];

const regulatedPoints = [
  {
    number: 1,
    title: "Risk Before Recommendation",
    body: "Mandatory profiling is built directly into onboarding, establishing a user's risk appetite before suggesting investments, while returning users skip duplicate checks.",
  },
  {
    number: 2,
    title: "Honesty Over Persuasion in NFOs",
    body: "Since New Fund Offers lack historical data, the interface transparently highlights what is unknown rather than masking data gaps with artificial metrics or unbacked claims.",
  },
  {
    number: 3,
    title: "Intentional Friction",
    body: "OTP verifications across money-moving actions serve as necessary audit trails and conscious consent steps, designed to provide reassurance rather than conversion barriers.",
  },
];

const learnings = [
  "Great products are designed around user context, not screens",
  "Consistency builds confidence",
  "Compliance should enable trust, not interrupt the experience",
  "Design systems are about product scalability",
  "Collaboration drives better product decisions",
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

function PhoneRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-6 sm:gap-10">{children}</div>
  );
}

function Phone({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="w-full shadow-lg sm:w-[300px]" />;
}

export function VrAdvisorProcess() {
  return (
    <article className="group/grid relative flex flex-col gap-16 px-4 py-16 sm:gap-20 sm:py-20">
      <GridOverlay />
      <div className="flex w-full flex-col gap-8">
        <HalfCol>
          <Heading>Design Process</Heading>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            Designing Value Research Advisor wasn&apos;t about redesigning a few screens. It was
            about creating a product experience that could support users across different stages
            of their investment journey while remaining consistent across mobile and web.
          </p>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            Before exploring solutions, I focused on understanding three things:
          </p>
          <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-accent">
            <li className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
              How the business creates value
            </li>
            <li className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
              How users interact with the platform
            </li>
            <li className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
              How the existing experience behaves across different scenarios
            </li>
          </ul>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            This discovery phase helped define the product strategy before any interface design
            began.
          </p>
        </HalfCol>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            {processPhases.map((phase) => (
              <div key={phase.title} className="flex flex-col gap-2">
                <p className="text-[17px] font-semibold text-black sm:text-[18px]">{phase.title}</p>
                <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">{phase.body}</p>
              </div>
            ))}
          </div>
          <div className="flex w-full flex-col gap-3">
            <p className="text-[17px] font-semibold text-black sm:text-[18px]">IA diagram</p>
            <img
              src={assets.work.vrAdvisorApp.iaDiagram}
              alt="Information architecture diagram of the Value Research Advisor app"
              className="w-full border border-line"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-8">
        <HalfCol>
          <Heading>The Goal-First Home</Heading>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            The home screen leads with goals, not products. It opens with nine human entry points
            (&ldquo;Retire on your own terms!&rdquo;, &ldquo;Your child&apos;s future can&apos;t
            wait!&rdquo;), ending with the most critical card on the screen: &ldquo;No goal? No
            problem!&rdquo; Instead of forcing users into a cold form, the undecided majority gets
            an actual door in.
          </p>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            Running money stays pinned up top (Your SIPs / Your SWPs, answering &ldquo;is my money
            OK?&rdquo; instantly). Below that, home dynamically reshapes around user state:
          </p>
          <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-accent">
            <li className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
              Free users see a research shelf with 10-year category averages, giving just enough
              signal to build confidence.
            </li>
            <li className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
              Paid subscribers get Analyst&apos;s Choice and the Fund Advisor&apos;s note front and
              center, surfacing the exact judgment they pay for on arrival.
            </li>
          </ul>
        </HalfCol>
        <PhoneRow>
          <Phone src={assets.work.vrAdvisorApp.goalHomePhone1} alt="Import portfolio prompt on home screen" />
          <Phone src={assets.work.vrAdvisorApp.goalHomePhone2} alt="Goal-first home screen with performance snapshot" />
          <Phone src={assets.work.vrAdvisorApp.goalHomePhone3} alt="Dark mode goal-first home screen" />
        </PhoneRow>
      </div>

      <div className="flex w-full flex-col gap-8">
        <HalfCol>
          <Heading>Detail Pages That Carry the Persuasion</Heading>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            The fund detail page is where the free-to-paid conversion actually happens, so it is
            built across four commercial states: Paid, Free, NFO, and SIF.
          </p>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            All four states share a single anatomy (Returns, Holdings, Risk, More Details), letting
            free users see the depth they are missing. Meanwhile, NFOs transparently reflect the
            lack of historical data instead of faking charts, and SIF receives dedicated structural
            treatment rather than a superficial relabel.
          </p>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            Decision tools like overlap analysis, manager track records, and period comparisons
            live directly inside fund and stock pages, establishing a unified navigation grammar
            across asset types. Meanwhile, transactions are deliberately choreographed rather than
            minimized, using structured OTP confirmations to turn purposeful friction into a core
            trust feature.
          </p>
        </HalfCol>
        <PhoneRow>
          <Phone src={assets.work.vrAdvisorApp.detailPhone1} alt="Fund detail page: paid state" />
          <Phone src={assets.work.vrAdvisorApp.detailPhone2} alt="Fund returns comparison chart" />
          <Phone src={assets.work.vrAdvisorApp.detailPhone3} alt="New Fund Offer (NFO) period state" />
          <Phone src={assets.work.vrAdvisorApp.detailPhone4} alt="Specialized Investment Fund (SIF) detail state" />
        </PhoneRow>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Heading>Designing Inside a Regulated System</Heading>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            Designing for a financial platform goes beyond usability. Every interaction must
            also comply with regulatory requirements while maintaining user trust and
            transparency. Throughout the redesign, I ensured that key user journeys respected
            compliance requirements without making the experience unnecessarily complex.
          </p>
          <div className="flex flex-col gap-2">
            {regulatedPoints.map((point) => (
              <div key={point.title} className="flex flex-col gap-2">
                <p className="text-[17px] font-bold text-black sm:text-[19px]">
                  {point.number}. {point.title}
                </p>
                <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-start gap-5">
          <div className="flex flex-col gap-5">
            <img
              src={assets.work.vrAdvisorApp.regulatedFundDetail}
              alt="MFC OTP verification screen for importing investments"
              className="w-full sm:w-[300px]"
            />
            <img
              src={assets.work.vrAdvisorApp.regulatedRiskProfile}
              alt="Risk profile card prompting a risk assessment"
              className="w-full sm:w-[300px]"
            />
          </div>
          <img
            src={assets.work.vrAdvisorApp.regulatedOtpVerification}
            alt="Fund detail page showing unrated NFO state"
            className="w-full sm:w-[300px]"
          />
        </div>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Heading>Outcomes &amp; Product Impact</Heading>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            The redesign introduced a more consistent, scalable, and user-centric experience across
            the Value Research Advisor platform. By simplifying key journeys, improving information
            architecture, and designing around user states, the product established a stronger
            foundation for long-term growth.
          </p>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            As a cross-functional initiative involving design, product, engineering, and business
            teams, the following metrics reflect the overall performance of the product during the
            project&apos;s lifecycle and are shared to provide context rather than attribute the
            outcomes solely to design.
          </p>
        </div>
        <img
          src={assets.work.vrAdvisorApp.reviewScreen}
          alt="App store reviews and rating for Value Research Advisor"
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Heading>Reflection</Heading>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            While these outcomes cannot be directly attributed to UX design alone, they indicate
            that the product achieved strong adoption and sustained engagement through the
            combined efforts of design, product, engineering, and business teams.
          </p>
          <Heading>Learnings</Heading>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            This project reinforced that designing a financial product is not just about
            creating intuitive interfaces. It is about balancing user needs, business objectives,
            and regulatory constraints while building a product that can scale over time.
          </p>
          <ol className="flex flex-col gap-2">
            {learnings.map((learning, i) => (
              <li key={learning} className="text-[17px] font-semibold text-black sm:text-[18px]">
                {i + 1}. {learning}
              </li>
            ))}
          </ol>
        </div>
        <img
          src={assets.work.vrAdvisorApp.closingIllustration}
          alt="Illustration of a person stacking coins with a rupee symbol, with a dog watching"
          className="mx-auto w-full sm:w-[300px]"
        />
      </div>
    </article>
  );
}
