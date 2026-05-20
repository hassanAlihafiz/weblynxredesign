import {
  IconBell,
  IconBug,
  IconCloudOff,
  IconCreditCard,
  IconDevices,
  IconPalette,
  IconRefresh,
  IconRocket,
  IconUser,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { CROSS_PLATFORM_APP_DEV_PAGE } from "@/data/site";
import { CrossPlatformDevSectionHeading } from "./CrossPlatformDevSectionHeading";

const deliverableIcons = {
  devices: IconDevices,
  palette: IconPalette,
  bell: IconBell,
  user: IconUser,
  "credit-card": IconCreditCard,
  "cloud-off": IconCloudOff,
  refresh: IconRefresh,
  bug: IconBug,
  rocket: IconRocket,
} as const satisfies Record<(typeof CROSS_PLATFORM_APP_DEV_PAGE.deliverables.items)[number]["icon"], TablerIcon>;

const { deliverables } = CROSS_PLATFORM_APP_DEV_PAGE;

export function CrossPlatformDevDeliverables() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <CrossPlatformDevSectionHeading heading={deliverables.heading} className="mb-1.5" />
        <p className="mb-5 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          {deliverables.description}
        </p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.items.map(({ title, body, icon }) => {
            const Icon = deliverableIcons[icon];
            return (
              <article key={title} className="rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4">
                <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-lg font-medium text-[var(--text)]">{title}</h3>
                <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
