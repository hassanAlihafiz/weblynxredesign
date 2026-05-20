import { FinalCtaSection } from "@/components/CTA";
import { AI_DEVELOPMENT_PAGE } from "@/data/site";

const { finalCta } = AI_DEVELOPMENT_PAGE;

export function AiDevFinalCta() {
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
