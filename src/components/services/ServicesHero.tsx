import { ContentContainer } from "@/components/layout/ContentContainer";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";
import { SERVICES_PAGE } from "@/data/site";

const { hero } = SERVICES_PAGE;

export function ServicesHero() {
  return (
    <section className="relative w-full overflow-hidden py-14 md:py-20">
      <HeroGridBackground />
      <ContentContainer className="relative z-10">
        <h1 className="mb-8 max-w-2xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-7xl">
          {hero.line1}
          <br />
          <span className="text-[var(--red)]">{hero.line2Emphasis}</span>
          {hero.line2Rest}
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{hero.description}</p>
      </ContentContainer>
    </section>
  );
}
