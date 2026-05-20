import { IconCloud, IconDevices, IconShoppingBag, type TablerIcon } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { WEB_PORTAL_DEV_PAGE } from "@/data/site";
import { WebPortalDevSectionHeading } from "./WebPortalDevSectionHeading";

const relatedIcons = {
  cloud: IconCloud,
  "shopping-bag": IconShoppingBag,
  devices: IconDevices,
} as const satisfies Record<(typeof WEB_PORTAL_DEV_PAGE.related.items)[number]["icon"], TablerIcon>;

const { related } = WEB_PORTAL_DEV_PAGE;

export function WebPortalDevRelated() {
  const { iconClass, ctaClass } = related.linkDefaults;

  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <WebPortalDevSectionHeading heading={related.heading} className="mb-5" />

        <ul className="grid list-none gap-3 md:grid-cols-3">
          {related.items.map(({ title, description, href, cta, icon }) => {
            const Icon = relatedIcons[icon];
            return (
              <li key={title}>
                <Link
                  href={href}
                  className="group block rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4 transition-colors hover:border-[var(--border)]"
                >
                  <Icon className={`size-5 shrink-0 ${iconClass}`} stroke={1.5} aria-hidden />
                  <h3 className="mb-1 mt-2 text-base font-medium text-[var(--text)]">{title}</h3>
                  <p className="mb-2.5 text-base leading-relaxed text-[var(--text-muted)]">{description}</p>
                  <span className={`text-sm font-medium ${ctaClass} group-hover:opacity-90`}>{cta}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </ContentContainer>
    </section>
  );
}
