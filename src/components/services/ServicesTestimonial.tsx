import { SectionEyebrow } from "@/components/home/SectionEyebrow";

export function ServicesTestimonial() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <SectionEyebrow className="mb-4 sm:mb-5">SECTION 6 — TESTIMONIAL</SectionEyebrow>
      <div className="mx-auto max-w-[520px] text-center">
        <blockquote className="mb-4 font-serif text-lg font-medium italic leading-relaxed text-[var(--color-text-primary)] sm:text-[18px] sm:leading-[1.6]">
          &ldquo;Having design, dev, and marketing in one team meant we shipped 2× faster than with our last agency.&rdquo;
        </blockquote>
        <p className="text-xs text-[var(--color-text-secondary)] sm:text-[12px]">Sara Chen · Founder, Acme SaaS</p>
      </div>
    </section>
  );
}
