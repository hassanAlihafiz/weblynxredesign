import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_MIGRATION_PAGE } from "@/data/site";

const { toolkit } = CLOUD_MIGRATION_PAGE;

export function CloudMigrationToolkit() {
  return (
    <section className="w-full border-t border-[var(--border)] py-9 sm:py-10">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance text-6xl font-bold leading-tight tracking-[-0.02em] text-[var(--text)]">
          Tools we <span className="text-[var(--red)]">migrate with</span>
        </h2>
        <div className="flex flex-wrap gap-2">
          {toolkit.tools.map((name) => (
            <span
              key={name}
              className="rounded-full border border-[var(--border)] bg-[var(--bg-elev)] p-2 text-sm font-medium text-[var(--text)]"
            >
              {name}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
