import {
  IconAdjustments,
  IconArrowBarToRight,
  IconLayersSubtract,
  IconRefresh,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_MIGRATION_PAGE, type CloudMigrationStrategyIconId } from "@/data/site";

const strategyIcons: Record<CloudMigrationStrategyIconId, TablerIcon> = {
  "arrow-bar-to-right": IconArrowBarToRight,
  adjustments: IconAdjustments,
  refresh: IconRefresh,
  "layers-subtract": IconLayersSubtract,
};

const { migrationStrategies } = CLOUD_MIGRATION_PAGE;

export function CloudMigrationStrategies() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 text-balance text-6xl font-bold leading-tight tracking-[-0.02em] text-[var(--text)]">
          The right <span className="text-[var(--red)]">strategy</span> per workload
        </h2>
        <p className="mb-5 max-w-lg text-base leading-relaxed text-[var(--text-muted)]">
          {migrationStrategies.description}
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {migrationStrategies.items.map(({ num, title, body, bestFor, icon }) => {
            const Icon = strategyIcons[icon];
            return (
              <article
                key={num}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4"
              >
                <div className="mb-2.5 flex items-start justify-between">
                  <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                  <span className="text-sm text-[var(--text-dim)]">{num}</span>
                </div>
                <h3 className="mb-1.5 text-base font-medium text-[var(--text)]">{title}</h3>
                <p className="mb-2 text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
                <p className="text-sm uppercase tracking-wide text-[var(--text-dim)]">
                  {bestFor}
                </p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
