import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";

const tiers = [
  {
    featured: false,
    label: "Engagement 01",
    title: "Starter",
    timeline: "Monthly · 3-month minimum",
    items: [
      "1 channel focus",
      "SEO or single ads platform",
      "Monthly content (2 posts)",
      "Monthly reporting",
      "Bi-weekly calls",
    ],
  },
  {
    featured: true,
    label: "Engagement 02",
    title: "Growth",
    timeline: "Monthly · 6-month minimum",
    items: [
      "Multi-channel (SEO + ads)",
      "Weekly content",
      "Email automation",
      "A/B testing",
      "Live dashboard",
      "Weekly calls + Slack",
    ],
  },
  {
    featured: false,
    label: "Engagement 03",
    title: "Scale",
    timeline: "Monthly · 12-month partnership",
    items: [
      "Full-channel strategy",
      "Daily content output",
      "Paid media management",
      "CRO + funnel optimization",
      "Dedicated growth lead",
      "Embedded team feel",
    ],
  },
] as const;

export function DmEngagement() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        Engagement models
      </p>
      <h2 className="mb-3 max-w-3xl text-balance font-sans text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--text)] md:text-5xl">
        How we work with you
      </h2>
      <p className="mb-10 max-w-md text-base leading-relaxed text-[var(--text-muted)]">
        Marketing is ongoing. We work in monthly retainers choose the level that matches your stage.
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
