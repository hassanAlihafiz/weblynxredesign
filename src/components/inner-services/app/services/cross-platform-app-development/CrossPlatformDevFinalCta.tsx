import { FinalCtaSection } from "@/components/CTA";
import { CROSS_PLATFORM_APP_DEV_PAGE } from "@/data/site";

const { finalCta } = CROSS_PLATFORM_APP_DEV_PAGE;

export function CrossPlatformDevFinalCta() {
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
