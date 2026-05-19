import {
  IosDevAlsoExplore,
  IosDevDeliverables,
  IosDevEngagement,
  IosDevFaq,
  IosDevFinalCta,
  IosDevHowWeQuote,
  IosDevHero,
  IosDevPlatforms,
  IosDevProcess,
  IosDevStack,
  IosDevWhoFor,
} from "@/components/inner-services/app/services/ios-app-development";
import { Footer, Navbar } from "@/components/home";
import { PageContainer } from "@/components/layout/PageContainer";
import { iosAppDevelopmentMetadata } from "@/data/metadata";

export const metadata = iosAppDevelopmentMetadata;

export default function IosAppDevelopmentPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <IosDevHero />
          <IosDevWhoFor />
          <IosDevPlatforms />
          <IosDevDeliverables />
          <IosDevStack />
          <IosDevProcess />
          <IosDevEngagement />
          <IosDevHowWeQuote />
          <IosDevFaq />
          <IosDevAlsoExplore />
          <IosDevFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
