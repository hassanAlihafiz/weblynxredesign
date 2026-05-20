import { FinalCtaSection } from "@/components/CTA";
import { NATURAL_LANGUAGE_PROCESSING_PAGE } from "@/data/site";

const { finalCta } = NATURAL_LANGUAGE_PROCESSING_PAGE;

export function NlpFinalCta() {
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
