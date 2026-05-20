"use client";

import { IconArrowDown } from "@tabler/icons-react";
import { useMemo, useState } from "react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { HeroGridBackground } from "@/components/layout/HeroGridBackground";
import {
  BLOG_CATEGORIES,
  BLOG_FEATURED,
  BLOG_PAGE,
  BLOG_POSTS,
  type BlogCategoryId,
  type BlogPost,
} from "@/data/site";

const pageSize = BLOG_PAGE.main.pageSize as number;

function matchesCategory(post: BlogPost, category: BlogCategoryId) {
  if (category === "all") return true;
  return post.categoryId === category;
}

export function BlogMain() {
  const [category, setCategory] = useState<BlogCategoryId>("all");
  const [visible, setVisible] = useState(pageSize);

  const filtered = useMemo(
    () => BLOG_POSTS.filter((p) => matchesCategory(p, category)),
    [category],
  );

  const showFeatured = category === "all" || category === BLOG_FEATURED.categoryId;

  const visiblePosts = filtered.slice(0, visible);
  const canLoadMore = visible < filtered.length;

  return (
    <>
      {/* 1. Header */}
      <section className="relative w-full overflow-hidden border-b border-[var(--color-border-tertiary)] py-10 pb-8 shadow-[var(--shadow-inset-soft)] sm:py-12 sm:pb-10 md:py-12 md:pb-11">
      <HeroGridBackground />
      <ContentContainer className="relative z-10">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end lg:gap-8">
          <div className="min-w-0">
            <h1 className="mb-2.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
              {BLOG_PAGE.hero.heading.before}
              <span className="text-[var(--red)]">{BLOG_PAGE.hero.heading.emphasis}</span>
              {BLOG_PAGE.hero.heading.after}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{BLOG_PAGE.hero.description}</p>
          </div>
        </div>
      </ContentContainer>
    </section>

      {/* 2. Categories */}
      <section className="w-full border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] py-3.5 shadow-[var(--shadow-inset-soft)] sm:py-4">
      <ContentContainer>
        <div className="flex flex-wrap gap-1.5 sm:gap-1.5">
          {BLOG_CATEGORIES.map(({ id, label }) => {
            const active = category === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setCategory(id);
                  setVisible(pageSize);
                }}
                className={`rounded-[var(--border-radius-md)] px-3 py-1.5 text-base font-medium transition-colors ${
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

      {/* 3. Featured */}
      {showFeatured ? (
        <section className="w-full border-b border-[var(--color-border-tertiary)] py-9 sm:py-10 md:py-11">
      <ContentContainer>
          <article className="grid grid-cols-1 items-center gap-5 rounded-[var(--border-radius-lg)] border border-[var(--color-border-tertiary)] bg-[var(--color-surface-raised)] p-4 shadow-[var(--shadow-card)] sm:gap-5 sm:p-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:gap-5 md:p-[18px]">
            <div
              className={`flex min-h-[160px] items-center justify-center rounded-[var(--border-radius-md)] text-sm font-medium sm:min-h-[180px] md:min-h-[200px] ${BLOG_FEATURED.coverClass} ${BLOG_FEATURED.coverFg}`}
            >
              {BLOG_PAGE.main.featuredCoverPlaceholder}
            </div>
            <div className="min-w-0">
              <div className="mb-2.5 flex flex-wrap gap-1.5">
                <span className="rounded-[var(--border-radius-md)] bg-[#3C3489] px-2 py-0.5 text-base font-medium text-[#EEEDFE]">
                  {BLOG_PAGE.main.featuredBadgeLabel}
                </span>
                <span className="rounded-[var(--border-radius-md)] bg-[var(--color-background-primary)] px-2 py-0.5 text-base text-[var(--color-text-secondary)]">
                  {BLOG_FEATURED.categoryLabel}
                </span>
              </div>
              <h2 className="mb-2 text-xl font-medium leading-snug">{BLOG_FEATURED.title}</h2>
              <p className="mb-3.5 text-base leading-relaxed text-[var(--color-text-secondary)]">
                {BLOG_FEATURED.excerpt}
              </p>
              <p className="text-base text-[var(--color-text-tertiary)]">
                {BLOG_FEATURED.readMin} min read · {BLOG_FEATURED.dateLabel}
              </p>
            </div>
          </article>
        </ContentContainer>
    </section>
      ) : null}

      {/* 4. Grid */}
      <section className="w-full border-b border-[var(--color-border-tertiary)] py-9 sm:py-10 md:py-11">
      <ContentContainer>
        <div className="mb-4 flex flex-col gap-1 sm:mb-5 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="text-xl font-medium">{BLOG_PAGE.main.gridHeading}</h2>
          <span className="inline-flex items-center gap-1 text-sm text-[var(--color-text-secondary)]">
            {BLOG_PAGE.main.sortHint}
            <IconArrowDown className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
          </span>
        </div>

        {visiblePosts.length === 0 ? (
          <p className="py-8 text-center text-sm text-[var(--color-text-secondary)]">{BLOG_PAGE.main.emptyMessage}</p>
        ) : (
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <article key={post.slug} className="min-w-0">
                <div
                  className={`flex h-[130px] items-center justify-center rounded-[var(--border-radius-md)] text-sm font-medium ${post.coverClass} ${post.coverFg}`}
                >
                  {BLOG_PAGE.main.cardCoverPlaceholder}
                </div>
                <div className="mt-2.5 min-w-0">
                  <p className="mb-1 text-base font-semibold uppercase tracking-wide text-[var(--color-text-tertiary)]">
                    {post.categoryLabel}
                  </p>
                  <h3 className="mb-1.5 text-xl font-medium leading-snug">{post.title}</h3>
                  <p className="mb-2 text-base leading-relaxed text-[var(--color-text-secondary)]">
                    {post.excerpt}
                  </p>
                  <p className="text-base text-[var(--color-text-tertiary)]">
                    {post.readMin} min read · {post.dateLabel}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

        {canLoadMore ? (
          <div className="mt-6 text-center sm:mt-8">
            <button
              type="button"
              onClick={() => setVisible((v) => v + pageSize)}
              className="inline-block rounded-[var(--border-radius-md)] border border-[var(--color-border-secondary)] px-5 py-2 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-primary-border)] hover:text-[var(--color-primary)]"
            >
              {BLOG_PAGE.main.loadMoreLabel}
            </button>
          </div>
        ) : null}
      </ContentContainer>
    </section>
    </>
  );
}
