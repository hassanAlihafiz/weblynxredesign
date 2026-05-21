import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { AI_DEVELOPMENT_PAGE } from "@/data/site";

const { engagements } = AI_DEVELOPMENT_PAGE;

export function AiDevEngagementScopes() {
  return (
    <section
      id={engagements.sectionId}
      className="scroll-mt-24 w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12"
    >
      <ContentContainer>
        <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Find the engagement <span className="text-[var(--red)]">that fits</span>
        </h1>
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{engagements.description}</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {engagements.tiers.map(({ featured, label, title, timeline, items }) => (
            <article
              key={label}
              className={`relative flex flex-col rounded-[var(--border-radius-md)] p-5 shadow-[var(--shadow-xs)] ${
                featured
                  ? "border-2 border-[var(--red)] bg-[linear-gradient(180deg,rgba(230,57,70,0.05),transparent)] pt-6"
                  : "border border-[var(--border-subtle)] bg-[var(--bg-elev)]"
              }`}
            >
              {featured ? (
                <span className="absolute -top-3 left-5 rounded-full bg-[var(--surface-red)] px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text)]">
                  {engagements.featuredTierBadge}
                </span>
              ) : null}
              <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-dim)]">
                {label}
              </p>
              <h3 className="mb-1 text-lg font-semibold text-[var(--text)]">{title}</h3>
              <p className="mb-4 text-xs text-[var(--text-muted)]">{timeline}</p>
              <ul className="mb-6 list-none space-y-1.5 border-t border-[var(--border-subtle)] pt-4 text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">
                {items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <Link
                href={engagements.ctaHref}
                className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-[var(--red)] transition-colors hover:opacity-90 sm:text-sm"
              >
                {engagements.ctaLabel}
                <IconArrowRight className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
