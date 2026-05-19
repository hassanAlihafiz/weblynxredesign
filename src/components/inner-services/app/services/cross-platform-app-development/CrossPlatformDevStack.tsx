import { ContentContainer } from "@/components/layout/ContentContainer";

const stack = [
  "React Native",
  "Flutter",
  "Expo",
  "TypeScript",
  "Dart",
  "Firebase",
  "Supabase",
  "RevenueCat",
  "EAS Build",
  "Sentry",
  "Reanimated",
  "Maestro QA",
] as const;

export function CrossPlatformDevStack() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[#141414] py-9 sm:py-[2.25rem]">
      <ContentContainer>
        <h2 className="mb-4 text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Tools we <span className="text-[var(--red)]">ship with</span>
        </h2>

        <div className="flex flex-wrap gap-2.5">
          {stack.map((label) => (
            <span
              key={label}
              className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--bg-elev)] px-3 py-1.5 text-sm font-medium text-[var(--text)]"
            >
              {label}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
