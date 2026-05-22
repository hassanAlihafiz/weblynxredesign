import { FinalCtaSection } from "@/components/CTA";
import { CLOUD_MIGRATION_PAGE } from "@/data/site";

const { finalCta } = CLOUD_MIGRATION_PAGE;

export function CloudMigrationFinalCta() {
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
