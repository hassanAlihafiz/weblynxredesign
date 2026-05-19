import { ContentContainer } from "@/components/layout/ContentContainer";
import { CASE_STUDIES_STATS } from "@/data/site";

export function CaseStudiesStats() {
  return (
    <section className="w-full border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] py-9 sm:py-10 md:py-11 shadow-[var(--shadow-inset-soft)]">
      <ContentContainer>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-3">
        {CASE_STUDIES_STATS.map(({ value, label }) => (
          <div
            key={label}
            className="rounded-[var(--border-radius-lg)] bg-[var(--color-background-primary)] px-3 py-4 text-center shadow-[var(--shadow-card)]"
          >
            <div className="text-xl font-medium tabular-nums">{value}</div>
            <div className="mt-1 text-base text-[var(--color-text-secondary)]">{label}</div>
          </div>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
