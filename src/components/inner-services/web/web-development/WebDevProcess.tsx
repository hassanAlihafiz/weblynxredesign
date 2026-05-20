import { ContentContainer } from "@/components/layout/ContentContainer";
import { WEB_DEVELOPMENT_PAGE } from "@/data/site";
import { WebDevSectionHeading } from "./WebDevSectionHeading";

const { process } = WEB_DEVELOPMENT_PAGE;

export function WebDevProcess() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <WebDevSectionHeading heading={process.heading} />
        <div className="grid gap-6 md:grid-cols-4">
          {process.steps.map(({ week, num, title, body }) => (
            <div key={num} className="border-l-2 border-[var(--red)] pl-4">
              <div className="mb-2 font-mono text-xs text-[var(--text-dim)]">{week}</div>
              <div className="step-num mb-2">{num}</div>
              <h3 className="mb-2 font-medium text-[var(--text)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
