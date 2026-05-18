import { SiteLogo } from "@/components/brand";
import { FooterNewsletter } from "@/components/Footer/FooterNewsletter";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SITE, SOCIAL_LINKS } from "@/data/site";
import { IconSparkles } from "@tabler/icons-react";
import Link from "next/link";

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
    <footer className="relative w-full overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <div className="mb-14 grid gap-x-12 gap-y-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="-mb-5 -mt-6 -ml-4 inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]">
              <SiteLogo />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">
              {SITE.tagline} {SITE.locations.studio}.
            </p>
          </div>

          <div>
            <div className={footerColumnHeadingClass}>Services</div>
            <ul className="space-y-2 text-base">
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
                <Link href="/services/ai-development" className={footerLinkClass}>
                  AI development
                </Link>
              </li>
              <li>
                <Link href="/services/design" className={footerLinkClass}>
                  Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className={footerColumnHeadingClass}>Company</div>
            <ul className="space-y-2 text-base">
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
            <ul className="space-y-2 text-base">
              {SOCIAL_LINKS.map(({ label, href, hoverClass }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`${footerLinkClass} ${hoverClass ?? ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 md:col-start-2">
            <FooterNewsletter />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-4">
          <div className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-dim)]">
            © {year} {SITE.name} · {SITE.locations.footer}
          </div>
          <div className="inline-flex items-center gap-1 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-dim)]">
            Made with intent
            <IconSparkles className="size-3 shrink-0" stroke={1.5} aria-hidden />
          </div>
        </div>
      </ContentContainer>
    </footer>
  );
}
