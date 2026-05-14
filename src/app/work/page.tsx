import type { Metadata } from "next";
import { Footer, Navbar } from "@/components/home";
import { PageContainer } from "@/components/layout/PageContainer";
import { WorkFinalCta, WorkMain, WorkPageHeader, WorkStats } from "@/components/work";

export const metadata: Metadata = {
  title: "Work — Weblynx",
  description:
    "Selected case studies: web apps, mobile, ecommerce, SaaS, and marketing — real projects and measurable outcomes.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <h2 className="sr-only">
            Case studies: page header, filters, featured project, project grid, impact stats, and call to action
          </h2>
          <WorkPageHeader />
          <WorkMain />
          <WorkStats />
          <WorkFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
