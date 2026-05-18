import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLIENT_LOGOS } from "@/data/site";

export function HomeTrustBar() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10">
      <ContentContainer>
      <div className="text-center">
        <div className="flex flex-wrap items-center justify-around gap-8 opacity-50">
          {CLIENT_LOGOS.map(({ label, className }) => (
            <span key={label} className={className}>
              {label}
            </span>
          ))}
        </div>
      </div>
    </ContentContainer>
    </section>
  );
}
