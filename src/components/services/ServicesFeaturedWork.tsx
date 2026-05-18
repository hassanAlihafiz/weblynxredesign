import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { PROJECT_SHOWCASES } from "@/data/site";

export function ServicesFeaturedWork() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-14 md:py-20">
      <ContentContainer>
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
            Recent results
          </p>
          <h2 className="max-w-2xl font-sans text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-[var(--text)] md:text-4xl">
            Work across all four services
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

      <div className="grid gap-4 md:grid-cols-3">
        {PROJECT_SHOWCASES.services.map(({ href, gradient, tileLabel, title, meta }) => (
          <Link key={href} href={href} className="block min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]">
            <div className="overflow-hidden rounded-xl" style={{ background: gradient }}>
              <div className="flex aspect-[4/3] items-center justify-center">
                <span className="font-mono text-xs text-white/60">{tileLabel}</span>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm font-medium text-[var(--text)]">{title}</div>
              <div className="text-xs text-[var(--text-muted)]">{meta}</div>
            </div>
          </Link>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
