import { Footer, Navbar } from "@/components/home";
import {
  UiUxDeliverables,
  UiUxEngagement,
  UiUxFaq,
  UiUxFinalCta,
  UiUxHero,
  UiUxHowWeQuote,
  UiUxPrinciples,
  UiUxProcess,
  UiUxRelated,
  UiUxSurfaces,
  UiUxToolkit,
  UiUxWhoFor,
} from "@/components/inner-services/designing/services/ui-ux-design";
import { PageContainer } from "@/components/layout/PageContainer";
import { uiUxDesignMetadata } from "@/data/metadata";

export const metadata = uiUxDesignMetadata;

export default function UiUxDesignPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <UiUxHero />
          <UiUxWhoFor />
          <UiUxSurfaces />
          <UiUxDeliverables />
          <UiUxPrinciples />
          <UiUxProcess />
          <UiUxToolkit />
          <UiUxEngagement />
          <UiUxHowWeQuote />
          <UiUxFaq />
          <UiUxRelated />
          <UiUxFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
