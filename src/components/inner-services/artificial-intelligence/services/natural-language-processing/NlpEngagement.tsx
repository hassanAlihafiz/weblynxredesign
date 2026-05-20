import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { NATURAL_LANGUAGE_PROCESSING_PAGE } from "@/data/site";

const { engagementModels } = NATURAL_LANGUAGE_PROCESSING_PAGE;

export function NlpEngagement() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-11 shadow-[var(--shadow-inset-soft)] sm:py-12">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance text-4xl font-semibold leading-tight text-[var(--text)]">
          {engagementModels.heading.before}
          <span className="text-[var(--red)]">{engagementModels.heading.emphasis}</span>
          {engagementModels.heading.after}
        </h2>
        <p className="mb-5 max-w-lg text-lg leading-tight text-[var(--text-muted)]">{engagementModels.description}</p>

        <div className="grid gap-3 md:grid-cols-3 md:items-stretch">
          {engagementModels.tiers.map((tier) => (
            <article
              key={tier.code}
              className={
                tier.highlighted
                  ? "relative rounded-xl border-2 border-[var(--red)] bg-gradient-to-b from-[rgba(230,57,70,0.05)] to-transparent p-5"
                  : "rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-5"
              }
            >
              {tier.highlighted && "badge" in tier && tier.badge ? (
                <div className="absolute -top-[11px] left-5 rounded-full bg-[var(--red)] px-2.5 py-0.5 text-sm font-semibold text-[var(--text)]">
                  {tier.badge}
                </div>
              ) : null}
              <p className="mb-1.5 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">{tier.code}</p>
              <h3 className="mb-1 text-base font-semibold text-[var(--text)]">{tier.name}</h3>
              <p className="mb-3.5 text-base leading-relaxed text-[var(--text-muted)]">{tier.duration}</p>
              <div className="mb-3.5 border-t border-[var(--border)] pt-3 text-base leading-relaxed text-[var(--text-muted)]">
                <ul className="list-none space-y-0">
                  {tier.features.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
              <Link
                href={engagementModels.ctaHref}
                className="inline-block text-sm font-semibold text-[var(--red)] transition-opacity hover:opacity-90"
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
