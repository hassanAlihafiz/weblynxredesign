import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_APPLICATION_DEVELOPMENT_PAGE } from "@/data/site";

const { toolkit } = CLOUD_APPLICATION_DEVELOPMENT_PAGE;

export function CloudAppDevToolkit() {
  return (
    <section className="w-full border-t border-[var(--border)] py-9 sm:py-10">
      <ContentContainer>
        <h2 className="mb-4 text-base font-semibold leading-tight tracking-wide text-[var(--text)] sm:text-lg">
          {toolkit.heading}
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {toolkit.tools.map((name) => (
            <span
              key={name}
              className="rounded-full border border-[var(--border)] bg-[var(--bg-elev)] px-3 py-1.5 text-xs font-medium text-[var(--text)]"
            >
              {name}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
