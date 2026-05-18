import { IconCheck } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const bullets = [
  "You're launching a new brand and need a full identity",
  "Your existing brand feels outdated or off-target",
  "You need UI/UX for a web or mobile product",
  "You want design that ships — not just sits in a PDF",
] as const;

export function DesignWhoFor() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h2 className="mb-8 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          You probably <span className="text-[var(--red)]">need this</span> if...
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {bullets.map((text) => (
            <div
              key={text}
              className="flex items-center gap-3"
            >
              <IconCheck className="mt-1 size-5 shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
              <span className="text-base font-medium text-[var(--text)]">{text}</span>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
