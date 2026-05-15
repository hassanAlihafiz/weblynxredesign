import { FinalCtaSection } from "@/components/marketing";

export function AboutFinalCta() {
  return (
    <FinalCtaSection
      title={
        <>
          Like the way we <span className="text-[var(--red)]">think</span>?
        </>
      }
      description="Let's build something together."
      ctaLabel="Start a project"
      ctaHref="/contact"
    />
  );
}
