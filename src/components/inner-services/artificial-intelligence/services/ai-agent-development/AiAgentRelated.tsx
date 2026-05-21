import { IconBolt, IconDatabaseSearch, IconMessages, type TablerIcon } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { AI_AGENT_DEVELOPMENT_PAGE, type AiAgentRelatedIconId } from "@/data/site";

const relatedIcons: Record<AiAgentRelatedIconId, TablerIcon> = {
  bolt: IconBolt,
  "database-search": IconDatabaseSearch,
  messages: IconMessages,
};

const { related } = AI_AGENT_DEVELOPMENT_PAGE;

export function AiAgentRelated() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <div className="grid gap-3 md:grid-cols-3">
          {related.items.map(({ title, description, href, icon, iconColor }) => {
            const Icon = relatedIcons[icon];
            return (
              <Link
                key={title}
                href={href}
                className="group rounded-[var(--border-radius-md)] border border-[var(--border)] bg-[var(--bg-elev)] p-4 transition-colors hover:border-[var(--red)]/40"
              >
                <Icon className="size-6 shrink-0" style={{ color: iconColor }} stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-sm font-semibold text-[var(--text)]">{title}</h3>
                <p className="mb-2.5 text-base leading-relaxed text-[var(--text-muted)]">{description}</p>
              </Link>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
