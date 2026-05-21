import { Footer, Navbar } from "@/components/home";
import {
  CloudConsultingCapabilities,
  CloudConsultingCompliance,
  CloudConsultingDeliverables,
  CloudConsultingEngagement,
  CloudConsultingFaq,
  CloudConsultingFinalCta,
  CloudConsultingHero,
  CloudConsultingHowWeQuote,
  CloudConsultingRelated,
  CloudConsultingProcess,
  CloudConsultingProviders,
  CloudConsultingToolkit,
  CloudConsultingWhoFor,
} from "@/components/inner-services/cloud/services/cloud-consulting-services";
import { PageContainer } from "@/components/layout/PageContainer";
import { cloudConsultingServicesMetadata } from "@/data/metadata";

export const metadata = cloudConsultingServicesMetadata;

export default function CloudConsultingServicesPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <CloudConsultingHero />
          <CloudConsultingWhoFor />
          <CloudConsultingCapabilities />
          <CloudConsultingProviders />
          <CloudConsultingDeliverables />
          <CloudConsultingCompliance />
          <CloudConsultingToolkit />
          <CloudConsultingProcess />
          <CloudConsultingEngagement />
          <CloudConsultingHowWeQuote />
          <CloudConsultingFaq />
          <CloudConsultingRelated />
          <CloudConsultingFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
