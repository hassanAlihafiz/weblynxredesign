import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_SUPPORT_AND_MAINTENANCE_PAGE } from "@/data/site";

const { monitoringStack } = CLOUD_SUPPORT_AND_MAINTENANCE_PAGE;

export function CloudSupportMonitoringStack() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-9 sm:py-10">
      <ContentContainer>
        <h2 className="mb-4 max-w-3xl text-balance text-6xl font-bold leading-tight tracking-[-0.02em] text-[var(--text)]">
          Tools we watch <span className="text-[var(--red)]">your cloud</span> with
        </h2>
        <div className="flex flex-wrap gap-2">
          {monitoringStack.tools.map((name) => (
            <span
              key={name}
              className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 text-base font-medium text-[var(--text)]"
            >
              {name}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
