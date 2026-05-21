import Link from "next/link";
import { SiteLogo } from "@/components/brand";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { NAV_ITEMS } from "@/data/site";

/** Lightweight server header shown while the interactive navbar chunk loads (home LCP path). */
export function HomeHeaderShell() {
  return (
    <header className="relative sticky top-0 z-30 w-full bg-[var(--color-header-bg)] shadow-[var(--shadow-header)] backdrop-blur-md backdrop-saturate-150">
      <ContentContainer>
        <div className="grid min-h-0 w-full grid-cols-[2.25rem_1fr_2.25rem] items-center gap-0.5 py-1 sm:grid-cols-[2.5rem_1fr_2.5rem] md:hidden">
          <div className="size-9 shrink-0" aria-hidden />
          <div className="flex min-w-0 justify-center">
            <Link href="/" className="flex max-w-full items-center text-[var(--color-text-primary)]">
              <SiteLogo align="center" priority />
            </Link>
          </div>
          <div className="size-9 shrink-0" aria-hidden />
        </div>

        <div className="hidden min-h-0 w-full grid-cols-[1fr_auto_1fr] items-center gap-2 py-1.5 md:grid lg:gap-4 lg:py-2">
          <div className="flex min-w-0 items-center justify-self-start">
            <Link href="/" className="flex max-w-full items-center text-[var(--color-text-primary)]">
              <SiteLogo priority />
            </Link>
          </div>
          <nav
            className="flex min-w-0 shrink-0 items-center justify-center gap-2 text-base leading-snug text-[var(--color-text-secondary)] md:gap-4 md:text-lg"
            aria-label="Primary"
          >
            {NAV_ITEMS.map(({ label, href }) => (
              <Link key={label} href={href} className="block px-3 py-1.5">
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center justify-self-end">
            <a
              href="https://calendly.com/weblynxagency/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary min-h-11 px-5 py-2.5 text-sm"
            >
              Book a call
            </a>
          </div>
        </div>
      </ContentContainer>
    </header>
  );
}
