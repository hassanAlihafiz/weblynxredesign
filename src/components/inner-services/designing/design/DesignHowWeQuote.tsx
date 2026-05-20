import { ContentContainer } from "@/components/layout/ContentContainer";
import { DESIGN_PAGE } from "@/data/site";
import { DesignSectionHeading } from "./DesignSectionHeading";

const { howWeQuote } = DESIGN_PAGE;

export function DesignHowWeQuote() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-10">
          <div>
            <DesignSectionHeading heading={howWeQuote.heading} className="" />
          </div>
          <div>
            <p className="mb-6 text-lg leading-relaxed text-[var(--text-muted)]">{howWeQuote.intro}</p>
            <div className="grid gap-4 md:grid-cols-3">
              {howWeQuote.steps.map(({ num, title, body }) => (
                <article
                  key={num}
                  className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-4 shadow-[var(--shadow-xs)]"
                >
                  <div className="mb-2 font-sans text-[2rem] font-bold leading-none text-[var(--red)]">{num}</div>
                  <h3 className="mb-1 text-xl font-medium text-[var(--text)]">{title}</h3>
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
