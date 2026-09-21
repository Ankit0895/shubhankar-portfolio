import type { ReactNode } from "react";

export function ResumeButton({
  href,
  icon,
  children,
}: {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="group resume-cta inline-flex items-center justify-center gap-3 rounded-[30px] border border-ink bg-ink px-8 py-4 text-[15px] font-normal whitespace-nowrap text-paper tracking-[0.5px] transition-[border-radius] duration-300 ease-out hover:rounded-none relative"
    >
      {icon}
      <span className="relative inline-block overflow-hidden">
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-x-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full"
        >
          {children}
        </span>
      </span>
      <span className="resume-cta-right-1" aria-hidden />
      <span className="resume-cta-left-1" aria-hidden />
      <span className="resume-cta-right-2" aria-hidden />
      <span className="resume-cta-left-2" aria-hidden />
    </a>
  );
}
