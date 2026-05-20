import { FinalCtaSection } from "@/components/CTA";
import { HOME_PAGE } from "@/data/site";

const { finalCta } = HOME_PAGE;

export function HomeFinalCta() {
  return (
    <FinalCtaSection
      title={
        <>
          {finalCta.titleLine1}
          <br />
          {finalCta.titleLine2Before}
          <span className="text-[var(--red)]">{finalCta.titleLine2Emphasis}</span>
          {finalCta.titleLine2After}
        </>
      }
      description={finalCta.description}
      ctaLabel={finalCta.ctaLabel}
      ctaHref={finalCta.ctaHref}
    />
  );
}
