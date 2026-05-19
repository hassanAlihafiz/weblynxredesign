import { IconArrowDown } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";
import { AndroidDevHeroGraphic } from "./AndroidDevHeroGraphic";

export function AndroidDevHero() {
  return (
    <>
      <ContentContainer className="pb-2 pt-8">
        <nav className="font-mono text-xs text-[var(--text-dim)]" aria-label="Breadcrumb">
          <Link href="/services" className="transition-colors hover:text-[var(--text-muted)]">
            Services
          </Link>
          <span className="mx-2">/</span>
          <Link href="/services/app-development" className="transition-colors hover:text-[var(--text-muted)]">
            App Development
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--text)]">Android</span>
        </nav>
      </ContentContainer>

      <section className="relative w-full overflow-hidden pb-14 pt-6 sm:pb-16 md:pb-[3.5rem] md:pt-9">
        <HeroGridBackground fade />

        <ContentContainer className="relative z-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-8">
            <div className="min-w-0">
              <h1 className="mb-3.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
                Native <span className="text-[var(--red)]">Android apps </span>built for scale
              </h1>
              <p className="mb-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
                From Kotlin and Jetpack Compose to Material Design 3 we build Android apps that feel native, perform
                fast, and ship straight to the Play Store.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="#quote" className="btn-primary px-5 py-3 text-sm">
                  Request a quote
                </Link>
                <Link href="#platforms" className="btn-secondary px-5 py-3 text-sm">
                  See our apps
                  <IconArrowDown className="size-4 shrink-0" stroke={1.5} aria-hidden />
                </Link>
              </div>
            </div>

            <AndroidDevHeroGraphic />
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
