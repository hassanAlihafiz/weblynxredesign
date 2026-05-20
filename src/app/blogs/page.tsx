import { Footer, Navbar } from "@/components/home";
import { blogMetadata } from "@/data/metadata";
import { PageContainer } from "@/components/layout/PageContainer";
import { BlogFinalCta, BlogMain } from "@/components/blog";

export const metadata = blogMetadata;

export default function BlogPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <BlogMain />
          <BlogFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
