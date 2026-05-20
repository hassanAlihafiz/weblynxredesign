import { IconArrowDown } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { Button } from "@/components/ui";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";
import { CROSS_PLATFORM_APP_DEV_PAGE } from "@/data/site";
import { CrossPlatformDevHeroGraphic } from "./CrossPlatformDevHeroGraphic";

const { hero } = CROSS_PLATFORM_APP_DEV_PAGE;

export function CrossPlatformDevHero() {
  return (
    <>
      <ContentContainer className="pb-0 pt-3.5">
        <nav className="text-[11px] text-[#6F6F6F]" aria-label="Breadcrumb">
          {hero.breadcrumb.map((item, i) => (
            <span key={item.label}>
              {i > 0 ? <span className="mx-1.5">/</span> : null}
              {"href" in item && item.href ? (
                <Link href={item.href} className="transition-colors hover:text-[var(--text-muted)]">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[var(--text)]">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </ContentContainer>

      <section className="relative w-full overflow-hidden pb-14 pt-6 sm:pb-16 md:pb-14 md:pt-9">
        <HeroGridBackground fade />

        <ContentContainer className="relative z-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-8">
            <div className="min-w-0">
              <h1 className="mb-3.5 max-w-xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
                {hero.heading.before}
                <span className="text-[var(--red)]">{hero.heading.emphasis}</span>
                {hero.heading.after}
              </h1>

              <p className="mb-5 max-w-md text-lg leading-relaxed text-[var(--text-muted)]">{hero.description}</p>

              <div className="flex flex-wrap gap-2">
                <Button href={hero.primaryCta.href} size="md">
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="secondary" size="md">
                  {hero.secondaryCta.label}
                  <IconArrowDown className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-6 sm:gap-8">
                {hero.stats.map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-sans text-4xl font-bold leading-none text-[var(--red)]">{value}</p>
                    <p className="mt-0.5 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <CrossPlatformDevHeroGraphic />
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
