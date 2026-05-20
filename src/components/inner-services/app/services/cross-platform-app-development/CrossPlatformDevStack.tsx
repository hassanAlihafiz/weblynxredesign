import { ContentContainer } from "@/components/layout/ContentContainer";
import { CROSS_PLATFORM_APP_DEV_PAGE } from "@/data/site";
import { CrossPlatformDevSectionHeading } from "./CrossPlatformDevSectionHeading";

const { stack } = CROSS_PLATFORM_APP_DEV_PAGE;

export function CrossPlatformDevStack() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[#141414] py-9 sm:py-[2.25rem]">
      <ContentContainer>
        <CrossPlatformDevSectionHeading heading={stack.heading} className="mb-4" />

        <div className="flex flex-wrap gap-2.5">
          {stack.labels.map((label) => (
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
