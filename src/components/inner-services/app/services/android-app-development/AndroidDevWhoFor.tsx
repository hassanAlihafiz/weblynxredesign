import { IconCheck, IconInfoCircle } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";

const reasons = [
  "Your audience is primarily on Android (emerging markets, Asia, EU)",
  "You need deep hardware access Bluetooth, NFC, fingerprint, sensors",
  "You're building for Wear OS, Android TV, or Auto integrations",
  "Performance is mission-critical and cross-platform won't cut it",
] as const;

export function AndroidDevWhoFor() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[#141414] py-9 sm:py-10 md:py-[2.25rem]">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          You probably need <span className="text-[var(--red)]">native Android</span> if...
        </h2>

        <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
          {reasons.map((text) => (
            <div
              key={text}
              className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4"
            >
              <IconCheck
                className="mt-px size-5 shrink-0 text-[var(--green)]"
                stroke={2}
                aria-hidden
              />
              <span className="text-base font-medium text-[var(--text)]">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-[10px] border border-[rgba(59,130,246,0.3)] bg-[rgba(59,130,246,0.08)] px-[18px] py-4">
          <IconInfoCircle className="mt-px size-[18px] shrink-0 text-[var(--blue)]" stroke={1.5} aria-hidden />
          <div>
            <p className="mb-1 text-base font-medium text-[var(--text)]">
              Not sure if you need native Android?
            </p>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              Most founders building for both iOS and Android save 40–50% with cross-platform and the user
              experience is nearly identical.{" "}
              <Link
                href="/cross-platform-app-development"
                className="text-[var(--blue)] underline underline-offset-2 transition-opacity hover:opacity-90"
              >
                See cross-platform development →
              </Link>
            </p>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
