import { ContentContainer } from "@/components/layout/ContentContainer";
import { TECH_STACKS, WEB_DEVELOPMENT_PAGE } from "@/data/site";
import { WebDevSectionHeading } from "./WebDevSectionHeading";

const { stack } = WEB_DEVELOPMENT_PAGE;

export function WebDevStack() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-8 shadow-[var(--shadow-inset-soft)] sm:py-9 md:py-10">
      <ContentContainer>
        <WebDevSectionHeading heading={stack.heading} className="mb-6" />
        <div className="flex flex-wrap gap-2">
          {TECH_STACKS.webDevelopment.map((name) => (
            <span key={name} className="chip">
              {name}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
