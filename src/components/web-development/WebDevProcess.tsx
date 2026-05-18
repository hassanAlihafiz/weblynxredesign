import { ContentContainer } from "@/components/layout/ContentContainer";
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
    <section className="w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h2 className="mb-10 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          From kickoff to <span className="text-[var(--red)]">launch</span> in 4 steps
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
      </ContentContainer>
    </section>
  );
}
