import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_MIGRATION_PAGE } from "@/data/site";

const { howWeQuote } = CLOUD_MIGRATION_PAGE;

export function CloudMigrationHowWeQuote() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-10 lg:items-start">
          <div>
            <h2 className="max-w-3xl text-balance text-6xl font-bold leading-tight tracking-[-0.02em] text-[var(--text)]">
              Every migration is different <span className="text-[var(--red)]">so is every quote</span>
            </h2>
          </div>
          <div>
            <p className="mb-4 max-w-xl text-base leading-relaxed text-[var(--text-muted)]">
              {howWeQuote.introBefore}
              <strong className="font-semibold text-[var(--text)]">{howWeQuote.introEmphasis}</strong>
              {howWeQuote.introAfter}
            </p>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {howWeQuote.steps.map(({ num, title, body }) => (
                <article
                  key={num}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4"
                >
                  <p className="mb-1 text-lg font-medium text-[var(--red)]">{num}</p>
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
