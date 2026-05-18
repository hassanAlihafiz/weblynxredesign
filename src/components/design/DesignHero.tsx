import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";
import { DesignHeroGraphic } from "./DesignHeroGraphic";

export function DesignHero() {
  return (
    <>
      <ContentContainer className="pb-2 pt-8">
        <nav className="font-mono text-xs text-[var(--text-dim)]" aria-label="Breadcrumb">
          <Link href="/services" className="transition-colors hover:text-[var(--text-muted)]">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--text)]">Design</span>
        </nav>
      </ContentContainer>

      <section className="relative w-full overflow-hidden pb-14 pt-8 sm:pb-16 sm:pt-10 md:pb-20">
        <HeroGridBackground fade />

        <ContentContainer className="relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-8">
            <div className="min-w-0">
              <h1 className="mb-4 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
                Brand, product, and identity {" "}
                <span className="text-[var(--red)]">designed to stand out</span>
              </h1>
              <p className="mb-6 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
                From a single logo to a full identity system, we craft design that&apos;s beautiful, on-brand, and
                built to work not just to win awards.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                  Request a quote
                  <IconArrowRight className="size-4 shrink-0" stroke={1.5} aria-hidden />
                </Link>
                <Link href="/work" className="btn-secondary px-8 py-4 text-base">
                  See our work
                </Link>
              </div>
            </div>

            <DesignHeroGraphic />
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
