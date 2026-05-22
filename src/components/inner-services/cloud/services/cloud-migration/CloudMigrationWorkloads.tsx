import {
  IconDatabase,
  IconFiles,
  IconGitBranch,
  IconNetwork,
  IconServer2,
  IconShieldLock,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_MIGRATION_PAGE, type CloudMigrationWorkloadIconId } from "@/data/site";

const workloadIcons: Record<CloudMigrationWorkloadIconId, TablerIcon> = {
  "server-2": IconServer2,
  database: IconDatabase,
  files: IconFiles,
  network: IconNetwork,
  "git-branch": IconGitBranch,
  "shield-lock": IconShieldLock,
};

const { whatWeMigrate } = CLOUD_MIGRATION_PAGE;

export function CloudMigrationWorkloads() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 text-balance text-6xl font-bold leading-tight tracking-[-0.02em] text-[var(--text)]">
          Six things that <span className="text-[var(--red)]">move</span> during a migration
        </h2>
        <p className="mb-5 max-w-lg text-base leading-relaxed text-[var(--text-muted)]">
          {whatWeMigrate.description}
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeMigrate.items.map(({ title, body, icon }) => {
            const Icon = workloadIcons[icon];
            return (
              <article
                key={title}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4"
              >
                <Icon className="size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1.5 mt-2.5 text-base font-medium text-[var(--text)]">{title}</h3>
                <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
