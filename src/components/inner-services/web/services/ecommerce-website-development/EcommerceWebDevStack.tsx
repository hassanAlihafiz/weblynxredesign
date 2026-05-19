import { ContentContainer } from "@/components/layout/ContentContainer";

const stack = [
  "Shopify Liquid",
  "Shopify Hydrogen",
  "Next.js",
  "React",
  "TypeScript",
  "Medusa.js",
  "Klaviyo",
  "Stripe",
  "Algolia",
  "Vercel",
  "Sanity",
] as const;

export function EcommerceWebDevStack() {
  return (
    <section className="w-full border-t border-[var(--border)] py-9 sm:py-[2.25rem]">
      <ContentContainer>
        <h2 className="mb-4 text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Tools we <span className="text-[var(--red)]">ship with</span>
        </h2>

        <div className="flex flex-wrap gap-2.5">
          {stack.map((label) => (
            <span
              key={label}
              className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--bg-elev)] px-3 py-1.5 text-sm font-medium text-[var(--text)]"
            >
              {label}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
