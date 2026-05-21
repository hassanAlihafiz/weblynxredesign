import { ContentContainer } from "@/components/layout/ContentContainer";
import { ABOUT_PAGE } from "@/data/site";

const { story } = ABOUT_PAGE;

export function AboutStory() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-14 md:py-20">
      <ContentContainer>
        <div className="grid items-start gap-10 md:grid-cols-[200px_1fr]">
          <p className="pt-2 font-mono text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
            {story.label}
          </p>

          <div className="min-w-0 max-w-2xl">
            <h2 className="mb-8 font-sans text-4xl font-bold leading-[1.1] tracking-[-0.025em] text-[var(--text)] md:text-5xl">
              From a single project to a <span className="text-[var(--red)]">studio trusted by</span> founders worldwide
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-[var(--text-muted)]">
              {story.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
