"use client";

import { useMemo, useState } from "react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import {
  CASE_STUDIES_CASE_STUDIES,
  CASE_STUDIES_FEATURED,
  CASE_STUDIES_FILTERS,
  CASE_STUDIES_PAGE,
  caseStudyMatchesFilter,
  featuredMatchesFilter,
  type CaseStudiesFilterId,
} from "@/data/site";

const PAGE_SIZE = CASE_STUDIES_PAGE.main.pageSize as number;
const { main } = CASE_STUDIES_PAGE;

export function CaseStudiesMain() {
  const [filter, setFilter] = useState<CaseStudiesFilterId>("all");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () => CASE_STUDIES_CASE_STUDIES.filter((c) => caseStudyMatchesFilter(c, filter)),
    [filter],
  );

  const showFeatured = featuredMatchesFilter(filter);
  const visibleCards = filtered.slice(0, visible);
  const canLoadMore = visible < filtered.length;

  return (
    <>
      <section className="w-full border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] py-9 sm:py-10 md:py-11 shadow-[var(--shadow-inset-soft)]">
        <ContentContainer>
          <div className="flex flex-wrap gap-2">
            {CASE_STUDIES_FILTERS.map(({ id, label }) => {
              const active = filter === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setFilter(id);
                    setVisible(PAGE_SIZE);
                  }}
                  className={`rounded-full px-3 py-1.5 text-base font-medium transition-colors ${
                    active
                      ? "bg-[var(--color-text-primary)] text-[var(--color-background-primary)]"
                      : "border border-[var(--color-border-secondary)] text-[var(--color-text-primary)] hover:border-[var(--color-primary-border)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </ContentContainer>
      </section>

      {showFeatured ? (
        <section className="w-full border-b border-[var(--color-border-tertiary)] py-9 sm:py-10 md:py-11 shadow-[var(--shadow-inset-soft)]">
          <ContentContainer>
            <article className="overflow-hidden rounded-[var(--border-radius-lg)] shadow-[var(--shadow-card)]">
              <div className="flex min-h-[160px] items-center justify-center text-base font-medium sm:min-h-[180px] md:min-h-[200px]">
                {main.featuredImagePlaceholder}
              </div>
              <div className="p-4">
                <div className="mb-2.5 flex flex-wrap gap-1.5">
                  {CASE_STUDIES_FEATURED.tagLabels.map((t) => (
                    <span
                      key={t}
                      className="rounded-[var(--border-radius-md)] bg-[var(--surface-red)] px-2 py-0.5 text-base font-medium text-[#EEEDFE]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="mb-1.5 text-xl font-medium leading-snug">{CASE_STUDIES_FEATURED.title}</h2>
                <p className="mb-3.5 text-base leading-relaxed sm:mb-4">{CASE_STUDIES_FEATURED.excerpt}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {CASE_STUDIES_FEATURED.stats.map(({ k, v }) => (
                    <span key={v}>
                      <strong className="font-medium">{k}</strong> {v}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </ContentContainer>
        </section>
      ) : null}

      <section className="w-full border-b border-[var(--color-border-tertiary)] py-9 sm:py-10 md:py-11 shadow-[var(--shadow-inset-soft)]">
        <ContentContainer>
          {visibleCards.length === 0 ? (
            <p className="py-8 text-center text-base text-[var(--text-muted)]">{main.emptyMessage}</p>
          ) : (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3">
              {visibleCards.map(({ slug, title, outcome, tagLabels }) => (
                <article key={slug} className="min-w-0">
                  <div className="flex h-[140px] items-center justify-center rounded-[var(--border-radius-md)] text-base font-medium">
                    {main.cardImagePlaceholder}
                  </div>
                  <div className="mt-2.5 min-w-0">
                    <div className="mb-1.5 flex flex-wrap gap-1.5">
                      {tagLabels.map((t) => (
                        <span
                          key={t}
                          className="rounded-[var(--border-radius-md)] bg-[var(--color-background-secondary)] px-2 py-0.5 text-base text-[var(--color-text-secondary)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="mb-0.5 text-base font-medium leading-snug">{title}</h3>
                    <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">{outcome}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
          {canLoadMore ? (
            <div className="mt-5 text-center sm:mt-6">
              <button
                type="button"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="inline-block rounded-[var(--border-radius-md)] border border-[var(--color-border-secondary)] px-5 py-2 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-primary-border)] hover:text-[var(--color-primary)]"
              >
                {main.loadMoreLabel}
              </button>
            </div>
          ) : null}
        </ContentContainer>
      </section>
    </>
  );
}
