import { FinalCtaSection } from "@/components/CTA";
import { AI_AGENT_DEVELOPMENT_PAGE } from "@/data/site";

const { finalCta } = AI_AGENT_DEVELOPMENT_PAGE;

export function AiAgentFinalCta() {
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
