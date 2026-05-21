import { FinalCtaSection } from "@/components/CTA";
import { CLOUD_APPLICATION_DEVELOPMENT_PAGE } from "@/data/site";

const { finalCta } = CLOUD_APPLICATION_DEVELOPMENT_PAGE;

export function CloudAppDevFinalCta() {
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
