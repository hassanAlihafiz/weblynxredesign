import { SectionEyebrow } from "@/components/home/SectionEyebrow";

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
    body: "Detailed scope, timeline, and fixed price — no surprises.",
  },
] as const;

export function ContactNextSteps() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] py-9 shadow-[var(--shadow-inset-soft)] sm:py-10 md:py-12">
      <SectionEyebrow className="mb-3.5">SECTION 3 — WHAT HAPPENS NEXT</SectionEyebrow>
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
        What happens next
      </p>
      <h2 className="mb-5 text-xl font-medium sm:mb-6 sm:text-[22px]">After you hit send</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
        {steps.map(({ eyebrow, n, title, body }) => (
          <article
            key={n}
            className="rounded-[var(--border-radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-background-primary)] p-4 shadow-[var(--shadow-card)] sm:p-4"
          >
            <p className="mb-1 text-[11px] text-[var(--color-text-tertiary)]">{eyebrow}</p>
            <div className="mb-1.5 text-xl font-medium tabular-nums text-[var(--color-text-info)] drop-shadow-[0_0_12px_rgba(251,44,54,0.25)] sm:text-[20px]">
              {n}
            </div>
            <h3 className="mb-1 text-[13px] font-medium">{title}</h3>
            <p className="text-[11px] leading-relaxed text-[var(--color-text-secondary)]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
