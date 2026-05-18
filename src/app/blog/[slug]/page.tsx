import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer, Navbar } from "@/components/home";
import { PageContainer } from "@/components/layout/PageContainer";
import { BLOG_FEATURED, BLOG_POSTS, getBlogPostBySlug } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [{ slug: BLOG_FEATURED.slug }, ...BLOG_POSTS.map((p) => ({ slug: p.slug }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post — Weblynx" };
  return { title: `${post.title} — Weblynx` };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const title = post.title;
  const meta = `${post.readMin} min read · ${post.dateLabel}`;

  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <article className="border-b border-[var(--color-border-tertiary)] py-10 sm:py-12">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)]">
              {post.categoryLabel}
            </p>
            <h1 className="mb-4 max-w-2xl text-2xl font-medium leading-snug tracking-tight sm:text-3xl">{title}</h1>
            <p className="mb-8 text-[13px] text-[var(--color-text-secondary)]">{meta}</p>
            <p className="max-w-xl text-sm leading-relaxed text-[var(--color-text-secondary)]">
              This is a placeholder article page. Full content can be wired to MDX or a CMS later.
            </p>
            <Link
              href="/blog"
              className="mt-10 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-text-info)] transition-opacity hover:opacity-90"
            >
              <IconArrowLeft className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
              Back to blog
            </Link>
          </article>
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
