import { IconBell, IconCloud, IconCloudOff, IconDeviceMobile, IconRocket, IconUser } from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { APP_DEVELOPMENT_PAGE } from "@/data/site";

const includedIcons = {
  "device-mobile": IconDeviceMobile,
  bell: IconBell,
  user: IconUser,
  cloud: IconCloud,
  "cloud-off": IconCloudOff,
  rocket: IconRocket,
} as const satisfies Record<(typeof APP_DEVELOPMENT_PAGE.included.items)[number]["icon"], TablerIcon>;

const { included } = APP_DEVELOPMENT_PAGE;

export function AppDevIncluded() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
         Every app project includes <span className="text-[var(--red)]">everything</span>
        </h1>
        <p className="mb-10 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{included.description}</p>
        <div className="grid gap-4 md:grid-cols-3">
          {included.items.map(({ title, body, icon }) => {
            const Icon = includedIcons[icon];
            return (
              <article
                key={title}
                className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-5 shadow-[var(--shadow-xs)]"
              >
                <Icon className="mb-3 size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
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
