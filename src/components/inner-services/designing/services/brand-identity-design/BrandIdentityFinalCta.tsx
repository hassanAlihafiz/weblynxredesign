import { FinalCtaSection } from "@/components/CTA";
import { BRAND_IDENTITY_DESIGN_PAGE } from "@/data/site";

const { finalCta } = BRAND_IDENTITY_DESIGN_PAGE;

export function BrandIdentityFinalCta() {
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
