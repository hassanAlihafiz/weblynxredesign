import { FinalCtaSection } from "@/components/CTA";
import { SOCIAL_MEDIA_MARKETING_PAGE } from "@/data/site";

const { finalCta } = SOCIAL_MEDIA_MARKETING_PAGE;

export function SmmFinalCta() {
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
