import { ContentContainer } from "@/components/layout/ContentContainer";

const steps = [
  {
    eyebrow: "Within 24 hours",
    n: "01",
    title: "We reply",
    body: "A real person reads your message and writes back with thoughts.",
  },
  {
    eyebrow: "Within a week",
    n: "02",
    title: "Quick call",
    body: "30-minute Zoom or Google Meet to align on scope and goals.",
  },
  {
    eyebrow: "Within 3 days after",
    n: "03",
    title: "Proposal & quote",
    body: "Detailed scope, timeline, and fixed price no surprises.",
  },
] as const;

export function ContactNextSteps() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
      <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">After you hit send <span className="text-[var(--red)]">What happens next</span></h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
        {steps.map(({ eyebrow, n, title, body }) => (
          <article
            key={n}
            className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)]"
          >
            <p className="mb-1 text-base font-medium text-[var(--text)]">{eyebrow}</p>
            <div className="mb-1.5 font-sans text-[2rem] font-bold leading-none text-[var(--red)] sm:text-[2.125rem]">
              {n}
            </div>
            <h3 className="mb-1 text-xl font-medium text-[var(--text)]">{title}</h3>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
          </article>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
