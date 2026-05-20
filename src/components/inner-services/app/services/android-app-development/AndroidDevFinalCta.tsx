import { FinalCtaSection } from "@/components/CTA";
import { ANDROID_APP_DEV_PAGE } from "@/data/site";

const { finalCta } = ANDROID_APP_DEV_PAGE;

export function AndroidDevFinalCta() {
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
