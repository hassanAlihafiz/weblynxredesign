import { ContentContainer } from "@/components/layout/ContentContainer";
const steps = [
  { week: "WEEK 1", n: "01", title: "Discover", detail: "Strategy call & scope" },
  { week: "WEEK 2", n: "02", title: "Design", detail: "Concepts & prototype" },
  { week: "WEEKS 3–5", n: "03", title: "Build", detail: "Develop & iterate" },
  { week: "WEEK 6", n: "04", title: "Launch", detail: "Ship & support" },
] as const;

export function ServicesProcess() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-14 md:py-20">
      <ContentContainer>
      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        Our process
      </p>

      <h2 className="mb-12 font-sans text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-[var(--text)] md:text-5xl">
        The same rhythm, every project
      </h2>

      <div className="grid gap-6 md:grid-cols-4">
        {steps.map(({ week, n, title, detail }) => (
          <div key={n}>
            <div className="mb-2 font-mono text-xs text-[var(--text-dim)]">{week}</div>
            <div className="mb-3 font-sans text-[2rem] font-bold leading-none text-[var(--red)] sm:text-[2.125rem]">
              {n}
            </div>
            <h4 className="mb-2 font-medium text-[var(--text)]">{title}</h4>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">{detail}</p>
          </div>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
