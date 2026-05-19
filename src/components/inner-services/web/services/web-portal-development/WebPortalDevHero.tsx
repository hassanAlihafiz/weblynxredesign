import { IconArrowDown } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { Button } from "@/components/ui";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";
import { WebPortalDevHeroGraphic } from "./WebPortalDevHeroGraphic";

const stats = [
  { value: "100k+", label: "Users supported" },
  { value: "SOC 2", label: "Ready architecture" },
  { value: "6–12", label: "Week build" },
] as const;

export function WebPortalDevHero() {
  return (
    <>
      <ContentContainer className="pb-0 pt-3.5">
        <nav className="text-xs font-sans text-[var(--text-muted)]" aria-label="Breadcrumb">
          <Link href="/services" className="transition-colors hover:text-[var(--text-muted)]">
            Services
          </Link>
          <span className="mx-1.5">/</span>
          <Link href="/web-development" className="transition-colors hover:text-[var(--text-muted)]">
            Web Development
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-[var(--text)]">Web Portal Development</span>
        </nav>
      </ContentContainer>

      <section className="relative w-full overflow-hidden pb-14 pt-9 sm:pb-[3.5rem]">
        <HeroGridBackground fade />

        <ContentContainer className="relative z-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-8">
            <div className="min-w-0">

              <h1 className="mb-3.5 max-w-xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
                Custom portals that <span className="text-[var(--red)]">work how your business works</span>
              </h1>

              <p className="mb-5 max-w-[420px] text-balance text-lg leading-relaxed text-[var(--text-muted)]">
                Client portals, admin dashboards, internal tools, and B2B platforms, built on Next.js, secure by
                design, and made to scale with your team.
              </p>

              <div className="flex flex-wrap gap-2">
                <Button href="#quote" size="md">
                  Request a quote
                </Button>
                <Button href="#portal-types" variant="secondary" size="md">
                  See portal types
                  <IconArrowDown className="size-4 shrink-0" stroke={1.5} aria-hidden />
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-6 sm:gap-8">
                {stats.map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-sans text-4xl font-bold leading-none text-[var(--red)]">{value}</p>
                    <p className="mt-0.5 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <WebPortalDevHeroGraphic />
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
