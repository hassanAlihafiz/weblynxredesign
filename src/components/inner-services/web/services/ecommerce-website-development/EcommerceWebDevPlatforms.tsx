import {
  IconBrandReact,
  IconBrandWordpress,
  IconShoppingBag,
  IconShoppingCart,
} from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const platforms: {
  name: string;
  description: string;
  icon: TablerIcon;
  iconClass: string;
  iconBg: string;
}[] = [
  {
    name: "Shopify",
    description: "Custom themes, apps, and Shopify Plus builds. Best for most DTC brands.",
    icon: IconShoppingBag,
    iconClass: "text-[var(--red)]",
    iconBg: "bg-[var(--color-background-primary)]",
  },
  {
    name: "WooCommerce",
    description: "WordPress-based stores. Full control, lower platform fees.",
    icon: IconBrandWordpress,
    iconClass: "text-[var(--red)]",
    iconBg: "bg-[var(--color-background-primary)]",
  },
  {
    name: "Headless (Next.js)",
    description: "Custom storefronts on Shopify Hydrogen or Medusa.js. For brands scaling fast.",
    icon: IconBrandReact,
    iconClass: "text-[var(--red)]",
    iconBg: "bg-[var(--color-background-primary)]",
  },
  {
    name: "BigCommerce",
    description: "Enterprise-grade for B2B and high-volume merchants.",
    icon: IconShoppingCart,
    iconClass: "text-[var(--red)]",
    iconBg: "bg-[var(--color-background-primary)]",
  },
];

export function EcommerceWebDevPlatforms() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-1.5 text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          We pick the <span className="text-[var(--red)]">right tool</span> for your stage
        </h2>
        <p className="mb-5 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          From quick-launch Shopify themes to fully custom headless stacks we&apos;ll recommend what fits your
          business.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map(({ name, description, icon: Icon, iconClass, iconBg }) => (
            <article
              key={name}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4"
            >
              <div
                className={`mb-2.5 flex size-10 items-center justify-center rounded-lg ${iconBg}`}
                aria-hidden
              >
                <Icon className={`size-5 ${iconClass}`} stroke={1.5} />
              </div>
              <h3 className="mb-1.5 text-sm font-medium text-[var(--text)]">{name}</h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{description}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
