import { ContentContainer } from "@/components/layout/ContentContainer";
import { GENERATIVE_AI_PAGE } from "@/data/site";

const { stack } = GENERATIVE_AI_PAGE;

export function GenAiStack() {
  return (
    <section className="w-full border-t border-[#252525] py-9 sm:py-10">
      <ContentContainer>
        <h2 className="mb-4 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Tools we build with <span className="text-[var(--red)]">GenAI</span>
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
