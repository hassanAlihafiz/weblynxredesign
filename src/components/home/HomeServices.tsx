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

const services: {
  href: string;
  n: string;
  title: string;
  description: string;
  stack: string;
  duration: string;
  icon: TablerIcon;
}[] = [
  {
    href: "/services/web-development",
    n: "01",
    title: "Web development",
    description:
      "Marketing sites, web apps, SaaS platforms built on Next.js.",
    stack: "Next.js · React · TypeScript",
    duration: "4–8 weeks",
    icon: IconCode,
  },
  {
    href: "/services/app-development",
    n: "02",
    title: "App development",
    description: "iOS and Android apps with React Native. One codebase, two stores.",
    stack: "React Native · Expo · Firebase",
    duration: "8–12 weeks",
    icon: IconDeviceMobile,
  },
  {
    href: "/services/digital-marketing",
    n: "03",
    title: "Digital marketing",
    description: "SEO, paid ads, content, and social full-funnel growth.",
    stack: "SEO · Ads · Content · Email",
    duration: "Monthly retainer",
    icon: IconTrendingUp,
  },
  {
    href: "/services",
    n: "04",
    title: "Design",
    description: "Brand identity, UI/UX, and product design that actually ships.",
    stack: "Brand · UI/UX · Identity",
    duration: "2–5 weeks",
    icon: IconPalette,
  },
];

const cardClassName =
  "group/card block rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-6 transition-[transform,border-color] duration-200 motion-safe:hover:-translate-y-0.5 hover:border-[var(--border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]";

export function HomeServices() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-14 md:py-20">
      <ContentContainer>

      <div className="mb-14 grid items-end gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-sm font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
            What we do
          </p>
          <h2 className="text-balance font-sans text-4xl font-semibold leading-[1.05] tracking-[-0.025em] text-[var(--text)] md:text-5xl">
            Four services.
            <br />
            One <span className="text-[var(--red)]">growth engine</span>.
          </h2>
        </div>
        <p className="max-w-md leading-relaxed text-[var(--text-muted)]">
          Each service stands alone but together they form a connected system designed to help your
          business launch, grow, and scale.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({ href, n, title, description, stack, duration, icon: Icon }) => (
          <Link key={n} href={href} className={cardClassName}>
            <div
              className="mb-5 flex size-11 items-center justify-center rounded-lg bg-[rgba(230,57,70,0.1)]"
              aria-hidden
            >
              <Icon className="size-6 text-[var(--red)]" stroke={1.5} />
            </div>
            <div className="mb-1 flex items-baseline justify-between gap-2">
              <span className="font-medium text-[var(--text)]">{title}</span>
              <span className="font-mono text-[10px] text-[var(--text-dim)]">{n}</span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
            <div className="mb-4 font-mono text-xs text-[var(--text-dim)]">{stack}</div>
            <div className="flex items-center justify-between border-t border-[var(--border-subtle)] pt-3">
              <span className="text-xs text-[var(--text-muted)]">{duration}</span>
              <span className="inline-flex items-center gap-0.5 text-xs font-medium text-[var(--red)] transition-colors group-hover/card:text-[var(--red-bright)]">
                Learn more
                <IconArrowRight className="size-3 shrink-0" stroke={1.5} aria-hidden />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
