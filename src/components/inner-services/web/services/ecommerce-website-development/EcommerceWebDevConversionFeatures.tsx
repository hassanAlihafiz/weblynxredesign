import {
  IconBolt,
  IconChartLine,
  IconCreditCard,
  IconMailForward,
  IconPackage,
  IconSearch,
  IconShoppingCartPlus,
  IconStar,
  IconWorld,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { ECOMMERCE_WEB_DEV_PAGE } from "@/data/site";

const featureIcons = {
  bolt: IconBolt,
  "credit-card": IconCreditCard,
  "shopping-cart-plus": IconShoppingCartPlus,
  "mail-forward": IconMailForward,
  star: IconStar,
  search: IconSearch,
  package: IconPackage,
  "chart-line": IconChartLine,
  world: IconWorld,
} as const satisfies Record<(typeof ECOMMERCE_WEB_DEV_PAGE.conversionFeatures.items)[number]["icon"], TablerIcon>;

const { conversionFeatures } = ECOMMERCE_WEB_DEV_PAGE;

export function EcommerceWebDevConversionFeatures() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Built <span className="text-[var(--red)]">to sell</span>, not just to show
        </h1>
        <p className="mb-5 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          {conversionFeatures.description}
        </p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {conversionFeatures.items.map(({ title, body, icon }) => {
            const Icon = featureIcons[icon];
            return (
              <article key={title} className="rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4">
                <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-sm font-medium text-[var(--text)]">{title}</h3>
                <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
