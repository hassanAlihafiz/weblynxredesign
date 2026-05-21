import { IconEye, IconGauge, IconHandStop, IconLockSquare, type TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { AI_AGENT_DEVELOPMENT_PAGE, type AiAgentSafetyIconId } from "@/data/site";

const safetyIcons: Record<AiAgentSafetyIconId, TablerIcon> = {
  "lock-square": IconLockSquare,
  "hand-stop": IconHandStop,
  gauge: IconGauge,
  eye: IconEye,
};

const { safety } = AI_AGENT_DEVELOPMENT_PAGE;

export function AiAgentSafety() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Power <span className="text-[var(--red)]">without the chaos</span>
        </h2>
        <p className="mb-5 max-w-xl text-balance leading-relaxed text-[var(--text-muted)]">{safety.description}</p>

        <div className="grid gap-3 sm:grid-cols-2">
          {safety.items.map(({ num, title, body, icon }) => {
            const Icon = safetyIcons[icon];
            return (
              <article
                key={num}
                className="rounded-[var(--border-radius-md)] border border-[var(--border)] bg-[var(--bg-elev)] p-5"
              >
                <div className="mb-2.5 flex items-start justify-between">
                  <Icon className="size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                  <span className="text-sm text-[var(--text-muted)]">{num}</span>
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-[var(--text)]">{title}</h3>
                <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
