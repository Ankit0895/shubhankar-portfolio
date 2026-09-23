import type { Metadata } from "next";
import { ConnectProvider } from "@/components/ConnectState";
import { Navbar } from "@/components/layout/Navbar";
import { BottomBar } from "@/components/layout/BottomBar";
import { MicroLabAll } from "@/components/sections/MicroLabAll";

export const metadata: Metadata = {
  title: "Micro Lab — Shubhankar Singh",
  description: "A collection of small interaction experiments and prototypes.",
};

export default function MicroLabPage() {
  return (
    <ConnectProvider>
      <Navbar />
      <main className="flex flex-col">
        <MicroLabAll />
      </main>
      <BottomBar />
    </ConnectProvider>
  );
}
