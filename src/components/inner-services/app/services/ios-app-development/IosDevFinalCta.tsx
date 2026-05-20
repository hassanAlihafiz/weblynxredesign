import { FinalCtaSection } from "@/components/CTA";
import { IOS_APP_DEV_PAGE } from "@/data/site";

const { finalCta } = IOS_APP_DEV_PAGE;

export function IosDevFinalCta() {
  return (
    <FinalCtaSection
      id={finalCta.sectionId}
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
