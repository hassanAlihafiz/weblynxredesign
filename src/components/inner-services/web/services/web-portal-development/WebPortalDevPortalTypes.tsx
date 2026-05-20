import {
  IconBuilding,
  IconHeartHandshake,
  IconSchool,
  IconShieldLock,
  IconTool,
  IconUsers,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { WEB_PORTAL_DEV_PAGE } from "@/data/site";
import { WebPortalDevSectionHeading } from "./WebPortalDevSectionHeading";

const portalTypeIcons = {
  users: IconUsers,
  "shield-lock": IconShieldLock,
  building: IconBuilding,
  school: IconSchool,
  "heart-handshake": IconHeartHandshake,
  tool: IconTool,
} as const satisfies Record<(typeof WEB_PORTAL_DEV_PAGE.portalTypes.items)[number]["icon"], TablerIcon>;

const { portalTypes } = WEB_PORTAL_DEV_PAGE;

export function WebPortalDevPortalTypes() {
  const { iconClass } = portalTypes.iconDefaults;

  return (
    <section id={portalTypes.sectionId} className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <WebPortalDevSectionHeading heading={portalTypes.heading} className="mb-1.5" />
        <p className="mb-5 max-w-[420px] text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          {portalTypes.description}
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {portalTypes.items.map(({ name, description, icon }) => {
            const Icon = portalTypeIcons[icon];
            return (
              <article key={name} className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4">
                <Icon className={`size-5 shrink-0 ${iconClass}`} stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-base font-medium text-[var(--text)]">{name}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
