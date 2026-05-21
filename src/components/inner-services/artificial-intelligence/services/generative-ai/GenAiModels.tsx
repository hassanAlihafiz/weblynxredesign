import { ContentContainer } from "@/components/layout/ContentContainer";
import { GENERATIVE_AI_PAGE } from "@/data/site";

const { models } = GENERATIVE_AI_PAGE;

export function GenAiModels() {
  return (
    <section className="w-full border-t border-[#252525] bg-[#141414] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Best-in-class <span className="text-[var(--red)]">foundation models</span>, per modality
        </h2>
        <p className="mb-5 max-w-lg text-lg leading-tight text-[var(--text-muted)]">{models.description}</p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {models.categories.map(({ label, models: modelList }) => (
            <article  
              key={label}
              className="rounded-xl bg-[var(--bg-elev)] p-[18px] space-y-2"
            >
              <p className="mb-1.5 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">{label}</p>
              <ul className="list-none text-base leading-tight text-[var(--text)]">
                {modelList.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
