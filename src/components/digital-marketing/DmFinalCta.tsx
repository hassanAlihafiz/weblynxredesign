import { FinalCtaSection } from "@/components/marketing";

export function DmFinalCta() {
  return (
    <FinalCtaSection
      id="quote"
      title={
        <>
          Ready to actually <span className="text-[var(--red)]">grow</span>?
        </>
      }
      description="Book a free 30-minute strategy call. We'll review your current marketing and send a custom growth plan within 3 days."
      ctaLabel="Request a quote"
      ctaHref="/contact"
    />
  );
}
