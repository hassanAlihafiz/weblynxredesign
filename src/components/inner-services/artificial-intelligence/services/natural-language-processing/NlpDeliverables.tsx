import {
  IconAdjustments,
  IconApi,
  IconBolt,
  IconBrain,
  IconChartDots3,
  IconCurrencyDollar,
  IconDatabase,
  IconTarget,
  IconTestPipe,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { NATURAL_LANGUAGE_PROCESSING_PAGE, type NlpDeliverableIconId } from "@/data/site";

const deliverableIcons: Record<NlpDeliverableIconId, TablerIcon> = {
  target: IconTarget,
  database: IconDatabase,
  brain: IconBrain,
  adjustments: IconAdjustments,
  api: IconApi,
  "test-pipe": IconTestPipe,
  bolt: IconBolt,
  "chart-dots-3": IconChartDots3,
  "currency-dollar": IconCurrencyDollar,
};

const { deliverables } = NATURAL_LANGUAGE_PROCESSING_PAGE;

export function NlpDeliverables() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Every <span className="text-[var(--red)]">NLP project</span> includes
        </h2>
        <p className="mb-5 max-w-lg text-lg leading-tight text-[var(--text-muted)]">{deliverables.description}</p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.items.map(({ title, body, icon }) => {
            const Icon = deliverableIcons[icon];
            return (
              <article
                key={title}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4"
              >
                <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-sm font-semibold text-[var(--text)]">{title}</h3>
                <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
