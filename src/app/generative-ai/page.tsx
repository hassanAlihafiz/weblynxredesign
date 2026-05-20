import { Footer, Navbar } from "@/components/home";
import {
  GenAiDeliverables,
  GenAiEngagement,
  GenAiFaq,
  GenAiFinalCta,
  GenAiHero,
  GenAiHowWeQuote,
  GenAiModels,
  GenAiProcess,
  GenAiRelated,
  GenAiStack,
  GenAiUseCases,
  GenAiWhatWeGenerate,
  GenAiWhoFor,
} from "@/components/inner-services/artificial-intelligence/services/generative-ai";
import { PageContainer } from "@/components/layout/PageContainer";
import { generativeAiMetadata } from "@/data/metadata";

export const metadata = generativeAiMetadata;

export default function GenerativeAiPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <GenAiHero />
          <GenAiWhoFor />
          <GenAiWhatWeGenerate />
          <GenAiUseCases />
          <GenAiDeliverables />
          <GenAiModels />
          <GenAiStack />
          <GenAiProcess />
          <GenAiEngagement />
          <GenAiHowWeQuote />
          <GenAiFaq />
          <GenAiRelated />
          <GenAiFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
