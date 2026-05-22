import {
  IconArrowBackUp,
  IconArrowsSplit,
  IconCopy,
  IconDatabaseImport,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_MIGRATION_PAGE, type CloudMigrationSafeguardIconId } from "@/data/site";

const safeguardIcons: Record<CloudMigrationSafeguardIconId, TablerIcon> = {
  copy: IconCopy,
  "database-import": IconDatabaseImport,
  "arrows-split": IconArrowsSplit,
  "arrow-back-up": IconArrowBackUp,
};

const { zeroDowntimeApproach } = CLOUD_MIGRATION_PAGE;

export function CloudMigrationZeroDowntime() {
  return (
    <section
      id={zeroDowntimeApproach.id}
      className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11"
    >
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance text-6xl font-bold leading-tight tracking-[-0.02em] text-[var(--text)]">
          How we move you without <span className="text-[var(--red)]">breaking things</span>
        </h2>
        <p className="mb-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)]">
          {zeroDowntimeApproach.description}
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {zeroDowntimeApproach.items.map(({ num, title, body, icon }) => {
            const Icon = safeguardIcons[icon];
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
                <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
