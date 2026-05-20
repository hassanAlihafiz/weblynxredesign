import { Footer, Navbar } from "@/components/home";
import { PageContainer } from "@/components/layout/PageContainer";
import {
  SmmContentTypes,
  SmmDeliverables,
  SmmEngagement,
  SmmFaq,
  SmmFinalCta,
  SmmHero,
  SmmHowWeQuote,
  SmmRelated,
  SmmPlatforms,
  SmmProcess,
  SmmToolkit,
  SmmWhoFor,
} from "@/components/inner-services/marketing/services/social-media-marketing";
import { socialMediaMarketingMetadata } from "@/data/metadata";

export const metadata = socialMediaMarketingMetadata;

export default function SocialMediaMarketingPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <SmmHero />
          <SmmWhoFor />
          <SmmPlatforms />
          <SmmDeliverables />
          <SmmContentTypes />
          <SmmToolkit />
          <SmmProcess />
          <SmmEngagement />
          <SmmHowWeQuote />
          <SmmFaq />
          <SmmRelated />
          <SmmFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
