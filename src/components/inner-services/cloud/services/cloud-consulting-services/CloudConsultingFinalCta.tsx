import { FinalCtaSection } from "@/components/CTA";
import { CLOUD_CONSULTING_SERVICES_PAGE } from "@/data/site";

const { finalCta } = CLOUD_CONSULTING_SERVICES_PAGE;

export function CloudConsultingFinalCta() {
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
