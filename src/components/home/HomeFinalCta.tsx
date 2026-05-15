import { FinalCtaSection } from "@/components/marketing";

export function HomeFinalCta() {
  return (
    <FinalCtaSection
      title={
        <>
          Ready to build
          <br />
          something <span className="text-[var(--red)]">great</span>?
        </>
      }
      description="Book a free 30-minute scoping call. We'll review your project and send a proposal within 3 days."
      ctaLabel="Request a quote"
      ctaHref="/contact"
    />
  );
}
