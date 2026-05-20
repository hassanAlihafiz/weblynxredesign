import { FinalCtaSection } from "@/components/CTA";
import { SERVICES_PAGE } from "@/data/site";

const { finalCta } = SERVICES_PAGE;

export function ServicesFinalCta() {
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
