import { ContentContainer } from "@/components/layout/ContentContainer";
import { DIGITAL_MARKETING_PAGE, MARKETING_RESULTS_STATS } from "@/data/site";

const { results } = DIGITAL_MARKETING_PAGE;

export function DmResults() {
  return (
    <section
      id={results.sectionId}
      className="border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12"
    >
      <ContentContainer>
        <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
          {results.eyebrow}
        </p>
        <h2 className="mb-10 max-w-2xl text-balance font-sans text-3xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)] md:text-4xl">
          {results.heading}
        </h2>
        <div className="grid gap-4 md:grid-cols-4">
          {MARKETING_RESULTS_STATS.map(({ value, label }) => (
            <article
              key={label}
              className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-5 text-left shadow-[var(--shadow-xs)]"
            >
              <div className="mb-2 text-3xl font-bold tabular-nums text-[var(--red)]">{value}</div>
              <p className="text-xs leading-relaxed text-[var(--text-muted)]">{label}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
