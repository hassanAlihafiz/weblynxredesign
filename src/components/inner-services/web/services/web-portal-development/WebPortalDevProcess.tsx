import { ContentContainer } from "@/components/layout/ContentContainer";
import { WEB_PORTAL_DEV_PAGE } from "@/data/site";
import { WebPortalDevSectionHeading } from "./WebPortalDevSectionHeading";

const { process } = WEB_PORTAL_DEV_PAGE;

export function WebPortalDevProcess() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <WebPortalDevSectionHeading heading={process.heading} className="mb-1.5" />
        <p className="mb-5 max-w-2xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          {process.description}
        </p>

        <ul className="grid list-none grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {process.steps.map(({ week, num, title, detail }) => (
            <li key={num} className="border-l-2 border-[var(--red)] py-0.5 pl-2">
              <p className="mb-1 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">{week}</p>
              <p className="mb-1 text-lg font-bold leading-none text-[var(--red)]">{num}</p>
              <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{detail}</p>
            </li>
          ))}
        </ul>
      </ContentContainer>
    </section>
  );
}
