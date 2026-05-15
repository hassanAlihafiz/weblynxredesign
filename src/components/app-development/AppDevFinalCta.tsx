import { FinalCtaSection } from "@/components/marketing";

export function AppDevFinalCta() {
  return (
    <FinalCtaSection
      id="quote"
      title={
        <>
          Got an app idea?
          <br />
          Let&apos;s <span className="text-[var(--red)]">scope</span> it.
        </>
      }
      description="Book a free 30-minute call. We'll map your MVP and send a proposal within 3 days."
      ctaLabel="Request a quote"
      ctaHref="/contact"
    />
  );
}
