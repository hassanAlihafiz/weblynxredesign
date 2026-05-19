import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";

const tiers = [
  {
    featured: false,
    label: "Engagement 01",
    title: "Essentials",
    timeline: "2-week delivery",
    items: [
      "Logo + wordmark",
      "Color palette",
      "Type system",
      "Basic guidelines",
      "2 rounds of revisions",
    ],
  },
  {
    featured: true,
    label: "Engagement 02",
    title: "Brand system",
    timeline: "4–5 week delivery",
    items: [
      "Full identity system",
      "Brand guidelines (20+ pages)",
      "Marketing assets",
      "Social templates",
      "Custom iconography",
      "3 rounds of revisions",
    ],
  },
  {
    featured: false,
    label: "Engagement 03",
    title: "Full studio",
    timeline: "8+ week engagement",
    items: [
      "Brand + product design",
      "Full design system",
      "Web + mobile UI",
      "Motion + illustration",
      "Ongoing design retainer",
    ],
  },
] as const;

export function DesignEngagementScopes() {
  return (
    <section
      id="engagements"
      className="scroll-mt-24 w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12"
    >
      <ContentContainer>
        <h2 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Find the <span className="text-[var(--red)]">engagement</span> that fits
        </h2>
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          Every brand is different. Here are the three engagement models we typically work in.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map(({ featured, label, title, timeline, items }) => (
            <article
              key={label}
              className={`relative flex flex-col rounded-[var(--border-radius-md)] p-5 shadow-[var(--shadow-xs)] sm:p-6 ${
                featured
                  ? "border-2 border-[var(--red)] bg-[linear-gradient(180deg,rgba(230,57,70,0.05),transparent)] pt-6"
                  : "border border-[var(--border-subtle)] bg-[var(--bg-elev)]"
              }`}
            >
              {featured ? (
                <span className="absolute -top-3 left-5 rounded-full bg-[var(--red)] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--text)]">
                  Most common
                </span>
              ) : null}
              <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--text-dim)]">
                {label}
              </p>
              <h3 className="mb-1 text-xl font-medium text-[var(--text)]">{title}</h3>
              <p className="mb-4 text-xs text-[var(--text-muted)]">{timeline}</p>
              <ul className="mb-6 list-none space-y-1.5 border-t border-[var(--border-subtle)] pt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                {items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <Link
                href="#quote"
                className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-[var(--red)] transition-colors hover:opacity-90"
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
