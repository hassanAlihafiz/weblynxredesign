import dynamic from "next/dynamic";
import { SiteLogo } from "@/components/brand";
import { ContentContainer } from "@/components/layout/ContentContainer";

const FooterNewsletter = dynamic(
  () => import("@/components/Footer/FooterNewsletter").then((m) => ({ default: m.FooterNewsletter })),
);
import { SITE, SOCIAL_LINKS } from "@/data/site";
import Link from "next/link";

const COPYRIGHT_YEAR = 2024;

const footerLinkClass =
  "text-[var(--text-muted)] transition-colors hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]";

const footerColumnHeadingClass = "text-meta mb-2.5 text-[var(--text-muted)]";

export function HomeFooter() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-6 shadow-[var(--shadow-inset-soft)] sm:py-7">
      <ContentContainer>
        <div className="mb-6 grid gap-x-10 gap-y-6 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="-mb-3 -mt-4 -ml-4 inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]">
              <SiteLogo />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">
              {SITE.tagline} {SITE.locations.studio}.
            </p>
          </div>

          <div>
            <div className={footerColumnHeadingClass}>Services</div>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/web-development" className={footerLinkClass}>
                  Web development
                </Link>
              </li>
              <li>
                <Link href="/app-development" className={footerLinkClass}>
                  App development
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing" className={footerLinkClass}>
                  Digital marketing
                </Link>
              </li>
              <li>
                <Link href="/artificial-intelligence" className={footerLinkClass}>
                  AI development
                </Link>
              </li>
              <li>
                <Link href="/design" className={footerLinkClass}>
                  Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className={footerColumnHeadingClass}>Company</div>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/" className={footerLinkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={footerLinkClass}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className={footerLinkClass}>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blogs" className={footerLinkClass}>
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
            <ul className="space-y-1.5 text-sm">
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

        <div className="border-t border-[var(--border-subtle)] pt-3">
          <div className="text-meta">
            © {COPYRIGHT_YEAR} {SITE.name}
          </div>
        </div>
      </ContentContainer>
    </footer>
  );
}
