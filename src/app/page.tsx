import { homeMetadata } from "@/data/metadata";
import {
  HomeCaseStudies,
  HomeFinalCta,
  Footer,
  HomeHero,
  Navbar,
  HomeProcess,
  HomeServices,
  HomeTrustBar,
  HomeTestimonials,
} from "@/components/home";
import { PageContainer } from "@/components/layout/PageContainer";

export const metadata = homeMetadata;

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="w-full min-w-0 flex-1">
          <HomeHero />
          <HomeTrustBar />
          <HomeServices />
          <HomeCaseStudies />
          <HomeProcess />
          <HomeTestimonials />
          <HomeFinalCta />
        </main>
        <Footer />
      </PageContainer>
    </div>
  );
}
