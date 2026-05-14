import { SectionEyebrow } from "@/components/home/SectionEyebrow";

export function AboutIntro() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] py-12 pb-8 shadow-[var(--shadow-inset-soft)] sm:py-14">
      <SectionEyebrow className="mb-3">SECTION 1 — INTRO</SectionEyebrow>
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
        About Weblynx
      </p>
      <h1 className="mb-3.5 max-w-[520px] text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl md:text-[30px]">
        A small studio building the web for ambitious founders
      </h1>
      <p className="max-w-[480px] text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-[14px] sm:leading-[1.7]">
        We&apos;re a tight team of developers, designers, and marketers who believe great products come from
        clear thinking — not bigger teams or fancier tools.
      </p>
    </section>
  );
}
