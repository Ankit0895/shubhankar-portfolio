import type { ReactNode } from "react";
import { assets } from "@/lib/assets";

function Heading({ children }: { children: string }) {
  return (
    <h2 className="font-display text-[24px] font-bold text-black sm:text-[28px]">{children}</h2>
  );
}

function NeedHeading({ number, title }: { number: number; title: string }) {
  return (
    <p className="text-[17px] font-bold text-black sm:text-[19px]">
      {number}. {title}
    </p>
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
  return <img src={src} alt={alt} className="w-full sm:w-[300px]" />;
}

export function VrAdvisorUserNeeds() {
  return (
    <article className="flex flex-col gap-16 bg-mist px-4 py-16 sm:gap-20 sm:py-20">
      <HalfCol>
        <Heading>What Users Need</Heading>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
          Although each user interacts with the platform differently, their expectations revolve
          around the same fundamental needs.
        </p>
      </HalfCol>

      <div className="flex w-full flex-col gap-8">
        <HalfCol>
          <NeedHeading number={1} title="Discover Relevant Investment Opportunities" />
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            Users want to quickly find mutual funds, stocks, or investment products that align
            with their financial goals without navigating through unnecessary complexity.
          </p>
        </HalfCol>
        <PhoneRow>
          <Phone src={assets.work.vrAdvisorApp.discoverPhone1} alt="Home screen: rich future starts here goal cards" />
          <Phone src={assets.work.vrAdvisorApp.discoverPhone2} alt="Latest recommendations and big moves feed" />
          <Phone src={assets.work.vrAdvisorApp.discoverPhone3} alt="Analyst's Choice recommended funds screen" />
          <Phone src={assets.work.vrAdvisorApp.discoverPhone4} alt="Portfolio planner investment suggestions" />
        </PhoneRow>
      </div>

      <div className="flex w-full flex-col gap-8">
        <HalfCol>
          <NeedHeading number={2} title="Make Confident Decisions" />
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            Investment decisions involve risk. Users need reliable research, transparent
            information, historical performance, and expert guidance before committing their
            money.
          </p>
        </HalfCol>
        <img
          src={assets.work.vrAdvisorApp.confidentDecisionsDashboard}
          alt="Portfolio dashboard with you-vs-market performance"
          className="w-full"
        />
        <PhoneRow>
          <Phone src={assets.work.vrAdvisorApp.confidentDecisionsFundDetail} alt="Fund detail: returns comparison chart" />
          <Phone src={assets.work.vrAdvisorApp.confidentDecisionsRiskGauge} alt="Fund risk gauge and who-should-invest guidance" />
          <Phone src={assets.work.vrAdvisorApp.confidentDecisionsWhereInvests} alt="Fund holdings by market cap breakdown" />
        </PhoneRow>
      </div>

      <div className="flex w-full flex-col gap-8">
        <HalfCol>
          <NeedHeading number={3} title="Complete Transactions with Trust" />
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            Investment decisions involve risk. Users need reliable research, transparent
            information, historical performance, and expert guidance before committing their
            money.
          </p>
        </HalfCol>
        <PhoneRow>
          <Phone src={assets.work.vrAdvisorApp.transactionPhone1} alt="SIP amount entry screen" />
          <Phone src={assets.work.vrAdvisorApp.transactionPhone2} alt="Bank account and payment method selection" />
          <Phone src={assets.work.vrAdvisorApp.transactionPhone3} alt="OTP authorization screen" />
          <Phone src={assets.work.vrAdvisorApp.transactionPhone4} alt="UPI payment request waiting screen" />
          <Phone src={assets.work.vrAdvisorApp.transactionPhone5} alt="SIP registered confirmation screen" />
        </PhoneRow>
      </div>

      <div className="flex w-full flex-col gap-8">
        <HalfCol>
          <NeedHeading number={4} title="Stay Informed About Their Investments" />
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            Users want immediate visibility into their portfolio performance, active SIPs,
            returns, and important updates without searching across multiple sections.
          </p>
        </HalfCol>
        <PhoneRow>
          <Phone src={assets.work.vrAdvisorApp.informedPhone1} alt="Portfolio analysis: funds that need attention" />
          <Phone src={assets.work.vrAdvisorApp.informedPhone2} alt="Overall portfolio performance and risk profile" />
          <Phone src={assets.work.vrAdvisorApp.informedPhone3} alt="Portfolio analysis summary with retirement projection" />
        </PhoneRow>
      </div>

      <div className="flex w-full flex-col gap-8">
        <HalfCol>
          <NeedHeading number={5} title="Manage Their Account Effortlessly" />
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            Tasks such as updating bank accounts, managing mandates, changing subscriptions, or
            editing personal information should be simple, predictable, and secure.
          </p>
        </HalfCol>
        <PhoneRow>
          <Phone src={assets.work.vrAdvisorApp.accountPhone1} alt="Investor account details screen" />
          <Phone src={assets.work.vrAdvisorApp.accountPhone2} alt="Autopay mandates management screen" />
          <Phone src={assets.work.vrAdvisorApp.accountPhone3} alt="Transaction history screen" />
          <Phone src={assets.work.vrAdvisorApp.accountPhone4} alt="Fund details with pending autopay mandate" />
        </PhoneRow>
      </div>
    </article>
  );
}
