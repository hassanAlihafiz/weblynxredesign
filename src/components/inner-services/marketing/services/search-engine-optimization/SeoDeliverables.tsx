import {
  IconChartLine,
  IconClipboardSearch,
  IconKey,
  IconLink,
  IconMessageCircle2,
  IconPencil,
  IconRadar,
  IconStack2,
  IconTools,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SEARCH_ENGINE_OPTIMIZATION_PAGE, type SeoDeliverableIconId } from "@/data/site";

const deliverableIcons: Record<SeoDeliverableIconId, TablerIcon> = {
  "clipboard-search": IconClipboardSearch,
  key: IconKey,
  "stack-2": IconStack2,
  pencil: IconPencil,
  tools: IconTools,
  link: IconLink,
  "chart-line": IconChartLine,
  radar: IconRadar,
  "message-circle-2": IconMessageCircle2,
};

const { deliverables } = SEARCH_ENGINE_OPTIMIZATION_PAGE;

export function SeoDeliverables() {
  return (
    <section className="w-full bg-[var(--color-background-secondary)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
          Every <span className="text-[var(--red)]">SEO</span> engagement includes
        </h2>
        <p className="mb-5 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">{deliverables.description}</p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.items.map(({ title, body, icon }) => {
            const Icon = deliverableIcons[icon];
            return (
              <article
                key={title}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-5"
              >
                <Icon className="size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1.5 text-base font-semibold text-text">{title}</h3>
                <p className="mb-2.5 text-sm leading-relaxed text-text-muted">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
