import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";

const tags = ["DTC", "Shopify"] as const;

const stats = [
  { value: "2.5×", label: "Revenue" },
  { value: "+40%", label: "Conversion" },
  { value: "+22%", label: "AOV" },
] as const;

export function EcommerceWebDevCaseStudy() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <Link
          href="/case-studies"
          className="block overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] transition-opacity hover:opacity-95"
        >
          <article className="grid md:grid-cols-[1fr_1.2fr]">
            <div
              className="flex min-h-[200px] items-center justify-center bg-[linear-gradient(135deg,var(--red),var(--red-bright))] text-xs font-medium text-[var(--text)]"
              aria-hidden
            >
              NorthBrand store screenshot
            </div>
            <div className="p-6">
              <div className="mb-2.5 flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-[var(--bg-elev)] px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mb-2 text-base font-medium text-[var(--text)]">
                NorthBrand 2.5x revenue in 90 days
              </h2>
              <p className="mb-3.5 text-base leading-relaxed text-[var(--text-muted)]">
                Rebuilt their Shopify store with a custom theme, redesigned checkout, and Klaviyo flows. Cut load time
                4×, lifted conversion 40%, and boosted AOV 22%.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {stats.map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-sans text-lg font-bold leading-none text-[var(--red)]">{value}</p>
                    <p className="text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </Link>
      </ContentContainer>
    </section>
  );
}
