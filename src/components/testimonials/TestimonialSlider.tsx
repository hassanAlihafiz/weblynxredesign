"use client";

import { ContentContainer } from "@/components/layout/ContentContainer";
import { TESTIMONIALS } from "@/data/site";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useCallback, useState } from "react";

type TestimonialSliderProps = {
  /** Merged after base layout; defaults to `bg-[var(--bg-elev)]`. */
  sectionClassName?: string;
};

const navButtonClass =
  "flex size-10 shrink-0 items-center justify-center self-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] text-[var(--text-muted)] transition-colors hover:border-[var(--border)] hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)] sm:size-11";

export function TestimonialSlider({ sectionClassName }: TestimonialSliderProps = {}) {
  const count = TESTIMONIALS.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % count) + count) % count);
    },
    [count],
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  const current = TESTIMONIALS[activeIndex];

  return (
    <section
      className={`w-full border-t border-[var(--border-subtle)] py-14 md:py-20 ${sectionClassName ?? "bg-[var(--bg-elev)]"}`}
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <ContentContainer>
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-8">
            <button
              type="button"
              className={navButtonClass}
              onClick={goPrev}
              aria-label="Previous testimonial"
              aria-controls={`testimonial-slide-${activeIndex}`}
            >
              <IconChevronLeft className="size-5" stroke={1.5} aria-hidden />
            </button>

            <div className="min-w-0 flex-1 text-center">
              <div
                className="mb-6 font-serif text-6xl italic leading-none text-[var(--red)]"
                aria-hidden
              >
                &ldquo;
              </div>

              <div className="relative min-h-[7.5rem] sm:min-h-[8.5rem] md:min-h-[9rem]">
                {TESTIMONIALS.map(({ quote }, index) => (
                  <blockquote
                    key={index}
                    id={`testimonial-slide-${index}`}
                    aria-hidden={index !== activeIndex}
                    className={`absolute inset-x-0 top-0 text-xl leading-relaxed text-[var(--text)] transition-opacity duration-500 motion-reduce:transition-none sm:text-2xl md:text-3xl ${
                      index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                  >
                    {quote}
                  </blockquote>
                ))}
              </div>

              <figure className="mt-10 flex flex-col items-center gap-3">
                <div
                  className="flex size-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-[var(--text)]"
                  style={{ background: current.avatarBg }}
                  aria-hidden
                >
                  {current.initials}
                </div>
                <figcaption>
                  <div className="text-sm font-medium text-[var(--text)]">{current.name}</div>
                  <div className="text-xs text-[var(--text-muted)]">{current.role}</div>
                </figcaption>
              </figure>
            </div>

            <button
              type="button"
              className={navButtonClass}
              onClick={goNext}
              aria-label="Next testimonial"
              aria-controls={`testimonial-slide-${activeIndex}`}
            >
              <IconChevronRight className="size-5" stroke={1.5} aria-hidden />
            </button>
          </div>

          <div
            className="mt-8 flex justify-center gap-2"
            role="tablist"
            aria-label="Testimonial slides"
          >
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`size-2 rounded-full transition-colors ${
                  index === activeIndex
                    ? "bg-[var(--red)]"
                    : "bg-[var(--border-subtle)] hover:bg-[var(--border)]"
                }`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
