import { ContentContainer } from "@/components/layout/ContentContainer";

export function WorkPageHeader() {
  return (
    <section className="w-full border-b border-[var(--color-border-tertiary)] py-9 sm:py-10 md:py-11 shadow-[var(--shadow-inset-soft)]">
      <ContentContainer>
      <p className="mb-2 text-base font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
        Selected work
      </p>
      <h1 className="mb-2.5 max-w-[480px] text-2xl font-medium leading-tight tracking-tight text-balance sm:text-3xl md:text-[30px] md:leading-[1.2]">
        Real projects. Real results. Real businesses.
      </h1>
      <p className="max-w-[440px] text-base leading-relaxed text-[var(--color-text-secondary)]">
        A look inside the projects we&apos;ve shipped the problems, the process, and the outcomes that mattered.
      </p>
    </ContentContainer>
    </section>
  );
}
