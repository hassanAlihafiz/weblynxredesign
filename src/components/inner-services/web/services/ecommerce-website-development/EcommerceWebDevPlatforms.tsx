import {
  IconBrandReact,
  IconBrandWordpress,
  IconShoppingBag,
  IconShoppingCart,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { ECOMMERCE_WEB_DEV_PAGE } from "@/data/site";
import { EcommerceWebDevSectionHeading } from "./EcommerceWebDevSectionHeading";

const platformIcons = {
  "shopping-bag": IconShoppingBag,
  "brand-wordpress": IconBrandWordpress,
  "brand-react": IconBrandReact,
  "shopping-cart": IconShoppingCart,
} as const satisfies Record<(typeof ECOMMERCE_WEB_DEV_PAGE.platforms.items)[number]["icon"], TablerIcon>;

const { platforms } = ECOMMERCE_WEB_DEV_PAGE;

export function EcommerceWebDevPlatforms() {
  const { iconClass } = platforms.iconDefaults;

  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <EcommerceWebDevSectionHeading heading={platforms.heading} className="mb-1.5" />
        <p className="mb-5 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          {platforms.description}
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.items.map(({ name, description, icon }) => {
            const Icon = platformIcons[icon];
            return (
              <article key={name} className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4">
                <div className="mb-2.5 flex size-10 items-center justify-center rounded-lg text-[var(--red)]" aria-hidden>
                  <Icon className={`size-5 ${iconClass}`} stroke={1.5} />
                </div>
                <h3 className="mb-1.5 text-sm font-medium text-[var(--text)]">{name}</h3>
                <p className="text-base leading-relaxed text-[var(--text-muted)]">{description}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
