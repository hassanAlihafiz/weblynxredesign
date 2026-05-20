import { ContentContainer } from "@/components/layout/ContentContainer";
import { SEARCH_ENGINE_MARKETING_PAGE } from "@/data/site";

const { howWeQuote } = SEARCH_ENGINE_MARKETING_PAGE;

export function SemHowWeQuote() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-10 sm:py-11">
      <ContentContainer>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-6">
          <div>
            <h2 className="mb-5 max-w-3xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
              {howWeQuote.heading.before}
              <span className="text-[var(--red)]">{howWeQuote.heading.emphasis}</span>
              {howWeQuote.heading.after}
            </h2>
          </div>
          <div>
            <p className="mb-5 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
              {howWeQuote.introBefore}
              <strong className="font-semibold text-text">{howWeQuote.introEmphasis}</strong>
              {howWeQuote.introAfter}
            </p>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {howWeQuote.steps.map(({ num, title, body }) => (
                <article
                  key={num}
                  className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-5"
                >
                  <p className="mb-1 font-sans text-xl font-bold leading-none text-[var(--red)]">{num}</p>
                  <h3 className="mb-1 text-lg font-semibold text-text">{title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
