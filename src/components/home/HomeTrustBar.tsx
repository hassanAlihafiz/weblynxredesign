import { ContentContainer } from "@/components/layout/ContentContainer";
export function HomeTrustBar() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10">
      <ContentContainer>
      <div className="text-center">
        <p className="mb-6 font-mono text-sm font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
          Clients
        </p>
        <div className="flex flex-wrap items-center justify-around gap-8 opacity-50">
          <span className="font-sans text-xl font-bold tracking-wider text-[var(--text)]">
            ACME
          </span>
          <span className="font-sans text-xl font-bold tracking-wider text-[var(--text)]">
            NORTHBRAND
          </span>
          <span className="font-serif text-2xl italic text-[var(--text)]">finlytics</span>
          <span className="font-sans text-xl font-bold tracking-wider text-[var(--text)]">
            LUMEN
          </span>
          <span className="font-mono text-xl text-[var(--text)]">orbit/studio</span>
          <span className="font-sans text-xl font-bold tracking-wider text-[var(--text)]">
            STACKLINE
          </span>
        </div>
      </div>
    </ContentContainer>
    </section>
  );
}
