import { Footer, Navbar } from "@/components/home";
import { aiDevelopmentMetadata } from "@/data/metadata";
import { PageContainer } from "@/components/layout/PageContainer";
import {
  AiDevCapabilities,
  AiDevEngagementScopes,
  AiDevFaq,
  AiDevFinalCta,
  AiDevHero,
  AiDevHowWeQuote,
  AiDevIncluded,
  AiDevProcess,
  AiDevStack,
  AiDevWhoFor,
} from "@/components/ai-development";

export const metadata = aiDevelopmentMetadata;

export default function AiDevelopmentPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <AiDevHero />
          <AiDevWhoFor />
          <AiDevCapabilities />
          <AiDevIncluded />
          <AiDevStack />
          <AiDevProcess />
          <AiDevEngagementScopes />
          <AiDevHowWeQuote />
          <AiDevFaq />
          <AiDevFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
