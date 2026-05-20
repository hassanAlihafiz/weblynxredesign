import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { ECOMMERCE_WEB_DEV_PAGE } from "@/data/site";

const { caseStudy } = ECOMMERCE_WEB_DEV_PAGE;

export function EcommerceWebDevCaseStudy() {
  return (
    <section id={caseStudy.sectionId} className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <Link
          href={caseStudy.cardHref}
          className="block overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] transition-opacity hover:opacity-95"
        >
          <article className="grid md:grid-cols-[1fr_1.2fr]">
            <div
              className="flex min-h-[200px] items-center justify-center bg-[linear-gradient(135deg,var(--red),var(--red-bright))] text-xs font-medium text-[var(--text)]"
              aria-hidden
            >
              {caseStudy.thumbPlaceholder}
            </div>
            <div className="p-6">
              <div className="mb-2.5 flex flex-wrap gap-1.5">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-[var(--bg-elev)] px-2 py-0.5 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mb-2 text-base font-medium text-[var(--text)]">{caseStudy.title}</h2>
              <p className="mb-3.5 text-base leading-relaxed text-[var(--text-muted)]">{caseStudy.excerpt}</p>
              <div className="flex flex-wrap gap-2.5">
                {caseStudy.stats.map(({ value, label }) => (
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
