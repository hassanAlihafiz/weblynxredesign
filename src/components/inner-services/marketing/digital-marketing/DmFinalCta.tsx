import { FinalCtaSection } from "@/components/CTA";
import { DIGITAL_MARKETING_PAGE } from "@/data/site";

const { finalCta } = DIGITAL_MARKETING_PAGE;

export function DmFinalCta() {
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
