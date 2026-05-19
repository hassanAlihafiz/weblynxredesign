import { IconArrowRight, IconCheck, IconInfoCircle } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";

const reasons = [
  "Your audience is high-income, US/UK-based, and primarily on iPhone",
  "You're building for Apple Watch, Vision Pro, or deep iPad workflows",
  "You need ARKit, CoreML, HealthKit, or other Apple-only frameworks",
  "Performance, polish, and premium feel are non-negotiable",
] as const;

export function IosDevWhoFor() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[#141414] py-9 sm:py-10 md:py-[2.25rem]">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          You probably need <span className="text-[var(--red)]">native iOS</span> if...
        </h2>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {reasons.map((text) => (
            <div
              key={text}
              className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4"
            >
              <IconCheck className="mt-px size-5 shrink-0 text-[var(--text)]" stroke={2} aria-hidden />
              <span className="text-base font-medium text-[var(--text)]">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-lg border border-[rgba(59,130,246,0.3)] bg-[rgba(59,130,246,0.08)] p-4">
          <IconInfoCircle className="mt-px size-5 shrink-0 text-[var(--blue)]" stroke={1.5} aria-hidden />
          <div>
            <p className="mb-1 text-base font-medium text-[var(--text)]">Need both iOS and Android?</p>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              Most founders save 40–50% with cross-platform and on modern frameworks the iOS experience is nearly
              identical to native.{" "}
              <Link
                href="/cross-platform-app-development"
                className="inline-flex items-center gap-1 text-[var(--blue)] underline underline-offset-2 transition-opacity hover:opacity-90"
              >
                See cross-platform development
                <IconArrowRight className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
              </Link>
            </p>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
