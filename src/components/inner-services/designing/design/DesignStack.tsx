import { ContentContainer } from "@/components/layout/ContentContainer";
import { DESIGN_PAGE, TECH_STACKS } from "@/data/site";
import { DesignSectionHeading } from "./DesignSectionHeading";

const { stack } = DESIGN_PAGE;

export function DesignStack() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <DesignSectionHeading heading={stack.heading} />
        <div className="flex flex-wrap gap-2">
          {TECH_STACKS.design.map((name) => (
            <span key={name} className="chip text-sm">
              {name}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
