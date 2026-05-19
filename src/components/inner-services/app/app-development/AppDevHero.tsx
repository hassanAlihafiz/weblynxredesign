import { IconArrowDown } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";

export function AppDevHero() {
  return (
    <>
      <ContentContainer className="pb-2 pt-8">
        <div className="font-mono text-xs text-[var(--text-dim)]">
          <Link href="/services" className="transition-colors hover:text-[var(--text-muted)]">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--text)]">App development</span>
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
                App development
              </p>
              <h1 className="mb-6 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
                Mobile apps that ship fast and <span className="text-[var(--red)]">feel native</span>.
              </h1>
              <p className="mb-8 max-w-md text-lg leading-relaxed text-[var(--text-muted)]">
                Cross-platform iOS and Android apps built with React Native one codebase, two stores, full native
                performance.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#quote" className="btn-primary px-5 py-3 text-sm">
                  Request a quote
                </Link>
                <Link href="#platforms" className="btn-secondary px-5 py-3 text-sm">
                  See our apps
                  <IconArrowDown className="size-4 shrink-0" stroke={1.5} aria-hidden />
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="flex h-64 w-32 flex-col gap-2 rounded-[28px] border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-2">
                <div className="mx-auto h-1.5 w-12 rounded-full bg-[var(--text)] opacity-30" aria-hidden />
                <div className="flex flex-1 flex-col gap-2 rounded-2xl bg-[var(--bg-elev)] p-3">
                  <div className="h-2 w-1/2 rounded bg-[var(--red)]" />
                  <div className="h-1.5 w-3/4 rounded bg-[var(--border)]" />
                  <div
                    className="mt-2 h-16 rounded-lg"
                    style={{ background: "linear-gradient(135deg, var(--red), var(--red-dark))" }}
                  />
                  <div className="h-1.5 w-2/3 rounded bg-[var(--border)]" />
                  <div className="h-1.5 w-1/2 rounded bg-[var(--border)]" />
                </div>
              </div>
              <div className="mt-6 flex h-64 w-32 flex-col gap-2 rounded-[28px] border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-2">
                <div className="mx-auto h-1.5 w-12 rounded-full bg-[var(--text)] opacity-30" aria-hidden />
                <div className="flex flex-1 flex-col gap-2 rounded-2xl bg-[var(--bg-elev)] p-3">
                  <div className="h-2 w-2/3 rounded bg-[var(--blue)]" />
                  <div className="mt-2 grid grid-cols-2 gap-1">
                    <div className="h-10 rounded bg-[var(--border)]" />
                    <div className="h-10 rounded bg-[var(--border)]" />
                  </div>
                  <div className="h-1.5 w-3/4 rounded bg-[var(--border)]" />
                  <div className="h-1.5 w-1/2 rounded bg-[var(--border)]" />
                  <div className="mt-2 h-10 rounded bg-[var(--bg-elev-2)]" />
                </div>
              </div>
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}
