import type { Metadata } from "next";
import { Footer, Navbar } from "@/components/home";
import { PageContainer } from "@/components/layout/PageContainer";
import { WebDevHero, WebDevProcess, WebDevQuoteForm, WebDevServices, WebDevStack } from "@/components/web-development";

export const metadata: Metadata = {
  title: "Web Development — Weblynx",
  description:
    "Custom websites, frontend and backend development, e-commerce, web apps, and SEO — from discovery to launch.",
};

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <div className="mx-auto w-full max-w-[900px]">
            <WebDevHero />
            <WebDevServices />
            <WebDevProcess />
            <WebDevStack />
            <WebDevQuoteForm />
          </div>
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
