import { IconDatabaseSearch, IconMessages, IconSparkles, type TablerIcon } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { NATURAL_LANGUAGE_PROCESSING_PAGE, type NlpRelatedIconId } from "@/data/site";

const relatedIcons: Record<NlpRelatedIconId, TablerIcon> = {
  "database-search": IconDatabaseSearch,
  messages: IconMessages,
  sparkles: IconSparkles,
};

const { related } = NATURAL_LANGUAGE_PROCESSING_PAGE;

export function NlpRelated() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11">
      <ContentContainer>
        <div className="grid gap-3 md:grid-cols-3">
          {related.items.map(({ title, description, href, cta, icon, iconColor }) => {
            const Icon = relatedIcons[icon];
            return (
              <Link
                key={title}
                href={href}
                className="group rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-[18px] transition-colors hover:border-[var(--red)]/40"
              >
                <Icon className="size-6 shrink-0" style={{ color: iconColor }} stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-sm font-semibold text-[var(--text)]">{title}</h3>
                <p className="mb-2.5 text-base leading-relaxed text-[var(--text-muted)]">{description}</p>
                <span className="text-sm font-semibold text-[var(--red)] group-hover:opacity-90">{cta}</span>
              </Link>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
