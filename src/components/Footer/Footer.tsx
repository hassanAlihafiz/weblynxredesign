import { SiteLogo } from "@/components/brand";
import Link from "next/link";
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";

function getCopyrightYear(): number {
  return new Date().getFullYear();
}

const footerLinkClass =
  "text-[var(--text-muted)] transition-colors hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]";

const footerColumnHeadingClass =
  "mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]";

export function HomeFooter() {
  const year = getCopyrightYear();

  return (
    <footer className="relative overflow-hidden bg-[var(--bg-elev)] px-6 pb-8 pt-16 sm:px-8 lg:px-10">

      <div className="mb-14 grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="mb-4 inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]">
            <SiteLogo />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">
            A digital studio building the web for ambitious founders. Houston, Texas.
          </p>
        </div>

        <div>
          <div className={footerColumnHeadingClass}>Services</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services/web-development" className={footerLinkClass}>
                Web development
              </Link>
            </li>
            <li>
              <Link href="/services/app-development" className={footerLinkClass}>
                App development
              </Link>
            </li>
            <li>
              <Link href="/services/digital-marketing" className={footerLinkClass}>
                Digital marketing
              </Link>
            </li>
            <li>
              <Link href="/services" className={footerLinkClass}>
                Design
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className={footerColumnHeadingClass}>Company</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className={footerLinkClass}>
                About
              </Link>
            </li>
            <li>
              <Link href="/work" className={footerLinkClass}>
                Work
              </Link>
            </li>
            <li>
              <Link href="/blog" className={footerLinkClass}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className={footerLinkClass}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className={footerColumnHeadingClass}>Connect</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.linkedin.com/company/weblynxus/"
                className="text-[var(--color-text-primary)] text-lg flex items-center gap-2 transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin className="size-4 shrink-0" stroke={1.5} aria-hidden />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/weblynx.us/"
                className="text-[var(--color-text-primary)] text-lg flex items-center gap-2 transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandInstagram className="size-4 shrink-0" stroke={1.5} aria-hidden />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/weblynxus"
                className="text-[var(--color-text-primary)] text-lg flex items-center gap-2 transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandX className="size-4 shrink-0" stroke={1.5} aria-hidden />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-6">
        <div className="font-mono text-xs text-[var(--text-dim)]">
          © {year} WebLynx · Karachi, PK · GMT+5
        </div>
        <div className="font-mono text-xs text-[var(--text-dim)]">Made with intent ✦</div>
      </div>
    </footer>
  );
}
