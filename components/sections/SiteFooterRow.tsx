export function SiteFooterRow() {
  return (
    <div className="flex w-full flex-col items-center gap-6 border-t border-cream pt-6 sm:flex-row sm:justify-between">
      <p className="order-2 text-[14px] text-ink sm:order-1">Design by Shubhankar singh</p>
      <p className="order-1 flex items-center gap-2 text-[14px] text-accent sm:order-2">
        <span className="size-2 rounded-sm bg-accent" aria-hidden />
        Open to opportunities
      </p>
    </div>
  );
}
