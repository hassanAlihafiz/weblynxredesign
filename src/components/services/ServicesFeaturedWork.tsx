import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { PROJECT_SHOWCASES, SERVICES_PAGE } from "@/data/site";

const { featuredWork } = SERVICES_PAGE;

export function ServicesFeaturedWork() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-14 md:py-20">
      <ContentContainer>
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="max-w-2xl font-sans text-4xl font-bold leading-[1.1] tracking-[-0.025em] text-[var(--text)] md:text-5xl">
              Work across all <span className="text-[var(--red)]">four services</span>
            </h2>
          </div>
          <Link
            href={featuredWork.viewAllHref}
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-[var(--red)] transition-colors hover:text-[var(--red-bright)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]"
          >
            {featuredWork.viewAllLabel}
            <IconArrowRight className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {PROJECT_SHOWCASES.services.map(({ title, gradient, tileLabel, meta }) => (
            <article key={title} className="block min-w-0">
              <div className="overflow-hidden rounded-xl" style={{ background: gradient }}>
                <div className="flex aspect-[4/3] items-center justify-center">
                  <span className="font-mono text-xs text-white/60">{tileLabel}</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-sm font-medium text-[var(--text)]">{title}</div>
                <div className="text-xs text-[var(--text-muted)]">{meta}</div>
              </div>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
