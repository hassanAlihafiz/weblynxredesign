import { ContentContainer } from "@/components/layout/ContentContainer";
import { APP_DEVELOPMENT_PAGE, TECH_STACKS } from "@/data/site";
import { AppDevSectionHeading } from "./AppDevSectionHeading";

const { tech } = APP_DEVELOPMENT_PAGE;

export function AppDevTechChips() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-8 shadow-[var(--shadow-inset-soft)] sm:py-9 md:py-10">
      <ContentContainer>
        <AppDevSectionHeading heading={tech.heading} className="mb-6" />
        <div className="flex flex-wrap gap-2">
          {TECH_STACKS.appDevelopment.map((label) => (
            <span key={label} className="chip">
              {label}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
