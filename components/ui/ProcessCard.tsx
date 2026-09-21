import type { ProcessStep } from "@/lib/content";

export function ProcessCard({ step }: { step: ProcessStep }) {
  return (
    <div className="group relative w-full shrink-0 pt-10 sm:w-70">
      <p className="pointer-events-none absolute -top-4 right-2 z-0 select-none font-display text-[64px] leading-none text-slate/70 transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:text-black sm:text-[80px]">
        {step.number}
      </p>
      <div className="relative z-10 flex h-full flex-col gap-4 rounded-2xl border border-slate bg-paper p-6 transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:border-accent group-hover:bg-[#fff0e9] group-hover:shadow-[0px_36px_21px_0px_rgba(0,0,0,0.05),0px_16px_16px_0px_rgba(0,0,0,0.09),0px_4px_9px_0px_rgba(0,0,0,0.1)]">
        <span className="w-fit rounded-full bg-black px-3 py-1 text-[10px] font-normal uppercase text-paper transition-colors duration-300 group-hover:bg-accent">
          {step.tag}
        </span>
        <div className="flex min-h-[84px] flex-col gap-2.5">
          <p className="text-[12px] uppercase text-black transition-colors duration-300 group-hover:text-accent">{step.eyebrow}</p>
          <p className="text-[18px] leading-[1.3] text-black">{step.title}</p>
        </div>
        <div className="mt-auto flex flex-col gap-4 border-t border-black/[.27] pt-4 transition-colors duration-300 group-hover:border-accent/27">
          <p className="text-[13px] leading-[1.6] text-slate">{step.body}</p>
        </div>
      </div>
    </div>
  );
}
