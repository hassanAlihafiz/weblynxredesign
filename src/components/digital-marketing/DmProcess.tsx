const steps = [
  { num: "01", title: "Audit", body: "Channels, gaps, baseline metrics" },
  { num: "02", title: "Strategy", body: "90-day plan, channel priorities" },
  { num: "03", title: "Execute", body: "Launch, optimize, scale winners" },
  { num: "04", title: "Measure & iterate", body: "Monthly review, refine, repeat" },
] as const;

export function DmProcess() {
  return (
    <section className="border-t border-[var(--border-subtle)] px-6 py-10 shadow-[var(--shadow-inset-soft)] sm:px-8 sm:py-11 md:py-12 lg:px-10">
      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        How it works
      </p>
      <h2 className="mb-3 max-w-2xl text-balance font-sans text-3xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)] md:text-4xl">
        A growth loop, not a campaign
      </h2>
      <p className="mb-10 max-w-md text-base leading-relaxed text-[var(--text-muted)]">
        Marketing isn&apos;t one-and-done. We work in monthly cycles that compound over time.
      </p>
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map(({ num, title, body }) => (
          <article
            key={num}
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)]"
          >
            <div className="step-num mb-3">{num}</div>
            <h3 className="mb-2 font-medium text-[var(--text)]">{title}</h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
