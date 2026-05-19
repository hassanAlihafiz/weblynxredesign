import { ContentContainer } from "@/components/layout/ContentContainer";

const stack = [
  "Kotlin",
  "Jetpack Compose",
  "Coroutines & Flow",
  "Room DB",
  "Retrofit",
  "Hilt DI",
  "Firebase",
  "Android Studio",
  "Gradle",
  "Material 3",
] as const;

export function AndroidDevStack() {
  return (
    <section className="w-full border-t border-[var(--border)] py-9 sm:py-[2.25rem]">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Modern <span className="text-[var(--red)]">Android tools</span> we ship with
        </h2>
        <div className="flex flex-wrap gap-2">
          {stack.map((label) => (
            <span
              key={label}
              className="inline-flex items-center rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] px-3 py-1.5 text-sm font-medium text-[var(--text)]"
            >
              {label}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
