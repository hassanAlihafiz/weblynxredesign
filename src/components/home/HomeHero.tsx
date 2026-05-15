import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { HomeHeroChainGraphic } from "./HomeHeroChainGraphic";

const avatars = [
  { initials: "SC", className: "bg-[#E63946] text-[#FAFAFA]", textClass: "text-[10px]" },
  { initials: "MK", className: "bg-[#3B82F6] text-[#FAFAFA]", textClass: "text-[10px]" },
  { initials: "AK", className: "bg-[#F5C518] text-[#0A0A0A]", textClass: "text-[10px]" },
  { initials: "+8", className: "bg-[#1F1F1F] text-[#A0A0A0]", textClass: "text-[9px]" },
] as const;

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#1F1F1F] px-6 sm:px-8 lg:px-10 shadow-[var(--shadow-inset-soft)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(#1A1A1A_1px,transparent_1px),linear-gradient(90deg,#1A1A1A_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.22]" aria-hidden />

      <div className="relative z-[2] grid grid-cols-1 items-center gap-10 py-12 sm:gap-12 sm:py-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-9 lg:py-[3.75rem] lg:pb-[4.375rem]">
        <div className="min-w-0 max-lg:mx-auto max-lg:max-w-xl max-lg:text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[rgba(230,57,70,0.3)] bg-[rgba(230,57,70,0.1)] px-3 py-1 text-sm font-medium text-[#E63946] max-lg:mx-auto sm:px-3 sm:py-1.5 sm:text-[11px]">
            <span className="size-2 shrink-0 rounded-full bg-[#E63946]" aria-hidden />
            Now accepting Q3 projects
          </div>

          <h1 className="mb-4 text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-[#FAFAFA] sm:text-[clamp(2rem,4.2vw,2.75rem)] lg:text-[2.625rem]">
            We build the <span className="text-[#E63946]">web</span> for ambitious founders.
          </h1>

          <p className="mb-6 max-w-[400px] text-base leading-relaxed text-[#A0A0A0] max-lg:mx-auto lg:mx-0">
            From custom web apps and mobile builds to design and growth one team that links it all together.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 max-lg:justify-center lg:justify-start">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center gap-1 rounded-md bg-[#E63946] px-5 py-2.5 text-base font-medium text-[#FAFAFA] transition-colors hover:bg-[#c92d3d] active:translate-y-px sm:px-[22px] sm:py-[11px]"
            >
              Start a project
              <IconArrowRight className="size-4 shrink-0" stroke={1.5} aria-hidden />
            </Link>
            <Link
              href="/work"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-[#2A2A2A] bg-transparent px-5 py-2.5 text-base font-medium text-[#FAFAFA] transition-colors hover:border-[#3f3f3f] hover:bg-white/[0.03] sm:px-[22px] sm:py-[11px]"
            >
              See our work
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 max-lg:justify-center sm:mt-9 lg:mt-[30px] lg:justify-start">
            <div className="flex shrink-0" aria-hidden>
              {avatars.map(({ initials, className, textClass }, i) => (
                <div
                  key={initials}
                  className={`flex size-7 items-center justify-center rounded-full border-2 border-[#0A0A0A] font-medium sm:size-[28px] ${textClass} ${i > 0 ? "-ml-2" : ""} ${className}`}
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-center text-base leading-relaxed text-[#A0A0A0] lg:text-left">
              Trusted by founders
              <br />
              across 4 countries
            </p>
          </div>
        </div>

        <div className="relative z-[2] flex min-h-[320px] items-center justify-center sm:min-h-[280px] lg:min-h-[340px]">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 size-[320px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(230,57,70,0.35)_0%,rgba(230,57,70,0)_70%)] sm:size-[260px] lg:size-[320px]"
            aria-hidden
          />
          <HomeHeroChainGraphic />
        </div>
      </div>
    </section>
  );
}
