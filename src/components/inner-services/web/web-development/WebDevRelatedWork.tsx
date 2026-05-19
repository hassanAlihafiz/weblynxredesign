import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { PROJECT_SHOWCASES } from "@/data/site";

export function WebDevRelatedWork() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
            Web projects we&apos;ve <span className="text-[var(--red)]">shipped</span>
          </h2>
        </div>
        <Link
          href="/work"
          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-[var(--red)] transition-colors hover:text-[var(--red-bright)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]"
        >
          View all
          <IconArrowRight className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {PROJECT_SHOWCASES.webDevelopment.map(({ gradient, tileLabel, title, meta }) => (
          <article key={title} className="block min-w-0">
            <div className="overflow-hidden rounded-xl" style={{ background: gradient }}>
              <div className="flex aspect-[4/3] items-center justify-center">
                <span className="font-mono text-xs text-white/60">{tileLabel}</span>
              </div>
            </div>
            <div className="mt-3">
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
