import { Footer, Navbar } from "@/components/home";
import {
  CloudAppDevArchitecture,
  CloudAppDevDeliverables,
  CloudAppDevEngagement,
  CloudAppDevFaq,
  CloudAppDevFinalCta,
  CloudAppDevHero,
  CloudAppDevHowWeQuote,
  CloudAppDevPatterns,
  CloudAppDevProcess,
  CloudAppDevProviders,
  CloudAppDevRelated,
  CloudAppDevToolkit,
  CloudAppDevWhoFor,
} from "@/components/inner-services/cloud/cloud-application-development";
import { PageContainer } from "@/components/layout/PageContainer";
import { cloudApplicationDevelopmentMetadata } from "@/data/metadata";

export const metadata = cloudApplicationDevelopmentMetadata;

export default function CloudApplicationDevelopmentPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <CloudAppDevHero />
          <CloudAppDevWhoFor />
          <CloudAppDevPatterns />
          <CloudAppDevArchitecture />
          <CloudAppDevDeliverables />
          <CloudAppDevProviders />
          <CloudAppDevToolkit />
          <CloudAppDevProcess />
          <CloudAppDevEngagement />
          <CloudAppDevHowWeQuote />
          <CloudAppDevFaq />
          <CloudAppDevRelated />
          <CloudAppDevFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
