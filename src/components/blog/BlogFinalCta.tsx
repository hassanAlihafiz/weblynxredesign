import { FinalCtaSection } from "@/components/CTA";
import { BLOG_PAGE } from "@/data/site";

export function BlogFinalCta() {
  const { titleBefore, titleEmphasis, titleAfter, description, ctaLabel, ctaHref } = BLOG_PAGE.finalCta;

  return (
    <FinalCtaSection
      title={
        <>
          {titleBefore}
          <span className="text-[var(--red)]">{titleEmphasis}</span>
          {titleAfter}
        </>
      }
      description={description}
      ctaLabel={ctaLabel}
      ctaHref={ctaHref}
    />
  );
}
