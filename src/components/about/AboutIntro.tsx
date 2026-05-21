import { ContentContainer } from "@/components/layout/ContentContainer";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";
import { ABOUT_PAGE } from "@/data/site";

const { intro } = ABOUT_PAGE;

export function AboutIntro() {
  return (
    <section className="relative w-full overflow-hidden py-14 md:py-20">
      <HeroGridBackground />
      <ContentContainer className="relative z-10">

        <h1 className="mb-8 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-7xl">
          A digital studio <span className="text-[var(--red)]">built around craft</span>, speed, and clear thinking
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{intro.description}</p>
      </ContentContainer>
    </section>
  );
}
