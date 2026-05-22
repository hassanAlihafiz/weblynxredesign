import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_SUPPORT_AND_MAINTENANCE_PAGE } from "@/data/site";

const { supportPlans } = CLOUD_SUPPORT_AND_MAINTENANCE_PAGE;

export function CloudSupportPlans() {
  return (
    <section
      id={supportPlans.id}
      className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-11 sm:py-12"
    >
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance text-6xl font-bold leading-tight tracking-[-0.02em] text-[var(--text)]">
          Find the plan that <span className="text-[var(--red)]">fits</span>
        </h2>
        <p className="mb-5 max-w-lg text-base leading-relaxed text-[var(--text-muted)]">
          {supportPlans.description}
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {supportPlans.tiers.map((tier) => (
            <article
              key={tier.code}
              className={
                tier.highlighted
                  ? "relative rounded-xl border-2 border-[var(--red)] bg-gradient-to-b from-[var(--red-glow)] to-transparent p-5"
                  : "rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-5"
              }
            >
              {tier.highlighted && "badge" in tier && tier.badge ? (
                <div className="absolute -top-2.5 left-5 rounded-full bg-[var(--red)] px-2.5 py-0.5 text-sm font-semibold text-[var(--text)]">
                  {tier.badge}
                </div>
              ) : null}
              <p className="mb-1.5 text-sm font-semibold uppercase tracking-wide text-[var(--text-dim)]">
                {tier.code}
              </p>
              <h3 className="mb-1 text-base font-semibold text-[var(--text)]">{tier.name}</h3>
              <p className="mb-3.5 text-base text-[var(--text-muted)]">{tier.duration}</p>
              <ul className="mb-3.5 list-none space-y-0 border-t border-[var(--border)] pt-3 text-base leading-relaxed text-[var(--text-muted)]">
                {tier.features.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <Link
                href={supportPlans.ctaHref}
                className="inline-block text-[11px] font-semibold text-[var(--red)] transition-opacity hover:opacity-90"
              >
                {supportPlans.ctaLabel} →
              </Link>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
