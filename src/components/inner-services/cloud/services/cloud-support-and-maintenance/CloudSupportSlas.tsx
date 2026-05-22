import { ContentContainer } from "@/components/layout/ContentContainer";
import {
  CLOUD_SUPPORT_AND_MAINTENANCE_PAGE,
  CLOUD_SUPPORT_SLA_SEVERITY_COLORS,
} from "@/data/site";

const { responseSlas } = CLOUD_SUPPORT_AND_MAINTENANCE_PAGE;

const tableGridClass = "grid grid-cols-[1.3fr_1.6fr_1fr]";

export function CloudSupportSlas() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-11">
        <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance text-6xl font-bold leading-tight tracking-[-0.02em] text-[var(--text)]">
          When something breaks, <span className="text-[var(--red)]">the clock matters</span>
        </h2>
        <p className="mb-5 max-w-lg text-base leading-relaxed text-[var(--text-muted)]">
          {responseSlas.description}
        </p>

        <div className="overflow-x-auto">
          <div className="min-w-full overflow-hidden rounded-xl border border-[var(--border)]">
            <div className={`${tableGridClass} border-b border-[var(--border)] bg-[var(--bg-elev)]`}>
              <div className="px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--text-dim)]">
                Severity
              </div>
              <div className="px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--text-dim)]">
                Example
              </div>
              <div className="px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--text-dim)]">
                Response
              </div>
            </div>

            {responseSlas.rows.map((row, index) => (
              <div
                key={row.severity}
                className={`${tableGridClass} bg-[var(--bg)] ${
                  index < responseSlas.rows.length - 1 ? "border-b border-[var(--border)]" : ""
                }`}
              >
                <div className="flex items-center gap-2 px-4 py-3.5">
                  <span
                    className="size-6 shrink-0 rounded-full"
                    style={{ background: CLOUD_SUPPORT_SLA_SEVERITY_COLORS[row.severityId] }}
                    aria-hidden
                  />
                  <span className="text-lg font-semibold text-[var(--text)]">{row.severity}</span>
                </div>
                <div className="px-4 py-3.5 text-base leading-relaxed text-[var(--text-muted)]">
                  {row.example}
                </div>
                <div className="px-4 py-3.5 text-lg font-semibold text-[var(--red)]">
                  {row.response}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-2.5 text-sm text-[var(--text-dim)]">{responseSlas.footnote}</p>
      </ContentContainer>
    </section>
  );
}
