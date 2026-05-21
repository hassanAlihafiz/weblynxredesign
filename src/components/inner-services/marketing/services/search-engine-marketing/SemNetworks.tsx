import { IconBrandBing, IconBrandGoogle, IconShoppingBag, type TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SEARCH_ENGINE_MARKETING_PAGE, type SemNetworkIconId } from "@/data/site";

const networkIcons: Record<SemNetworkIconId, TablerIcon> = {
  google: IconBrandGoogle,
  bing: IconBrandBing,
  shopping: IconShoppingBag,
};

const { networks } = SEARCH_ENGINE_MARKETING_PAGE;

export function SemNetworks() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
          Three networks <span className="text-[var(--red)]">hundreds of campaign types</span>
        </h2>
        <p className="mb-5 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">{networks.description}</p>

        <div className="grid gap-3 md:grid-cols-3">
          {networks.items.map(({ name, body, footer, icon, iconColor }) => {
            const Icon = networkIcons[icon];
            return (
              <article
                key={name}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-5"
              >
                <div className="mb-2.5 flex items-center gap-2">
                  <Icon className="size-6 shrink-0" style={{ color: iconColor }} stroke={1.5} aria-hidden />
                  <h3 className="text-sm font-semibold text-text">{name}</h3>
                </div>
                <p className="mb-2 text-sm leading-relaxed text-text-muted">{body}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">{footer}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
