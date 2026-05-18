import { FinalCtaSection } from "@/components/CTA";

export function ServicesFinalCta() {
  return (
    <FinalCtaSection
      title={
        <>
          Not sure which <span className="text-[var(--red)]">service</span> you need?
        </>
      }
      description="Book a free 30-minute call. We'll help you figure it out."
      ctaLabel="Book a call"
      ctaHref="/contact"
    />
  );
}
