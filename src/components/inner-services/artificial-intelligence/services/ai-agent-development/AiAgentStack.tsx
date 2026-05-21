import { ContentContainer } from "@/components/layout/ContentContainer";
import { AI_AGENT_DEVELOPMENT_PAGE } from "@/data/site";

const { stack } = AI_AGENT_DEVELOPMENT_PAGE;

export function AiAgentStack() {
  return (
    <section className="w-full border-t border-[var(--border)] py-9 sm:py-10">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Framework we <span className="text-[var(--red)]">build with</span>
        </h2>
        <div className="flex flex-wrap gap-2">
          {stack.tools.map((name) => (
            <span
              key={name}
              className="rounded-full border border-[var(--border)] bg-[var(--bg-elev)] px-3 py-1.5 text-sm font-medium text-[var(--text)]"
            >
              {name}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
