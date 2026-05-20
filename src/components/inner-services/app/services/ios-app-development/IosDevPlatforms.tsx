import {
  IconBadgeVr,
  IconDeviceLaptop,
  IconDeviceMobile,
  IconDeviceTablet,
  IconDeviceWatch,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { IOS_APP_DEV_PAGE } from "@/data/site";
import { IosDevSectionHeading } from "./IosDevSectionHeading";

const platformIcons = {
  "device-mobile": IconDeviceMobile,
  "device-tablet": IconDeviceTablet,
  "device-watch": IconDeviceWatch,
  "badge-vr": IconBadgeVr,
  "device-laptop": IconDeviceLaptop,
} as const satisfies Record<(typeof IOS_APP_DEV_PAGE.platforms.items)[number]["icon"], TablerIcon>;

const { platforms } = IOS_APP_DEV_PAGE;

export function IosDevPlatforms() {
  const { iconClass } = platforms.iconDefaults;

  return (
    <section id={platforms.sectionId} className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <IosDevSectionHeading heading={platforms.heading} className="mb-5" />
        <p className="mb-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{platforms.description}</p>

        <div className="grid gap-2.5 sm:grid-cols-5">
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
