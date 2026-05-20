import { ContentContainer } from "@/components/layout/ContentContainer";
import { ECOMMERCE_WEB_DEV_PAGE } from "@/data/site";
import { EcommerceWebDevSectionHeading } from "./EcommerceWebDevSectionHeading";

const { stack } = ECOMMERCE_WEB_DEV_PAGE;

export function EcommerceWebDevStack() {
  return (
    <section className="w-full border-t border-[var(--border)] py-9 sm:py-[2.25rem]">
      <ContentContainer>
        <EcommerceWebDevSectionHeading heading={stack.heading} className="mb-4" />

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
