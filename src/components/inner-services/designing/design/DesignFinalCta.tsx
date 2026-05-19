import { FinalCtaSection } from "@/components/CTA";

export function DesignFinalCta() {
  return (
    <FinalCtaSection
      id="quote"
      className="bg-[linear-gradient(180deg,var(--bg),rgba(27,7,9,0.98))]"
      title={
        <>
          Ready to design something <span className="text-[var(--red)]">memorable</span>?
        </>
      }
      description="Book a free 30-minute discovery call. We'll review your brand and send a tailored proposal."
      ctaLabel="Request a quote"
      ctaHref="/contact"
    />
  );
}
