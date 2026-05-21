import { IconArrowDown } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";
import { Button } from "@/components/ui";
import { NATURAL_LANGUAGE_PROCESSING_PAGE } from "@/data/site";
import { NlpHeroGraphic } from "./NlpHeroGraphic";

const { hero } = NATURAL_LANGUAGE_PROCESSING_PAGE;

export function NlpHero() {
  return (
    <>
      <ContentContainer className="pb-0 pt-3.5">
        <nav className="font-mono text-xs text-[var(--text-dim)]" aria-label="Breadcrumb">
          {hero.breadcrumb.map((item, i) => (
            <span key={item.label}>
              {i > 0 ? <span className="mx-1.5">/</span> : null}
              {"href" in item && item.href ? (
                <Link href={item.href} className="transition-colors hover:text-[var(--text-dim)]">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[var(--text-dim)]">{item.label}</span>
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

              <h1 className="mb-3.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
                Teach machines to <span className="text-[var(--red)]">understand language</span> at scale
              </h1>

              <p className="mb-5 max-w-lg text-lg leading-tight text-[var(--text-muted)]">{hero.description}</p>

              <div className="flex flex-wrap gap-2">
                <Button href={hero.primaryCta.href} size="md">
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="secondary" size="md">
                  {hero.secondaryCta.label}
                  <IconArrowDown className="size-4 shrink-0" stroke={1.5} aria-hidden />
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

            <div className="relative flex h-60 items-center justify-center">
              <div
                className="absolute size-60 rounded-full bg-[radial-gradient(circle,var(--red-glow),transparent_70%)] blur-3xl"
                aria-hidden
              />
              <NlpHeroGraphic />
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
