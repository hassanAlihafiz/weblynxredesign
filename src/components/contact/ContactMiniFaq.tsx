import { ContentContainer } from "@/components/layout/ContentContainer";
import { CONTACT_FAQS } from "@/data/site";

export function ContactMiniFaq() {
  return (
    <section className="w-full border-b border-[var(--color-border-tertiary)] py-9 sm:py-10 md:py-12">
      <ContentContainer>
      <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">A few quick answers <span className="text-[var(--red)]">Before you reach out</span></h2>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
        {CONTACT_FAQS.map(({ q, a }) => (
          <article
            key={q}
            className="rounded-[var(--border-radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)]"
          >
            <h3 className="mb-1.5 text-xl font-medium text-[var(--text)]">{q}</h3>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">{a}</p>
          </article>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
