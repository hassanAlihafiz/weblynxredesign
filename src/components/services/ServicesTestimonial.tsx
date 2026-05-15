export function ServicesTestimonial() {
  return (
    <section className="border-t border-[var(--border-subtle)] px-6 py-14 sm:px-8 md:py-20 lg:px-10">
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
    </section>
  );
}
