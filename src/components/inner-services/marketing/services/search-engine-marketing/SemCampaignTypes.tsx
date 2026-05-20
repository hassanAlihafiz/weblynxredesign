import {
  IconArrowBack,
  IconBrandYoutube,
  IconPhoto,
  IconRocket,
  IconSearch,
  IconShoppingCart,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SEARCH_ENGINE_MARKETING_PAGE, type SemCampaignTypeIconId } from "@/data/site";

const campaignTypeIcons: Record<SemCampaignTypeIconId, TablerIcon> = {
  search: IconSearch,
  "shopping-cart": IconShoppingCart,
  rocket: IconRocket,
  photo: IconPhoto,
  "arrow-back": IconArrowBack,
  youtube: IconBrandYoutube,
};

const { campaignTypes } = SEARCH_ENGINE_MARKETING_PAGE;

export function SemCampaignTypes() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
          {campaignTypes.heading.before}
          <span className="text-[var(--red)]">{campaignTypes.heading.emphasis}</span>
          {campaignTypes.heading.after}
        </h2>
        <p className="mb-5 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">{campaignTypes.description}</p>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {campaignTypes.items.map(({ title, body, icon }) => {
            const Icon = campaignTypeIcons[icon];
            return (
              <div
                key={title}
                className="flex items-start gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] px-4 py-3.5"
              >
                <Icon className="mt-px size-5 shrink-0 text-[var(--red)]" stroke={1.75} aria-hidden />
                <div>
                  <p className="mb-0.5 text-base font-semibold text-text">{title}</p>
                  <p className="text-sm leading-relaxed text-text-muted">{body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
