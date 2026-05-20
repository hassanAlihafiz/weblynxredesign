import { IconBrandAndroid, IconBrandApple, IconDeviceLaptop } from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { APP_DEVELOPMENT_PAGE } from "@/data/site";
import { AppDevSectionHeading } from "./AppDevSectionHeading";

const platformIcons = {
  apple: IconBrandApple,
  android: IconBrandAndroid,
  laptop: IconDeviceLaptop,
} as const satisfies Record<(typeof APP_DEVELOPMENT_PAGE.platforms.items)[number]["icon"], TablerIcon>;

const { platforms } = APP_DEVELOPMENT_PAGE;

export function AppDevPlatforms() {
  return (
    <section
      id={platforms.sectionId}
      className="border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12"
    >
      <ContentContainer>
        <AppDevSectionHeading heading={platforms.heading} />
        <div className="grid gap-4 md:grid-cols-3">
          {platforms.items.map(({ title, body, icon, iconClass }) => {
            const Icon = platformIcons[icon];
            return (
              <article
                key={title}
                className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)]"
              >
                <Icon className={`mb-4 size-6 shrink-0 ${iconClass}`} stroke={1.5} aria-hidden />
                <h3 className="mb-2 font-medium text-[var(--text)]">{title}</h3>
                <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
