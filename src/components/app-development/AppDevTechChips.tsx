import { ContentContainer } from "@/components/layout/ContentContainer";
const chips = [
  "React Native",
  "Expo",
  "TypeScript",
  "Firebase",
  "Supabase",
  "Stripe / RevenueCat",
  "EAS Build",
  "Sentry",
] as const;

export function AppDevTechChips() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-8 shadow-[var(--shadow-inset-soft)] sm:py-9 md:py-10">
      <ContentContainer>
      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        Our stack
      </p>
      <h2 className="mb-6 max-w-2xl font-sans text-2xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)] md:text-3xl">
        Modern tools we ship with
      </h2>
      <div className="flex flex-wrap gap-2">
        {chips.map((label) => (
          <span key={label} className="chip">
            {label}
          </span>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
