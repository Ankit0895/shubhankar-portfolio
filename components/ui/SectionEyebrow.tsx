export function SectionEyebrow({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-accent/12 px-2.5 py-3">
      <span className="size-2 rounded-full bg-accent" aria-hidden />
      <span className="font-display text-[14px] font-semibold uppercase text-black">
        {children}
      </span>
    </div>
  );
}
