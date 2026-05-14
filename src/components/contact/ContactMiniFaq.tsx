import { SectionEyebrow } from "@/components/home/SectionEyebrow";

const faqs = [
  {
    q: "What's your minimum project size?",
    a: "Most projects start at $1,500 — but we'll talk if budget is flexible.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. Most of our clients are in the US, EU, and UK. We bill in USD.",
  },
  {
    q: "How fast can you start?",
    a: "Usually within 1–2 weeks of sign-off. We book 1 quarter ahead.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes — before any project details are shared. Just ask.",
  },
] as const;

export function ContactMiniFaq() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] py-9 sm:py-10 md:py-12">
      <SectionEyebrow className="mb-3.5">SECTION 4 — MINI FAQ</SectionEyebrow>
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
        Before you reach out
      </p>
      <h2 className="mb-5 text-xl font-medium sm:mb-6 sm:text-[22px]">A few quick answers</h2>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
        {faqs.map(({ q, a }) => (
          <article
            key={q}
            className="rounded-[var(--border-radius-lg)] border border-[var(--color-border-tertiary)] bg-[var(--color-surface-raised)] p-3.5 shadow-[var(--shadow-sm)] sm:p-4"
          >
            <h3 className="mb-1.5 text-[13px] font-medium leading-snug">{q}</h3>
            <p className="text-[11px] leading-relaxed text-[var(--color-text-secondary)]">{a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
