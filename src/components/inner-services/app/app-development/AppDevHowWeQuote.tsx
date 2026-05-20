import { ContentContainer } from "@/components/layout/ContentContainer";
import { APP_DEVELOPMENT_PAGE } from "@/data/site";
import { AppDevSectionHeading } from "./AppDevSectionHeading";

const { howWeQuote } = APP_DEVELOPMENT_PAGE;

export function AppDevHowWeQuote() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <AppDevSectionHeading heading={howWeQuote.heading} className="" />
          </div>
          <div>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{howWeQuote.intro}</p>
            <div className="grid gap-3 md:grid-cols-3">
              {howWeQuote.steps.map(({ num, title, body }) => (
                <article
                  key={num}
                  className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-4 shadow-[var(--shadow-xs)]"
                >
                  <div className="mb-2 font-sans text-[2rem] font-bold leading-none text-[var(--red)] sm:text-[2.125rem]">
                    {num}
                  </div>
                  <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
