import { ContentContainer } from "@/components/layout/ContentContainer";
export function AboutStatusStrip() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-14 md:py-14">
      <ContentContainer>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
            Based in
          </p>
          <p className="mb-2 font-sans text-2xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)]">
            Houston, Texas
          </p>
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">
            Working remotely with clients across the USA. GMT-6.
          </p>
        </div>
        <div>
          <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
            Currently accepting
          </p>
          <p className="mb-2 font-sans text-2xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)]">
            2 new projects this quarter
          </p>
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">Booking projects starting July 2026.</p>
        </div>
      </div>
    </ContentContainer>
    </section>
  );
}
