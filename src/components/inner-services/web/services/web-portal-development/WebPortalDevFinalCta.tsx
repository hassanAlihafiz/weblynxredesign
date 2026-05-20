import { FinalCtaSection } from "@/components/CTA";
import { WEB_PORTAL_DEV_PAGE } from "@/data/site";

const { finalCta } = WEB_PORTAL_DEV_PAGE;

export function WebPortalDevFinalCta() {
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
