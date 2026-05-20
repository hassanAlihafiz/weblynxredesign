import { IconFileText, IconLink, IconPencil, IconTools, type TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SEARCH_ENGINE_OPTIMIZATION_PAGE, type SeoPillarIconId } from "@/data/site";

const pillarIcons: Record<SeoPillarIconId, TablerIcon> = {
  tools: IconTools,
  "file-text": IconFileText,
  pencil: IconPencil,
  link: IconLink,
};

const { pillars } = SEARCH_ENGINE_OPTIMIZATION_PAGE;

export function SeoPillars() {
  return (
    <section
      id={pillars.sectionId}
      className="scroll-mt-24 w-full bg-[var(--color-background-secondary)] py-10 sm:py-11"
    >
      <ContentContainer>
        <h2 className="mb-5 max-w-xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
          {pillars.heading.before}
          <span className="text-[var(--red)]">{pillars.heading.emphasis}</span>
          {pillars.heading.after}
        </h2>
        <p className="mb-5 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">{pillars.description}</p>

        <div className="grid gap-3 sm:grid-cols-2">
          {pillars.items.map(({ num, title, body, footer, icon }) => {
            const Icon = pillarIcons[icon];
            return (
              <article
                key={num}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-5"
              >
                <div className="mb-3 flex items-start justify-between">
                  <Icon className="size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                  <span className="text-sm font-medium text-text-muted">{num}</span>
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-text">{title}</h3>
                <p className="mb-2.5 text-sm leading-relaxed text-text-muted">{body}</p>
                <p className="text-sm leading-relaxed text-text-muted">{footer}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
