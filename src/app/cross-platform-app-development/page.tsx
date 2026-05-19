import {
  CrossPlatformDevComparison,
  CrossPlatformDevDeliverables,
  CrossPlatformDevEngagement,
  CrossPlatformDevFinalCta,
  CrossPlatformDevFaq,
  CrossPlatformDevFrameworks,
  CrossPlatformDevHero,
  CrossPlatformDevHowWeQuote,
  CrossPlatformDevProcess,
  CrossPlatformDevRelated,
  CrossPlatformDevStack,
  CrossPlatformDevWhoFor,
} from "@/components/inner-services/app/services/cross-platform-app-development";
import { Footer, Navbar } from "@/components/home";
import { PageContainer } from "@/components/layout/PageContainer";
import { crossPlatformAppDevelopmentMetadata } from "@/data/metadata";

export const metadata = crossPlatformAppDevelopmentMetadata;

export default function CrossPlatformAppDevelopmentPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <CrossPlatformDevHero />
          <CrossPlatformDevWhoFor />
          <CrossPlatformDevComparison />
          <CrossPlatformDevFrameworks />
          <CrossPlatformDevDeliverables />
          <CrossPlatformDevStack />
          <CrossPlatformDevProcess />
          <CrossPlatformDevEngagement />
          <CrossPlatformDevHowWeQuote />
          <CrossPlatformDevFaq />
          <CrossPlatformDevRelated />
          <CrossPlatformDevFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
