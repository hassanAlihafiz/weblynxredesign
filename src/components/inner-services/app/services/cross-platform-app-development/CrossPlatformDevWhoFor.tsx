import { IconAlertTriangle, IconArrowRight, IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";

const reasons = [
  "You need both iOS and Android and want to launch at the same time",
  "You're a startup or SaaS and need to ship an MVP fast",
  "You want one team maintaining one codebase not two teams, two codebases",
  "Your app is standard CRUD, content, or commerce not gaming or heavy AR",
] as const;

export function CrossPlatformDevWhoFor() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[#141414] py-9 sm:py-[2.25rem]">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          You probably want <span className="text-[var(--red)]">cross-platform</span> if...
        </h2>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {reasons.map((text) => (
            <div
              key={text}
              className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4"
            >
              <IconCheck className="mt-px size-5 shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
              <span className="text-base font-medium text-[var(--text)]">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-lg border border-[rgba(245,197,24,0.3)] bg-[rgba(245,197,24,0.08)] px-4 py-4">
          <IconAlertTriangle className="mt-px size-5 shrink-0 text-[#F5C518]" stroke={1.5} aria-hidden />
          <div>
            <p className="mb-1 text-xl font-medium text-[var(--text)]">
              When cross-platform is NOT the right choice
            </p>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              Heavy graphics (3D games, AR), Apple Watch / Wear OS / Vision Pro builds, or apps that need deep hardware
              access. For those, go native:{" "}
              <Link
                href="/ios-app-development"
                className="inline-flex items-center gap-1 text-[var(--red)] underline underline-offset-2 transition-opacity hover:opacity-90"
              >
                iOS
                <IconArrowRight className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
              </Link>{" "}
              <Link
                href="/android-app-development"
                className="inline-flex items-center gap-1 text-[var(--red)] underline underline-offset-2 transition-opacity hover:opacity-90"
              >
                Android <IconArrowRight className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
              </Link>
            </p>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
