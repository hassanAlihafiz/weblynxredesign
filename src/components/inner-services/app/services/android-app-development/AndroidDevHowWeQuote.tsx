import { ContentContainer } from "@/components/layout/ContentContainer";
import { ANDROID_APP_DEV_PAGE } from "@/data/site";
import { AndroidDevSectionHeading } from "./AndroidDevSectionHeading";

const { howWeQuote } = ANDROID_APP_DEV_PAGE;

export function AndroidDevHowWeQuote() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[#141414] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-6">
          <div>
            <AndroidDevSectionHeading heading={howWeQuote.heading} className="mb-5" />
          </div>

          <div>
            <p className="mb-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{howWeQuote.intro}</p>
            <div className="grid gap-3 md:grid-cols-3">
              {howWeQuote.steps.map(({ num, title, body }) => (
                <article key={num} className="rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4">
                  <p className="mb-1 text-2xl font-bold leading-none text-[var(--red)]">{num}</p>
                  <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
                  <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
