import { FinalCtaSection } from "@/components/CTA";

export function WebDevFinalCta() {
  return (
    <FinalCtaSection
      className="bg-[linear-gradient(180deg,rgba(10,10,10,0.98),rgba(27,7,9,0.98))]"
      title={
        <>
          Ready to build
          something <span className="text-[var(--red)]">great</span>?
        </>
      }
      description="Book a free 30-minute strategy call. We'll review your goals and scope your project."
      ctaLabel="Request a quote"
      ctaHref="/contact"
    />
  );
}
