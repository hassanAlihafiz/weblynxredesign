import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { WEB_DEVELOPMENT_PAGE } from "@/data/site";
import { WebDevSectionHeading } from "./WebDevSectionHeading";

const { engagements } = WEB_DEVELOPMENT_PAGE;

export function WebDevEngagementScopes() {
  return (
    <section
      id={engagements.sectionId}
      className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12"
    >
      <ContentContainer>
        <WebDevSectionHeading heading={engagements.heading} className="mb-3" />
        <p className="mb-10 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{engagements.description}</p>
        <div className="grid gap-4 md:grid-cols-3">
          {engagements.tiers.map(({ featured, label, title, timeline, items }) => (
            <article
              key={label}
              className={`relative flex flex-col rounded-[var(--border-radius-md)] bg-[var(--bg-elev-2)] p-5 shadow-[var(--shadow-xs)] ${
                featured ? "border-2 border-[var(--red)] pt-6" : "border border-[var(--border-subtle)]"
              }`}
            >
              {featured ? (
                <span className="absolute -top-3 left-5 rounded-md bg-[var(--surface-red)] px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[var(--text)]">
                  {engagements.featuredTierBadge}
                </span>
              ) : null}
              <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
                {label}
              </p>
              <h3 className="mb-2 text-xl font-medium text-[var(--text)]">{title}</h3>
              <p className="mb-5 text-xs text-[var(--text-muted)]">{timeline}</p>
              <ul className="mb-6 list-none space-y-2 border-t border-[var(--border-subtle)] pt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                {items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <Link
                href={engagements.ctaHref}
                className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-[var(--red)] transition-colors hover:opacity-90"
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
