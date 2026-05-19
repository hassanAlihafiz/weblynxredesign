import { Footer, Navbar } from "@/components/home";
import {
  WebPortalDevDeliverables,
  WebPortalDevEngagement,
  WebPortalDevFaq,
  WebPortalDevFinalCta,
  WebPortalDevHero,
  WebPortalDevHowWeQuote,
  WebPortalDevPortalTypes,
  WebPortalDevProcess,
  WebPortalDevRelated,
  WebPortalDevStack,
  WebPortalDevUserRoles,
  WebPortalDevWhoFor,
} from "@/components/inner-services/web/services/web-portal-development";
import { PageContainer } from "@/components/layout/PageContainer";
import { webPortalDevelopmentMetadata } from "@/data/metadata";

export const metadata = webPortalDevelopmentMetadata;

export default function WebPortalDevelopmentPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <WebPortalDevHero />
          <WebPortalDevWhoFor />
          <WebPortalDevPortalTypes />
          <WebPortalDevDeliverables />
          <WebPortalDevUserRoles />
          <WebPortalDevStack />
          <WebPortalDevProcess />
          <WebPortalDevEngagement />
          <WebPortalDevHowWeQuote />
          <WebPortalDevFaq />
          <WebPortalDevRelated />
          <WebPortalDevFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
