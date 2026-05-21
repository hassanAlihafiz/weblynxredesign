import {
  IconBriefcase,
  IconCurrencyDollar,
  IconHeadset,
  IconMessageSearch,
  IconNews,
  IconScale,
  IconShoppingBag,
  IconStethoscope,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { NATURAL_LANGUAGE_PROCESSING_PAGE, type NlpIndustryIconId } from "@/data/site";

const industryIcons: Record<NlpIndustryIconId, TablerIcon> = {
  headset: IconHeadset,
  scale: IconScale,
  stethoscope: IconStethoscope,
  "currency-dollar": IconCurrencyDollar,
  briefcase: IconBriefcase,
  "shopping-bag": IconShoppingBag,
  news: IconNews,
  "message-circle-search": IconMessageSearch,
};

const { industries } = NATURAL_LANGUAGE_PROCESSING_PAGE;

export function NlpIndustries() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Real-world <span className="text-[var(--red)]">NLP</span>, by industry
        </h2>
        <p className="mb-5 max-w-lg text-lg leading-tight text-[var(--text-muted)]">{industries.description}</p>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {industries.items.map(({ title, body, icon }) => {
            const Icon = industryIcons[icon];
            return (
              <article
                key={title}
                className="flex items-start gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] px-4 py-3.5"
              >
                <Icon className="mt-px size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <div>
                  <h3 className="mb-0.5 text-sm font-semibold text-[var(--text)]">{title}</h3>
                  <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
