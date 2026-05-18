import { Footer, Navbar } from "@/components/home";
import { servicesMetadata } from "@/data/metadata";
import { PageContainer } from "@/components/layout/PageContainer";
import {
  ServicesFaq,
  ServicesFeaturedWork,
  ServicesFinalCta,
  ServicesGrid,
  ServicesHero,
  ServicesProcess,
  ServicesTestimonial,
  ServicesWhy,
} from "@/components/services";

export const metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full flex-1">
          <ServicesHero />
          <ServicesGrid />
          <ServicesWhy />
          <ServicesProcess />
          <ServicesFeaturedWork />
          <ServicesTestimonial />
          <ServicesFaq />
          <ServicesFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
