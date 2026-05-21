import { ContentContainer } from "@/components/layout/ContentContainer";
import { AI_AGENT_DEVELOPMENT_PAGE } from "@/data/site";

const { howItWorks } = AI_AGENT_DEVELOPMENT_PAGE;

export function AiAgentProcess() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          From workflow to <span className="text-[var(--red)]">live agent</span> in 5 phases
        </h2>
        <p className="mb-5 max-w-xl text-balance leading-relaxed text-[var(--text-muted)]">{howItWorks.description}</p>

        <div className="grid gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {howItWorks.steps.map(({ phaseLabel, num, title, body }) => (
            <article key={num} className="border-l-2 border-[var(--red)] py-0.5 pl-2.5">
              <p className="mb-1 text-sm uppercase tracking-wide text-[var(--text-muted)]">{phaseLabel}</p>
              <p className="mb-1 text-lg font-semibold text-[var(--red)]">{num}</p>
              <h3 className="mb-1 text-sm font-semibold text-[var(--text)]">{title}</h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
