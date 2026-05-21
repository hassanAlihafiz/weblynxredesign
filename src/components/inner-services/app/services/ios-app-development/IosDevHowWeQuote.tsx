import { ContentContainer } from "@/components/layout/ContentContainer";
import { IOS_APP_DEV_PAGE } from "@/data/site";

const { howWeQuote } = IOS_APP_DEV_PAGE;

export function IosDevHowWeQuote() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[#141414] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-6">
          <div>
            <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
              Every iOS project is different <span className="text-[var(--red)]">So is every quote</span>
            </h1>
          </div>

          <div>
            <p className="mb-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{howWeQuote.intro}</p>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {howWeQuote.steps.map(({ num, title, body }) => (
                <article key={num} className="rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4">
                  <p className="mb-1 text-2xl font-bold leading-none text-[var(--red)]">{num}</p>
                  <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
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
