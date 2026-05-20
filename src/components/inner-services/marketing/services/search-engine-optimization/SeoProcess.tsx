import { ContentContainer } from "@/components/layout/ContentContainer";
import { SEARCH_ENGINE_OPTIMIZATION_PAGE } from "@/data/site";

const { howItWorks } = SEARCH_ENGINE_OPTIMIZATION_PAGE;

export function SeoProcess() {
  return (
    <section className="w-full bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
          {howItWorks.heading.before}
          <span className="text-[var(--red)]">{howItWorks.heading.emphasis}</span>
          {howItWorks.heading.after}
        </h2>
        <p className="mb-5 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">{howItWorks.description}</p>

        <div className="grid gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {howItWorks.steps.map(({ phaseLabel, num, title, body }) => (
            <article key={num} className="border-l-2 border-[var(--red)] py-0.5 pl-2.5">
              <p className="mb-1 text-sm font-medium text-text-muted">{phaseLabel}</p>
              <p className="mb-1 text-base font-medium text-[var(--red)]">{num}</p>
              <h3 className="mb-1 text-base font-semibold text-text">{title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
