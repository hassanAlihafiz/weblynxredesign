"use client";

import dynamic from "next/dynamic";

const TestimonialSlider = dynamic(
  () =>
    import("@/components/testimonials/TestimonialSlider").then((m) => ({
      default: m.TestimonialSlider,
    })),
  {
    ssr: false,
    loading: () => (
      <section
        className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-14 md:py-20"
        aria-hidden
      >
        <div className="mx-auto h-[280px] max-w-4xl" />
      </section>
    ),
  },
);

export function HomeTestimonials() {
  return <TestimonialSlider />;
}
