import { IconCode, IconLayout, IconLayoutGrid, type TablerIcon } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { BRAND_IDENTITY_DESIGN_PAGE, type BrandIdentityRelatedIconId } from "@/data/site";

const relatedIcons: Record<BrandIdentityRelatedIconId, TablerIcon> = {
  layout: IconLayout,
  "layout-grid": IconLayoutGrid,
  code: IconCode,
};

const { related } = BRAND_IDENTITY_DESIGN_PAGE;

export function BrandIdentityRelated() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <div className="grid gap-3 md:grid-cols-3">
          {related.items.map(({ title, description, href, cta, icon, iconColor }) => {
            const Icon = relatedIcons[icon];
            return (
              <Link
                key={title}
                href={href}
                className="group rounded-[10px] border border-[var(--border)] bg-[var(--bg)] p-[18px] transition-colors hover:border-[var(--red)]/40"
              >
                <Icon className="size-[22px] shrink-0" style={{ color: iconColor }} stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-sm font-semibold text-[var(--text)]">{title}</h3>
                <p className="mb-2.5 text-xs leading-[1.6] text-[var(--text-muted)]">{description}</p>
                <span className="text-[11px] font-semibold text-[var(--red)] group-hover:opacity-90">{cta}</span>
              </Link>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
