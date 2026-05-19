import {
  EcommerceWebDevCaseStudy,
  EcommerceWebDevConversionFeatures,
  EcommerceWebDevEngagement,
  EcommerceWebDevFaq,
  EcommerceWebDevFinalCta,
  EcommerceWebDevHero,
  EcommerceWebDevHowWeQuote,
  EcommerceWebDevPlatforms,
  EcommerceWebDevProcess,
  EcommerceWebDevRelated,
  EcommerceWebDevStack,
  EcommerceWebDevWhoFor,
} from "@/components/inner-services/web/services/ecommerce-website-development";
import { Footer, Navbar } from "@/components/home";
import { PageContainer } from "@/components/layout/PageContainer";
import { ecommerceWebsiteDevelopmentMetadata } from "@/data/metadata";

export const metadata = ecommerceWebsiteDevelopmentMetadata;

export default function EcommerceWebsiteDevelopmentPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <EcommerceWebDevHero />
          <EcommerceWebDevWhoFor />
          <EcommerceWebDevPlatforms />
          <EcommerceWebDevConversionFeatures />
          <EcommerceWebDevStack />
          <EcommerceWebDevProcess />
          <EcommerceWebDevEngagement />
          <EcommerceWebDevHowWeQuote />
          <EcommerceWebDevCaseStudy />
          <EcommerceWebDevFaq />
          <EcommerceWebDevRelated />
          <EcommerceWebDevFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
