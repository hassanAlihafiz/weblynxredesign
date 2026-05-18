import { ContentContainer } from "@/components/layout/ContentContainer";
const steps = [
  { num: "01", title: "Audit", body: "Channels, gaps, baseline metrics" },
  { num: "02", title: "Strategy", body: "90-day plan, channel priorities" },
  { num: "03", title: "Execute", body: "Launch, optimize, scale winners" },
  { num: "04", title: "Measure & iterate", body: "Monthly review, refine, repeat" },
] as const;

export function DmProcess() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
      <h2 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
        A growth loop, not a <span className="text-[var(--red)]">campaign</span>
      </h2>
      <p className="mb-10 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
        Marketing isn&apos;t one-and-done. We work in monthly cycles that compound over time.
      </p>
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map(({ num, title, body }) => (
          <article
            key={num}
            className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)]"
          >
            <div className="mb-2 font-sans text-[2rem] font-bold leading-none text-[var(--red)] sm:text-[2.125rem]">{num}</div>
            <h3 className="mb-2 font-medium text-[var(--text)]">{title}</h3>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
          </article>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
