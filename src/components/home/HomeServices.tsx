import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import {
  IconBrain,
  IconCode,
  IconDeviceMobile,
  IconPalette,
  IconTrendingUp,
} from "@/components/icons/HomeServiceIcons";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { HOME_PAGE } from "@/data/site";
import type { ComponentType } from "react";

const serviceIcons = {
  code: IconCode,
  "device-mobile": IconDeviceMobile,
  "trending-up": IconTrendingUp,
  brain: IconBrain,
  palette: IconPalette,
} as const satisfies Record<(typeof HOME_PAGE.services.items)[number]["icon"], ComponentType<IconProps>>;

type IconProps = { className?: string; strokeWidth?: number };

const cardClassName =
  "group/card block h-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-6 transition-[transform,border-color] duration-200 motion-safe:hover:-translate-y-0.5 hover:border-[var(--border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]";

export function HomeServices() {
  const { services: copy } = HOME_PAGE;

  return (
    <section
      className="w-full border-t border-[var(--border-subtle)] py-14 md:py-20"
      aria-label={copy.sectionAriaLabel}
    >
      <ContentContainer>
        <div className="mb-14 grid items-end gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-balance font-sans text-4xl font-bold leading-[1.05] tracking-[-0.025em] text-[var(--text)] md:text-5xl">
              Five services one <span className="text-[var(--red)]">growth engine</span>
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-[var(--text-muted)]">{copy.description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
          {copy.items.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <ServiceCard key={service.n} service={service} Icon={Icon} learnMoreLabel={copy.learnMoreLabel} />
            );
          })}
        </div>

        <div
          className="hidden lg:block"
          aria-roledescription="carousel"
          aria-label={copy.carouselAriaLabel}
        >
          <div className="-mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-2 pb-2 [scrollbar-width:thin]">
            {copy.items.map((service) => {
              const Icon = serviceIcons[service.icon];
              return (
                <div
                  key={service.n}
                  className="w-[calc((100%-2rem)/3)] min-w-[calc((100%-2rem)/3)] shrink-0 snap-start"
                >
                  <ServiceCard service={service} Icon={Icon} learnMoreLabel={copy.learnMoreLabel} />
                </div>
              );
            })}
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}

function ServiceCard({
  service: { href, n, title, description, stack, duration },
  Icon,
  learnMoreLabel,
}: {
  service: (typeof HOME_PAGE.services.items)[number];
  Icon: ComponentType<IconProps>;
  learnMoreLabel: string;
}) {
  return (
    <Link href={href} className={`${cardClassName} min-w-0`}>
      <div
        className="mb-5 flex size-11 items-center justify-center rounded-lg bg-[rgba(230,57,70,0.1)]"
        aria-hidden
      >
        <Icon className="size-6 text-[var(--red-bright)]" strokeWidth={1.5} />
      </div>
      <div className="mb-1 flex items-baseline justify-between gap-2">
        <span className="font-medium text-[var(--text)]">{title}</span>
        <span className="text-meta">{n}</span>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
      <div className="mb-4 font-mono text-sm text-[var(--text-dim)]">{stack}</div>
      <div className="flex items-center justify-between border-t border-[var(--border-subtle)] pt-3">
        <span className="text-sm text-[var(--text-muted)]">{duration}</span>
        <span className="text-accent inline-flex items-center gap-0.5 text-sm font-semibold transition-colors group-hover/card:text-[var(--text)]">
          {learnMoreLabel}
          <ArrowRightIcon className="size-3 shrink-0" />
        </span>
      </div>
    </Link>
  );
}
