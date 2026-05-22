import {
  IconBrain,
  IconCloud,
  IconCode,
  IconDeviceMobile,
  IconPalette,
  IconTrendingUp,
} from "@/components/icons/HomeServiceIcons";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { HomeServicesSlider } from "@/components/home/HomeServicesSlider";
import { HOME_PAGE } from "@/data/site";
import type { ComponentType } from "react";
import { HomeServiceCard } from "./HomeServiceCard";

const serviceIcons = {
  code: IconCode,
  "device-mobile": IconDeviceMobile,
  "trending-up": IconTrendingUp,
  cloud: IconCloud,
  brain: IconBrain,
  palette: IconPalette,
} as const satisfies Record<(typeof HOME_PAGE.services.items)[number]["icon"], ComponentType<IconProps>>;

type IconProps = { className?: string; strokeWidth?: number };

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
              Six services one <span className="text-[var(--red)]">growth engine</span>
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-[var(--text-muted)]">{copy.description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
          {copy.items.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <HomeServiceCard
                key={service.n}
                service={service}
                Icon={Icon}
                learnMoreLabel={copy.learnMoreLabel}
              />
            );
          })}
        </div>

        <div className="hidden lg:block">
          <HomeServicesSlider
            items={copy.items}
            learnMoreLabel={copy.learnMoreLabel}
            prevAriaLabel={copy.prevAriaLabel}
            nextAriaLabel={copy.nextAriaLabel}
            carouselAriaLabel={copy.carouselAriaLabel}
          />
        </div>
      </ContentContainer>
    </section>
  );
}
