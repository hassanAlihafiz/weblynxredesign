import { FinalCtaSection } from "@/components/CTA";
import { ABOUT_PAGE } from "@/data/site";

const { finalCta } = ABOUT_PAGE;

export function AboutFinalCta() {
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
