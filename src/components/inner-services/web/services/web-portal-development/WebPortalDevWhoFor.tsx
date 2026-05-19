import { IconCheck } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const reasons = [
  "Your clients need a secure place to log in, view data, and self-serve",
  "Your team runs operations in spreadsheets that can't scale anymore",
  "You need different user roles seeing different data and tools",
  "You're paying 5+ SaaS tools and want a unified custom platform",
] as const;

export function WebPortalDevWhoFor() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          You probably <span className="text-[var(--red)]">need this</span> if...
        </h2>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {reasons.map((text) => (
            <div
              key={text}
              className="flex items-start gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] px-4 py-3.5"
            >
              <IconCheck className="mt-px size-5 shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
              <span className="text-base leading-relaxed text-[var(--text)]">{text}</span>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
