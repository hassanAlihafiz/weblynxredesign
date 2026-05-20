import {
  IconCode,
  IconFileText,
  IconMicrophone,
  IconPhoto,
  IconShape,
  IconVideo,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { GENERATIVE_AI_PAGE, type GenAiModalityIconId } from "@/data/site";

const modalityIcons: Record<GenAiModalityIconId, TablerIcon> = {
  "file-text": IconFileText,
  photo: IconPhoto,
  video: IconVideo,
  microphone: IconMicrophone,
  code: IconCode,
  shapes: IconShape,
};

const { whatWeGenerate } = GENERATIVE_AI_PAGE;

export function GenAiWhatWeGenerate() {
  return (
    <section
      id={whatWeGenerate.sectionId}
      className="scroll-mt-24 w-full border-t border-[#252525] py-10 sm:py-11"
    >
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance text-4xl font-semibold leading-tight text-[var(--text)]">
          {whatWeGenerate.heading.before}
          <span className="text-[var(--red)]">{whatWeGenerate.heading.emphasis}</span>
          {whatWeGenerate.heading.after}
        </h2>
        <p className="mb-5 max-w-lg text-lg leading-tight text-[var(--text-muted)]">{whatWeGenerate.description}</p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeGenerate.items.map(({ title, body, icon }) => {
            const Icon = modalityIcons[icon];
            return (
              <article
                key={title}
                className="rounded-xl bg-[var(--bg-elev)] p-[18px]"
              >
                <Icon className="size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1.5 mt-2.5 text-sm font-semibold text-[var(--text)]">{title}</h3>
                <p className="text-base leading-tight text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
