import { ContentContainer } from "@/components/layout/ContentContainer";
export function AboutManifesto() {
  return (
    <section className="w-full relative overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-14 text-center md:py-20">
      <ContentContainer>
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] max-w-[min(100vw,800px)] -translate-x-1/2 -translate-y-1/2 rounded-full red-glow"
        aria-hidden
      />

      <div className="relative z-10">
        <blockquote className="mx-auto max-w-4xl text-4xl leading-tight text-[var(--text)] md:text-5xl">
          <span className="font-serif italic">&ldquo;</span> {" "}The best digital products aren&apos;t built by big teams or fancy stacks. They&apos;re built by
          people who care deeply about the details and who ship.{" "}<span className="font-serif italic">&rdquo;</span>
        </blockquote>
      </div>
    </ContentContainer>
    </section>
  );
}
