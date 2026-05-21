import { ContentContainer } from "@/components/layout/ContentContainer";
import { BRAND_IDENTITY_DESIGN_PAGE } from "@/data/site";

const { howItWorks } = BRAND_IDENTITY_DESIGN_PAGE;

export function BrandIdentityProcess() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          From blank page to <span className="text-[var(--red)]">brand book</span> in 5 phases
        </h2>
        <p className="mb-5 max-w-xl text-balance leading-relaxed text-[var(--text-muted)] sm:mb-6">{howItWorks.description}</p>

        <div className="grid gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {howItWorks.steps.map(({ phaseLabel, num, title, body }) => (
            <article key={num} className="border-l-2 border-[var(--red)] py-0.5 pl-2.5">
              <p className="mb-1 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">{phaseLabel}</p>
              <p className="mb-1 text-4xl font-bold leading-none text-[var(--red)]">{num}</p>
              <h3 className="mb-1 text-sm font-semibold text-[var(--text)]">{title}</h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
