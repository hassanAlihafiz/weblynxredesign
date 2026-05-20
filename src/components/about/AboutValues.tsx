import { ContentContainer } from "@/components/layout/ContentContainer";
import { ABOUT_PAGE } from "@/data/site";
import { AboutSectionHeading } from "./AboutSectionHeading";

const { values } = ABOUT_PAGE;

const cardClassName =
  "rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-6 transition-[border-color] duration-200 hover:border-[var(--border)]";

export function AboutValues() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-14 md:py-20">
      <ContentContainer>
        <AboutSectionHeading heading={values.heading} />

        <p className="mb-12 max-w-md text-[var(--text-muted)]">{values.subtext}</p>

        <div className="grid gap-4 md:grid-cols-2">
          {values.principles.map(({ n, title, body }) => (
            <article key={n} className={cardClassName}>
              <div className="mb-4 font-sans text-[2rem] font-bold leading-none text-[var(--red)] sm:text-[2.125rem]">
                {n}
              </div>
              <h4 className="mb-2 text-lg font-medium text-[var(--text)]">{title}</h4>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
