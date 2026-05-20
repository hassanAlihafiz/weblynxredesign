import { ContentContainer } from "@/components/layout/ContentContainer";
import { CROSS_PLATFORM_APP_DEV_PAGE } from "@/data/site";
import { CrossPlatformDevSectionHeading } from "./CrossPlatformDevSectionHeading";

const { process } = CROSS_PLATFORM_APP_DEV_PAGE;

export function CrossPlatformDevProcess() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <CrossPlatformDevSectionHeading heading={process.heading} className="mb-1.5" />
        <p className="mb-6 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          {process.description}
        </p>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
          {process.steps.map(({ week, num, title, detail }) => (
            <div key={num} className="border-l-2 border-[var(--red)] p-2.5">
              <p className="mb-1 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">{week}</p>
              <p className="mb-1 text-lg font-bold leading-none text-[var(--red)]">{num}</p>
              <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{detail}</p>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
