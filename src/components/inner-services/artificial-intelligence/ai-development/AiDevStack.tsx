import { ContentContainer } from "@/components/layout/ContentContainer";
import { AI_DEVELOPMENT_PAGE, TECH_STACKS } from "@/data/site";
import { AiDevSectionHeading } from "./AiDevSectionHeading";

const { stack } = AI_DEVELOPMENT_PAGE;

export function AiDevStack() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-8 shadow-[var(--shadow-inset-soft)] sm:py-9 md:py-10">
      <ContentContainer>
        <AiDevSectionHeading heading={stack.heading} className="mb-6" />
        <div className="flex flex-wrap gap-2">
          {TECH_STACKS.aiDevelopment.map((name) => (
            <span key={name} className="chip">
              {name}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
