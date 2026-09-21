import Link from "next/link";
import { assets } from "@/lib/assets";
import { navLinks } from "@/lib/content";
import { Pill } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6">
      <nav className="navbar-shell group/nav mx-auto flex max-w-[1200px] items-center justify-between gap-4 rounded-full px-4 py-3 shadow-[0px_112px_31px_0px_rgba(254,212,195,0),0px_71px_29px_0px_rgba(254,212,195,0.01),0px_40px_24px_0px_rgba(254,212,195,0.05),0px_18px_18px_0px_rgba(254,212,195,0.09),0px_4px_10px_0px_rgba(254,212,195,0.1)] backdrop-blur transition-shadow duration-300">
        <Link href="/" className="flex shrink-0 items-center gap-[2px]" aria-label="Home">
          <img
            src={assets.logo.cube1}
            alt=""
            className="relative z-1 -rotate-90 h-9 w-9 transition-transform duration-500 ease-out group-hover/nav:rotate-0"
          />
          <img
            src={assets.logo.cube2}
            alt=""
            className="-ml-3 h-9 w-9 -rotate-90 transition-transform duration-500 ease-out group-hover/nav:rotate-0"
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group/link relative inline-block font-display font-light text-[18px] text-ink transition-colors duration-300 ease-out hover:text-accent"
              >
                {link.label}
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-1 h-px origin-center scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover/link:scale-x-100"
                />
              </Link>
            </li>
          ))}
        </ul>

        <Pill
          href="#"
          size="sm"
          className="!px-5 !py-3"
          icon={<img src={assets.icons.arrowNarrowRight} alt="" className="size-4" />}
        >
          Linkedin
        </Pill>
      </nav>
    </header>
  );
}
