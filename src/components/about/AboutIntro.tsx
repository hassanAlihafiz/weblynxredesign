import { ContentContainer } from "@/components/layout/ContentContainer";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";

export function AboutIntro() {
  return (
    <section className="relative w-full overflow-hidden py-14 md:py-20">
      <HeroGridBackground />
      <ContentContainer className="relative z-10">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
          About Weblynx
        </p>

        <h1 className="mb-8 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-7xl">
          A digital studio built around{" "}
          <span className="text-[var(--red)]">craft</span>
          {", speed, and clear thinking."}
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          Weblynx is an independent studio working with founders and small teams to build the web and apps they
          actually need fast, modern, and made to scale.
        </p>
      </ContentContainer>
    </section>
  );
}
