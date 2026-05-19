"use client";

import {
  IconArrowRight,
  IconBrain,
  IconChevronLeft,
  IconChevronRight,
  IconCode,
  IconDeviceMobile,
  IconPalette,
  IconTrendingUp,
  type TablerIcon,
} from "@tabler/icons-react";
import Link from "next/link";
import { useCallback, useState } from "react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const VISIBLE_DESKTOP = 3;

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
    href: "/web-development",
    n: "01",
    title: "Web development",
    description: "Marketing sites, web apps, SaaS platforms built on Next.js.",
    stack: "Next.js · React · TypeScript",
    duration: "4–8 weeks",
    icon: IconCode,
  },
  {
    href: "/app-development",
    n: "02",
    title: "App development",
    description: "iOS and Android apps with React Native. One codebase, two stores.",
    stack: "React Native · Expo · Firebase",
    duration: "8–12 weeks",
    icon: IconDeviceMobile,
  },
  {
    href: "/digital-marketing",
    n: "03",
    title: "Digital marketing",
    description: "SEO, paid ads, content, and social full-funnel growth.",
    stack: "SEO · Ads · Content · Email",
    duration: "Monthly retainer",
    icon: IconTrendingUp,
  },
  {
    href: "/artificial-intelligence",
    n: "04",
    title: "AI development",
    description: "Chatbots, RAG, agents, and workflow automation on modern LLMs.",
    stack: "GPT · Claude · LangChain",
    duration: "2–8 weeks",
    icon: IconBrain,
  },
  {
    href: "/design",
    n: "05",
    title: "Design",
    description: "Brand identity, UI/UX, and product design that actually ships.",
    stack: "Brand · UI/UX · Identity",
    duration: "2–5 weeks",
    icon: IconPalette,
  },
];

const cardClassName =
  "group/card block h-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-6 transition-[transform,border-color] duration-200 motion-safe:hover:-translate-y-0.5 hover:border-[var(--border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]";

const navButtonClass =
  "flex size-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] text-[var(--text-muted)] transition-colors hover:border-[var(--border)] hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)] disabled:pointer-events-none disabled:opacity-35 sm:size-11";

function ServiceCard({
  href,
  n,
  title,
  description,
  stack,
  duration,
  icon: Icon,
}: (typeof services)[number]) {
  return (
    <Link href={href} className={`${cardClassName} min-w-0`}>
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
  );
}

export function HomeServices() {
  const maxOffset = Math.max(0, services.length - VISIBLE_DESKTOP);
  const [offset, setOffset] = useState(0);

  const goPrev = useCallback(() => setOffset((o) => Math.max(0, o - 1)), []);
  const goNext = useCallback(() => setOffset((o) => Math.min(maxOffset, o + 1)), [maxOffset]);

  return (
    <section
      className="w-full border-t border-[var(--border-subtle)] py-14 md:py-20"
      aria-label="Services"
    >
      <ContentContainer>
        <div className="mb-14 grid items-end gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-sm font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
              What we do
            </p>
            <h2 className="text-balance font-sans text-4xl font-semibold leading-[1.05] tracking-[-0.025em] text-[var(--text)] md:text-5xl">
              Five services
              <br />
              One <span className="text-[var(--red)]">growth engine</span>
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-[var(--text-muted)]">
            Each service stands alone but together they form a connected system designed to help your
            business launch, grow, and scale.
          </p>
        </div>

        {/* Mobile & tablet: show all cards in a responsive grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
          {services.map((service) => (
            <ServiceCard key={service.n} {...service} />
          ))}
        </div>

        {/* Desktop: 3 cards visible, slide to reveal the rest */}
        <div
          className="hidden lg:block"
          aria-roledescription="carousel"
          aria-label="Service offerings"
        >
          <div className="flex items-stretch gap-4">
            <button
              type="button"
              className={`${navButtonClass} self-center`}
              onClick={goPrev}
              disabled={offset === 0}
              aria-label="Previous services"
            >
              <IconChevronLeft className="size-5" stroke={1.5} aria-hidden />
            </button>

            <div className="min-w-0 flex-1 overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out motion-reduce:transition-none"
                style={{
                  width: `${(services.length / VISIBLE_DESKTOP) * 100}%`,
                  transform: `translateX(-${(offset / services.length) * 100}%)`,
                }}
              >
                {services.map((service) => (
                  <div
                    key={service.n}
                    className="box-border shrink-0 px-2"
                    style={{ width: `${100 / services.length}%` }}
                  >
                    <ServiceCard {...service} />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className={`${navButtonClass} self-center`}
              onClick={goNext}
              disabled={offset >= maxOffset}
              aria-label="Next services"
            >
              <IconChevronRight className="size-5" stroke={1.5} aria-hidden />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2" aria-hidden>
            {Array.from({ length: maxOffset + 1 }, (_, i) => (
              <span
                key={i}
                className={`size-1.5 rounded-full transition-colors ${i === offset ? "bg-[var(--red)]" : "bg-[var(--border)]"}`}
              />
            ))}
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
