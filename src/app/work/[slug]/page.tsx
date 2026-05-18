import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer, Navbar } from "@/components/home";
import { PageContainer } from "@/components/layout/PageContainer";
import { WORK_CASE_STUDIES, WORK_FEATURED, getCaseStudyBySlug } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [{ slug: WORK_FEATURED.slug }, ...WORK_CASE_STUDIES.map((c) => ({ slug: c.slug }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return { title: "Case study — Weblynx" };
  return { title: `${cs.title} — Weblynx` };
}

export default async function WorkCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const title = cs.title;
  const subtitle = cs.kind === "featured" ? cs.excerpt : cs.outcome;
  const tags = cs.kind === "featured" ? [...cs.tagLabels] : cs.tagLabels;

  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <article className="border-b border-[var(--color-border-tertiary)] py-10 sm:py-12">
            <p className="mb-2 flex flex-wrap gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)]">
              {tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </p>
            <h1 className="mb-4 max-w-2xl text-2xl font-medium leading-snug tracking-tight sm:text-3xl">{title}</h1>
            <p className="mb-8 max-w-xl text-[13px] leading-relaxed text-[var(--color-text-secondary)]">{subtitle}</p>
            <p className="max-w-xl text-sm leading-relaxed text-[var(--color-text-secondary)]">
              This is a placeholder case study page. Add long-form story, gallery, and metrics when ready.
            </p>
            <Link
              href="/work"
              className="mt-10 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-text-info)] transition-opacity hover:opacity-90"
            >
              <IconArrowLeft className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
              Back to work
            </Link>
          </article>
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
