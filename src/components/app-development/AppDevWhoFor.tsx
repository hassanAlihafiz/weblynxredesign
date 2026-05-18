import { IconCheck } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const bullets = [
  "You have a startup idea that needs a mobile-first MVP",
  "Your web product needs a companion iOS & Android app",
  "You want one codebase serving both platforms",
  "You need someone who handles App Store + Play Store submission",
] as const;

export function AppDevWhoFor() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        Is this for you?
      </p>
      <h2 className="mb-10 max-w-md text-balance font-sans text-3xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)] md:text-4xl">
        You probably need this if...
      </h2>
      <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
        {bullets.map((text) => (
          <div key={text} className="flex items-start gap-3">
            <IconCheck className="mt-1 size-[18px] shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
            <span className="text-base leading-relaxed text-[var(--text)]">{text}</span>
          </div>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
