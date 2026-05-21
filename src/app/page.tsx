import dynamic from "next/dynamic";
import { homeMetadata } from "@/data/metadata";
import { DeferredFooter } from "@/components/Footer/DeferredFooter";
import { DeferredHomeNav } from "@/components/Navbar/DeferredHomeNav";
import { HomeHero, HomeServices, HomeTestimonials, HomeTrustBar } from "@/components/home";
import { PageContainer } from "@/components/layout/PageContainer";

const HomeCaseStudies = dynamic(
  () => import("@/components/home/HomeCaseStudies").then((m) => ({ default: m.HomeCaseStudies })),
);

const HomeProcess = dynamic(
  () => import("@/components/home/HomeProcess").then((m) => ({ default: m.HomeProcess })),
);

const HomeFinalCta = dynamic(
  () => import("@/components/home/HomeFinalCta").then((m) => ({ default: m.HomeFinalCta })),
);

export const metadata = homeMetadata;

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <PageContainer className="flex min-h-screen flex-col">
        <DeferredHomeNav />
        <main className="w-full min-w-0 flex-1">
          <HomeHero />
          <HomeTrustBar />
          <HomeServices />
          <HomeCaseStudies />
          <HomeProcess />
          <HomeTestimonials />
          <HomeFinalCta />
        </main>
        <DeferredFooter />
      </PageContainer>
    </div>
  );
}
