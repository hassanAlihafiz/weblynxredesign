"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useId, useState } from "react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const faqs = [
  {
    q: "Shopify or custom which should I pick?",
    a: "Shopify is the right default for most DTC brands: faster launch, proven checkout, and a huge app ecosystem. Custom or headless makes sense when you outgrow theme limits, need complex B2B logic, or want a fully owned storefront on Next.js. We recommend one on your discovery call based on revenue stage, catalog size, and team not hype.",
  },
  {
    q: "Can you migrate my existing store from WooCommerce or Magento?",
    a: "Yes. We migrate products, collections, customers, order history where possible, and URL redirects for SEO. Downtime is minimized with a staged cutover often a weekend launch after parallel testing on the new theme or stack.",
  },
  {
    q: 'What\'s "headless" commerce and do I need it?',
    a: "Headless means the storefront (what shoppers see) is separate from the commerce backend (Shopify, Medusa, etc.), usually built in Next.js. You need it when you want maximum speed, custom UX, or multi-channel selling beyond a standard theme. Most brands under ~$5M ARR don't need it yet Shopify with a custom theme is enough.",
  },
  {
    q: "Will my store be ready for Black Friday traffic spikes?",
    a: "Yes. We optimize images, scripts, and checkout flows for peak traffic, use Shopify's CDN and infrastructure (or Vercel for headless), and load-test critical paths before launch. For headless builds we configure caching and rate limits so product pages stay fast under surge traffic.",
  },
  {
    q: "Do you handle product photography or content writing?",
    a: "We focus on store build, conversion UX, and integrations. Photography and copywriting aren't included, but we can recommend partners or work from your brand guidelines and existing assets. PDP templates and collection layouts are part of the build.",
  },
  {
    q: "Who owns the store, theme code, and customer data?",
    a: "You do. The store lives in your Shopify (or platform) account, theme and custom code ship in your Git repos, and customer data stays in your platform. We hand off credentials, documentation, and admin training at launch no lock-in.",
  },
] as const;

export function EcommerceWebDevFaq() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-5 text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Things ecom founders ask <span className="text-[var(--red)]">before starting</span>
        </h2>

        <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elev)]">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-btn-${i}`;
            const isLast = i === faqs.length - 1;

            return (
              <div key={q} className={isLast ? "" : "border-b border-[var(--border)]"}>
                <button
                  type="button"
                  id={buttonId}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-[var(--bg-elev)]"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="text-sm font-medium text-[var(--text)]">{q}</span>
                  {isOpen ? (
                    <IconMinus className="size-4 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                  ) : (
                    <IconPlus className="size-4 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                  )}
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-[var(--border)] p-4 text-base leading-relaxed text-[var(--text-muted)]">
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
