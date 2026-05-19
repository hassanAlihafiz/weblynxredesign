import { IconArrowDown } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";
import { IosDevHeroGraphic } from "./IosDevHeroGraphic";

export function IosDevHero() {
  return (
    <>
      <ContentContainer className="pb-0 pt-3.5">
        <nav className="text-[11px] text-[#6F6F6F]" aria-label="Breadcrumb">
          <Link href="/services" className="transition-colors hover:text-[var(--text-muted)]">
            Services
          </Link>
          <span className="mx-1.5">/</span>
          <Link href="/services/app-development" className="transition-colors hover:text-[var(--text-muted)]">
            App Development
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-[var(--text)]">iOS</span>
        </nav>
      </ContentContainer>

      <section className="relative w-full overflow-hidden pb-14 pt-6 sm:pb-16 md:pb-[3.5rem] md:pt-9">
        <HeroGridBackground fade />

        <ContentContainer className="relative z-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-8">
            <div className="min-w-0">
              <h1 className="mb-3.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
                Native <span className="text-[var(--red)]">iOS apps</span> built for premium experiences.
              </h1>
              <p className="mb-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
                From Swift and SwiftUI to ARKit and Vision Pro we build iOS apps that feel native, run fast, and ship
                straight to the App Store.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="#quote" className="btn-primary px-5 py-3 text-sm">
                  Request a quote
                </Link>
                <Link href="#platforms" className="btn-secondary px-5 py-3 text-sm">
                  See our apps
                  <IconArrowDown className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
                </Link>
              </div>
            </div>

            <IosDevHeroGraphic />
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
