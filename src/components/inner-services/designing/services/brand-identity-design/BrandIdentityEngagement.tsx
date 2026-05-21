import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { BRAND_IDENTITY_DESIGN_PAGE } from "@/data/site";

const { engagementModels } = BRAND_IDENTITY_DESIGN_PAGE;

export function BrandIdentityEngagement() {
  return (
    <section className="w-full border-t border-[var(--border)] py-11 sm:py-12">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Find the <span className="text-[var(--red)]">engagement</span> that fits
        </h2>
        <p className="mb-5 max-w-xl text-balance leading-relaxed text-[var(--text-muted)] sm:mb-6">{engagementModels.description}</p>

        <div className="grid gap-3 md:grid-cols-3 md:items-stretch">
          {engagementModels.tiers.map((tier) => (
            <article
              key={tier.code}
              className={
                tier.highlighted
                  ? "relative rounded-[var(--border-radius-md)] border-2 border-[var(--red)] bg-gradient-to-b from-[var(--red-glow)] to-transparent p-5"
                  : "rounded-[var(--border-radius-md)] border border-[var(--border)] bg-[var(--bg-elev)] p-5"
              }
            >
              {tier.highlighted && "badge" in tier && tier.badge ? (
                <div className="absolute -top-2.5 left-5 rounded-full bg-[var(--red)] px-2.5 py-0.5 text-sm font-semibold text-[var(--text)]">
                  {tier.badge}
                </div>
              ) : null}
              <p className="mb-1.5 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">{tier.code}</p>
              <h3 className="mb-1 text-sm font-semibold text-[var(--text)]">{tier.name}</h3>
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
                className="inline-block text-[11px] font-semibold text-[var(--red)] transition-opacity hover:opacity-90"
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
