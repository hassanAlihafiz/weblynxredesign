"use client";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { HomeServiceCard } from "@/components/home/HomeServiceCard";
import {
  IconBrain,
  IconCloud,
  IconCode,
  IconDeviceMobile,
  IconPalette,
  IconTrendingUp,
} from "@/components/icons/HomeServiceIcons";
import { HOME_PAGE } from "@/data/site";
import { useCallback, useState } from "react";
import type { ComponentType, CSSProperties } from "react";

const VISIBLE_COUNT = 3;
const VIEWPORT_GAPS_REM = VISIBLE_COUNT - 1;

const serviceIcons = {
  code: IconCode,
  "device-mobile": IconDeviceMobile,
  "trending-up": IconTrendingUp,
  cloud: IconCloud,
  brain: IconBrain,
  palette: IconPalette,
} as const satisfies Record<(typeof HOME_PAGE.services.items)[number]["icon"], ComponentType<IconProps>>;

type IconProps = { className?: string; strokeWidth?: number };

const navButtonClass =
  "absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] text-[var(--text-muted)] transition-colors hover:border-[var(--border)] hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)] sm:size-11";

type HomeServicesSliderProps = {
  items: typeof HOME_PAGE.services.items;
  learnMoreLabel: string;
  prevAriaLabel: string;
  nextAriaLabel: string;
  carouselAriaLabel: string;
};

export function HomeServicesSlider({
  items,
  learnMoreLabel,
  prevAriaLabel,
  nextAriaLabel,
  carouselAriaLabel,
}: HomeServicesSliderProps) {
  const maxIndex = Math.max(0, items.length - VISIBLE_COUNT);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(Math.min(Math.max(0, index), maxIndex));
    },
    [maxIndex],
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  const trackStyle: CSSProperties = {
    ["--slide-step" as string]: `calc((100cqw - ${VIEWPORT_GAPS_REM}rem) / ${VISIBLE_COUNT} + 1rem)`,
    transform:
      activeIndex > 0
        ? `translate3d(calc(-${activeIndex} * var(--slide-step)), 0, 0)`
        : undefined,
  };

  return (
    <div aria-roledescription="carousel" aria-label={carouselAriaLabel} className="relative">
      <button
        type="button"
        className={`${navButtonClass} left-0 disabled:pointer-events-none disabled:opacity-40`}
        onClick={goPrev}
        disabled={activeIndex === 0}
        aria-label={prevAriaLabel}
        aria-controls="home-services-track"
      >
        <IconChevronLeft className="size-5" stroke={1.5} aria-hidden />
      </button>

      <button
        type="button"
        className={`${navButtonClass} right-0 disabled:pointer-events-none disabled:opacity-40`}
        onClick={goNext}
        disabled={activeIndex >= maxIndex}
        aria-label={nextAriaLabel}
        aria-controls="home-services-track"
      >
        <IconChevronRight className="size-5" stroke={1.5} aria-hidden />
      </button>

      <div
        id="home-services-track"
        className="@container min-w-0 overflow-x-hidden overflow-y-visible py-2 pl-12 pr-12 -my-2 sm:pl-14 sm:pr-14 [container-type:inline-size]"
      >
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out will-change-transform motion-reduce:transition-none motion-reduce:transform-none"
          style={trackStyle}
        >
          {items.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <div
                key={service.n}
                className="w-[calc((100cqw-2rem)/3)] min-w-0 shrink-0"
              >
                <HomeServiceCard service={service} Icon={Icon} learnMoreLabel={learnMoreLabel} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
