import { ContentContainer } from "@/components/layout/ContentContainer";
export function ServicesTestimonial() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-14 md:py-20">
      <ContentContainer>
      <div className="mx-auto max-w-2xl text-center">
        <div
          className="mb-6 font-serif text-6xl italic leading-none text-[var(--red)]"
          aria-hidden
        >
          &ldquo;
        </div>

        <blockquote className="mb-8 font-serif text-2xl italic leading-relaxed text-[var(--text)] md:text-3xl">
          Having design, dev, and marketing in one team meant we shipped 2× faster than with our last agency.
        </blockquote>

        <p className="text-sm text-[var(--text-muted)]">Sara Chen · Founder, Acme SaaS</p>
      </div>
    </ContentContainer>
    </section>
  );
}
