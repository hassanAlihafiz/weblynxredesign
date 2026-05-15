import { SectionEyebrow } from "@/components/home/SectionEyebrow";

export function WorkPageHeader() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] px-6 sm:px-8 lg:px-10 py-9 sm:py-10 md:py-11 shadow-[var(--shadow-inset-soft)]">
      <SectionEyebrow className="mb-3 !text-[var(--color-text-tertiary)] sm:mb-4">SECTION 1 — PAGE HEADER</SectionEyebrow>
      <p className="mb-2 text-base font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
        Selected work
      </p>
      <h1 className="mb-2.5 max-w-[480px] text-2xl font-medium leading-tight tracking-tight text-balance sm:text-3xl md:text-[30px] md:leading-[1.2]">
        Real projects. Real results. Real businesses.
      </h1>
      <p className="max-w-[440px] text-base leading-relaxed text-[var(--color-text-secondary)]">
        A look inside the projects we&apos;ve shipped — the problems, the process, and the outcomes that mattered.
      </p>
    </section>
  );
}
