import { ConnectProvider } from "@/components/ConnectState";
import { Navbar } from "@/components/layout/Navbar";
import { BottomBar } from "@/components/layout/BottomBar";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Work } from "@/components/sections/Work";
import { WhatIf } from "@/components/sections/WhatIf";
import { MicroLab } from "@/components/sections/MicroLab";
import { BlogCta } from "@/components/sections/BlogCta";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <ConnectProvider>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Intro />
        <Work />
        <WhatIf />
        <MicroLab />
        <BlogCta />
        <Contact />
      </main>
      <BottomBar />
    </ConnectProvider>
  );
}
