import { IconCrown, IconEye, IconUser, IconUserCog } from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const roles: {
  title: string;
  body: string;
  icon: TablerIcon;
  iconClass: string;
  iconBg: string;
}[] = [
  {
    title: "Super admin",
    body: "Full system control, billing, settings",
    icon: IconCrown,
    iconClass: "text-[var(--red)]",
    iconBg: "bg-[var(--color-background-primary)]",
  },
  {
    title: "Team manager",
    body: "Manage their team, content, reports",
    icon: IconUserCog,
    iconClass: "text-[var(--red)]",
    iconBg: "bg-[var(--color-background-primary)]",
  },
  {
    title: "Standard user",
    body: "Day-to-day workflows & tasks",
    icon: IconUser,
    iconClass: "text-[var(--red)]",
    iconBg: "bg-[var(--color-background-primary)]",
  },
  {
    title: "Client / guest",
    body: "Self-service, limited read access",
    icon: IconEye,
    iconClass: "text-[var(--red)]",
    iconBg: "bg-[var(--color-background-primary)]",
  },
];

export function WebPortalDevUserRoles() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          One portal <span className="text-[var(--red)]">many users</span>, different views
        </h2>
        <p className="mb-5 max-w-2xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          We design role-aware portals where every user sees exactly what they should, nothing more, nothing less.
        </p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map(({ title, body, icon: Icon, iconClass, iconBg }) => (
            <article
              key={title}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4 text-center"
            >
              <div
                className={`mx-auto mb-2.5 flex size-10 items-center justify-center rounded-full ${iconBg}`}
                aria-hidden
              >
                <Icon className={`size-5 ${iconClass}`} stroke={1.5} />
              </div>
              <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
