import { SectionEyebrow } from "@/components/home/SectionEyebrow";

export function AboutStory() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] py-10 sm:py-12">
      <SectionEyebrow className="mb-3.5">SECTION 2 — OUR STORY</SectionEyebrow>
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_1.5fr] lg:gap-8">
        <div className="order-2 lg:order-1">
          <div
            className="flex h-[200px] items-center justify-center rounded-[var(--border-radius-lg)] bg-[#CECBF6] text-[11px] font-medium text-[#3C3489] shadow-[var(--shadow-card)] ring-1 ring-black/10 sm:h-[220px]"
            role="img"
            aria-label="Founder photo placeholder"
          >
            Founder photo
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
            The story
          </p>
          <h2 className="mb-3 text-xl font-medium leading-snug sm:text-[20px]">
            Started in a bedroom. Still feels that way.
          </h2>
          <p className="mb-2.5 text-[13px] leading-[1.7] text-[var(--color-text-secondary)]">
            Weblynx began in 2024 when I shipped a Shopify store for a friend&apos;s clothing brand. It took two
            weeks. The store doubled their sales in a month.
          </p>
          <p className="text-[13px] leading-[1.7] text-[var(--color-text-secondary)]">
            Word spread. Today we work with founders across 4 countries — building the kind of fast, thoughtful
            products that big agencies can&apos;t ship and freelancers can&apos;t deliver.
          </p>
        </div>
      </div>
    </section>
  );
}
