import {
  IconArrowRightCircle,
  IconBook2,
  IconBulb,
  IconFiles,
  IconLetterCase,
  IconMoodSearch,
  IconPalette,
  IconPhoto,
  IconSearch,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { BRAND_IDENTITY_DESIGN_PAGE, type BrandIdentityDeliverableIconId } from "@/data/site";

const deliverableIcons: Record<BrandIdentityDeliverableIconId, TablerIcon> = {
  search: IconSearch,
  "mood-search": IconMoodSearch,
  bulb: IconBulb,
  "letter-case": IconLetterCase,
  palette: IconPalette,
  mockup: IconPhoto,
  "book-2": IconBook2,
  files: IconFiles,
  "arrow-right-circle": IconArrowRightCircle,
};

const { deliverables } = BRAND_IDENTITY_DESIGN_PAGE;

export function BrandIdentityDeliverables() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11">
        <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Every project includes <span className="text-[var(--red)]">everything</span>
        </h2>
        <p className="mb-5 max-w-xl text-balance leading-relaxed text-[var(--text-muted)]">{deliverables.description}</p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.items.map(({ title, body, icon }) => {
            const Icon = deliverableIcons[icon];
            return (
              <article
                key={title}
                className="rounded-[var(--border-radius-md)] border border-[var(--border)] bg-[var(--bg-elev)] p-4"
              >
                <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-sm font-semibold text-[var(--text)]">{title}</h3>
                <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
