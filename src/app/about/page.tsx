import type { Metadata } from "next";
import {
  AboutCapabilities,
  AboutClientVoices,
  AboutFinalCta,
  AboutIntro,
  AboutManifesto,
  AboutStats,
  AboutStatusStrip,
  AboutStory,
  AboutValues,
} from "@/components/about";
import { Footer, Navbar } from "@/components/home";
import { PageContainer } from "@/components/layout/PageContainer";

export const metadata: Metadata = {
  title: "About — Weblynx",
  description:
    "A small studio building fast, thoughtful web products for founders. Our story, manifesto, principles, and team.",
};

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
          <AboutClientVoices />
          <AboutStatusStrip />
          <AboutFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
