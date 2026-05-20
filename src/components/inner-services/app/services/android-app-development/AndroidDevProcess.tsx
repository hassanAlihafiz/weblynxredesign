import { ContentContainer } from "@/components/layout/ContentContainer";
import { ANDROID_APP_DEV_PAGE } from "@/data/site";
import { AndroidDevSectionHeading } from "./AndroidDevSectionHeading";

const { process } = ANDROID_APP_DEV_PAGE;

export function AndroidDevProcess() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[#141414] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <AndroidDevSectionHeading heading={process.heading} className="mb-5" />
        <p className="mb-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{process.description}</p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
          {process.steps.map(({ week, num, title, detail }) => (
            <div key={num} className="border-l-2 border-[var(--red)] py-0.5 pl-2.5">
              <p className="mb-1 text-sm font-medium uppercase tracking-[0.06em] text-[var(--text-muted)]">{week}</p>
              <p className="mb-1 text-lg font-semibold leading-none text-[var(--red)]">{num}</p>
              <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{detail}</p>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
