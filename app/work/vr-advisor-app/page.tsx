import type { Metadata } from "next";
import { ConnectProvider } from "@/components/ConnectState";
import { Navbar } from "@/components/layout/Navbar";
import { BottomBar } from "@/components/layout/BottomBar";
import { VrAdvisorHero } from "@/components/sections/work/VrAdvisorHero";
import { VrAdvisorCaseStudy } from "@/components/sections/work/VrAdvisorCaseStudy";
import { VrAdvisorUserNeeds } from "@/components/sections/work/VrAdvisorUserNeeds";
import { VrAdvisorProcess } from "@/components/sections/work/VrAdvisorProcess";

export const metadata: Metadata = {
  title: "Value Research Advisor App — Shubhankar Singh",
  description:
    "Designing an investment platform that adapts to every user state: how Value Research Advisor's mobile experience was rebuilt around a scalable, state-aware design system.",
};

export default function VrAdvisorAppCaseStudyPage() {
  return (
    <ConnectProvider>
      <Navbar />
      <main className="flex flex-col">
        <VrAdvisorHero />
        <VrAdvisorCaseStudy />
        <VrAdvisorUserNeeds />
        <VrAdvisorProcess />
      </main>
      <BottomBar />
    </ConnectProvider>
  );
}
