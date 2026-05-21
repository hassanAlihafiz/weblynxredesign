import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SEARCH_ENGINE_MARKETING_PAGE } from "@/data/site";

const { engagementModels } = SEARCH_ENGINE_MARKETING_PAGE;

export function SemEngagement() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
          find the <span className="text-[var(--red)]">engagement</span> that fits
        </h2>
        <p className="mb-5 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">{engagementModels.description}</p>

        <div className="grid gap-3 md:grid-cols-3 md:items-stretch">
          {engagementModels.tiers.map((tier) => (
            <article
              key={tier.code}
              className={
                tier.highlighted
                  ? "relative rounded-xl border-2 border-[var(--red)] bg-gradient-to-b from-[rgba(230,57,70,0.05)] to-transparent p-5"
                  : "rounded-xl border border-[var(--border-subtle)] bg-[var(--color-background-primary)] p-5"
              }
            >
              {tier.highlighted && "badge" in tier && tier.badge ? (
                <div className="absolute -top-[11px] left-5 rounded-full bg-[var(--surface-red)] px-2.5 py-0.5 text-xs font-semibold text-text">
                  {tier.badge}
                </div>
              ) : null}
              <p className="mb-1.5 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">{tier.code}</p>
              <h3 className="mb-1 text-base font-semibold text-text">{tier.name}</h3>
              <p className="mb-3.5 text-base leading-relaxed text-[var(--text-muted)]">{tier.duration}</p>
              <div className="mb-3.5 border-t border-[var(--border-subtle)] pt-3 text-base leading-relaxed text-[var(--text-muted)]">
                <ul className="list-none space-y-0 list-none">
                  {tier.features.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
              <Link
                href={engagementModels.ctaHref}
                className="inline-block text-sm font-medium text-[var(--red)] transition-opacity hover:opacity-90"
              >
                {engagementModels.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
