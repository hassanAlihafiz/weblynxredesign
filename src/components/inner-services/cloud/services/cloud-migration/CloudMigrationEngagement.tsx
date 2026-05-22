import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_MIGRATION_PAGE } from "@/data/site";
import { IconArrowRight } from "@tabler/icons-react";

const { engagementModels } = CLOUD_MIGRATION_PAGE;

export function CloudMigrationEngagement() {
  return (
    <section className="w-full border-t border-[var(--border)] py-11 sm:py-12">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance text-6xl font-bold leading-tight tracking-[-0.02em] text-[var(--text)]">
          Find the <span className="text-[var(--red)]">engagement</span> that fits
        </h2>
        <p className="mb-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)]">
          {engagementModels.description}
        </p>

        <div className="grid gap-3 md:grid-cols-3 md:items-stretch">
          {engagementModels.tiers.map((tier) => (
            <article
              key={tier.code}
              className={
                tier.highlighted
                  ? "relative rounded-xl border-2 border-[var(--red)] bg-gradient-to-b from-[rgba(230,57,70,0.05)] to-transparent p-5"
                  : "rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4"
              }
            >
              {tier.highlighted && "badge" in tier && tier.badge ? (
                <div className="absolute -top-3 left-5 rounded-full bg-[var(--surface-red)] p-1 text-sm font-medium text-[var(--color-on-primary)]">
                  {tier.badge}
                </div>
              ) : null}
              <p className="mb-1.5 text-sm font-medium uppercase tracking-wide text-[var(--text-dim)]">
                {tier.code}
              </p>
              <h3 className="mb-1 text-base font-medium text-[var(--text)]">{tier.name}</h3>
              <p className="mb-3.5 text-sm text-[var(--text-muted)]">{tier.duration}</p>
              <ul className="mb-3.5 list-none space-y-0 border-t border-[var(--border)] pt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {tier.features.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <Link
                href={engagementModels.ctaHref}
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--red)] transition-colors hover:text-[var(--red-bright)]"
              >
                {engagementModels.ctaLabel}
                <IconArrowRight className="size-4 shrink-0" stroke={1.5} aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
