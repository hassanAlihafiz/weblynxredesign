import { ContentContainer } from "@/components/layout/ContentContainer";

const stack = [
  "Swift",
  "SwiftUI",
  "UIKit",
  "Combine",
  "Async/Await",
  "Core Data",
  "SwiftData",
  "CloudKit",
  "ARKit",
  "CoreML",
  "Xcode",
  "TestFlight",
] as const;

export function IosDevStack() {
  return (
    <section className="w-full border-t border-[var(--border)] py-9 sm:py-[2.25rem]">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Modern iOS tools we <span className="text-[var(--red)]">ship with</span>
        </h2>

        <div className="flex flex-wrap gap-2">
          {stack.map((label) => (
            <span
              key={label}
              className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--bg-elev)] px-3 py-1.5 text-xs font-medium text-[var(--text)]"
            >
              <span className="text-sm font-medium text-[var(--text)]">{label}</span>
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
