import { ContentContainer } from "@/components/layout/ContentContainer";
export function AboutStory() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-14 md:py-20">
      <ContentContainer>

      <div className="grid items-start gap-10 md:grid-cols-[200px_1fr]">
        <p className="pt-2 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
          Our story
        </p>

        <div className="min-w-0 max-w-2xl">
          <h2 className="mb-8 font-sans text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-[var(--text)] md:text-5xl">
            From a single project to a studio trusted by founders worldwide.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-[var(--text-muted)]">
            <p>
              Weblynx started with a simple idea: most agencies move too slow, most freelancers can&apos;t deliver at
              scale, and founders are stuck choosing between them.
            </p>
            <p>
              So we built something in between a focused studio that ships fast without cutting corners, charges
              fairly, and treats every project like it&apos;s our own.
            </p>
            <p>Today we work with brands and startups across four countries, building everything from MVPs to full-scale platforms.</p>
          </div>
        </div>
      </div>
    </ContentContainer>
    </section>
  );
}
