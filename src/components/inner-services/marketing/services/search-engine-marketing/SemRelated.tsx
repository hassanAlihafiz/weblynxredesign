import { IconLayout, IconMessage2Share, IconSearch, type TablerIcon } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SEARCH_ENGINE_MARKETING_PAGE, type SemRelatedIconId } from "@/data/site";

const relatedIcons: Record<SemRelatedIconId, TablerIcon> = {
  search: IconSearch,
  "message-2-share": IconMessage2Share,
  layout: IconLayout,
};

const { related } = SEARCH_ENGINE_MARKETING_PAGE;

export function SemRelated() {
  return (
    <section className="w-full border-t border-[#252525] py-10 sm:py-11">
      <ContentContainer>
        <p className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#E63946]">{related.eyebrow}</p>

        <div className="grid gap-3 md:grid-cols-3">
          {related.items.map(({ title, description, href, cta, icon, iconColor }) => {
            const Icon = relatedIcons[icon];
            return (
              <Link
                key={title}
                href={href}
                className="group rounded-[10px] border border-[#252525] bg-[#141414] p-[18px] transition-colors hover:border-[#E63946]/40"
              >
                <Icon className="size-[22px] shrink-0" style={{ color: iconColor }} stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-sm font-semibold text-[#FAFAFA]">{title}</h3>
                <p className="mb-2.5 text-xs leading-[1.6] text-[#B5B5B5]">{description}</p>
                <span className="text-[11px] font-semibold text-[#E63946] group-hover:opacity-90">{cta}</span>
              </Link>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
