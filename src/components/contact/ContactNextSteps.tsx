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
    <section className="w-full border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] py-9 shadow-[var(--shadow-inset-soft)] sm:py-10 md:py-12">
      <ContentContainer>
      <p className="mb-2 text-base font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
        What happens next
      </p>
      <h2 className="mb-5 text-3xl font-medium sm:mb-6">After you hit send</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
        {steps.map(({ eyebrow, n, title, body }) => (
          <article
            key={n}
            className="rounded-[var(--border-radius-lg)] border border-[var(--color-border-tertiary)] bg-[var(--color-surface-raised)] p-4 shadow-[var(--shadow-card)] sm:p-4"
          >
            <p className="mb-1 text-base text-[var(--color-text-tertiary)]">{eyebrow}</p>
            <div className="mb-1.5 text-xl font-medium text-[var(--color-text-info)]">
              {n}
            </div>
            <h3 className="mb-1 text-xl font-medium">{title}</h3>
            <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">{body}</p>
          </article>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
