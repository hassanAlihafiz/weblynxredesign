import { Footer, Navbar } from "@/components/home";
import {
  BrandIdentityDeliverables,
  BrandIdentityEngagement,
  BrandIdentityFaq,
  BrandIdentityFinalCta,
  BrandIdentityHero,
  BrandIdentityHowWeQuote,
  BrandIdentityLayers,
  BrandIdentityProcess,
  BrandIdentityRelated,
  BrandIdentityToolkit,
  BrandIdentityWhoFor,
} from "@/components/inner-services/designing/services/brand-identity-design";
import { PageContainer } from "@/components/layout/PageContainer";
import { brandIdentityDesignMetadata } from "@/data/metadata";

export const metadata = brandIdentityDesignMetadata;

export default function BrandIdentityDesignPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <BrandIdentityHero />
          <BrandIdentityWhoFor />
          <BrandIdentityLayers />
          <BrandIdentityDeliverables />
          <BrandIdentityProcess />
          <BrandIdentityToolkit />
          <BrandIdentityEngagement />
          <BrandIdentityHowWeQuote />
          <BrandIdentityFaq />
          <BrandIdentityRelated />
          <BrandIdentityFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
