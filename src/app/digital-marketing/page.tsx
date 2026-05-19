import { Footer, Navbar } from "@/components/home";
import { digitalMarketingMetadata } from "@/data/metadata";
import { PageContainer } from "@/components/layout/PageContainer";
import {
  DmChannels,
  DmEngagement,
  DmFaq,
  DmFinalCta,
  DmHero,
  DmHowWeQuote,
  DmIncluded,
  DmProcess,
  DmResults,
  DmWhoFor,
} from "@/components/inner-services/marketing/digital-marketing";

export const metadata = digitalMarketingMetadata;

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <DmHero />
          <DmWhoFor />
          <DmChannels />
          <DmIncluded />
          <DmProcess />
          <DmEngagement />
          <DmHowWeQuote />
          <DmResults />
          <DmFaq />
          <DmFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
