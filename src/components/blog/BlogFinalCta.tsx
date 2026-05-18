import { FinalCtaSection } from "@/components/CTA";

export function BlogFinalCta() {
  return (
    <FinalCtaSection
      title={
        <>
          Want us to build it for <span className="text-[var(--red)]">you</span> instead?
        </>
      }
      description="Skip the DIY. Hire the team that wrote the guide."
      ctaLabel="Start a project"
      ctaHref="/contact"
    />
  );
}
