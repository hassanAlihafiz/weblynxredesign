const stats = [
  { value: "2025", label: "Founded" },
  { value: "12+", label: "Projects shipped" },
  { value: "4", label: "Countries served" },
  { value: "100%", label: "On-time delivery" },
] as const;

export function AboutStats() {
  return (
    <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] px-6 py-14 sm:px-8 md:py-14 lg:px-10">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <div className="mb-2 font-sans text-5xl font-bold tabular-nums leading-none tracking-[-0.03em] text-[var(--red)]">
              {value}
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
