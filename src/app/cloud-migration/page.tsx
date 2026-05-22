import { Footer, Navbar } from "@/components/home";
import {
  CloudMigrationDeliverables,
  CloudMigrationEngagement,
  CloudMigrationFaq,
  CloudMigrationFinalCta,
  CloudMigrationHero,
  CloudMigrationHowWeQuote,
  CloudMigrationProcess,
  CloudMigrationRelated,
  CloudMigrationStrategies,
  CloudMigrationToolkit,
  CloudMigrationZeroDowntime,
  CloudMigrationWhoFor,
  CloudMigrationWorkloads,
} from "@/components/inner-services/cloud/services/cloud-migration";
import { PageContainer } from "@/components/layout/PageContainer";
import { cloudMigrationMetadata } from "@/data/metadata";

export const metadata = cloudMigrationMetadata;

export default function CloudMigrationPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <CloudMigrationHero />
          <CloudMigrationWhoFor />
          <CloudMigrationWorkloads />
          <CloudMigrationStrategies />
          <CloudMigrationDeliverables />
          <CloudMigrationZeroDowntime />
          <CloudMigrationToolkit />
          <CloudMigrationProcess />
          <CloudMigrationEngagement />
          <CloudMigrationHowWeQuote />
          <CloudMigrationFaq />
          <CloudMigrationRelated />
          <CloudMigrationFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
