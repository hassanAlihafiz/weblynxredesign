import { ContentContainer } from "@/components/layout/ContentContainer";
import { ABOUT_STATS } from "@/data/site";

export function AboutStats() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-14 md:py-14">
      <ContentContainer>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {ABOUT_STATS.map(({ value, label }) => (
          <div key={label}>
            <div className="mb-2 font-sans text-5xl font-bold tabular-nums leading-none tracking-[-0.03em] text-[var(--red)]">
              {value}
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">{label}</div>
          </div>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
