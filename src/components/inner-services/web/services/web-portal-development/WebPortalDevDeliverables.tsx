import {
  IconClipboardList,
  IconDatabase,
  IconFileExport,
  IconKey,
  IconLayoutDashboard,
  IconMail,
  IconPlugConnected,
  IconShieldCheck,
  IconUserShield,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { WEB_PORTAL_DEV_PAGE } from "@/data/site";

const deliverableIcons = {
  key: IconKey,
  "user-shield": IconUserShield,
  "layout-dashboard": IconLayoutDashboard,
  database: IconDatabase, 
  "clipboard-list": IconClipboardList,
  mail: IconMail,
  "file-export": IconFileExport,
  "plug-connected": IconPlugConnected,
  "shield-check": IconShieldCheck,
} as const satisfies Record<(typeof WEB_PORTAL_DEV_PAGE.deliverables.items)[number]["icon"], TablerIcon>;

const { deliverables } = WEB_PORTAL_DEV_PAGE;

export function WebPortalDevDeliverables() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Every portal project <span className="text-[var(--red)]">includes</span>
        </h1>
        <p className="mb-5 max-w-2xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          {deliverables.description}
        </p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.items.map(({ title, body, icon }) => {
            const Icon = deliverableIcons[icon];
            return (
              <article key={title} className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4">
                <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-base font-medium text-[var(--text)]">{title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
