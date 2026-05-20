import { IconCheck } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { ECOMMERCE_WEB_DEV_PAGE } from "@/data/site";
import { EcommerceWebDevSectionHeading } from "./EcommerceWebDevSectionHeading";

const { whoFor } = ECOMMERCE_WEB_DEV_PAGE;

export function EcommerceWebDevWhoFor() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-9 sm:py-[2.25rem]">
      <ContentContainer>
        <EcommerceWebDevSectionHeading heading={whoFor.heading} />

        <div className="grid gap-2.5 sm:grid-cols-2">
          {whoFor.reasons.map((text) => (
            <div
              key={text}
              className="flex items-start gap-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] px-4 py-3.5"
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
