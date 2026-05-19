import { Footer, Navbar } from "@/components/home";
import { designMetadata } from "@/data/metadata";
import {
  DesignDeliverables,
  DesignDisciplines,
  DesignEngagementScopes,
  DesignFaq,
  DesignFinalCta,
  DesignHero,
  DesignHowWeQuote,
  DesignProcess,
  DesignStack,
  DesignWhoFor,
} from "@/components/inner-services/designing/design";
import { PageContainer } from "@/components/layout/PageContainer";

export const metadata = designMetadata;

export default function DesignPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <DesignHero />
          <DesignWhoFor />
          <DesignDisciplines />
          <DesignDeliverables />
          <DesignStack />
          <DesignProcess />
          <DesignEngagementScopes />
          <DesignHowWeQuote />
          <DesignFaq />
          <DesignFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
