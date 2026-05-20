import { FinalCtaSection } from "@/components/CTA";
import { WEB_DEVELOPMENT_PAGE } from "@/data/site";

const { finalCta } = WEB_DEVELOPMENT_PAGE;

export function WebDevFinalCta() {
  return (
    <FinalCtaSection
      id={finalCta.id}
      className={finalCta.className}
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
