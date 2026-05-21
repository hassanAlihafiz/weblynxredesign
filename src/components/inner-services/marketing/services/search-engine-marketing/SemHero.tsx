import { IconArrowDown } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";
import { Button } from "@/components/ui";
import { SEARCH_ENGINE_MARKETING_PAGE } from "@/data/site";
import { SemHeroGraphic } from "./SemHeroGraphic";
  
const { hero } = SEARCH_ENGINE_MARKETING_PAGE;

export function SemHero() {
  return (
    <>
      <ContentContainer className="pb-0 pt-3.5">
        <nav className="text-xs text-[var(--text-dim)]" aria-label="Breadcrumb">
          {hero.breadcrumb.map((item, i) => (
            <span key={item.label}>
              {i > 0 ? <span className="mx-1.5">/</span> : null}
              {"href" in item && item.href ? (
                <Link href={item.href} className="transition-colors hover:text-[var(--text-muted)]">
                  {item.label}
                </Link>
              ) : (
                <span className="text-text">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </ContentContainer>

      <section className="relative w-full overflow-hidden pb-14 pt-9 sm:pb-16">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <HeroGridBackground fade />
        </div>

        <ContentContainer className="relative z-[2]">
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-8">
            <div className="min-w-0">
              <h1 className="mb-3.5 max-w-3xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
                Buy clicks <span className="text-[var(--red)]">get customers</span> measure everything
              </h1>

              <p className="mb-5 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">{hero.description}</p>

              <div className="flex flex-wrap gap-2">
                <Button href={hero.primaryCta.href} size="sm" className="rounded-md px-5 py-2.5 text-xs font-semibold">
                  {hero.primaryCta.label}
                </Button>
                <Button
                  href={hero.secondaryCta.href}
                  variant="secondary"
                  size="sm"
                  className="rounded-md border-[var(--border-subtle)] px-5 py-2.5 text-xs font-medium text-text"
                >
                  {hero.secondaryCta.label}
                  <IconArrowDown className="size-4 shrink-0" stroke={1.5} aria-hidden />
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-6 sm:gap-8">
                {hero.stats.map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-sans text-4xl font-semibold leading-none text-[var(--red)]">{value}</p>
                    <p className="mt-0.5 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex h-[280px] items-center justify-center">
              <div
                className="absolute size-[220px] rounded-full bg-[radial-gradient(circle,var(--red-glow),transparent_70%)] blur-[20px]"
                aria-hidden
              />
              <SemHeroGraphic />
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
