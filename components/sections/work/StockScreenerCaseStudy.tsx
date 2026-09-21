import type { ReactNode } from "react";
import { assets } from "@/lib/assets";
import { GridOverlay } from "@/components/ui/GridOverlay";

const problemPoints = [
  {
    lead: "Everything at equal weight",
    rest: "13 columns by default, 8 of them historical price extremes styled like the price itself. Nothing was prioritized.",
  },
  {
    lead: "Reading meant scrubbing",
    rest: "the table ran off-screen; reading one stock meant scrolling left–right and losing your row.",
  },
  {
    lead: "Mobile scroll trap",
    rest: "13 columns through 390px; scroll to a metric and the company name slid away.",
  },
  {
    lead: "Numbers without meaning",
    rest: "52-week low and high sat in separate columns, with nothing showing where today's price fell between them.",
  },
  {
    lead: "Fixed density",
    rest: "momentum trader and value investor saw the identical wall; neither could shape it to their question.",
  },
  {
    lead: "Invisible filters & edges",
    rest: '"3 filters applied," but not which three. No screen-reader header semantics, no empty or paywall states.',
  },
];

const decisions = [
  {
    number: "1",
    title: "Keep the stock in front of you → removes memory load.",
    body: "The old table scrolled sideways and you'd lose which company's number you were reading, so you had to hold the row in your head while scrolling - worst on mobile. I froze the identity (name, sector, rating) and let only the metrics scroll; on mobile that's a fixed-left, scroll-right split. The interface keeps the context so working memory doesn't have to.",
  },
  {
    number: "2",
    title: "Let people shape the table → removes visual search load.",
    body: "Everyone saw the same ~13 columns at equal weight, so every glance meant scanning past columns you didn't care about to find the two you did. A searchable column picker (grouped by returns, valuation, rating), a density toggle, and saved screens as one-tap pills let each user strip the table down to their question. Less on screen, less to filter out, faster to the signal.",
  },
  {
    number: "3",
    title: "Make the hidden things visible → removes recall and interpretation load.",
    body: 'Filters were a silent "3 applied" (you had to remember what was constraining the list), raw metrics assumed you knew what they meant, and the empty and paywall states didn\'t exist. Now the filter builder shows exactly what\'s applied with a live count of stocks remaining, tooltips explain each metric in place, and the range visual shows where a price sits in its band, so the answer is on screen instead of reconstructed in your head.',
  },
];

function Heading({ children }: { children: string }) {
  return (
    <h2 className="font-display text-[24px] font-bold text-black sm:text-[28px]">{children}</h2>
  );
}

function HalfCol({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col gap-4 text-left">{children}</div>
    </div>
  );
}

export function StockScreenerCaseStudy() {
  return (
    <article className="group/grid relative flex flex-col gap-16 px-4 py-16 sm:gap-20 sm:py-20">
      <GridOverlay />
      <HalfCol>
        <Heading>Overview</Heading>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
          Value Research is one of India&apos;s most trusted mutual-fund and stock research
          platforms. Its stock screener is where an investor turns a universe of 150–200+
          securities into a shortlist worth researching. I led its redesign across web and mobile.
        </p>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
          The old screener worked. It just optimized for the wrong thing - showing every data
          point rather than helping someone decide. This is how I reframed it, and what changed.
        </p>
      </HalfCol>

      <HalfCol>
        <Heading>The Problem</Heading>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
          A screener exists to narrow. The old one did the opposite - it showed everything, at
          equal weight, and left the narrowing to the user.
        </p>
        <div className="flex flex-col gap-4">
          {problemPoints.map((point) => (
            <p key={point.lead} className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
              <span className="font-semibold text-black">{point.lead}</span> – {point.rest}
            </p>
          ))}
        </div>
        <p className="border-l-2 border-accent py-1 pl-5 text-[15px] leading-[1.6] text-slate sm:text-[17px]">
          The old screener wasn&apos;t badly built. It was optimized for the wrong verb -{" "}
          <span className="font-semibold text-black">&quot;show me all the data&quot;</span> when
          the user was asking{" "}
          <span className="font-semibold text-black">
            &quot;help me decide what to look at.&quot;
          </span>
        </p>
      </HalfCol>

      <img
        src={assets.work.stockScreener.oldDesign}
        alt="Old stock screener design: dense, unprioritized columns"
        className="w-full"
      />

      <HalfCol>
        <p className="text-[17px] leading-[1.6] font-medium text-black sm:text-[20px]">
          &ldquo;The old screener made the user do the tool&apos;s job — holding context in their
          head, doing mental math, remembering what they&apos;d filtered. The redesign hung on one
          rule: design for the decision, not the database. Every move removes a different kind of
          mental effort.&rdquo;
        </p>
      </HalfCol>

      <img
        src={assets.work.stockScreener.newDesign}
        alt="New stock screener design: prioritized, scannable columns"
        className="w-full"
      />

      <HalfCol>
        <p className="text-[17px] font-bold text-black sm:text-[19px]">
          {decisions[0].number}. {decisions[0].title}
        </p>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">{decisions[0].body}</p>
      </HalfCol>

      <HalfCol>
        <p className="text-[17px] font-bold text-black sm:text-[19px]">
          {decisions[1].number}. {decisions[1].title}
        </p>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">{decisions[1].body}</p>
      </HalfCol>

      <img
        src={assets.work.stockScreener.mobilePhones}
        alt="Mobile stock screener: fixed-left columns, saved screens, and column picker"
        className="w-full"
      />

      <HalfCol>
        <p className="text-[17px] font-bold text-black sm:text-[19px]">
          {decisions[2].number}. {decisions[2].title}
        </p>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">{decisions[2].body}</p>
      </HalfCol>

      <img
        src={assets.work.stockScreener.columnsPanel}
        alt="Filter builder showing applied filters and the add-columns panel"
        className="w-full"
      />

      <HalfCol>
        <Heading>Conclusion</Heading>
        <p className="text-[15px] leading-[1.6] font-medium text-black sm:text-[17px]">
          The hard part wasn&apos;t visual - the old screener already looked like a Value Research
          product. It was resisting the instinct that a research tool proves its worth by showing
          more. Showing everything isn&apos;t power; it just hands the work of prioritizing back
          to the person who came to the tool to prioritize.
        </p>
        <p className="text-[15px] leading-[1.6] text-slate sm:text-[17px]">
          So the redesign is subtractive where it counts and additive where it helps. None of the
          moves are flashy. Together they change what the screener is for - from a place that
          displays data to one that helps you decide.
        </p>
      </HalfCol>

      <img
        src={assets.work.stockScreener.illustrations}
        alt="Illustrations used across the redesigned stock screener"
        className="w-full"
      />

      <img
        src={assets.work.stockScreener.components}
        alt="UI components used across the redesigned stock screener"
        className="w-full"
      />
    </article>
  );
}
