import { ContentContainer } from "@/components/layout/ContentContainer";
import { CROSS_PLATFORM_APP_DEV_PAGE } from "@/data/site";
import { CrossPlatformDevSectionHeading } from "./CrossPlatformDevSectionHeading";

const { howWeQuote } = CROSS_PLATFORM_APP_DEV_PAGE;

export function CrossPlatformDevHowWeQuote() {
  return (
    <section id={howWeQuote.sectionId} className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-6">
          <div>
            <CrossPlatformDevSectionHeading heading={howWeQuote.heading} className="mb-1.5" />
          </div>

          <div>
            <p className="mb-6 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
              {howWeQuote.intro}
            </p>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {howWeQuote.steps.map(({ num, title, body }) => (
                <article key={num} className="rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4">
                  <p className="mb-1 text-lg font-bold leading-none text-[var(--red)]">{num}</p>
                  <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
                  <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
