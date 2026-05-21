import { ContentContainer } from "@/components/layout/ContentContainer";
import { GENERATIVE_AI_PAGE } from "@/data/site";

const { howWeQuote } = GENERATIVE_AI_PAGE;

export function GenAiHowWeQuote() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11">
      <ContentContainer>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-6">
          <div>
            <h2 className="max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
              Every <span className="text-[var(--red)]">GenAI project</span> is different so is every quote
            </h2>
          </div>
          <div>
            <p className="mb-5 max-w-lg text-lg leading-tight text-[var(--text-muted)]">
              {howWeQuote.introBefore}
              <strong className="font-semibold text-[var(--text)]">{howWeQuote.introEmphasis}</strong>
              {howWeQuote.introAfter}
            </p>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {howWeQuote.steps.map(({ num, title, body }) => (
                <article
                  key={num}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-[18px]"
                >
                  <p className="mb-1 text-lg font-bold text-[var(--red)]">{num}</p>
                  <h3 className="mb-1 text-sm font-semibold text-[var(--text)]">{title}</h3>
                  <p className="text-base leading-tight text-[var(--text-muted)]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
