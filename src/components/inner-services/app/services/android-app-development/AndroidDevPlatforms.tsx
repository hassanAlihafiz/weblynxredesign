import {
  IconDeviceMobile,
  IconDeviceTablet,
  IconDeviceTv,
  IconDeviceWatch,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { ANDROID_APP_DEV_PAGE } from "@/data/site";

const platformIcons = {
  "device-mobile": IconDeviceMobile,
  "device-tablet": IconDeviceTablet,
  "device-watch": IconDeviceWatch,
  "device-tv": IconDeviceTv,
} as const satisfies Record<(typeof ANDROID_APP_DEV_PAGE.platforms.items)[number]["icon"], TablerIcon>;

const { platforms } = ANDROID_APP_DEV_PAGE;

export function AndroidDevPlatforms() {
  const { iconClass } = platforms.iconDefaults;

  return (
    <section id={platforms.sectionId} className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
         One Android codebase <span className="text-[var(--red)]">every screen</span>
        </h1>
        <p className="mb-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{platforms.description}</p>

        <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
          {platforms.items.map(({ title, body, icon }) => {
            const Icon = platformIcons[icon];
            return (
              <article key={title} className="rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4">
                <Icon className={`mb-3 size-5 shrink-0 ${iconClass}`} stroke={1.5} aria-hidden />
                <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
                <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
