import { ContentContainer } from "@/components/layout/ContentContainer";
import { DIGITAL_MARKETING_PAGE } from "@/data/site";

const { process } = DIGITAL_MARKETING_PAGE;

export function DmProcess() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
        A growth loop, not a <span className="text-[var(--red)]">campaign</span>
        </h2>
        <p className="mb-10 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{process.description}</p>
        <div className="grid gap-4 md:grid-cols-4">
          {process.steps.map(({ num, title, body }) => (
            <article
              key={num}
              className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)]"
            >
              <div className="mb-2 font-sans text-[2rem] font-bold leading-none text-[var(--red)] sm:text-[2.125rem]">
                {num}
              </div>
              <h3 className="mb-2 font-medium text-[var(--text)]">{title}</h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
