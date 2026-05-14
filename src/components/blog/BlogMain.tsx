"use client";

import { IconArrowRight, IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { SectionEyebrow } from "@/components/home/SectionEyebrow";
import {
  BLOG_CATEGORIES,
  BLOG_FEATURED,
  BLOG_POSTS,
  type BlogCategoryId,
  type BlogPost,
} from "./posts";

const PAGE_SIZE = 6;

function matchesCategory(post: BlogPost, category: BlogCategoryId) {
  if (category === "all") return true;
  return post.categoryId === category;
}

function matchesQuery(post: BlogPost, q: string) {
  if (!q.trim()) return true;
  const s = q.trim().toLowerCase();
  return (
    post.title.toLowerCase().includes(s) ||
    post.excerpt.toLowerCase().includes(s) ||
    post.categoryLabel.toLowerCase().includes(s)
  );
}

export function BlogMain() {
  const [category, setCategory] = useState<BlogCategoryId>("all");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () => BLOG_POSTS.filter((p) => matchesCategory(p, category) && matchesQuery(p, query)),
    [category, query],
  );

  const qNorm = query.trim().toLowerCase();
  const featuredMatchesSearch =
    !qNorm ||
    BLOG_FEATURED.title.toLowerCase().includes(qNorm) ||
    BLOG_FEATURED.excerpt.toLowerCase().includes(qNorm) ||
    BLOG_FEATURED.categoryLabel.toLowerCase().includes(qNorm);
  const showFeatured =
    (category === "all" || category === BLOG_FEATURED.categoryId) && featuredMatchesSearch;

  const visiblePosts = filtered.slice(0, visible);
  const canLoadMore = visible < filtered.length;

  return (
    <>
      {/* 1. Header */}
      <section className="border-b border-[var(--color-border-tertiary)] py-10 pb-8 shadow-[var(--shadow-inset-soft)] sm:py-12 sm:pb-10 md:py-12 md:pb-11">
        <SectionEyebrow className="mb-3 !text-[var(--color-text-tertiary)] sm:mb-4">
          SECTION 1 — BLOG HEADER
        </SectionEyebrow>
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end lg:gap-8">
          <div className="min-w-0">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
              Journal
            </p>
            <h1 className="mb-2.5 max-w-[440px] text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl md:text-[32px] md:leading-[1.2]">
              Notes on building modern products on the web.
            </h1>
            <p className="max-w-[380px] text-[13px] leading-relaxed text-[var(--color-text-secondary)] sm:leading-[1.7]">
              Tutorials, behind-the-scenes case breakdowns, and tactical guides for founders and developers.
            </p>
          </div>
          <label className="flex min-h-[44px] w-full min-w-0 cursor-text items-center gap-2 rounded-[var(--border-radius-md)] border border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] px-3 py-2 shadow-[var(--shadow-sm)] lg:max-w-none">
            <IconSearch className="size-3.5 shrink-0 text-[var(--color-text-secondary)]" stroke={1.5} aria-hidden />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisible(PAGE_SIZE);
              }}
              placeholder="Search articles..."
              className="min-w-0 flex-1 bg-transparent text-xs text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:outline-none sm:text-[12px]"
              autoComplete="off"
              aria-label="Search articles"
            />
          </label>
        </div>
      </section>

      {/* 2. Categories */}
      <section className="border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] py-3.5 shadow-[var(--shadow-inset-soft)] sm:py-4">
        <SectionEyebrow className="mb-2.5 !text-[var(--color-text-tertiary)] sm:mb-3">
          SECTION 2 — CATEGORIES
        </SectionEyebrow>
        <div className="flex flex-wrap gap-1.5 sm:gap-1.5">
          {BLOG_CATEGORIES.map(({ id, label }) => {
            const active = category === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setCategory(id);
                  setVisible(PAGE_SIZE);
                }}
                className={`rounded-full px-3 py-1.5 text-[11px] font-medium transition-colors ${
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
      </section>

      {/* 3. Featured */}
      {showFeatured ? (
        <section className="border-b border-[var(--color-border-tertiary)] py-9 sm:py-10 md:py-11">
          <SectionEyebrow className="mb-3.5 !text-[var(--color-text-tertiary)] sm:mb-4">
            SECTION 3 — FEATURED POST
          </SectionEyebrow>
          <article className="grid grid-cols-1 items-center gap-5 rounded-[var(--border-radius-lg)] bg-[var(--color-background-secondary)] p-4 shadow-[var(--shadow-card)] sm:gap-5 sm:p-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:gap-5 md:p-[18px]">
            <Link
              href={`/blog/${BLOG_FEATURED.slug}`}
              className={`flex min-h-[160px] items-center justify-center rounded-[var(--border-radius-md)] text-[11px] font-medium sm:min-h-[180px] md:min-h-[200px] ${BLOG_FEATURED.coverClass} ${BLOG_FEATURED.coverFg}`}
            >
              Featured post cover image
            </Link>
            <div className="min-w-0">
              <div className="mb-2.5 flex flex-wrap gap-1.5">
                <span className="rounded-[var(--border-radius-md)] bg-[#3C3489] px-2 py-0.5 text-[10px] font-medium text-[#EEEDFE]">
                  FEATURED
                </span>
                <span className="rounded-[var(--border-radius-md)] bg-[var(--color-background-primary)] px-2 py-0.5 text-[10px] text-[var(--color-text-secondary)]">
                  {BLOG_FEATURED.categoryLabel}
                </span>
              </div>
              <h2 className="mb-2 text-lg font-medium leading-snug sm:text-[18px] sm:leading-[1.3]">
                <Link href={`/blog/${BLOG_FEATURED.slug}`} className="transition-colors hover:text-[var(--color-primary)]">
                  {BLOG_FEATURED.title}
                </Link>
              </h2>
              <p className="mb-3.5 text-xs leading-relaxed text-[var(--color-text-secondary)] sm:mb-4 sm:text-[12px] sm:leading-[1.6]">
                {BLOG_FEATURED.excerpt}
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11px] text-[var(--color-text-tertiary)]">
                  {BLOG_FEATURED.readMin} min read · {BLOG_FEATURED.dateLabel}
                </p>
                <Link
                  href={`/blog/${BLOG_FEATURED.slug}`}
                  className="inline-flex items-center gap-0.5 text-xs font-medium text-[var(--color-text-info)] hover:opacity-90"
                >
                  Read post
                  <IconArrowRight className="size-3.5" stroke={1.5} aria-hidden />
                </Link>
              </div>
            </div>
          </article>
        </section>
      ) : null}

      {/* 4. Grid */}
      <section className="border-b border-[var(--color-border-tertiary)] py-9 sm:py-10 md:py-11">
        <SectionEyebrow className="mb-3.5 !text-[var(--color-text-tertiary)] sm:mb-4">
          SECTION 4 — POST GRID
        </SectionEyebrow>
        <div className="mb-4 flex flex-col gap-1 sm:mb-5 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="text-lg font-medium sm:text-xl">Latest posts</h2>
          <span className="text-xs text-[var(--color-text-secondary)] sm:text-[12px]">Newest first ↓</span>
        </div>

        {visiblePosts.length === 0 ? (
          <p className="py-8 text-center text-sm text-[var(--color-text-secondary)]">No posts match your filters.</p>
        ) : (
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <article key={post.slug} className="min-w-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className={`flex h-[130px] items-center justify-center rounded-[var(--border-radius-md)] text-[10px] font-medium transition-opacity hover:opacity-95 ${post.coverClass} ${post.coverFg}`}
                >
                  Cover image
                </Link>
                <div className="mt-2.5 min-w-0">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)]">
                    {post.categoryLabel}
                  </p>
                  <h3 className="mb-1.5 text-[13px] font-medium leading-snug">
                    <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-[var(--color-primary)]">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mb-2 text-[11px] leading-snug text-[var(--color-text-secondary)] sm:leading-[1.5]">
                    {post.excerpt}
                  </p>
                  <p className="text-[10px] text-[var(--color-text-tertiary)]">
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
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="inline-block rounded-[var(--border-radius-md)] border border-[var(--color-border-secondary)] px-[18px] py-2 text-xs font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-primary-border)] hover:text-[var(--color-primary)]"
            >
              Load more posts
            </button>
          </div>
        ) : null}
      </section>
    </>
  );
}
