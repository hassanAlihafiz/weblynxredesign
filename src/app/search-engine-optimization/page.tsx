import { Footer, Navbar } from "@/components/home";
import {
  SeoDeliverables,
  SeoEngagement,
  SeoFaq,
  SeoFinalCta,
  SeoHero,
  SeoHowWeQuote,
  SeoPillars,
  SeoProcess,
  SeoRelated,
  SeoSpecializations,
  SeoToolkit,
  SeoWhatWeAudit,
  SeoWhoFor,
} from "@/components/inner-services/marketing/services/search-engine-optimization";
import { PageContainer } from "@/components/layout/PageContainer";
import { searchEngineOptimizationMetadata } from "@/data/metadata";

export const metadata = searchEngineOptimizationMetadata;

export default function SearchEngineOptimizationPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <SeoHero />
          <SeoWhoFor />
          <SeoPillars />
          <SeoSpecializations />
          <SeoDeliverables />
          <SeoWhatWeAudit />
          <SeoToolkit />
          <SeoProcess />
          <SeoEngagement />
          <SeoHowWeQuote />
          <SeoFaq />
          <SeoRelated />
          <SeoFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
