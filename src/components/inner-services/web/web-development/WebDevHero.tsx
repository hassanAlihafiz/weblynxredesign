import { IconArrowDown } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { Button } from "@/components/ui";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";
import { WEB_DEVELOPMENT_PAGE } from "@/data/site";

const { hero } = WEB_DEVELOPMENT_PAGE;

export function WebDevHero() {
  return (
    <>
      <ContentContainer className="pb-2 pt-8">
        <div className="font-mono text-xs text-[var(--text-dim)]">
          <Link href={hero.breadcrumb.parentHref} className="transition-colors hover:text-[var(--text-muted)]">
            {hero.breadcrumb.parentLabel}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--text)]">{hero.breadcrumb.currentLabel}</span>
        </div>
      </ContentContainer>

      <section className="relative w-full overflow-hidden pb-20 pt-10">
        <HeroGridBackground fade />
        <div
          className="pointer-events-none absolute right-0 top-0 size-[min(500px,100vw)] rounded-full red-glow"
          aria-hidden
        />

        <ContentContainer className="relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
                {hero.eyebrow}
              </p>
              <h1 className="mb-6 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
                {hero.heading.before}
                <span className="text-[var(--red)]">{hero.heading.emphasis}</span>
                {hero.heading.after}
              </h1>
              <p className="mb-8 max-w-md text-lg leading-relaxed text-[var(--text-muted)]">{hero.description}</p>
              <div className="flex flex-wrap gap-3">
                <Button href={hero.primaryCta.href} size="md">
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="secondary" size="md">
                  {hero.secondaryCta.label}
                  <IconArrowDown className="size-4 shrink-0" stroke={1.5} aria-hidden />
                </Button>
              </div>
            </div>

            <div className="relative min-w-0 overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)]">
              <div className="flex items-center gap-1.5 border-b border-[var(--border-subtle)] p-3">
                <span className="size-2.5 shrink-0 rounded-full bg-[#E24B4A]" aria-hidden />
                <span className="size-2.5 shrink-0 rounded-full bg-[#EF9F27]" aria-hidden />
                <span className="size-2.5 shrink-0 rounded-full bg-[#97C459]" aria-hidden />
                <div className="ml-3 min-w-0 flex-1 truncate font-mono text-[10px] text-[var(--text-dim)]">
                  {hero.mockBrowserUrl}
                </div>
              </div>
              <div className="space-y-3 p-6">
                <div className="h-3 w-2/3 rounded bg-[var(--red)]" />
                <div className="h-2 w-1/2 rounded bg-[var(--border)]" />
                <div className="h-2 w-3/5 rounded bg-[var(--border)]" />
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <div className="h-16 rounded bg-[var(--bg-elev)]" />
                  <div className="h-16 rounded bg-[var(--bg-elev)]" />
                </div>
                <div className="mt-3 flex gap-2">
                  <div className="h-6 w-20 rounded bg-[var(--red)]" />
                  <div className="h-6 w-20 rounded border border-[var(--border-subtle)]" />
                </div>
              </div>
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
