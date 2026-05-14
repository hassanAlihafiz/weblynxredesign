import {
  IconArrowRight,
  IconCode,
  IconDeviceMobile,
  IconPalette,
  IconTrendingUp,
  type TablerIcon,
} from "@tabler/icons-react";
import Link from "next/link";
import { SectionEyebrow } from "@/components/home/SectionEyebrow";

const cards: {
  n: string;
  title: string;
  body: string;
  stack: string;
  from: string;
  href: string;
  icon: TablerIcon;
  iconWrap: string;
  iconColor: string;
}[] = [
  {
    n: "01",
    title: "Web development",
    body: "Marketing sites, web apps, and SaaS platforms built on Next.js. Fast, SEO-ready, made to scale.",
    stack: "Next.js · React · TypeScript · Shopify",
    from: "From $1,500",
    href: "/services/web-development",
    icon: IconCode,
    iconWrap: "bg-[#EEEDFE]",
    iconColor: "text-[#3C3489]",
  },
  {
    n: "02",
    title: "App development",
    body: "Cross-platform iOS and Android apps built with React Native. From MVP to App Store launch.",
    stack: "React Native · Expo · Firebase · TypeScript",
    from: "From $6,000",
    href: "#",
    icon: IconDeviceMobile,
    iconWrap: "bg-[#E1F5EE]",
    iconColor: "text-[#085041]",
  },
  {
    n: "03",
    title: "Digital marketing",
    body: "SEO, paid ads, content, and social — everything to get your brand found and chosen by the right buyers.",
    stack: "SEO · Google Ads · Meta Ads · Content",
    from: "From $800/mo",
    href: "#",
    icon: IconTrendingUp,
    iconWrap: "bg-[#FAEEDA]",
    iconColor: "text-[#633806]",
  },
  {
    n: "04",
    title: "Design",
    body: "Brand identity, UI/UX, and product design. Beautiful work that's still functional, on-brand, and on time.",
    stack: "Figma · Brand systems · UI/UX · Illustration",
    from: "From $1,200",
    href: "#",
    icon: IconPalette,
    iconWrap: "bg-[#FBEAF0]",
    iconColor: "text-[#72243E]",
  },
];

export function ServicesGrid() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] py-9 sm:py-10 md:py-11">
      <SectionEyebrow className="mb-4 sm:mb-5">
        SECTION 2 — SERVICES GRID (4 CARDS → DEEP LINKS)
      </SectionEyebrow>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-3.5 md:gap-4">
        {cards.map(({ n, title, body, stack, from, href, icon: Icon, iconWrap, iconColor }) => (
          <article
            key={n}
            className="flex min-w-0 flex-col rounded-[var(--border-radius-lg)] border border-[var(--color-border-tertiary)] bg-[var(--color-background-primary)] p-4 shadow-[var(--shadow-card)] transition-all hover:border-[var(--color-primary-border)] hover:shadow-[var(--shadow-card-hover)] sm:p-5"
          >
            <div
              className={`mb-3 flex size-9 shrink-0 items-center justify-center rounded-[var(--border-radius-md)] sm:size-10 ${iconWrap}`}
            >
              <Icon className={`size-5 ${iconColor}`} stroke={1.5} aria-hidden />
            </div>
            <div className="mb-1.5 flex min-w-0 items-baseline justify-between gap-2">
              <h2 className="text-[15px] font-medium leading-snug">{title}</h2>
              <span className="shrink-0 text-[10px] text-[var(--color-text-tertiary)]">{n}</span>
            </div>
            <p className="mb-3 text-xs leading-relaxed text-[var(--color-text-secondary)] sm:text-[12px] sm:leading-[1.6]">
              {body}
            </p>
            <p className="mb-3.5 text-[11px] text-[var(--color-text-tertiary)]">{stack}</p>
            <div className="mt-auto flex flex-col gap-2 border-t border-[var(--color-border-tertiary)] pt-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[11px] text-[var(--color-text-secondary)]">{from}</span>
              <Link
                href={href}
                className="inline-flex items-center gap-0.5 text-xs font-medium text-[var(--color-text-info)] transition-opacity hover:opacity-90"
              >
                Learn more
                <IconArrowRight className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
