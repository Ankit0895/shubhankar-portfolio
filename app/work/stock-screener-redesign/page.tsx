import type { Metadata } from "next";
import { ConnectProvider } from "@/components/ConnectState";
import { Navbar } from "@/components/layout/Navbar";
import { BottomBar } from "@/components/layout/BottomBar";
import { StockScreenerHero } from "@/components/sections/work/StockScreenerHero";
import { StockScreenerCaseStudy } from "@/components/sections/work/StockScreenerCaseStudy";

export const metadata: Metadata = {
  title: "Value Research Stock Screener — Shubhankar Singh",
  description:
    "Redesigning the Value Research stock screener: designing for the decision, not the database.",
};

export default function StockScreenerCaseStudyPage() {
  return (
    <ConnectProvider>
      <Navbar />
      <main className="flex flex-col">
        <StockScreenerHero />
        <StockScreenerCaseStudy />
      </main>
      <BottomBar />
    </ConnectProvider>
  );
}
