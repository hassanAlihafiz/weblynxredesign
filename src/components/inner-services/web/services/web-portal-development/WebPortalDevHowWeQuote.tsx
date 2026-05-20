import { ContentContainer } from "@/components/layout/ContentContainer";
import { WEB_PORTAL_DEV_PAGE } from "@/data/site";
import { WebPortalDevSectionHeading } from "./WebPortalDevSectionHeading";

const { howWeQuote } = WEB_PORTAL_DEV_PAGE;

export function WebPortalDevHowWeQuote() {
  return (
    <section id={howWeQuote.sectionId} className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-6">
          <header>
            <WebPortalDevSectionHeading heading={howWeQuote.heading} className="max-w-3xl" />
          </header>

          <div>
            <p className="mb-5 max-w-2xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
              {howWeQuote.intro}
            </p>
            <ul className="grid list-none gap-2.5 sm:grid-cols-3">
              {howWeQuote.steps.map(({ num, title, body }) => (
                <li key={num} className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4">
                  <p className="mb-1 text-lg font-bold leading-none text-[var(--red)]">{num}</p>
                  <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
