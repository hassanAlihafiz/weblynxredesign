import {
  IconBuilding,
  IconHeartHandshake,
  IconSchool,
  IconShieldLock,
  IconTool,
  IconUsers,
} from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const portalTypes: { name: string; description: string; icon: TablerIcon }[] = [
  {
    name: "Client portals",
    description: "Self-service hubs for clients, invoices, files, project status, support.",
    icon: IconUsers,
  },
  {
    name: "Admin dashboards",
    description: "Internal control centers for your team to manage users, content, and operations.",
    icon: IconShieldLock,
  },
  {
    name: "B2B portals",
    description: "Partner, vendor, and reseller platforms with custom workflows and pricing.",
    icon: IconBuilding,
  },
  {
    name: "Learning portals",
    description: "Course platforms, training hubs, and member-only content libraries.",
    icon: IconSchool,
  },
  {
    name: "Membership platforms",
    description: "Subscription-based access to gated content, communities, or services.",
    icon: IconHeartHandshake,
  },
  {
    name: "Internal tools",
    description: "Custom apps replacing spreadsheets, ops, inventory, HR, anything bespoke.",
    icon: IconTool,
  },
];

export function WebPortalDevPortalTypes() {
  return (
    <section id="portal-types" className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Six portal types <span className="text-[var(--red)]">One technical foundation</span>
        </h2>
        <p className="mb-5 max-w-[420px] text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          Different audiences, different workflows, same secure, scalable architecture.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {portalTypes.map(({ name, description, icon: Icon }) => (
            <article
              key={name}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4"
            >
              <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
              <h3 className="mb-1 mt-2 text-base font-medium text-[var(--text)]">{name}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
