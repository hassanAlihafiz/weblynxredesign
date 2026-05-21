import { ContentContainer } from "@/components/layout/ContentContainer";
import { ANDROID_APP_DEV_PAGE } from "@/data/site";

const { stack } = ANDROID_APP_DEV_PAGE;

export function AndroidDevStack() {
  return (
    <section className="w-full border-t border-[var(--border)] py-9 sm:py-[2.25rem]">
      <ContentContainer>
        <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Modern <span className="text-[var(--red)]">Android tools</span> we ship with
        </h1>
        <div className="flex flex-wrap gap-2">
          {stack.labels.map((label) => (
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
