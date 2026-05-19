import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";

const tiers = [
  {
    featured: false,
    label: "Engagement 01",
    title: "Focused tool",
    timeline: "4–6 week delivery",
    items: [
      "Single-purpose portal",
      "1–2 user roles",
      "Up to 10 screens",
      "Auth + dashboard",
      "Standard integrations",
      "30-day support",
    ],
  },
  {
    featured: true,
    label: "Engagement 02",
    title: "Full portal",
    timeline: "8–10 week delivery",
    items: [
      "Multi-role architecture",
      "3–5 user roles",
      "Custom dashboards per role",
      "Audit logs & reporting",
      "Stripe billing if needed",
      "60-day support",
    ],
  },
  {
    featured: false,
    label: "Engagement 03",
    title: "Enterprise platform",
    timeline: "3+ month engagement",
    items: [
      "Multi-tenant architecture",
      "SSO & SOC 2 readiness",
      "Advanced integrations",
      "Real-time data",
      "Dedicated team",
      "Ongoing retainer",
    ],
  },
] as const;

export function WebPortalDevEngagement() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-4xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Find the <span className="text-[var(--red)]">engagement model</span> that fits
        </h2>
        <p className="mb-5 max-w-2xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          Portals scale from focused tools to multi-role platforms. Three engagement models cover most.
        </p>

        <ul className="grid list-none gap-3 md:grid-cols-3">
          {tiers.map(({ featured, label, title, timeline, items }) => (
            <li
              key={label}
              className={`relative flex flex-col rounded-xl p-5 ${
                featured
                  ? "border-2 border-[var(--red)] bg-[linear-gradient(180deg,rgba(230,57,70,0.05),transparent)]"
                  : "border border-[var(--border)] bg-[var(--bg-elev)]"
              }`}
            >
              {featured ? (
                <span className="absolute -top-[11px] left-5 rounded-full bg-[var(--red)] px-2.5 py-0.5 text-[10px] font-semibold text-[#FAFAFA]">
                  Most common
                </span>
              ) : null}
              <p className="mb-1.5 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">{label}</p>
              <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="mb-3.5 text-sm leading-relaxed text-[var(--text-muted)]">{timeline}</p>
              <ul className="mb-3.5 flex-1 list-none space-y-0 border-t border-[var(--border)] pt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <Link
                href="#quote"
                className="mt-auto text-sm font-medium text-[var(--red)] transition-opacity hover:opacity-90"
              >
                Request a quote →
              </Link>
            </li>
          ))}
        </ul>
      </ContentContainer>
    </section>
  );
}
