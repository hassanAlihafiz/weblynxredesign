import { FinalCtaSection } from "@/components/CTA";

export function IosDevFinalCta() {
  return (
    <FinalCtaSection
      id="quote"
      className="bg-[linear-gradient(180deg,var(--bg),rgba(27,7,9,0.98))]"
      title={
        <>
          Ready to ship on the <span className="text-[var(--red)]">App Store</span>?
        </>
      }
      description="Book a free 30-minute call. We'll scope your iOS app and send a proposal within 3 days."
      ctaLabel="Request a quote"
      ctaHref="/contact"
    />
  );
}
