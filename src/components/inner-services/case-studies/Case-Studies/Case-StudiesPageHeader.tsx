import { ContentContainer } from "@/components/layout/ContentContainer";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";

export function CaseStudiesPageHeader() {
  return (
    <section className="relative w-full overflow-hidden border-t border-[var(--border-subtle)] py-14 md:py-20">
      <HeroGridBackground />
      <ContentContainer className="relative z-10">
        <h1 className="mb-2.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Real projects, <span className="text-[var(--red)]"> real results</span>, real businesses.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          A look inside the projects we&apos;ve shipped the problems, the process, and the outcomes that mattered.
        </p>
      </ContentContainer>
    </section>
  );
}
