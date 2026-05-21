import {
  IconClipboardText,
  IconCode,
  IconHeadset,
  IconMailForward,
  IconSearch,
  IconUsersGroup,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { AI_AGENT_DEVELOPMENT_PAGE, type AiAgentTypeIconId } from "@/data/site";

const typeIcons: Record<AiAgentTypeIconId, TablerIcon> = {
  search: IconSearch,
  "mail-forward": IconMailForward,
  headset: IconHeadset,
  "clipboard-text": IconClipboardText,
  code: IconCode,
  "users-group": IconUsersGroup,
};

const { agentTypes } = AI_AGENT_DEVELOPMENT_PAGE;

export function AiAgentTypes() {
  return (
    <section
      id={agentTypes.sectionId}
      className="scroll-mt-24 w-full border-t border-[var(--border)] py-10 sm:py-11"
    >
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Six agent patterns <span className="text-[var(--red)]">one framework</span>
        </h2>
        <p className="mb-5 max-w-xl text-balance leading-relaxed text-[var(--text-muted)]">{agentTypes.description}</p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {agentTypes.items.map(({ title, body, icon }) => {
            const Icon = typeIcons[icon];
            return (
              <article
                key={title}
                className="rounded-[var(--border-radius-md)] border border-[var(--border)] bg-[var(--bg-elev)] p-[18px]"
              >
                <Icon className="size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1.5 mt-2.5 text-sm font-semibold text-[var(--text)]">{title}</h3>
                <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
