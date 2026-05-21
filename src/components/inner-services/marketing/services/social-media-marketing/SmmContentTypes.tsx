import {
  IconBolt,
  IconMicrophone,
  IconMovie,
  IconPhotoEdit,
  IconQuote,
  IconUsers,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SOCIAL_MEDIA_MARKETING_PAGE, type SmmContentTypeIconId } from "@/data/site";

const contentTypeIcons: Record<SmmContentTypeIconId, TablerIcon> = {
  movie: IconMovie,
  "photo-edit": IconPhotoEdit,
  quote: IconQuote,
  microphone: IconMicrophone,
  bolt: IconBolt,
  users: IconUsers,
};

const { contentTypes } = SOCIAL_MEDIA_MARKETING_PAGE;

export function SmmContentTypes() {
  return (
    <section className="w-full py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
          A content mix <span className="text-[var(--red)]">not just one</span> format
        </h2>
        <p className="mb-5 max-w-md text-lg leading-relaxed text-text-muted">{contentTypes.description}</p>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {contentTypes.items.map(({ label, icon }) => {
            const Icon = contentTypeIcons[icon];
            return (
              <div
                key={label}
                className="flex items-start gap-2.5 rounded-md bg-[var(--bg-elev-2)] p-5"
              >
                <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <span className="text-sm font-semibold text-text">{label}</span>
              </div>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
