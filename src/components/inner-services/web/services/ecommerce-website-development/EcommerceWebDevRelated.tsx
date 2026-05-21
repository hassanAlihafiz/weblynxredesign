import { IconDevices, IconPalette, IconTrendingUp, type TablerIcon } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { ECOMMERCE_WEB_DEV_PAGE } from "@/data/site";

const relatedIcons = {
  "trending-up": IconTrendingUp,
  palette: IconPalette,
  devices: IconDevices,
} as const satisfies Record<(typeof ECOMMERCE_WEB_DEV_PAGE.related.items)[number]["icon"], TablerIcon>;

const { related } = ECOMMERCE_WEB_DEV_PAGE;

export function EcommerceWebDevRelated() {
  const { iconClass, ctaClass } = related.linkDefaults;

  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Also explore <span className="text-[var(--red)]">other services</span>
        </h1>

        <div className="grid gap-3 md:grid-cols-3">
          {related.items.map(({ title, description, href, cta, icon }) => {
            const Icon = relatedIcons[icon];
            return (
              <Link
                key={title}
                href={href}
                className="group rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4 transition-colors hover:border-[var(--border)]"
              >
                <Icon className={`size-5 shrink-0 ${iconClass}`} stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-sm font-medium text-[var(--text)]">{title}</h3>
                <p className="mb-2.5 text-base leading-relaxed text-[var(--text-muted)]">{description}</p>
                <span className={`text-sm font-medium ${ctaClass} group-hover:opacity-90`}>{cta}</span>
              </Link>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
