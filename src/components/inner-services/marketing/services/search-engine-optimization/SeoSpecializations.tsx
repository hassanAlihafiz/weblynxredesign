import {
  IconArrowsShuffle,
  IconBandage,
  IconCloud,
  IconMapPin,
  IconShoppingBag,
  IconWorld,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SEARCH_ENGINE_OPTIMIZATION_PAGE, type SeoSpecializationIconId } from "@/data/site";

const specializationIcons: Record<SeoSpecializationIconId, TablerIcon> = {
  world: IconWorld,
  "map-pin": IconMapPin,
  "shopping-bag": IconShoppingBag,
  cloud: IconCloud,
  "arrows-shuffle": IconArrowsShuffle,
  bandage: IconBandage,
};

const { specializations } = SEARCH_ENGINE_OPTIMIZATION_PAGE;

export function SeoSpecializations() {
  return (
    <section className="w-full bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
          {specializations.heading.before}
          <span className="text-[var(--red)]">{specializations.heading.emphasis}</span>
          {specializations.heading.after}
        </h2>
        <p className="mb-5 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">{specializations.description}</p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {specializations.items.map(({ title, body, icon }) => {
            const Icon = specializationIcons[icon];
            return (
              <article
                key={title}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-5"
              >
                <Icon className="size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1.5 text-base font-semibold text-text">{title}</h3>
                <p className="mb-2.5 text-sm leading-relaxed text-text-muted">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
