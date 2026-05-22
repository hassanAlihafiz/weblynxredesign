import {
  IconActivityHeartbeat,
  IconAlertTriangle,
  IconCurrencyDollar,
  IconRefreshDot,
  IconShieldLock,
  IconTrendingUp,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_SUPPORT_AND_MAINTENANCE_PAGE, type CloudSupportCoverageIconId } from "@/data/site";

const coverageIcons: Record<CloudSupportCoverageIconId, TablerIcon> = {
  "activity-heartbeat": IconActivityHeartbeat,
  "alert-triangle": IconAlertTriangle,
  "refresh-dot": IconRefreshDot,
  "shield-lock": IconShieldLock,
  "currency-dollar": IconCurrencyDollar,
  "trending-up": IconTrendingUp,
};

const { whatWeCover } = CLOUD_SUPPORT_AND_MAINTENANCE_PAGE;

export function CloudSupportCoverage() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance text-6xl font-bold leading-tight tracking-[-0.02em] text-[var(--text)]">
          <span className="text-[var(--red)]">Six area</span> we keep healthy
        </h2>
        <p className="mb-5 max-w-md text-base leading-relaxed text-[var(--text-muted)]">
          {whatWeCover.description}
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeCover.items.map(({ title, body, icon }) => {
            const Icon = coverageIcons[icon];
            return (
              <article
                key={title}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-[18px]"
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
