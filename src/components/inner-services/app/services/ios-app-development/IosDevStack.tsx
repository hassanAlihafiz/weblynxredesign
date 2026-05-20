import { ContentContainer } from "@/components/layout/ContentContainer";
import { IOS_APP_DEV_PAGE } from "@/data/site";
import { IosDevSectionHeading } from "./IosDevSectionHeading";

const { stack } = IOS_APP_DEV_PAGE;

export function IosDevStack() {
  return (
    <section className="w-full border-t border-[var(--border)] py-9 sm:py-[2.25rem]">
      <ContentContainer>
        <IosDevSectionHeading heading={stack.heading} className="mb-5" />

        <div className="flex flex-wrap gap-2">
          {stack.labels.map((label) => (
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
