import { ContentContainer } from "@/components/layout/ContentContainer";
import { BRAND_IDENTITY_DESIGN_PAGE } from "@/data/site";

const { howWeQuote } = BRAND_IDENTITY_DESIGN_PAGE;

export function BrandIdentityHowWeQuote() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <h2 className="max-w-md text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
              Every brand is different. <span className="text-[var(--red)]">So is every quote.</span>
            </h2>
          </div>
          <div>
            <p className="mb-5 max-w-xl text-balance leading-relaxed text-[var(--text-muted)]">{howWeQuote.intro}</p>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {howWeQuote.steps.map(({ num, title, body }) => (
                <article
                  key={num}
                  className="rounded-[10px] border border-[var(--border)] bg-[var(--bg)] p-3.5"
                >
                  <p className="mb-1 text-lg font-semibold text-[var(--red)]">{num}</p>
                  <h3 className="mb-1 text-xs font-semibold text-[var(--text)]">{title}</h3>
                  <p className="text-[11px] leading-[1.5] text-[var(--text-muted)]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
