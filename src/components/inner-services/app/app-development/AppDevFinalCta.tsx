import { FinalCtaSection } from "@/components/CTA";
import { APP_DEVELOPMENT_PAGE } from "@/data/site";

const { finalCta } = APP_DEVELOPMENT_PAGE;

export function AppDevFinalCta() {
  return (
    <FinalCtaSection
      id={finalCta.id}
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
