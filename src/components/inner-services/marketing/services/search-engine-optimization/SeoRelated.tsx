import { IconCode, IconPencil, IconTargetArrow, type TablerIcon } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SEARCH_ENGINE_OPTIMIZATION_PAGE, type SeoRelatedIconId } from "@/data/site";

const relatedIcons: Record<SeoRelatedIconId, TablerIcon> = {
  "target-arrow": IconTargetArrow,
  pencil: IconPencil,
  code: IconCode,
};

const { related } = SEARCH_ENGINE_OPTIMIZATION_PAGE;

export function SeoRelated() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <div className="grid gap-3 md:grid-cols-3">
          {related.items.map(({ title, description, href, cta, icon, iconColor }) => {
            const Icon = relatedIcons[icon];
            return (
              <Link
                key={title}
                href={href}
                className="group rounded-xl border border-[var(--border-subtle)] bg-[var(--color-background-primary)] p-5 transition-colors hover:border-[var(--red)]/40"
              >
                <Icon className="size-6 shrink-0" style={{ color: iconColor }} stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-sm font-semibold text-text">{title}</h3>
                <p className="mb-2.5 text-sm leading-relaxed text-text-muted">{description}</p>
                <span className="text-sm font-semibold text-[var(--red)] group-hover:opacity-90">{cta}</span>
              </Link>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
