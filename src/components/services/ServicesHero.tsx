import { ContentContainer } from "@/components/layout/ContentContainer";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";

export function ServicesHero() {
  return (
    <section className="relative w-full overflow-hidden py-14 md:py-20">
      <HeroGridBackground />
      <ContentContainer className="relative z-10">
        <h1 className="mb-8 max-w-2xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-7xl">
          Everything you need to
          <br />
          <span className="text-[var(--red)]">build,</span> launch, and grow
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          From your first landing page to a full product launch four services that work together, or stand alone.
        </p>
      </ContentContainer>
    </section>
  );
}
