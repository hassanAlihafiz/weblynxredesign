import { ContentContainer } from "@/components/layout/ContentContainer";

export function ContactIntro() {
  return (
    <section className="w-full border-b border-[var(--color-border-tertiary)] py-10 pb-8 shadow-[var(--shadow-inset-soft)] sm:py-12 sm:pb-10 md:py-14">
      <ContentContainer>
      <p className="mb-2.5 text-base font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
        Get in touch
      </p>
      <h1 className="mb-3 max-w-[480px] text-3xl font-medium leading-snug tracking-tight text-balance">
        Tell us about your project.
      </h1>
      <p className="max-w-[440px] text-base leading-relaxed text-[var(--color-text-secondary)]">
        We&apos;ll get back within 24 hours usually faster. No pitches, no pressure, just a real reply from a
        real person.
      </p>
    </ContentContainer>
    </section>
  );
}
