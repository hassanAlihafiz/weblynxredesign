import { ContentContainer } from "@/components/layout/ContentContainer";
import { AI_AGENT_DEVELOPMENT_PAGE } from "@/data/site";

const { howWeQuote } = AI_AGENT_DEVELOPMENT_PAGE;

export function AiAgentHowWeQuote() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-6">
          <div>
            <h2 className="max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
              Every AI project is different <span className="text-[var(--red)]">so is every quote</span>
            </h2>
          </div>
          <div>
            <p className="mb-5 max-w-xl text-balance leading-relaxed text-[var(--text-muted)]">
              {howWeQuote.introBefore}
              <strong className="font-semibold text-[var(--text)]">{howWeQuote.introEmphasis}</strong>
              {howWeQuote.introAfter}
            </p>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {howWeQuote.steps.map(({ num, title, body }) => (
                <article
                  key={num}
                  className="rounded-[var(--border-radius-md)] border border-[var(--border)] bg-[var(--bg-elev)] p-3.5"
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
