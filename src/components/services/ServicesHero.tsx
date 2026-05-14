import { SectionEyebrow } from "@/components/home/SectionEyebrow";

export function ServicesHero() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] py-12 pb-10 shadow-[var(--shadow-inset-soft)] sm:py-14 md:pb-12 md:pt-14">
      <SectionEyebrow className="mb-3">SECTION 1 — HERO</SectionEyebrow>
      <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
        Services
      </p>
      <h1 className="mb-3.5 max-w-[520px] text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl md:text-[32px] md:leading-[1.2]">
        Everything you need to build, launch, and grow online.
      </h1>
      <p className="max-w-[460px] text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-[14px] sm:leading-[1.7]">
        From your first landing page to a full product launch — four services that work together, or stand alone.
      </p>
    </section>
  );
}
