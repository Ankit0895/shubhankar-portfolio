import type { Metadata } from "next";
import { ConnectProvider } from "@/components/ConnectState";
import { Navbar } from "@/components/layout/Navbar";
import { BottomBar } from "@/components/layout/BottomBar";
import { ZohoHero } from "@/components/sections/work/ZohoHero";
import { ZohoCaseStudy } from "@/components/sections/work/ZohoCaseStudy";
import { ZohoFinalSolution } from "@/components/sections/work/ZohoFinalSolution";
import { ZohoImpact } from "@/components/sections/work/ZohoImpact";

export const metadata: Metadata = {
  title: "Zoho Marketing Experience — Shubhankar Singh",
  description:
    "Designing a scalable marketing experience for Dynamic Mavens, a Zoho implementation partner — five pages, one reusable design system.",
};

export default function ZohoMarketingExperienceCaseStudyPage() {
  return (
    <ConnectProvider>
      <Navbar />
      <main className="flex flex-col">
        <ZohoHero />
        <ZohoCaseStudy />
        <ZohoFinalSolution />
        <ZohoImpact />
      </main>
      <BottomBar />
    </ConnectProvider>
  );
}
