import { SectionEyebrow } from "@/components/home/SectionEyebrow";

export function ContactIntro() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] py-10 pb-8 shadow-[var(--shadow-inset-soft)] sm:py-12 sm:pb-10 md:py-14">
      <SectionEyebrow className="mb-3">SECTION 1 — INTRO</SectionEyebrow>
      <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
        Get in touch
      </p>
      <h1 className="mb-3 max-w-[480px] text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl md:text-[30px] md:leading-[1.2]">
        Tell us about your project.
      </h1>
      <p className="max-w-[440px] text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-[14px] sm:leading-[1.7]">
        We&apos;ll get back within 24 hours — usually faster. No pitches, no pressure, just a real reply from a
        real person.
      </p>
    </section>
  );
}
