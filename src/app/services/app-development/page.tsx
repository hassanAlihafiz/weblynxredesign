import type { Metadata } from "next";
import { Footer, Navbar } from "@/components/home";
import { PageContainer } from "@/components/layout/PageContainer";
import {
  AppDevEngagement,
  AppDevFaq,
  AppDevFinalCta,
  AppDevHero,
  AppDevHowWeQuote,
  AppDevIncluded,
  AppDevPlatforms,
  AppDevProcessSteps,
  AppDevTechChips,
  AppDevWhoFor,
} from "@/components/app-development";

export const metadata: Metadata = {
  title: "App Development — Weblynx",
  description:
    "React Native and Expo apps for iOS and Android — discovery, design, build, store submission, and launch.",
};

export default function AppDevelopmentPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <AppDevHero />
          <AppDevWhoFor />
          <AppDevPlatforms />
          <AppDevIncluded />
          <AppDevTechChips />
          <AppDevProcessSteps />
          <AppDevEngagement />
          <AppDevHowWeQuote />
          <AppDevFaq />
          <AppDevFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
