import { ContentContainer } from "@/components/layout/ContentContainer";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";
import { CASE_STUDIES_PAGE } from "@/data/site";
import { CaseStudiesPageHeading } from "./CaseStudiesPageHeading";

const { header } = CASE_STUDIES_PAGE;

export function CaseStudiesPageHeader() {
  return (
    <section className="relative w-full overflow-hidden border-t border-[var(--border-subtle)] py-14 md:py-20">
      <HeroGridBackground />
      <ContentContainer className="relative z-10">
        <CaseStudiesPageHeading heading={header.heading} />
        <p className="max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{header.description}</p>
      </ContentContainer>
    </section>
  );
}
