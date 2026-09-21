import type { ReactNode } from "react";
import { assets } from "@/lib/assets";
import { GridOverlay } from "@/components/ui/GridOverlay";

const before = [
  "Generic agency website",
  "Product-first messaging",
  "Long paragraphs",
  "Single CTA",
  "Generic page layouts",
  "Hidden implementation process",
  "No product comparisons",
  "Difficult mobile experience",
  "Individual page designs",
];

const after = [
  "Conversion-focused marketing experience",
  "Problem-first storytelling",
  "Scannable content hierarchy",
  "Consultation + WhatsApp CTAs",
  "Dedicated pages for each service",
  "Clear visual methodology",
  "Comparison tables for informed decisions",
  "Mobile-first responsive design",
  "Reusable page system",
];

const businessMetrics = [
  "Increase consultation bookings",
  "Increase WhatsApp enquiries",
  "Improve organic search visibility",
  "Increase engagement on service pages",
  "Reduce bounce rate",
];

const userMetrics = [
  "Faster access to relevant services",
  "Better understanding of Zoho solutions",
  "Easier comparison between products",
  "Reduced friction during decision making",
];

const learnings = [
  {
    title: "1. Great content still needs great structure",
    body: "Rather than cutting valuable detail, the goal was to structure the client's existing content so users receive the right information exactly when they need it.",
  },
  {
    title: "2. Systems create more value than individual pages",
    body: "By identifying a shared structure across service pages, I built a reusable framework instead of five isolated screens, providing the client with a scalable foundation that improved consistency and reduced future design effort.",
  },
  {
    title: "3. UX is about supporting business decisions",
    body: "Business owners don't visit implementation websites to admire interfaces. They visit to answer important questions: Can this solve my problem? Can I trust this company? What's different about their approach? How do I get started? Every design decision, from information hierarchy to comparison tables and dual CTAs, was made to answer those questions as clearly as possible.",
  },
];

function Heading({ children }: { children: string }) {
  return (
    <h2 className="font-display text-[24px] font-semibold text-ink sm:text-[28px]">
      {children}
    </h2>
  );
}

function HalfCol({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col gap-4 text-left">{children}</div>
    </div>
  );
}

export function ZohoImpact() {
  return (
    <section className="group/grid relative flex flex-col gap-16 pb-16 sm:gap-20 sm:pb-20">
      <GridOverlay />
      <div className="w-full px-4">
        <HalfCol>
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
            <div className="flex flex-1 flex-col gap-3">
              <Heading>Before</Heading>
              <ul className="flex flex-col gap-2.5">
                {before.map((item) => (
                  <li key={item} className="text-[15px] leading-[1.5] text-slate sm:text-[16px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden w-px shrink-0 bg-line sm:block" aria-hidden />
            <div className="flex flex-1 flex-col gap-3">
              <Heading>After</Heading>
              <ul className="flex flex-col gap-2.5">
                {after.map((item) => (
                  <li key={item} className="text-[15px] leading-[1.5] text-slate sm:text-[16px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </HalfCol>
      </div>

      <div className="w-full px-4">
        <HalfCol>
          <Heading>Impact</Heading>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            At the time this case study was written, the redesigned website
            had been delivered to the client, and post-launch analytics were
            not yet available. Rather than estimating results, I defined
            clear success metrics that can be measured after launch.
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-medium text-ink">Business Metrics</p>
            <ul className="flex flex-col gap-1.5 pl-5">
              {businessMetrics.map((item) => (
                <li key={item} className="list-disc text-[15px] leading-[1.5] text-slate">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-medium text-ink">User Metrics</p>
            <ul className="flex flex-col gap-1.5 pl-5">
              {userMetrics.map((item) => (
                <li key={item} className="list-disc text-[15px] leading-[1.5] text-slate">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </HalfCol>
      </div>

      <div className="w-full px-4">
        <HalfCol>
          <Heading>What I Learned</Heading>
          <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
            Every project offers lessons beyond the final design. This one
            reinforced three important principles.
          </p>
          {learnings.map((item) => (
            <div key={item.title} className="flex flex-col gap-1.5">
              <p className="text-[16px] font-medium text-ink">{item.title}</p>
              <p className="text-[15px] leading-[1.6] text-slate">{item.body}</p>
            </div>
          ))}
        </HalfCol>
      </div>

      <div
        className="w-full bg-[#faf8f4] bg-cover bg-center py-20 sm:py-28"
        style={{ backgroundImage: `url(${assets.work.zohoMarketing.finalTakeawayBg})` }}
      >
        <div className="mx-auto flex w-full max-w-[730px] flex-col items-center gap-8 px-4 text-center">
          <h2
            className="bg-clip-text font-display text-[40px] font-semibold text-transparent sm:text-[56px]"
            style={{
              backgroundImage:
                "linear-gradient(170deg, #06b6d4 0%, #8b5cf6 50%, #f59e0b 100%)",
            }}
          >
            Final Takeaway
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-[16px] leading-[1.5] text-[#384149] sm:text-[18px]">
              This project was more than a website redesign. It was an
              opportunity to transform a collection of content-heavy pages
              into a scalable digital experience that supports both user
              needs and business goals.
            </p>
            <p className="text-[16px] leading-[1.5] text-[#384149] sm:text-[18px]">
              By combining information architecture, reusable design
              patterns, and conversion-focused UX, I created a flexible
              system that not only serves current services but can also
              support future growth with minimal design effort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
