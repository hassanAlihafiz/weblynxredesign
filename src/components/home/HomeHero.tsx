import dynamic from "next/dynamic";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { Button } from "@/components/ui";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";
import { HOME_PAGE } from "@/data/site";

const HomeHeroChainGraphic = dynamic(
  () => import("./HomeHeroChainGraphic").then((m) => ({ default: m.HomeHeroChainGraphic })),
  {
    loading: () => (
      <div
        className="relative z-[2] min-h-[260px] w-full max-w-[min(100%,260px)] sm:min-h-[250px] sm:max-w-[280px] lg:min-h-[300px] lg:max-w-[300px]"
        aria-hidden
      />
    ),
  },
);

const { hero } = HOME_PAGE;

export function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden border-b border-[#1F1F1F] shadow-[var(--shadow-inset-soft)]">
      <HeroGridBackground />

      <ContentContainer className="relative z-[2]">
        <div className="grid grid-cols-1 items-center gap-10 py-12 sm:gap-12 sm:py-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-9 lg:py-[3.75rem] lg:pb-[4.375rem]">
          <div className="min-w-0 max-lg:mx-auto max-lg:max-w-xl max-lg:text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[rgba(230,57,70,0.3)] bg-[rgba(230,57,70,0.1)] px-3 py-1 text-sm font-medium text-[var(--red-bright)] max-lg:mx-auto sm:px-3 sm:py-1.5">
              <span className="size-2 shrink-0 rounded-full bg-[var(--surface-red)]" aria-hidden />
              {hero.badge}
            </div>

            <h1 className="hero-lcp mb-4 text-balance text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-[#FAFAFA] sm:text-[clamp(2.5rem,5vw,3.5rem)] lg:text-[3.5rem]">
              We build the <span className="text-[var(--red)]">web</span> for ambitious founders
            </h1>

            <p className="mb-6 max-w-[400px] text-base leading-relaxed text-[#A0A0A0] max-lg:mx-auto lg:mx-0">
              {hero.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2.5 max-lg:justify-center lg:justify-start">
              <Button href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRightIcon className="size-4 shrink-0" />
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 max-lg:justify-center sm:mt-9 lg:mt-[30px] lg:justify-start">
              <div className="flex shrink-0" aria-hidden>
                {hero.avatars.map(({ initials, className, textClass }, i) => (
                  <div
                    key={initials}
                    className={`flex size-7 items-center justify-center rounded-full border-2 border-[#0A0A0A] font-medium sm:size-[28px] ${textClass} ${i > 0 ? "-ml-2" : ""} ${className}`}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-center text-base leading-relaxed text-[#A0A0A0] lg:text-left">
                {hero.trustCaption.line1}
                <br />
                {hero.trustCaption.line2}
              </p>
            </div>
          </div>

          <div className="relative flex min-h-[260px] items-center justify-center sm:min-h-[250px] lg:min-h-[300px]">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 size-[260px] max-w-[88vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(230,57,70,0.35)_0%,rgba(230,57,70,0)_70%)] sm:size-[280px] lg:size-[300px]"
              aria-hidden
            />
            <HomeHeroChainGraphic />
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
