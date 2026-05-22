import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_MIGRATION_PAGE } from "@/data/site";

const { howItWorks } = CLOUD_MIGRATION_PAGE;

export function CloudMigrationProcess() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance text-6xl font-bold leading-tight tracking-[-0.02em] text-[var(--text)]">
          From assessment to cutover in <span className="text-[var(--red)]">5 phases</span>
        </h2>
        <p className="mb-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)]">
          {howItWorks.description}
        </p>

        <div className="grid gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {howItWorks.steps.map(({ phaseLabel, num, title, body }) => (
            <article key={num} className="border-l-2 border-[var(--red)] p-2">
              <p className="mb-1 text-sm font-medium uppercase tracking-wide text-[var(--text-dim)]">
                {phaseLabel}
              </p>
              <p className="mb-1 text-lg font-medium text-[var(--red)]">{num}</p>
              <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
