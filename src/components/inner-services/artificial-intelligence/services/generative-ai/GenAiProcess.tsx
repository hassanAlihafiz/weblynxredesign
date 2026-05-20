import { ContentContainer } from "@/components/layout/ContentContainer";
import { GENERATIVE_AI_PAGE } from "@/data/site";

const { howItWorks } = GENERATIVE_AI_PAGE;

export function GenAiProcess() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance text-4xl font-semibold leading-tight text-[var(--text)]">
          {howItWorks.heading.before}
          <span className="text-[var(--red)]">{howItWorks.heading.emphasis}</span>
          {howItWorks.heading.after}
        </h2>
        <p className="mb-5 max-w-lg text-lg leading-tight text-[var(--text-muted)]">{howItWorks.description}</p>

        <div className="grid gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {howItWorks.steps.map(({ phaseLabel, num, title, body }) => (
            <article key={num} className="border-l-2 border-[var(--red)] py-0.5 pl-2.5">
              <p className="mb-1 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">{phaseLabel}</p>
              <p className="mb-1 text-lg font-bold text-[var(--red)]">{num}</p>
              <h3 className="mb-1 text-sm font-semibold text-[var(--text)]">{title}</h3>
              <p className="text-base leading-tight text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
