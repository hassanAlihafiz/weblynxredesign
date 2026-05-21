import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_CONSULTING_SERVICES_PAGE } from "@/data/site";

const { toolkit } = CLOUD_CONSULTING_SERVICES_PAGE;

export function CloudConsultingToolkit() {
  return (
    <section className="w-full border-t border-[var(--border)] py-9 sm:py-10">
      <ContentContainer>
        <h2 className="mb-4 text-lg font-semibold leading-tight tracking-wide text-[var(--text)] sm:text-xl">
          {toolkit.heading}
        </h2>
        <div className="flex flex-wrap gap-2">
          {toolkit.tools.map((name) => (
            <span
              key={name}
              className="rounded-full border border-[var(--border)] bg-[var(--bg-elev)] px-3 py-1.5 text-sm font-medium text-[var(--text)]"
            >
              {name}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
