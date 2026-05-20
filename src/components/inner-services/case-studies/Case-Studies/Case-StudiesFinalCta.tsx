import { FinalCtaSection } from "@/components/CTA";
import { CASE_STUDIES_PAGE } from "@/data/site";

const { finalCta } = CASE_STUDIES_PAGE;

export function CaseStudiesFinalCta() {
  return (
    <FinalCtaSection
      title={
        <>
          {finalCta.titleBefore}
          <span className="text-[var(--red)]">{finalCta.titleEmphasis}</span>
          {finalCta.titleAfter}
        </>
      }
      description={finalCta.description}
      ctaLabel={finalCta.ctaLabel}
      ctaHref={finalCta.ctaHref}
    />
  );
}
