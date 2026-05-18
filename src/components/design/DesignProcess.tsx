import { ContentContainer } from "@/components/layout/ContentContainer";

const steps = [
  {
    week: "Week 1",
    num: "01",
    title: "Discover",
    body: "Research, audit, mood boards.",
  },
  {
    week: "Week 2",
    num: "02",
    title: "Explore",
    body: "2–3 directions, present concepts.",
  },
  {
    week: "Week 3",
    num: "03",
    title: "Refine",
    body: "Pick a direction, polish details.",
  },
  {
    week: "Week 4",
    num: "04",
    title: "System",
    body: "Build out guidelines, components.",
  },
  {
    week: "Week 5",
    num: "05",
    title: "Handoff",
    body: "Deliver files, brand book, support.",
  },
] as const;

export function DesignProcess() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h2 className="mb-8 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          From blank page to <span className="text-[var(--red)]">brand book</span> in 5 steps
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {steps.map(({ week, num, title, body }) => (
            <div key={num} className="border-l-2 border-[var(--red)] pl-4">
              <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-[var(--text-dim)]">
                {week}
              </div>
              <div className="step-num mb-2">{num}</div>
              <h3 className="mb-1 text-sm font-semibold text-[var(--text)]">{title}</h3>
              <p className="text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">{body}</p>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
