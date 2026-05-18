import {
  ContactFormSection,
  ContactIntro,
  ContactMiniFaq,
  ContactNextSteps,
} from "@/components/contact";
import { Footer, Navbar } from "@/components/home";
import { PageContainer } from "@/components/layout/PageContainer";
import { contactMetadata } from "@/data/metadata";

export const metadata = contactMetadata;

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
