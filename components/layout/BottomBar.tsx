"use client";

import { assets } from "@/lib/assets";
import { useConnectState } from "@/components/ConnectState";

export function BottomBar() {
  const { active } = useConnectState();

  return (
    <footer
      className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-300 ${
        active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="flex w-full items-center justify-center gap-6 rounded-t-[40px] border-t border-black bg-paper px-6 py-5 shadow-[0_-18px_40px_-20px_rgba(253,96,26,0.25)] sm:justify-between sm:gap-10 sm:px-14">
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="tel:+919650222463" className="flex items-center gap-4">
            <img src={assets.icons.phoneBadge} alt="" className="size-10 shrink-0" />
            <span className="hidden font-display text-[18px] font-semibold tracking-[0.5px] text-black sm:inline">
              +91 9650222463
            </span>
          </a>

          <span className="hidden h-8 w-px bg-black/20 sm:inline-block" aria-hidden />

          <a href="#" className="flex items-center gap-4">
            <img src={assets.icons.downloadBadge} alt="" className="size-10 shrink-0" />
            <span className="hidden font-display text-[18px] font-semibold tracking-[0.5px] text-black sm:inline">
              Download My Resume
            </span>
          </a>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#" aria-label="LinkedIn">
            <img src={assets.icons.linkedinBadge} alt="" className="size-10" />
          </a>
          <a href="mailto:shubhankardesignux@gmail.com" aria-label="Email">
            <img src={assets.icons.gmailBadge} alt="" className="size-10" />
          </a>
          <a
            href="#"
            aria-label="Medium"
            className="flex size-10 items-center justify-center rounded-full bg-ink"
          >
            <img src={assets.icons.medium} alt="" className="size-5 invert" />
          </a>
        </div>
      </div>
    </footer>
  );
}
