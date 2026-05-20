import {
  IconArticle,
  IconClipboardText,
  IconMail,
  IconMovie,
  IconPhotoEdit,
  IconUserCircle,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { GENERATIVE_AI_PAGE, type GenAiUseCaseIconId } from "@/data/site";

const useCaseIcons: Record<GenAiUseCaseIconId, TablerIcon> = {
  "photo-edit": IconPhotoEdit,
  article: IconArticle,
  "clipboard-text": IconClipboardText,
  mail: IconMail,
  movie: IconMovie,
  "user-circle": IconUserCircle,
};

const { useCases } = GENERATIVE_AI_PAGE;

export function GenAiUseCases() {
  return (
    <section className="w-full border-t border-[#252525] bg-[#141414] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance text-4xl font-semibold leading-tight text-[var(--text)]">
          {useCases.heading.before}
          <span className="text-[var(--red)]">{useCases.heading.emphasis}</span>
          {useCases.heading.after}
        </h2>
        <p className="mb-5 max-w-lg text-lg leading-tight text-[var(--text-muted)]">{useCases.description}</p>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {useCases.items.map(({ title, body, icon }) => {
            const Icon = useCaseIcons[icon];
            return (
              <article
                key={title}
                className="flex items-start gap-2.5 rounded-lg bg-[var(--bg-elev)] px-4 py-3.5"
              >
                <Icon className="mt-px size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <div>
                  <h3 className="mb-0.5 text-base font-medium text-[var(--text)]">{title}</h3>
                  <p className="text-base leading-tight text-[var(--text-muted)]">{body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
