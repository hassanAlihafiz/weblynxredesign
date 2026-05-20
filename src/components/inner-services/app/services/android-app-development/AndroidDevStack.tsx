import { ContentContainer } from "@/components/layout/ContentContainer";
import { ANDROID_APP_DEV_PAGE } from "@/data/site";
import { AndroidDevSectionHeading } from "./AndroidDevSectionHeading";

const { stack } = ANDROID_APP_DEV_PAGE;

export function AndroidDevStack() {
  return (
    <section className="w-full border-t border-[var(--border)] py-9 sm:py-[2.25rem]">
      <ContentContainer>
        <AndroidDevSectionHeading heading={stack.heading} className="mb-5" />
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
