import { FinalCtaSection } from "@/components/CTA";
import { DESIGN_PAGE } from "@/data/site";

const { finalCta } = DESIGN_PAGE;

export function DesignFinalCta() {
  return (
    <FinalCtaSection
      id={finalCta.id}
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
