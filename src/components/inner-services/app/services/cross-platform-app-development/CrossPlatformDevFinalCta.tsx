import { FinalCtaSection } from "@/components/CTA";

export function CrossPlatformDevFinalCta() {
  return (
    <FinalCtaSection
      className="bg-[linear-gradient(180deg,var(--bg),#1B0709)]"
      title={
        <>
          Ready to ship on <span className="text-[var(--red)]">both stores</span>?
        </>
      }
      description="Book a free 30-minute call. We'll scope your cross-platform app and send a proposal within 3 days."
      ctaLabel="Request a quote"
      ctaHref="/contact"
    />
  );
}
