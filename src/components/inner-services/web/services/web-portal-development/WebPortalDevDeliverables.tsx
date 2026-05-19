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
} from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const deliverables: { title: string; body: string; icon: TablerIcon }[] = [
  { title: "Secure authentication", body: "SSO, MFA, magic links, password policies", icon: IconKey },
  { title: "Role-based access", body: "Granular permissions per user type", icon: IconUserShield },
  { title: "Custom dashboards", body: "Tailored views per role, real-time data", icon: IconLayoutDashboard },
  { title: "Database & API", body: "Postgres, REST or tRPC, fully typed", icon: IconDatabase },
  { title: "Audit logs", body: "Every action tracked for compliance", icon: IconClipboardList },
  { title: "Notifications", body: "Email, in-app, optional Slack/SMS", icon: IconMail },
  { title: "Reporting & exports", body: "CSV, PDF, scheduled reports", icon: IconFileExport },
  { title: "Third-party integrations", body: "Stripe, Zapier, CRMs, Slack, more", icon: IconPlugConnected },
  { title: "SOC 2-ready architecture", body: "Built for enterprise compliance from day one", icon: IconShieldCheck },
];

export function WebPortalDevDeliverables() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Every portal project <span className="text-[var(--red)]">includes</span>
        </h2>
        <p className="mb-5 max-w-2xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          Enterprise-grade foundations security, scale, and auditability built in.
        </p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4"
            >
              <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
              <h3 className="mb-1 mt-2 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
