import { ContentContainer } from "@/components/layout/ContentContainer";
import { NATURAL_LANGUAGE_PROCESSING_PAGE } from "@/data/site";

const { howWeQuote } = NATURAL_LANGUAGE_PROCESSING_PAGE;

export function NlpHowWeQuote() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11">
      <ContentContainer>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-6">
          <div>
            <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight text-[var(--text)]">
              {howWeQuote.heading.before}
              <span className="text-[var(--red)]">{howWeQuote.heading.emphasis}</span>
              {howWeQuote.heading.after}
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
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-3.5"
                >
                  <p className="mb-1 text-lg font-semibold text-[var(--red)]">{num}</p>
                  <h3 className="mb-1 text-sm font-semibold text-[var(--text)]">{title}</h3>
                  <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
