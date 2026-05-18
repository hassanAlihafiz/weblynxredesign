import {
  AboutCapabilities,
  AboutFinalCta,
  AboutIntro,
  AboutManifesto,
  AboutStats,
  AboutStory,
  AboutValues,
} from "@/components/about";
import { Footer, Navbar } from "@/components/home";
import { PageContainer } from "@/components/layout/PageContainer";
import { aboutMetadata } from "@/data/metadata";

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 w-full">
          <AboutIntro />
          <AboutManifesto />
          <AboutStory />
          <AboutValues />
          <AboutCapabilities />
          <AboutStats />
          <AboutFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
