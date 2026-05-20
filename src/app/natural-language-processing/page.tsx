import { Footer, Navbar } from "@/components/home";
import {
  NlpCapabilities,
  NlpDeliverables,
  NlpEngagement,
  NlpFaq,
  NlpFinalCta,
  NlpHero,
  NlpHowWeQuote,
  NlpIndustries,
  NlpLanguages,
  NlpProcess,
  NlpRelated,
  NlpStack,
  NlpWhoFor,
} from "@/components/inner-services/artificial-intelligence/services/natural-language-processing";
import { PageContainer } from "@/components/layout/PageContainer";
import { naturalLanguageProcessingMetadata } from "@/data/metadata";

export const metadata = naturalLanguageProcessingMetadata;

export default function NaturalLanguageProcessingPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <NlpHero />
          <NlpWhoFor />
          <NlpCapabilities />
          <NlpIndustries />
          <NlpDeliverables />
          <NlpLanguages />
          <NlpStack />
          <NlpProcess />
          <NlpEngagement />
          <NlpHowWeQuote />
          <NlpFaq />
          <NlpRelated />
          <NlpFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
