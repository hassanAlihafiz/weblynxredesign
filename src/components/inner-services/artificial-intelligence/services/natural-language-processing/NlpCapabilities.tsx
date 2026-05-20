import {
  IconCategory,
  IconFileDescription,
  IconLanguage,
  IconMicrophone,
  IconMoodSmile,
  IconSearch,
  IconTags,
  IconTarget,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { NATURAL_LANGUAGE_PROCESSING_PAGE, type NlpCapabilityIconId } from "@/data/site";

const capabilityIcons: Record<NlpCapabilityIconId, TablerIcon> = {
  "mood-smile": IconMoodSmile,
  tags: IconTags,
  category: IconCategory,
  "file-summary": IconFileDescription,
  language: IconLanguage,
  microphone: IconMicrophone,
  search: IconSearch,
  target: IconTarget,
};

const { capabilities } = NATURAL_LANGUAGE_PROCESSING_PAGE;

export function NlpCapabilities() {
  return (
    <section
      id={capabilities.sectionId}
      className="scroll-mt-24 w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11"
    >
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance text-4xl font-semibold leading-tight text-[var(--text)]">
          {capabilities.heading.before}
          <span className="text-[var(--red)]">{capabilities.heading.emphasis}</span>
          {capabilities.heading.after}
        </h2>
        <p className="mb-5 max-w-lg text-lg leading-tight text-[var(--text-muted)]">{capabilities.description}</p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.items.map((item) => {
            const Icon = capabilityIcons[item.icon];
            return (
              <article
                key={item.title}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4"
              >
                <Icon className="size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1.5 mt-2.5 text-sm font-semibold text-[var(--text)]">{item.title}</h3>
                {"body" in item ? (
                  <p className="text-base leading-relaxed text-[var(--text-muted)]">{item.body}</p>
                ) : (
                  <p className="text-base leading-relaxed text-[var(--text-muted)]">
                    {item.bodyBefore}
                    <em className="text-[var(--text)] not-italic">{item.bodyEmphasis}</em>
                    {item.bodyAfter}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
