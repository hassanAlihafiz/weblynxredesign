import { ContentContainer } from "@/components/layout/ContentContainer";
import { AI_DEVELOPMENT_PAGE } from "@/data/site";
import { AiDevSectionHeading } from "./AiDevSectionHeading";

const { process } = AI_DEVELOPMENT_PAGE;

export function AiDevProcess() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <AiDevSectionHeading heading={process.heading} className="mb-3" />
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{process.description}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {process.steps.map(({ week, num, title, body }) => (
            <div key={num} className="border-l-2 border-[var(--red)] pl-4">
              <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-[var(--text-dim)]">{week}</div>
              <div className="step-num mb-2">{num}</div>
              <h3 className="mb-1 text-sm font-medium text-[var(--text)]">{title}</h3>
              <p className="text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">{body}</p>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
