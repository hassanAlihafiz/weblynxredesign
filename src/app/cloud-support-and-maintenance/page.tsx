import { Footer, Navbar } from "@/components/home";
import {
  CloudSupportCoverage,
  CloudSupportFaq,
  CloudSupportFinalCta,
  CloudSupportHero,
  CloudSupportIncluded,
  CloudSupportHowWeQuote,
  CloudSupportRelated,
  CloudSupportMonitoringStack,
  CloudSupportOnboarding,
  CloudSupportPlans,
  CloudSupportSlas,
  CloudSupportWhoFor,
} from "@/components/inner-services/cloud/services/cloud-support-and-maintenance";
import { PageContainer } from "@/components/layout/PageContainer";
import { cloudSupportAndMaintenanceMetadata } from "@/data/metadata";

export const metadata = cloudSupportAndMaintenanceMetadata;

export default function CloudSupportAndMaintenancePage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <CloudSupportHero />
          <CloudSupportWhoFor />
          <CloudSupportCoverage />
          <CloudSupportIncluded />
          <CloudSupportSlas />
          <CloudSupportMonitoringStack />
          <CloudSupportOnboarding />
          <CloudSupportPlans />
          <CloudSupportHowWeQuote />
          <CloudSupportFaq />
          <CloudSupportRelated />
          <CloudSupportFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
