import { ContentContainer } from "@/components/layout/ContentContainer";
import { AI_AGENT_DEVELOPMENT_PAGE } from "@/data/site";

const { tools } = AI_AGENT_DEVELOPMENT_PAGE;

export function AiAgentTools() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Anything with an <span className="text-[var(--red)]">API most of what</span> your team already uses
        </h2>
        <p className="mb-5 max-w-xl text-balance leading-relaxed text-[var(--text-muted)]">
          {tools.descriptionBefore}
          <em className="text-[var(--text)] not-italic">{tools.descriptionEmphasis}</em>
          {tools.descriptionAfter}
        </p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {tools.categories.map(({ label, tools: toolList }) => (
            <article
              key={label}
              className="rounded-[var(--border-radius-md)] border border-[var(--border)] bg-[var(--bg-elev)] p-3.5"
            >
              <p className="mb-1.5 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">{label}</p>
              <p className="text-base leading-relaxed text-[var(--text)]">{toolList}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
