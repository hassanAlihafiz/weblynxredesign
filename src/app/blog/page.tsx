import type { Metadata } from "next";
import { Footer, Navbar } from "@/components/home";
import { PageContainer } from "@/components/layout/PageContainer";
import { BlogFinalCta, BlogMain, BlogNewsletter } from "@/components/blog";

export const metadata: Metadata = {
  title: "Blog — Weblynx",
  description:
    "Journal: tutorials, case breakdowns, and guides on web development, apps, design, and marketing.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <BlogMain />
          <BlogNewsletter />
          <BlogFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
