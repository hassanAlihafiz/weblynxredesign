import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { PROJECT_SHOWCASES } from "@/data/site";

const liftClass =
  "block transition-[transform,border-color] duration-200 motion-safe:hover:-translate-y-0.5";

const chipClass =
  "inline-flex items-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]";

export function HomeCaseStudies() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-14 md:py-20">
      <ContentContainer>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-balance font-sans text-4xl font-semibold leading-[1.05] tracking-[-0.025em] text-[var(--text)] md:text-5xl">
            Projects
          </h2>
        </div>
        <Link
          href="/work"
          className="inline-flex items-center gap-1 text-sm font-medium text-[var(--red)] transition-colors hover:text-[var(--red-bright)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]"
        >
          View all work
          <IconArrowRight className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECT_SHOWCASES.home.map(
          ({ href, tileGradient, mockClassName, mockLabel, tags, title, description }) => (
            <article key={href} className={`group/case ${liftClass}`}>
              <div className="overflow-hidden rounded-xl" style={{ background: tileGradient }}>
                <div className="flex aspect-[4/3] flex-col items-center justify-center">
                  <div className="flex flex-col items-center gap-2 opacity-70">
                    <div className={mockClassName} aria-hidden />
                    <span className="font-mono text-xs text-white/60">{mockLabel}</span>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="mb-3 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className={chipClass}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-1 font-sans text-xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)]">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
              </div>
            </article>
          ),
        )}
      </div>
    </ContentContainer>
    </section>
  );
}
