import {
  IconArrowBackUp,
  IconBook2,
  IconBuildingArch,
  IconChartDots3,
  IconChecklist,
  IconClipboardSearch,
  IconRoute,
  IconStack2,
  IconTestPipe,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_MIGRATION_PAGE, type CloudMigrationDeliverableIconId } from "@/data/site";

const deliverableIcons: Record<CloudMigrationDeliverableIconId, TablerIcon> = {
  "clipboard-search": IconClipboardSearch,
  route: IconRoute,
  "arrow-back-up": IconArrowBackUp,
  blueprint: IconBuildingArch,
  "stack-2": IconStack2,
  "test-pipe": IconTestPipe,
  checklist: IconChecklist,
  "chart-dots-3": IconChartDots3,
  "book-2": IconBook2,
};

const { deliverables } = CLOUD_MIGRATION_PAGE;

export function CloudMigrationDeliverables() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance text-6xl font-bold leading-tight tracking-[-0.02em] text-[var(--text)]">
          Every migration <span className="text-[var(--red)]">includes</span>
        </h2>
        <p className="mb-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)]">
          {deliverables.description}
        </p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.items.map(({ title, body, icon }) => {
            const Icon = deliverableIcons[icon];
            return (
              <article
                key={title}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4"
              >
                <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-base font-medium text-[var(--text)]">{title}</h3>
                <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
