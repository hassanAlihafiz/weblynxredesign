import { ContentContainer } from "@/components/layout/ContentContainer";
const steps = [
  { week: "WEEK 1", num: "01", title: "Discovery", detail: "Scope, features, user flow" },
  { week: "WEEKS 2–3", num: "02", title: "Design", detail: "UI/UX, prototype, sign-off" },
  { week: "WEEKS 4–7", num: "03", title: "Build", detail: "Develop, weekly TestFlight" },
  { week: "WEEK 8", num: "04", title: "QA & Beta", detail: "Real device testing" },
  { week: "WEEK 9", num: "05", title: "Launch", detail: "Submit + go live" },
] as const;

export function AppDevProcessSteps() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
      <h2 className="mb-10 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
        From idea to <span className="text-[var(--red)]">App Store</span> in 5 steps
      </h2>
      <div className="grid gap-4 md:grid-cols-5">
        {steps.map(({ week, num, title, detail }) => (
          <div key={num} className="border-l-2 border-[var(--red)] pl-3">
            <div className="mb-1 font-mono text-[10px] text-[var(--text-dim)]">{week}</div>
            <div className="mb-2 font-sans text-[2rem] font-bold leading-none text-[var(--red)] sm:text-[2.125rem]">{num}</div>
            <h3 className="mb-1 text-sm font-medium text-[var(--text)]">{title}</h3>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">{detail}</p>
          </div>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
