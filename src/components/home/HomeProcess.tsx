import { ContentContainer } from "@/components/layout/ContentContainer";
const steps = [
  {
    week: "WEEK 1",
    n: "01",
    title: "Discover",
    text: "Strategy call, audit, and scope. We learn your business inside out.",
  },
  {
    week: "WEEK 2",
    n: "02",
    title: "Design",
    text: "Wireframes, prototype, sign-off. Aligned before we build.",
  },
  {
    week: "WEEKS 3–5",
    n: "03",
    title: "Build",
    text: "Develop, test, weekly demos. You see progress every Friday.",
  },
  {
    week: "WEEK 6",
    n: "04",
    title: "Launch",
    text: "Deploy, QA, handover. We stick around for 30 days.",
  },
] as const;

export function HomeProcess() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-14 md:py-20">
      <ContentContainer>

      <div className="mb-12">
        <h2 className="max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          The same rhythm <span className="text-[var(--red)]">every project</span>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ week, n, title, text }) => (
          <div key={n} className="relative">
            <div className="mb-2 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--text-dim)]">{week}</div>
            <div className="mb-3 font-sans text-[2rem] font-bold leading-none text-[var(--red)] sm:text-[2.125rem]">
              {n}
            </div>
            <h4 className="mb-2 font-medium text-[var(--text)]">{title}</h4>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">{text}</p>
          </div>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
