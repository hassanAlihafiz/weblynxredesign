import { ContentContainer } from "@/components/layout/ContentContainer";

const faqs = [
  {
    q: "What's your minimum project size?",
    a: "Most projects start at $1,500 but we'll talk if budget is flexible.",
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
    a: "Yes before any project details are shared. Just ask.",
  },
] as const;

export function ContactMiniFaq() {
  return (
    <section className="w-full border-b border-[var(--color-border-tertiary)] py-9 sm:py-10 md:py-12">
      <ContentContainer>
      <p className="mb-2 text-base font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
        Before you reach out
      </p>
      <h2 className="mb-5 text-3xl font-medium sm:mb-6">A few quick answers</h2>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
        {faqs.map(({ q, a }) => (
          <article
            key={q}
            className="rounded-[var(--border-radius-lg)] border border-[var(--color-border-tertiary)] bg-[var(--color-surface-raised)] p-4 shadow-[var(--shadow-card)]"
          >
            <h3 className="mb-1.5 text-xl font-medium leading-snug">{q}</h3>
            <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">{a}</p>
          </article>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
