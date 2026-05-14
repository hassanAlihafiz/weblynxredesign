import type { Metadata } from "next";
import {
  ContactFormSection,
  ContactIntro,
  ContactMiniFaq,
  ContactNextSteps,
} from "@/components/contact";
import { Footer, Navbar } from "@/components/home";
import { PageContainer } from "@/components/layout/PageContainer";

export const metadata: Metadata = {
  title: "Contact — Weblynx",
  description:
    "Tell us about your project. We reply within 24 hours. Book a call, email, or send a project inquiry.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 w-full">
          <ContactIntro />
          <ContactFormSection />
          <ContactNextSteps />
          <ContactMiniFaq />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
