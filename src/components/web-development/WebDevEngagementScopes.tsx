import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";

const tiers = [
  {
    featured: false,
    label: "Engagement 01",
    title: "Landing & Marketing",
    timeline: "1–3 week delivery",
    items: [
      "Landing pages",
      "Marketing sites (up to 8 pages)",
      "Custom design + brand",
      "SEO foundation",
      "CMS integration",
    ],
  },
  {
    featured: true,
    label: "Engagement 02",
    title: "Web App / MVP",
    timeline: "4–8 week delivery",
    items: [
      "Custom web application",
      "User auth + database",
      "Admin dashboard",
      "API integrations",
      "Ongoing support",
    ],
  },
  {
    featured: false,
    label: "Engagement 03",
    title: "Full Platform",
    timeline: "3+ month engagement",
    items: [
      "Complex SaaS platforms",
      "Real-time features",
      "Multi-tenant architecture",
      "Analytics + monitoring",
      "Retainer relationship",
    ],
  },
] as const;

export function WebDevEngagementScopes() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        Project scopes
      </p>
      <h2 className="mb-3 max-w-3xl text-balance font-sans text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--text)] md:text-5xl">
        Find the engagement that fits
      </h2>
      <p className="mb-10 max-w-md text-base leading-relaxed text-[var(--text-muted)]">
        Every project is quoted based on scope. Here are the three engagement models we typically work in.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {tiers.map(({ featured, label, title, timeline, items }) => (
          <article
            key={label}
            className={`relative flex flex-col rounded-xl bg-[var(--bg-elev-2)] p-5 shadow-[var(--shadow-xs)] ${
              featured
                ? "border-2 border-[var(--red)] pt-6"
                : "border border-[var(--border-subtle)]"
            }`}
          >
            {featured ? (
              <span className="absolute -top-3 left-5 rounded-md bg-[var(--red)] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-[var(--text)]">
                Most common
              </span>
            ) : null}
            <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
              {label}
            </p>
            <h3 className="mb-2 text-xl font-semibold text-[var(--text)]">{title}</h3>
            <p className="mb-5 text-xs text-[var(--text-muted)]">{timeline}</p>
            <ul className="mb-6 list-none space-y-2 border-t border-[var(--border-subtle)] pt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              {items.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <Link
              href="#quote"
              className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-[var(--red)] transition-colors hover:text-[var(--red-bright)]"
            >
              Request a quote
              <IconArrowRight className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
            </Link>
          </article>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
