import { ContentContainer } from "@/components/layout/ContentContainer";
import { NATURAL_LANGUAGE_PROCESSING_PAGE } from "@/data/site";

const { stack } = NATURAL_LANGUAGE_PROCESSING_PAGE;

export function NlpStack() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-9 shadow-[var(--shadow-inset-soft)] sm:py-10">
      <ContentContainer>
        <h2 className="mb-4 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Tools we build with <span className="text-[var(--red)]">NLP</span>
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
