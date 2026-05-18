import {
  IconArrowRight,
  IconCode,
  IconDeviceMobile,
  IconPalette,
  IconTrendingUp,
  type TablerIcon,
} from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";

const cards: {
  n: string;
  title: string;
  body: string;
  stack: string;
  delivery: string;
  href: string;
  icon: TablerIcon;
}[] = [
  {
    n: "01",
    title: "Web development",
    body: "Marketing sites, web apps, and SaaS platforms built on Next.js. Fast, SEO-ready, made to scale.",
    stack: "Next.js · React · TypeScript · Shopify",
    delivery: "4–8 week delivery",
    href: "/services/web-development",
    icon: IconCode,
  },
  {
    n: "02",
    title: "App development",
    body: "Cross-platform iOS and Android apps with React Native. From MVP to App Store launch.",
    stack: "React Native · Expo · Firebase · TypeScript",
    delivery: "8–12 week delivery",
    href: "/services/app-development",
    icon: IconDeviceMobile,
  },
  {
    n: "03",
    title: "Digital marketing",
    body: "SEO, paid ads, content, and social everything to get your brand found and chosen.",
    stack: "SEO · Google Ads · Meta Ads · Content",
    delivery: "Monthly retainer",
    href: "/services/digital-marketing",
    icon: IconTrendingUp,
  },
  {
    n: "04",
    title: "Design",
    body: "Brand identity, UI/UX, and product design. Beautiful work that's still functional and on-brand.",
    stack: "Figma · Brand systems · UI/UX",
    delivery: "2–5 week delivery",
    href: "/services",
    icon: IconPalette,
  },
];

const cardClassName =
  "group/card block rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-6 transition-[transform,border-color] duration-200 motion-safe:hover:-translate-y-0.5 hover:border-[var(--border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]";

export function ServicesGrid() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-14 md:py-20">
      <ContentContainer>

      <div className="grid gap-5 md:grid-cols-2">
        {cards.map(({ n, title, body, stack, delivery, href, icon: Icon }) => (
          <Link key={n} href={href} className={cardClassName}>
            <div
              className="mb-5 flex size-12 shrink-0 items-center justify-center rounded-lg bg-[rgba(230,57,70,0.1)]"
              aria-hidden
            >
              <Icon className="size-8 text-[var(--red)]" stroke={1.35} />
            </div>
            <div className="mb-3 flex items-baseline justify-between gap-2">
              <h3 className="text-xl font-medium leading-snug text-[var(--text)]">{title}</h3>
              <span className="shrink-0 font-mono text-xs text-[var(--text-dim)]">{n}</span>
            </div>
            <p className="mb-5 leading-relaxed text-[var(--text-muted)]">{body}</p>
            <div className="mb-5 font-mono text-xs text-[var(--text-dim)]">{stack}</div>
            <div className="flex items-center justify-between border-t border-[var(--border-subtle)] pt-4">
              <span className="text-sm text-[var(--text-muted)]">{delivery}</span>
              <span className="text-sm font-medium text-[var(--red)] transition-colors group-hover/card:text-[var(--red-bright)]">
                <span className="inline-flex items-center gap-0.5">
                  Learn more
                  <IconArrowRight className="size-3 shrink-0" stroke={1.5} aria-hidden />
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
