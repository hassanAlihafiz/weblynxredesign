import { FinalCtaSection } from "@/components/CTA";
import { CLOUD_SUPPORT_AND_MAINTENANCE_PAGE } from "@/data/site";

const { finalCta } = CLOUD_SUPPORT_AND_MAINTENANCE_PAGE;

export function CloudSupportFinalCta() {
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
