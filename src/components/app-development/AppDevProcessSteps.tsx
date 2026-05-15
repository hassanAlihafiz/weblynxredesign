const steps = [
  { week: "WEEK 1", num: "01", title: "Discovery", detail: "Scope, features, user flow" },
  { week: "WEEKS 2–3", num: "02", title: "Design", detail: "UI/UX, prototype, sign-off" },
  { week: "WEEKS 4–7", num: "03", title: "Build", detail: "Develop, weekly TestFlight" },
  { week: "WEEK 8", num: "04", title: "QA & Beta", detail: "Real device testing" },
  { week: "WEEK 9", num: "05", title: "Launch", detail: "Submit + go live" },
] as const;

export function AppDevProcessSteps() {
  return (
    <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] px-6 py-10 shadow-[var(--shadow-inset-soft)] sm:px-8 sm:py-11 md:py-12 lg:px-10">
      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        How it works
      </p>
      <h2 className="mb-10 max-w-3xl text-balance font-sans text-3xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)] md:text-4xl">
        From idea to App Store in 5 steps
      </h2>
      <div className="grid gap-4 md:grid-cols-5">
        {steps.map(({ week, num, title, detail }) => (
          <div key={num} className="border-l-2 border-[var(--red)] pl-3">
            <div className="mb-1 font-mono text-[10px] text-[var(--text-dim)]">{week}</div>
            <div className="mb-2 text-2xl font-bold leading-none tracking-tight text-[var(--red)]">{num}</div>
            <h3 className="mb-1 text-sm font-medium text-[var(--text)]">{title}</h3>
            <p className="text-xs leading-relaxed text-[var(--text-muted)]">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
