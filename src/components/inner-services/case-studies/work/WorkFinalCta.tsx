import { FinalCtaSection } from "@/components/CTA";

export function WorkFinalCta() {
  return (
    <FinalCtaSection
      title={
        <>
          Your project could be <span className="text-[var(--red)]">next</span>
        </>
      }
      description="Tell us about your idea we'll get back within 24 hours"
      ctaLabel="Start a project"
      ctaHref="/contact"
    />
  );
}
