import { FinalCtaSection } from "@/components/CTA";
import { ECOMMERCE_WEB_DEV_PAGE } from "@/data/site";

const { finalCta } = ECOMMERCE_WEB_DEV_PAGE;

export function EcommerceWebDevFinalCta() {
  return (
    <FinalCtaSection
      className={finalCta.className}
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
