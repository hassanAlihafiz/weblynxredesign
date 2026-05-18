import { SiteLogo } from "@/components/brand";
import { ContentContainer } from "@/components/layout/ContentContainer";
import {
  IconAward,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconSparkles,
  IconStar,
} from "@tabler/icons-react";
import Link from "next/link";
import type { ComponentType } from "react";

function getCopyrightYear(): number {
  return new Date().getFullYear();
}

const footerLinkClass =
  "text-[var(--text-muted)] transition-colors hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]";

const footerColumnHeadingClass =
  "mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]";

const socialLinkClass =
  "flex items-center gap-2.5 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]";

type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  hoverClass?: string;
};

const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/weblynxus/",
    icon: IconBrandLinkedin,
    hoverClass: "hover:text-[#0A66C2]",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61582381187561",
    icon: IconBrandFacebook,
    hoverClass: "hover:text-[#1877F2]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/weblynx.us/",
    icon: IconBrandInstagram,
    hoverClass: "hover:text-[#E4405F]",
  },
  {
    label: "Trustpilot",
    href: "https://www.trustpilot.com/review/weblynx.us",
    icon: IconStar,
    hoverClass: "hover:text-[#00B67A]",
  },
  {
    label: "Clutch",
    href: "https://clutch.co/profile/weblynx",
    icon: IconAward,
    hoverClass: "hover:text-[#FF3D2E]",
  },
];

export function HomeFooter() {
  const year = getCopyrightYear();

  return (
    <footer className="relative w-full overflow-hidden bg-[var(--bg-elev)] pb-8 pt-16">
      <ContentContainer>
        <div className="mb-14 grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="-mb-5 -mt-6 -ml-4 inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]">
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
            <ul className="space-y-2">
              {socialLinks.map(({ label, href, icon: Icon, hoverClass }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`${socialLinkClass} ${hoverClass ?? ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="size-4 shrink-0" aria-hidden />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-6">
          <div className="font-mono text-xs text-[var(--text-dim)]">
            © {year} WebLynx · Karachi, PK · GMT+5
          </div>
          <div className="inline-flex items-center gap-1 font-mono text-xs text-[var(--text-dim)]">
            Made with intent
            <IconSparkles className="size-3 shrink-0" stroke={1.5} aria-hidden />
          </div>
        </div>
      </ContentContainer>
    </footer>
  );
}
