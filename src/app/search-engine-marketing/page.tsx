import { Footer, Navbar } from "@/components/home";
import {
  SemCampaignTypes,
  SemDeliverables,
  SemEngagement,
  SemFaq,
  SemFinalCta,
  SemHero,
  SemHowWeQuote,
  SemRelated,
  SemNetworks,
  SemProcess,
  SemToolkit,
  SemWhoFor,
} from "@/components/inner-services/marketing/services/search-engine-marketing";
import { PageContainer } from "@/components/layout/PageContainer";
import { searchEngineMarketingMetadata } from "@/data/metadata";

export const metadata = searchEngineMarketingMetadata;

export default function SearchEngineMarketingPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <SemHero />
          <SemWhoFor />
          <SemNetworks />
          <SemCampaignTypes />
          <SemDeliverables />
          <SemToolkit />
          <SemProcess />
          <SemEngagement />
          <SemHowWeQuote />
          <SemFaq />
          <SemRelated />
          <SemFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
