import {
  HomeCaseStudies,
  HomeFinalCta,
  Footer,
  HomeHero,
  Navbar,
  HomeProcess,
  HomeServices,
  HomeTestimonials,
  HomeTrustBar,
} from "@/components/home";
import { PageContainer } from "@/components/layout/PageContainer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 w-full">
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
