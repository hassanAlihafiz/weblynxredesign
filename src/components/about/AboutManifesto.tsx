import { ContentContainer } from "@/components/layout/ContentContainer";
import { ABOUT_PAGE } from "@/data/site";

const { manifesto } = ABOUT_PAGE;

export function AboutManifesto() {
  return (
    <section className="relative w-full overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-14 text-center md:py-20">
      <ContentContainer>
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] max-w-[min(100vw,800px)] -translate-x-1/2 -translate-y-1/2 rounded-full red-glow"
          aria-hidden
        />

        <div className="relative z-10">
          <blockquote className="mx-auto max-w-4xl text-4xl leading-tight text-[var(--text)] md:text-5xl">
            <span className="font-serif italic">&ldquo;</span>{" "}
            {manifesto.quote}{" "}
            <span className="font-serif italic">&rdquo;</span>
          </blockquote>
        </div>
      </ContentContainer>
    </section>
  );
}
