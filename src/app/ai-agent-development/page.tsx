import { Footer, Navbar } from "@/components/home";
import {
  AiAgentDeliverables,
  AiAgentEngagement,
  AiAgentFaq,
  AiAgentFinalCta,
  AiAgentHero,
  AiAgentHowWeQuote,
  AiAgentProcess,
  AiAgentRelated,
  AiAgentSafety,
  AiAgentStack,
  AiAgentTools,
  AiAgentTypes,
  AiAgentWhoFor,
} from "@/components/inner-services/artificial-intelligence/services/ai-agent-development";
import { PageContainer } from "@/components/layout/PageContainer";
import { aiAgentDevelopmentMetadata } from "@/data/metadata";

export const metadata = aiAgentDevelopmentMetadata;

export default function AiAgentDevelopmentPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <AiAgentHero />
          <AiAgentWhoFor />
          <AiAgentTypes />
          <AiAgentTools />
          <AiAgentDeliverables />
          <AiAgentSafety />
          <AiAgentStack />
          <AiAgentProcess />
          <AiAgentEngagement />
          <AiAgentHowWeQuote />
          <AiAgentFaq />
          <AiAgentRelated />
          <AiAgentFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
