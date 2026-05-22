import {
  IconBellRinging,
  IconChartBar,
  IconDatabaseExport,
  IconEye,
  IconMessage2,
  IconReport,
  IconShieldCheck,
  IconTool,
  IconUserStar,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_SUPPORT_AND_MAINTENANCE_PAGE, type CloudSupportIncludedIconId } from "@/data/site";

const includedIcons: Record<CloudSupportIncludedIconId, TablerIcon> = {
  eye: IconEye,
  "bell-ringing": IconBellRinging,
  tool: IconTool,
  report: IconReport,
  "database-export": IconDatabaseExport,
  "shield-check": IconShieldCheck,
  "chart-bar": IconChartBar,
  "message-2": IconMessage2,
  "user-star": IconUserStar,
};

const { whatsIncluded } = CLOUD_SUPPORT_AND_MAINTENANCE_PAGE;

export function CloudSupportIncluded() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance text-6xl font-bold leading-tight tracking-[-0.02em] text-[var(--text)]">
          Every support plan includes <span className="text-[var(--red)]">everything</span>
        </h2>
        <p className="mb-5 max-w-lg text-base leading-relaxed text-[var(--text-muted)]">
          {whatsIncluded.description}
        </p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {whatsIncluded.items.map(({ title, body, icon }) => {
            const Icon = includedIcons[icon];
            return (
              <article
                key={title}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4"
              >
                <Icon className="size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1.5 mt-2.5 text-lg font-semibold text-[var(--text)]">{title}</h3>
                <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
