"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "tokens", label: "Tokens" },
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "iconography", label: "Iconography" },
  { id: "voice", label: "Voice" },
  { id: "illustrations", label: "Illustrations" },
  { id: "spacing-grid", label: "Spacing & Grid" },
  { id: "data-visualization", label: "Data visualization" },
  { id: "components", label: "Components" },
  { id: "in-production", label: "In Production" },
  { id: "conclusion", label: "Conclusion" },
] as const;

export function LedgerSideNav() {
  const [activeId, setActiveId] = useState<string>(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    setActiveId(id);
  }

  return (
    <nav
      aria-label="Ledger case study sections"
      className="top-24 m-4 hidden flex-col gap-4 rounded-3xl border border-line bg-mist p-8 lg:sticky lg:flex"
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={(e) => handleClick(e, section.id)}
          className={
            section.id === activeId
              ? "font-display text-[20px] font-bold text-black"
              : "font-display text-[20px] font-normal text-slate transition-colors hover:text-black"
          }
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
