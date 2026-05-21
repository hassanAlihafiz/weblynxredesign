import { ContentContainer } from "@/components/layout/ContentContainer";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";
import { CASE_STUDIES_PAGE } from "@/data/site";

const { header } = CASE_STUDIES_PAGE;

export function CaseStudiesPageHeader() {
  return (
    <section className="relative w-full overflow-hidden border-t border-[var(--border-subtle)] py-14 md:py-20">
      <HeroGridBackground />
      <ContentContainer className="relative z-10">
        <h1 className="mb-8 max-w-2xl text-balance font-sans text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-7xl">
          Real projects, <span className="text-[var(--red)]">real results</span>, real businesses
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{header.description}</p>
      </ContentContainer>
    </section>
  );
}
