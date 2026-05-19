import { IconCheck } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const reasons = [
  "You're launching a DTC brand and need a high-converting storefront",
  "Your current store is slow, dated, or losing visitors at checkout",
  "You need a custom Shopify theme not a $200 template every brand uses",
  "You're scaling beyond Shopify limits and need headless commerce",
] as const;

export function EcommerceWebDevWhoFor() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-9 sm:py-[2.25rem]">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          You probably <span className="text-[var(--red)]">need this</span> if...
        </h2>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {reasons.map((text) => (
            <div
              key={text}
              className="flex items-start gap-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] px-4 py-3.5"
            >
              <IconCheck className="mt-px size-5 shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
              <span className="text-base leading-relaxed text-[var(--text)]">{text}</span>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
