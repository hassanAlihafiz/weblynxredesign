import { IconArrowDown } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { Button } from "@/components/ui";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";
import { AI_DEVELOPMENT_PAGE } from "@/data/site";
import { AiDevHeroGraphic } from "./AiDevHeroGraphic";

const { hero } = AI_DEVELOPMENT_PAGE;

export function AiDevHero() {
  return (
    <>
      <ContentContainer className="pb-2 pt-8">
        <nav className="font-mono text-xs text-[var(--text-dim)]" aria-label="Breadcrumb">
          <Link href={hero.breadcrumb.parentHref} className="transition-colors hover:text-[var(--text-muted)]">
            {hero.breadcrumb.parentLabel}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--text)]">{hero.breadcrumb.currentLabel}</span>
        </nav>
      </ContentContainer>

      <section className="relative w-full overflow-hidden pb-14 pt-8 sm:pb-16 sm:pt-10 md:pb-20">
        <HeroGridBackground fade />

        <ContentContainer className="relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-8">
            <div className="min-w-0">
              <h1 className="mb-4 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
                {hero.heading.before}
                <span className="text-[var(--red)]">{hero.heading.emphasis}</span>
                {hero.heading.after}
              </h1>
              <p className="mb-6 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{hero.description}</p>
              <div className="flex flex-wrap gap-3">
                <Button href={hero.primaryCta.href} size="lg">
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
                  {hero.secondaryCta.label}
                  <IconArrowDown className="size-4 shrink-0" stroke={1.5} aria-hidden />
                </Button>
              </div>
            </div>

            <AiDevHeroGraphic />
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
