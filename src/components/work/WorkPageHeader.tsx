import { SectionEyebrow } from "@/components/home/SectionEyebrow";

export function WorkPageHeader() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] pb-6 pt-10 shadow-[var(--shadow-inset-soft)] sm:pb-8 sm:pt-12 md:pb-8 md:pt-12">
      <SectionEyebrow className="mb-3 !text-[var(--color-text-tertiary)] sm:mb-4">SECTION 1 — PAGE HEADER</SectionEyebrow>
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
        Selected work
      </p>
      <h1 className="mb-2.5 max-w-[480px] text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl md:text-[30px] md:leading-[1.2]">
        Real projects. Real results. Real businesses.
      </h1>
      <p className="max-w-[440px] text-[13px] leading-relaxed text-[var(--color-text-secondary)] sm:leading-[1.6]">
        A look inside the projects we&apos;ve shipped — the problems, the process, and the outcomes that mattered.
      </p>
    </section>
  );
}
