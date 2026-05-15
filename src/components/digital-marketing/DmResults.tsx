const stats = [
  { value: "+320%", label: "Organic traffic for Lumen Beauty (6 months)" },
  { value: "4.2×", label: "Return on ad spend for NorthBrand" },
  { value: "−47%", label: "Cost per lead for Acme SaaS" },
  { value: "12k", label: "New email subscribers for Stackline (Q1)" },
] as const;

export function DmResults() {
  return (
    <section
      id="results"
      className="border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] px-6 py-10 shadow-[var(--shadow-inset-soft)] sm:px-8 sm:py-11 md:py-12 lg:px-10"
    >
      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        Recent results
      </p>
      <h2 className="mb-10 max-w-2xl text-balance font-sans text-3xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)] md:text-4xl">
        What growth looks like
      </h2>
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(({ value, label }) => (
          <article
            key={label}
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-5 text-left shadow-[var(--shadow-xs)]"
          >
            <div className="mb-2 text-3xl font-bold tabular-nums text-[var(--red)]">{value}</div>
            <p className="text-xs leading-relaxed text-[var(--text-muted)]">{label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
