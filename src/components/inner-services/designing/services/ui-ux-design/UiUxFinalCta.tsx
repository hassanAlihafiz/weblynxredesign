import { FinalCtaSection } from "@/components/CTA";
import { UI_UX_DESIGN_PAGE } from "@/data/site";

const { finalCta } = UI_UX_DESIGN_PAGE;

export function UiUxFinalCta() {
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
