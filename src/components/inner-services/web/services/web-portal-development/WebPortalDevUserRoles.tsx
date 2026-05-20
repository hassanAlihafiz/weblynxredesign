import { IconCrown, IconEye, IconUser, IconUserCog, type TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { WEB_PORTAL_DEV_PAGE } from "@/data/site";
import { WebPortalDevSectionHeading } from "./WebPortalDevSectionHeading";

const roleIcons = {
  crown: IconCrown,
  "user-cog": IconUserCog,
  user: IconUser,
  eye: IconEye,
} as const satisfies Record<(typeof WEB_PORTAL_DEV_PAGE.userRoles.roles)[number]["icon"], TablerIcon>;

const { userRoles } = WEB_PORTAL_DEV_PAGE;

export function WebPortalDevUserRoles() {
  const { iconClass, iconBg } = userRoles.iconCardDefaults;

  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <WebPortalDevSectionHeading heading={userRoles.heading} className="mb-1.5" />
        <p className="mb-5 max-w-2xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          {userRoles.description}
        </p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {userRoles.roles.map(({ title, body, icon }) => {
            const Icon = roleIcons[icon];
            return (
              <article
                key={title}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4 text-center"
              >
                <div
                  className={`mx-auto mb-2.5 flex size-10 items-center justify-center rounded-full border border-[var(--border)] ${iconBg}`}
                  aria-hidden
                >
                  <Icon className={`size-5 ${iconClass}`} stroke={1.5} />
                </div>
                <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
