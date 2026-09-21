import type { Metadata } from "next";
import { ConnectProvider } from "@/components/ConnectState";
import { Navbar } from "@/components/layout/Navbar";
import { BottomBar } from "@/components/layout/BottomBar";
import { LedgerHero } from "@/components/sections/work/LedgerHero";
import { LedgerFoundations } from "@/components/sections/work/LedgerFoundations";
import { LedgerComponents } from "@/components/sections/work/LedgerComponents";
import { LedgerSideNav } from "@/components/sections/work/LedgerSideNav";

export const metadata: Metadata = {
  title: "Ledger — Advisor Design System — Shubhankar Singh",
  description:
    "Ledger: the first centralized design system for Value Research's advisory products — foundations, voice, and a component library, built to make a four-person team produce like one mind.",
};

export default function LedgerDesignSystemCaseStudyPage() {
  return (
    <ConnectProvider>
      <Navbar />
      <div className="lg:grid lg:grid-cols-12">
        <div className="lg:col-span-2">
          <LedgerSideNav />
        </div>
        <main className="flex flex-col lg:col-span-10">
          <LedgerHero />
          <LedgerFoundations />
          <LedgerComponents />
        </main>
      </div>
      <BottomBar />
    </ConnectProvider>
  );
}
