import type { Metadata } from "next";
import { ConnectProvider } from "@/components/ConnectState";
import { Navbar } from "@/components/layout/Navbar";
import { BottomBar } from "@/components/layout/BottomBar";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { SkillsBento } from "@/components/sections/about/SkillsBento";
import { ProcessSteps } from "@/components/sections/about/ProcessSteps";
import { KeyPrinciples } from "@/components/sections/about/KeyPrinciples";
import { OutsideWork } from "@/components/sections/about/OutsideWork";
import { AboutConnect } from "@/components/sections/about/AboutConnect";

export const metadata: Metadata = {
  title: "About — Shubhankar Singh",
  description:
    "Senior UX/UI Designer leading a design team at Value Research — process, principles, and what's outside of work.",
};

export default function AboutPage() {
  return (
    <ConnectProvider>
      <Navbar />
      <main className="flex flex-col">
        <AboutHero />
        <SkillsBento />
        <ProcessSteps />
        <KeyPrinciples />
        <OutsideWork />
        <AboutConnect />
      </main>
      <BottomBar />
    </ConnectProvider>
  );
}
