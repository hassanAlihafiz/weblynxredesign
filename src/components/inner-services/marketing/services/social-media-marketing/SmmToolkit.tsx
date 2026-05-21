import { ContentContainer } from "@/components/layout/ContentContainer";
import { SOCIAL_MEDIA_MARKETING_PAGE } from "@/data/site";

const { toolkit } = SOCIAL_MEDIA_MARKETING_PAGE;

export function SmmToolkit() {
  return (
    <section className="w-full bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
          Tools we <span className="text-[var(--red)]">work with</span>
        </h2>
        <div className="flex flex-wrap gap-2">
          {toolkit.tools.map((name) => (
            <span
              key={name}
              className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elev)] px-3 py-1.5 font-medium text-text"
            >
              {name}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
