import {
  AndroidDevAlsoExplore,
  AndroidDevDeliverables,
  AndroidDevEngagement,
  AndroidDevFaq,
  AndroidDevFinalCta,
  AndroidDevHero,
  AndroidDevHowWeQuote,
  AndroidDevPlatforms,
  AndroidDevProcess,
  AndroidDevStack,
  AndroidDevWhoFor,
} from "@/components/inner-services/app/services/android-app-development";
import { Footer, Navbar } from "@/components/home";
import { PageContainer } from "@/components/layout/PageContainer";
import { androidAppDevelopmentMetadata } from "@/data/metadata";

export const metadata = androidAppDevelopmentMetadata;

export default function AndroidAppDevelopmentPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <AndroidDevHero />
          <AndroidDevWhoFor />
          <AndroidDevPlatforms />
          <AndroidDevDeliverables />
          <AndroidDevStack />
          <AndroidDevProcess />
          <AndroidDevEngagement />
          <AndroidDevHowWeQuote />
          <AndroidDevFaq />
          <AndroidDevAlsoExplore />
          <AndroidDevFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
