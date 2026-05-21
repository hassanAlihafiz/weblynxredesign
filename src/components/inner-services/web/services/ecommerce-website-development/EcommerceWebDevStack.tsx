import { ContentContainer } from "@/components/layout/ContentContainer";
import { ECOMMERCE_WEB_DEV_PAGE } from "@/data/site";

const { stack } = ECOMMERCE_WEB_DEV_PAGE;

export function EcommerceWebDevStack() {
  return (
    <section className="w-full border-t border-[var(--border)] py-9 sm:py-[2.25rem]">
      <ContentContainer>
        <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Tools we <span className="text-[var(--red)]">ship with</span>
        </h1>

        <div className="flex flex-wrap gap-2.5">
          {stack.labels.map((label) => (
            <span
              key={label}
              className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--bg-elev)] px-3 py-1.5 text-sm font-medium text-[var(--text)]"
            >
              {label}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
