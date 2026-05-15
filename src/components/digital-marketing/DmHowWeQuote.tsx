const steps = [
  { num: "01", title: "Discovery call", body: "Free 30-min review of your goals." },
  { num: "02", title: "Custom plan", body: "Channels, scope, KPIs within 3 days." },
  { num: "03", title: "Kickoff", body: "Audit + strategy in first 2 weeks." },
] as const;

export function DmHowWeQuote() {
  return (
    <section className="border-t border-[var(--border-subtle)] px-6 py-10 shadow-[var(--shadow-inset-soft)] sm:px-8 sm:py-11 md:py-12 lg:px-10">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
            How we quote
          </p>
          <h2 className="max-w-md text-balance font-sans text-3xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)] md:text-4xl">
            Every business is different. So is every plan.
          </h2>
        </div>
        <div>
          <p className="mb-8 max-w-xl leading-relaxed text-[var(--text-muted)]">
            After a 30-minute discovery call, we send a detailed proposal within 3 business days — channels, monthly
            retainer scope, KPIs, and pricing.
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {steps.map(({ num, title, body }) => (
              <article
                key={num}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-4 shadow-[var(--shadow-xs)]"
              >
                <div className="mb-2 text-2xl font-bold leading-none tracking-tight text-[var(--red)]">{num}</div>
                <h3 className="mb-1 text-sm font-medium text-[var(--text)]">{title}</h3>
                <p className="text-xs leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
