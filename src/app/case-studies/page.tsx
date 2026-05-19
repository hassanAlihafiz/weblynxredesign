import { Footer, Navbar } from "@/components/home";
import { caseStudiesMetadata } from "@/data/metadata";
import { PageContainer } from "@/components/layout/PageContainer";
import {
  CaseStudiesFinalCta,
  CaseStudiesMain,
  CaseStudiesPageHeader,
  CaseStudiesStats,
} from "@/components/inner-services/case-studies/Case-Studies";

export const metadata = caseStudiesMetadata;

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <h2 className="sr-only">
            Case studies: page header, filters, featured project, project grid, impact stats, and call to action
          </h2>
          <CaseStudiesPageHeader />
          <CaseStudiesMain />
          <CaseStudiesStats />
          <CaseStudiesFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
