import { ContentContainer } from "@/components/layout/ContentContainer";
import { NATURAL_LANGUAGE_PROCESSING_PAGE } from "@/data/site";

const { languages } = NATURAL_LANGUAGE_PROCESSING_PAGE;

export function NlpLanguages() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          <span className="text-[var(--red)]">100+ languages</span>, production-grade quality
        </h2>
        <p className="mb-5 max-w-lg text-lg leading-tight text-[var(--text-muted)]">{languages.description}</p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {languages.tiers.map((tier) => (
            <article
              key={tier.label}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4"
            >
              <p className="mb-2 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">{tier.label}</p>
              <p className="text-base leading-relaxed text-[var(--text)]">{tier.languages}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
