import { ContentContainer } from "@/components/layout/ContentContainer";
import type { CrossPlatformComparisonTone } from "@/data/site";
import { CROSS_PLATFORM_APP_DEV_PAGE } from "@/data/site";
import { CrossPlatformDevSectionHeading } from "./CrossPlatformDevSectionHeading";

const { comparison } = CROSS_PLATFORM_APP_DEV_PAGE;

function cellClass(tone: CrossPlatformComparisonTone) {
  if (tone === "warn") return "text-[var(--red)]";
  if (tone === "muted") return "text-[var(--text-muted)]";
  return "text-[var(--text)]";
}

export function CrossPlatformDevComparison() {
  return (
    <section id={comparison.sectionId} className="w-full border-t border-[var(--border)] py-10 sm:py-11">
      <ContentContainer>
        <CrossPlatformDevSectionHeading heading={comparison.heading} className="mb-1.5" />
        <p className="mb-6 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          {comparison.description}
        </p>

        <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elev)]">
          <div className="grid grid-cols-[1.6fr_1fr_1fr] border-b border-[var(--border)] bg-[var(--color-background-primary)]">
            <div className="px-[18px] py-3.5" aria-hidden />
            <p className="border-l border-[var(--border)] px-[18px] py-3.5 text-center text-sm font-semibold uppercase tracking-[0.06em] text-[var(--red)]">
              {comparison.columnLabels.cross}
            </p>
            <p className="border-l border-[var(--border)] px-[18px] py-3.5 text-center text-sm font-semibold uppercase tracking-[0.06em] text-[var(--text-muted)]">
              {comparison.columnLabels.native}
            </p>
          </div>

          {comparison.rows.map(({ label, cross, native, crossTone, nativeTone }, i) => {
            const isLast = i === comparison.rows.length - 1;
            return (
              <div
                key={label}
                className={`grid grid-cols-[1.6fr_1fr_1fr] ${isLast ? "" : "border-b border-[var(--border)]"} ${
                  i % 2 === 1 ? "bg-[#0E0E0E]" : ""
                }`}
              >
                <p className="px-[18px] py-3.5 text-[13px] font-semibold text-[var(--text)]">{label}</p>
                <p
                  className={`border-l border-[var(--border)] px-[18px] py-3.5 text-center text-[13px] ${cellClass(crossTone)}`}
                >
                  {cross}
                </p>
                <p
                  className={`border-l border-[var(--border)] px-[18px] py-3.5 text-center text-[13px] ${cellClass(nativeTone)}`}
                >
                  {native}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-[18px] rounded-r-lg border-l-[3px] border-[var(--red)] bg-[linear-gradient(90deg,rgba(230,57,70,0.08),transparent)] px-[18px] py-3.5">
          <p className="text-xs leading-[1.6] text-[var(--text)]">
            <strong className="text-[var(--red)]">{comparison.footnote.leadStrong}</strong>
            {comparison.footnote.rest}
          </p>
        </div>
      </ContentContainer>
    </section>
  );
}
