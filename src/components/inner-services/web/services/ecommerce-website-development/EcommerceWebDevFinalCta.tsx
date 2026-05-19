import { FinalCtaSection } from "@/components/CTA";

export function EcommerceWebDevFinalCta() {
  return (
    <FinalCtaSection
      className="bg-[linear-gradient(180deg,var(--bg),rgba(27,7,9,0.98))]"
      title={
        <>
          Ready to sell better <span className="text-[var(--red)]">online</span>?
        </>
      }
      description="Book a free 30-minute call. We'll audit your current store (or your idea) and send a proposal within 3 days."
      ctaLabel="Request a quote"
      ctaHref="/contact"
    />
  );
}
