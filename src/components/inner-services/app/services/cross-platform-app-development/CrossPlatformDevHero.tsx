import { IconArrowDown, IconDevices } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";
import { CrossPlatformDevHeroGraphic } from "./CrossPlatformDevHeroGraphic";

const stats = [
  { value: "~50%", label: "Less cost" },
  { value: "2×", label: "Faster to ship" },
  { value: "1", label: "Codebase" },
] as const;

export function CrossPlatformDevHero() {
  return (
    <>
      <ContentContainer className="pb-0 pt-3.5">
        <nav className="text-[11px] text-[#6F6F6F]" aria-label="Breadcrumb">
          <Link href="/services" className="transition-colors hover:text-[var(--text-muted)]">
            Services
          </Link>
          <span className="mx-1.5">/</span>
          <Link href="/app-development" className="transition-colors hover:text-[var(--text-muted)]">
            App Development
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-[var(--text)]">Cross-Platform</span>
        </nav>
      </ContentContainer>

      <section className="relative w-full overflow-hidden pb-14 pt-6 sm:pb-16 md:pb-14 md:pt-9">
        <HeroGridBackground fade />

        <ContentContainer className="relative z-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-8">
            <div className="min-w-0">

              <h1 className="mb-3.5 max-w-xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
                One codebase Two stores <span className="text-[var(--red)]">Half the cost</span>
              </h1>

              <p className="mb-5 max-w-md text-lg leading-relaxed text-[var(--text-muted)]">
                Ship to iOS and Android from a single React Native or Flutter build. Faster, cheaper, and nearly
                indistinguishable from native, the way 80% of modern apps are built.
              </p>

              <div className="flex flex-wrap gap-2">
                <Link href="#quote" className="btn-primary px-5 py-3 text-sm">
                  Request a quote
                </Link>
                <Link href="#comparison" className="btn-secondary px-5 py-3 text-sm">
                  See the comparison
                  <IconArrowDown className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-6 sm:gap-8">
                {stats.map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-sans text-4xl font-bold leading-none text-[var(--red)]">{value}</p>
                    <p className="mt-0.5 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">{label}</p>
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
