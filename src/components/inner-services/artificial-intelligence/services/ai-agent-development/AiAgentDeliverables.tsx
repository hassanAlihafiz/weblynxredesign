import {
  IconBrain,
  IconChartDots3,
  IconDatabase,
  IconHistory,
  IconLayoutDashboard,
  IconRoute,
  IconShieldCheck,
  IconTool,
  IconUserCheck,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { AI_AGENT_DEVELOPMENT_PAGE, type AiAgentDeliverableIconId } from "@/data/site";

const deliverableIcons: Record<AiAgentDeliverableIconId, TablerIcon> = {
  route: IconRoute,
  brain: IconBrain,
  tools: IconTool,
  database: IconDatabase,
  "user-check": IconUserCheck,
  "shield-check": IconShieldCheck,
  "chart-dots-3": IconChartDots3,
  history: IconHistory,
  "layout-dashboard": IconLayoutDashboard,
};

const { deliverables } = AI_AGENT_DEVELOPMENT_PAGE;

export function AiAgentDeliverables() {
  return (
    <section className="w-full border-t border-[#252525] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Every agent <span className="text-[var(--red)]">build</span> includes
        </h2>
        <p className="mb-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{deliverables.description}</p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.items.map(({ title, body, icon }) => {
            const Icon = deliverableIcons[icon];
            return (
              <article
                key={title}
                className="rounded-[var(--border-radius-md)] border border-[var(--border)] bg-[var(--bg-elev)] p-4"
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
