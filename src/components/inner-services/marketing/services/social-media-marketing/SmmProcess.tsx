import { ContentContainer } from "@/components/layout/ContentContainer";
import { SOCIAL_MEDIA_MARKETING_PAGE } from "@/data/site";

const { howItWorks } = SOCIAL_MEDIA_MARKETING_PAGE;

export function SmmProcess() {
  return (
    <section className="w-full py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
          A <span className="text-[var(--red)]">monthly content</span> rhythm
        </h2>
        <p className="mb-5 max-w-md text-lg leading-relaxed text-text-muted">{howItWorks.description}</p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map(({ phaseLabel, num, title, body }) => (
            <article
              key={num}
              className="rounded-md bg-[var(--bg-elev-2)] p-4"
            >
              <p className="mb-1 text-xs uppercase tracking-wide text-text-muted">{phaseLabel}</p>
              <p className="mb-1.5 text-xl font-semibold text-[var(--red)]">{num}</p>
              <h3 className="mb-1 text-sm font-semibold text-text">{title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
