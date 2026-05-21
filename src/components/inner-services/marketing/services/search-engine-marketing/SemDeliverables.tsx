import {
  IconAdjustments,
  IconChartLine,
  IconClipboardList,
  IconFlask,
  IconKey,
  IconLayout,
  IconMessageCircle2,
  IconPencil,
  IconTarget,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SEARCH_ENGINE_MARKETING_PAGE, type SemDeliverableIconId } from "@/data/site";

const deliverableIcons: Record<SemDeliverableIconId, TablerIcon> = {
  "clipboard-list": IconClipboardList,
  key: IconKey,
  pencil: IconPencil,
  layout: IconLayout,
  target: IconTarget,
  flask: IconFlask,
  adjustments: IconAdjustments,
  "chart-line": IconChartLine,
  "message-circle-2": IconMessageCircle2,
};

const { deliverables } = SEARCH_ENGINE_MARKETING_PAGE;

export function SemDeliverables() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
          Every <span className="text-[var(--red)]">SEM</span> engagement includes
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
                <Icon className="size-5 shrink-0 text-[var(--red-bright)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-base font-semibold text-text">{title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
