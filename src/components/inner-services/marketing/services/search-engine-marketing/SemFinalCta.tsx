import { FinalCtaSection } from "@/components/CTA";
import { SEARCH_ENGINE_MARKETING_PAGE } from "@/data/site";

const { finalCta } = SEARCH_ENGINE_MARKETING_PAGE;

export function SemFinalCta() {
  return (
    <FinalCtaSection
      id={finalCta.id}
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
