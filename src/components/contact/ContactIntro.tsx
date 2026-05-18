import { ContentContainer } from "@/components/layout/ContentContainer";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";

export function ContactIntro() {
  return (
    <section className="relative w-full overflow-hidden border-b border-[var(--color-border-tertiary)] py-10 pb-8 shadow-[var(--shadow-inset-soft)] sm:py-12 sm:pb-10 md:py-14">
      <HeroGridBackground />
      <ContentContainer className="relative z-10">
        <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Tell us <span className="text-[var(--red)]">about your project</span>
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          We&apos;ll get back within 24 hours usually faster. No pitches, no pressure, just a real reply from a
          real person.
        </p>
      </ContentContainer>
    </section>
  );
}
