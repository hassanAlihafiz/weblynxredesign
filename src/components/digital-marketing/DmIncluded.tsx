import type { TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import {
  IconChartLine,
  IconClipboardList,
  IconFlask,
  IconMessage,
  IconRoute,
  IconTrendingUp,
} from "@tabler/icons-react";

const items: { title: string; body: string; icon: TablerIcon }[] = [
  { title: "Growth audit", body: "Full review of your channels & gaps", icon: IconClipboardList },
  { title: "Custom strategy", body: "90-day roadmap tied to your goals", icon: IconRoute },
  { title: "Monthly reporting", body: "Live dashboard + written insights", icon: IconChartLine },
  { title: "A/B testing", body: "Continuous testing on copy & creative", icon: IconFlask },
  { title: "Weekly check-ins", body: "Slack access + bi-weekly calls", icon: IconMessage },
  { title: "Conversion tracking", body: "GA4, Mixpanel, attribution setup", icon: IconTrendingUp },
];

export function DmIncluded() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
      <h2 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
        Every engagement includes <span className="text-[var(--red)]">everything</span>
      </h2>
      <p className="mb-10 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
        No vague reports. No vanity metrics. Just measurable growth.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(({ title, body, icon: Icon }) => (
          <article
            key={title}
            className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-5 shadow-[var(--shadow-xs)]"
          >
            <Icon className="mb-3 size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
            <h3 className="mb-2 font-medium text-[var(--text)]">{title}</h3>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
          </article>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
