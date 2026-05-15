const steps = [
  {
    week: "WEEK 1",
    num: "01",
    title: "Discovery",
    body: "Strategy call, audit, scope & brief",
  },
  {
    week: "WEEK 2",
    num: "02",
    title: "Design",
    body: "Wireframes, prototype, sign-off",
  },
  {
    week: "WEEKS 3–5",
    num: "03",
    title: "Build",
    body: "Develop, test, weekly demos",
  },
  {
    week: "WEEK 6",
    num: "04",
    title: "Launch",
    body: "Deploy, QA, handover & support",
  },
] as const;

export function WebDevProcess() {
  return (
    <section className="border-t border-[var(--border-subtle)] px-6 py-10 shadow-[var(--shadow-inset-soft)] sm:px-8 sm:py-11 md:py-12 lg:px-10">
      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        How it works
      </p>
      <h2 className="mb-10 max-w-3xl text-balance font-sans text-3xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)] md:text-4xl">
        From kickoff to launch in 4 steps
      </h2>
      <div className="grid gap-6 md:grid-cols-4">
        {steps.map(({ week, num, title, body }) => (
          <div key={num} className="border-l-2 border-[var(--red)] pl-4">
            <div className="mb-2 font-mono text-xs text-[var(--text-dim)]">{week}</div>
            <div className="step-num mb-2">{num}</div>
            <h3 className="mb-2 font-medium text-[var(--text)]">{title}</h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
