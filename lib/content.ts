import type { assets } from "@/lib/assets";

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
  { label: "Insights", href: "/#insights" },
] as const;

export const brandLogos = [
  { name: "Value Research", key: "value-research" },
  { name: "Relaxo", key: "relaxo" },
  { name: "Amazon", key: "amazon" },
  { name: "Bajaj Auto", key: "bajaj-auto" },
] as const;

export const bioHighlights = [
  { word: "money", icon: "money" },
  { word: "confidence", icon: "confidence" },
  { word: "trust", icon: "trust" },
] as const;

export type Project = {
  id: string;
  eyebrow: string;
  title: string;
  accent: "coral" | "dark" | "grass" | "cream";
  size: "full" | "half";
  cover: keyof typeof assets.workCovers;
  caseStudyHref?: string;
};

export const projects: Project[] = [
  {
    id: "vr-advisor-app",
    eyebrow: "CASE STUDY 01",
    title: "Value Research - Advisor App",
    accent: "coral",
    size: "full",
    cover: "vrAdvisorApp",
    caseStudyHref: "/work/vr-advisor-app",
  },
  {
    id: "ledger-design-system",
    eyebrow: "CASE STUDY 02",
    title: "Ledger - Advisor Design System",
    accent: "dark",
    size: "full",
    cover: "ledgerDesignSystem",
    caseStudyHref: "/work/ledger-design-system",
  },
  {
    id: "stock-screener-redesign",
    eyebrow: "CASE STUDY 03",
    title: "Redesigning the Value Research stock screener.",
    accent: "grass",
    size: "half",
    cover: "stockScreener",
    caseStudyHref: "/work/stock-screener-redesign",
  },
  {
    id: "zoho-marketing-experience",
    eyebrow: "CASE STUDY 04",
    title: "Designing a Scalable Marketing Experience for a Zoho Implementation Partner",
    accent: "cream",
    size: "half",
    cover: "zohoMarketing",
    caseStudyHref: "/work/zoho-marketing-experience",
  },
];

export type WhatIfStatus = "live" | "soon";

export const whatIfStories: { id: string; label: string; title: string; status: WhatIfStatus }[] = [
  { id: "story-1", label: "STORY 1", title: "What if WhatsApp had message scheduling feature.", status: "live" },
  { id: "story-2", label: "STORY 2", title: "What if google Map had group ride feature?", status: "live" },
  { id: "story-3", label: "STORY 3", title: "What if Uber let friends split rides before booking?", status: "soon" },
  {
    id: "story-4",
    label: "STORY 4",
    title: "What if UPI apps helped you understand your spending instead of just moving money?",
    status: "soon",
  },
  { id: "story-5", label: "STORY 5", title: "What if Blinkit knew what I'd need tomorrow?", status: "soon" },
  { id: "story-6", label: "STORY 6", title: "What if IRCTC actually felt premium?", status: "soon" },
];

export const microLabItems = Array.from({ length: 6 }, (_, i) => ({ id: `micro-lab-${i + 1}` }));

export const aboutBioPills = ["5+ years", "Bachelor's of Design (B.Des)"] as const;

export type ProcessStep = {
  id: string;
  number: string;
  tag: string;
  eyebrow: string;
  title: string;
  body: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    number: "01",
    tag: "Discovery",
    eyebrow: "Frame It First",
    title: "Define the problem before designing the solution",
    body: "I resist jumping into Figma. Every project starts with a brief, a constraint map, and a clear hypothesis. Ambiguity is a design problem too.",
  },
  {
    id: "process",
    number: "02",
    tag: "Process",
    eyebrow: "Low-Fi, High Signal",
    title: "Rough sketches over polished mockups — until they're not",
    body: "Wireframes aren't a deliverable. They're a thinking tool. I use them to stress-test structure before investing in visual execution.",
  },
  {
    id: "craft",
    number: "03",
    tag: "Craft",
    eyebrow: "Built for Both",
    title: "Designed for humans. Handoff-ready for developers",
    body: "Clean components, named layers, precise tokens. I close the gap between design intent and shipped product — specs that devs actually use.",
  },
  {
    id: "mindset",
    number: "04",
    tag: "Mindset",
    eyebrow: "Ship. Learn. Repeat",
    title: "Every release is a research opportunity",
    body: "Done beats perfect. I build feedback loops into the process — analytics, heuristics, user signals — and iterate with intent, not instinct.",
  },
];

export type Principle = {
  id: string;
  card: keyof typeof assets.about.principleCards;
  title: string;
  body: string;
  rotate: number;
};

export const principles: Principle[] = [
  {
    id: "person-not-persona",
    card: "designForPerson",
    title: "Design for the person, not the persona.",
    body: "Personas are a planning tool; they're not who uses the product. I stay close to real session recordings, support tickets, and the specific moments where users hesitate or give up. The goal is to design for the decision someone is actually making at 11pm on their phone — not for a demographic on a slide.",
    rotate: -6,
  },
  {
    id: "build-for-change",
    card: "buildForChange",
    title: "Build for change, not for launch day.",
    body: "Products don't ship; they evolve. I design components, flows, and systems that assume next quarter's feature already exists — modular, tokenized, and documented well enough that the next designer (or the next version of me) doesn't have to reverse-engineer my thinking. Flexibility isn't a nice-to-have; it's the difference between a design system and a graveyard of one-off screens.",
    rotate: 4,
  },
  {
    id: "ship-it-right",
    card: "shipItRight",
    title: "Ship it right, or don't ship it.",
    body: "Polish is a load-bearing part of trust, especially in fintech. Misaligned spacing, a laggy micro-interaction, an error state that nobody wrote copy for — these aren't cosmetic. They're the cues that tell a user whether the people behind the product are paying attention to their money. I'd rather cut scope than cut craft.",
    rotate: -3,
  },
  {
    id: "bridging",
    card: "bridging",
    title: "Bridging design and business",
    body: "Design serves the business, or it's decoration. I've stopped separating \"user needs\" from \"business goals\" — in a healthy product, they're the same conversation. Every flow I ship, I can tell you what metric it moves and why. Not because design should be subordinate to growth, but because the fastest way to lose a seat at the table is to talk about craft while the business talks about retention.",
    rotate: 6,
  },
];

export type OutsidePhoto = {
  id: string;
  photo: keyof typeof assets.about.outsideWork;
  rotate: string;
  note?: string;
};

export const outsidePhotos: OutsidePhoto[] = [
  { id: "photo-1", photo: "photo1", rotate: "-rotate-6" },
  { id: "photo-2", photo: "photo2", rotate: "rotate-3" },
  { id: "photo-3", photo: "photo3", rotate: "-rotate-2" },
  { id: "photo-4", photo: "photo4", rotate: "rotate-6", note: "Highest in the world" },
  { id: "photo-5", photo: "photo5", rotate: "-rotate-4" },
  { id: "photo-6", photo: "photo6", rotate: "rotate-2", note: "leo ❤" },
  { id: "photo-7", photo: "photo7", rotate: "-rotate-5" },
  { id: "photo-8", photo: "photo8", rotate: "rotate-4" },
  { id: "photo-9", photo: "photo9", rotate: "-rotate-3" },
  { id: "photo-10", photo: "photo10", rotate: "rotate-5", note: "not mars" },
];
