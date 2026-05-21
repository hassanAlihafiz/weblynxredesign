import { ContentContainer } from "@/components/layout/ContentContainer";
import { BRAND_IDENTITY_DESIGN_PAGE } from "@/data/site";

const { toolkit } = BRAND_IDENTITY_DESIGN_PAGE;

export function BrandIdentityToolkit() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-9 sm:py-10">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          <span className="text-[var(--red)]">Tools</span> we design in
        </h2>
        <div className="flex flex-wrap gap-2">
          {toolkit.tools.map((name) => (
            <span
              key={name}
              className="rounded-full border border-[var(--border)] bg-[var(--bg-elev)] px-3 py-1.5 text-sm font-medium text-[var(--text)]"
            >
              {name}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
