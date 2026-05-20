import dynamic from "next/dynamic";
import { homeMetadata } from "@/data/metadata";
import { HomeHero, HomeTrustBar } from "@/components/home";
import { HomeHeaderShell } from "@/components/Navbar/HomeHeaderShell";
import { PageContainer } from "@/components/layout/PageContainer";

const Navbar = dynamic(
  () => import("@/components/Navbar/Navbar").then((m) => ({ default: m.HomeNav })),
  { loading: () => <HomeHeaderShell /> },
);

const Footer = dynamic(
  () => import("@/components/Footer/Footer").then((m) => ({ default: m.HomeFooter })),
);

const HomeServices = dynamic(
  () => import("@/components/home/HomeServices").then((m) => ({ default: m.HomeServices })),
);

const HomeTestimonials = dynamic(
  () => import("@/components/home/HomeTestimonials").then((m) => ({ default: m.HomeTestimonials })),
);

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
