import { IconBrandFlutter, IconBrandReact, type TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { CROSS_PLATFORM_APP_DEV_PAGE } from "@/data/site";
import { CrossPlatformDevSectionHeading } from "./CrossPlatformDevSectionHeading";

const frameworkIcons = {
  "brand-react": IconBrandReact,
  "brand-flutter": IconBrandFlutter,
} as const satisfies Record<(typeof CROSS_PLATFORM_APP_DEV_PAGE.frameworks.items)[number]["icon"], TablerIcon>;

const { frameworks } = CROSS_PLATFORM_APP_DEV_PAGE;

export function CrossPlatformDevFrameworks() {
  const { iconBg, iconClass } = frameworks.iconDefaults;

  return (
    <section className="w-full border-t border-[var(--border)] bg-[#141414] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <CrossPlatformDevSectionHeading heading={frameworks.heading} className="mb-1.5" />
        <p className="mb-6 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          {frameworks.description}
        </p>

        <div className="grid gap-3.5 sm:grid-cols-2">
          {frameworks.items.map(({ name, icon, description, bestFor }) => {
            const Icon = frameworkIcons[icon];
            return (
              <article key={name} className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-6">
                <div className="mb-3 flex items-center gap-2.5">
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${iconBg}`}
                    aria-hidden
                  >
                    <Icon className={`size-6 ${iconClass}`} stroke={1.5} />
                  </div>
                  <h3 className="text-lg font-medium text-[var(--text)]">{name}</h3>
                </div>
                <p className="mb-3.5 text-base leading-relaxed text-[var(--text-muted)]">{description}</p>
                <p className="mb-1.5 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">Best for</p>
                <p className="text-base leading-relaxed text-[var(--text)]">{bestFor}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
