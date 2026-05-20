import { ContentContainer } from "@/components/layout/ContentContainer";
import { ABOUT_PAGE } from "@/data/site";
import { AboutSectionHeading } from "./AboutSectionHeading";

const { capabilities } = ABOUT_PAGE;

export function AboutCapabilities() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-14 md:py-20">
      <ContentContainer>
        <AboutSectionHeading heading={capabilities.heading} />

        <p className="mb-12 max-w-md text-[var(--text-muted)]">{capabilities.subtext}</p>

        <div className="grid border-t border-[var(--border-subtle)] md:grid-cols-2">
          {capabilities.items.map(({ title, stack, description, cellClass }) => (
            <article key={title} className={cellClass}>
              <div className="mb-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                <h3 className="text-base font-medium text-[var(--text)]">{title}</h3>
                <span className="shrink-0 text-right font-mono text-xs text-[var(--text-dim)]">{stack}</span>
              </div>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
