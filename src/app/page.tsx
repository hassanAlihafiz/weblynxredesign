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
        <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col px-2.5 sm:px-2.5 lg:px-3">
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
        </div>
      </PageContainer>
    </div>
  );
}
