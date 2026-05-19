import { FinalCtaSection } from "@/components/CTA";

export function AiDevFinalCta() {
  return (
    <FinalCtaSection
      id="quote"
      className="bg-[linear-gradient(180deg,var(--bg),rgba(27,7,9,0.98))]"
      title={
        <>
          Got an AI idea? Let&apos;s build it <span className="text-[var(--red)]">right</span>.
        </>
      }
      description="Book a free 30-minute call. We'll evaluate feasibility and send a proposal within 3 days."
      ctaLabel="Request a quote"
      ctaHref="/contact"
    />
  );
}
