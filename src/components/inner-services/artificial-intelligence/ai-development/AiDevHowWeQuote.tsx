import { ContentContainer } from "@/components/layout/ContentContainer";
import { AI_DEVELOPMENT_PAGE } from "@/data/site";
import { AiDevSectionHeading } from "./AiDevSectionHeading";

const { howWeQuote } = AI_DEVELOPMENT_PAGE;

export function AiDevHowWeQuote() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-10">
          <div>
            <AiDevSectionHeading heading={howWeQuote.heading} className="" />
          </div>
          <div>
            <p className="mb-6 text-lg leading-relaxed text-[var(--text-muted)]">{howWeQuote.intro}</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {howWeQuote.steps.map(({ num, title, body }) => (
                <article
                  key={num}
                  className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg)] p-4 shadow-[var(--shadow-xs)]"
                >
                  <div className="mb-2 font-sans text-2xl font-bold leading-none text-[var(--red)]">{num}</div>
                  <h3 className="mb-1 text-sm font-medium text-[var(--text)]">{title}</h3>
                  <p className="text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
