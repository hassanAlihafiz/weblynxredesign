import { ContentContainer } from "@/components/layout/ContentContainer";
import { SEARCH_ENGINE_OPTIMIZATION_PAGE } from "@/data/site";

const { toolkit } = SEARCH_ENGINE_OPTIMIZATION_PAGE;

export function SeoToolkit() {
  return (
    <section className="w-full border-t border-[#252525] py-9 sm:py-10">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
          Tools we <span className="text-[var(--red)]">work with</span>
        </h2>
        <div className="flex flex-wrap gap-[7px]">
          {toolkit.tools.map((name) => (
            <span
              key={name}
              className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] px-3 py-1.5 text-xs font-medium text-text"
            >
              {name}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
