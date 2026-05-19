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
} from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const features: { title: string; body: string; icon: TablerIcon }[] = [
  { title: "Sub-1s page loads", body: "Every 100ms of speed = ~1% more sales", icon: IconBolt },
  { title: "One-page checkout", body: "Shop Pay, Apple Pay, Google Pay, COD", icon: IconCreditCard },
  { title: "Upsells & bundles", body: "Cart upsells, bundle builders, post-purchase", icon: IconShoppingCartPlus },
  { title: "Abandoned cart flows", body: "Klaviyo email + SMS recovery setup", icon: IconMailForward },
  { title: "Reviews & UGC", body: "Judge.me, Loox, or Okendo integration", icon: IconStar },
  { title: "SEO + product schema", body: "Product, price, review rich snippets", icon: IconSearch },
  { title: "Inventory & shipping", body: "3PL, Shipstation, real-time rates", icon: IconPackage },
  { title: "Analytics & tracking", body: "GA4, Meta CAPI, server-side tracking", icon: IconChartLine },
  { title: "Multi-currency & market", body: "International selling ready out of the box", icon: IconWorld },
];

export function EcommerceWebDevConversionFeatures() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-1.5 text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Built <span className="text-[var(--red)]">to sell</span>, not just to show 
        </h2>
        <p className="mb-5 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          Every store ships with the conversion patterns that actually move the needle.
        </p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4"
            >
              <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
              <h3 className="mb-1 mt-2 text-sm font-medium text-[var(--text)]">{title}</h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
