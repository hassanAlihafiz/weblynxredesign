import { FinalCtaSection } from "@/components/CTA";

export function WebPortalDevFinalCta() {
  return (
    <FinalCtaSection
      className="bg-[linear-gradient(180deg,rgba(10,10,10,0.98),rgba(27,7,9,0.98))]"
      title="Got a workflow that needs a portal?"
      description="Book a free 30-minute call. We'll map your roles, data, and integrations, and send a proposal within 3 days."
      ctaLabel="Request a quote"
      ctaHref="/contact"
    />
  );
}
