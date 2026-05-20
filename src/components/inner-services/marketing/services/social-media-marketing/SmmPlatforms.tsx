import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandX,
  IconBrandYoutube,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SOCIAL_MEDIA_MARKETING_PAGE, type SmmPlatformIconId } from "@/data/site";

const platformIcons: Record<SmmPlatformIconId, TablerIcon> = {
  instagram: IconBrandInstagram,
  tiktok: IconBrandTiktok,
  linkedin: IconBrandLinkedin,
  x: IconBrandX,
  youtube: IconBrandYoutube,
  facebook: IconBrandFacebook,
};

const { platforms } = SOCIAL_MEDIA_MARKETING_PAGE;

export function SmmPlatforms() {
  return (
    <section
      id={platforms.sectionId}
      className="scroll-mt-24 w-full bg-[var(--color-background-primary)] py-10 sm:py-11"
    >
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
          {platforms.heading.before}
          <span className="text-[var(--red)]">{platforms.heading.emphasis}</span>
          {platforms.heading.after}
        </h2>
        <p className="mb-5 max-w-md text-lg leading-relaxed text-text-muted">{platforms.description}</p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.items.map(({ name, body, bestFor, icon, iconColor }) => {
            const Icon = platformIcons[icon];
            return (
              <article
                key={name}
                className="rounded-md bg-[var(--bg-elev-2)] p-4"
              >
                <div className="mb-2.5 flex items-center gap-2">
                  <Icon className="size-5 shrink-0" style={{ color: iconColor }} stroke={1.5} aria-hidden />
                  <h3 className="text-sm font-semibold text-text">{name}</h3>
                </div>
                <p className="mb-2 text-sm leading-relaxed text-text-muted">{body}</p>
                <p className="text-xs uppercase tracking-wide text-text-muted">{bestFor}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
