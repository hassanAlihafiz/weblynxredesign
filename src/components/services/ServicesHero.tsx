import { ContentContainer } from "@/components/layout/ContentContainer";
export function ServicesHero() {
  return (
    <section className="w-full relative overflow-hidden py-14 md:py-20">
      <ContentContainer>
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" aria-hidden />

      <div className="relative z-10">

        <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
          Services
        </p>

        <h1 className="mb-8 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-7xl">
          Everything you need to
          <br />
          <span className="text-[var(--red)]">build,</span> launch, and grow.
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          From your first landing page to a full product launch four services that work together, or stand alone.
        </p>
      </div>
    </ContentContainer>
    </section>
  );
}
