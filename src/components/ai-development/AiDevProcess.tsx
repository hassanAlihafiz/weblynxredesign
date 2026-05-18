import { ContentContainer } from "@/components/layout/ContentContainer";

const steps = [
  {
    week: "Week 1",
    num: "01",
    title: "Discovery",
    body: "Map the use case, define success",
  },
  {
    week: "Week 2",
    num: "02",
    title: "Prototype",
    body: "Working demo, prove it can work",
  },
  {
    week: "Weeks 3–5",
    num: "03",
    title: "Build",
    body: "Production system, integrations",
  },
  {
    week: "Week 6",
    num: "04",
    title: "Eval",
    body: "Test quality, safety, edge cases",
  },
  {
    week: "Week 7",
    num: "05",
    title: "Launch",
    body: "Deploy + monitoring dashboard",
  },
] as const;

export function AiDevProcess() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h2 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          From idea to <span className="text-[var(--red)]">production AI</span> in 5 steps
        </h2>
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          AI projects need extra rigor we plan, prototype, and prove before we build.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {steps.map(({ week, num, title, body }) => (
            <div key={num} className="border-l-2 border-[var(--red)] pl-4">
              <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
                {week}
              </div>
              <div className="step-num mb-2">{num}</div>
              <h3 className="mb-1 text-sm font-medium text-[var(--text)]">{title}</h3>
              <p className="text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">{body}</p>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
