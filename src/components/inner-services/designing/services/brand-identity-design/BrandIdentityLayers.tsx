import {
  IconAsterisk,
  IconBook2,
  IconMessage2,
  IconPalette,
  IconPhoto,
  IconTypography,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { BRAND_IDENTITY_DESIGN_PAGE, type BrandIdentityLayerIconId } from "@/data/site";

const layerIcons: Record<BrandIdentityLayerIconId, TablerIcon> = {
  asterisk: IconAsterisk,
  palette: IconPalette,
  typography: IconTypography,
  "message-2": IconMessage2,
  photo: IconPhoto,
  "book-2": IconBook2,
};

const { layers } = BRAND_IDENTITY_DESIGN_PAGE;

export function BrandIdentityLayers() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Six layers <span className="text-[var(--red)]">one coherent brand</span>
        </h2>
        <p className="mb-5 max-w-xl text-balance leading-relaxed text-[var(--text-muted)]">{layers.description}</p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {layers.items.map(({ num, title, body, icon }) => {
            const Icon = layerIcons[icon];
            return (
              <article
                key={num}
                className="rounded-[var(--border-radius-md)] border border-[var(--border)] bg-[var(--bg-elev)] p-[18px]"
              >
                <div className="mb-3 flex items-start justify-between">
                  <Icon className="size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                  <span className="text-sm text-[var(--text-muted)]">{num}</span>
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-[var(--text)]">{title}</h3>
                <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
