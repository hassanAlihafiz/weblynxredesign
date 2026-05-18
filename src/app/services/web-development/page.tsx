import { Footer, Navbar } from "@/components/home";
import { webDevelopmentMetadata } from "@/data/metadata";
import { PageContainer } from "@/components/layout/PageContainer";
import {
  WebDevHero,
  WebDevIncluded,
  WebDevProcess,
  WebDevEngagementScopes,
  WebDevHowWeQuote,
  WebDevRelatedWork,
  WebDevFaq,
  WebDevStack,
  WebDevWhoFor,
} from "@/components/web-development";

export const metadata = webDevelopmentMetadata;

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <WebDevHero />
          <WebDevWhoFor />
          <WebDevIncluded />
          <WebDevStack />
          <WebDevProcess />
          <WebDevEngagementScopes />
          <WebDevHowWeQuote />
          <WebDevRelatedWork />
          <WebDevFaq />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
