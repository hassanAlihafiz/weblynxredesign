import type { TablerIcon } from "@tabler/icons-react";
import {
  IconBolt,
  IconBrain,
  IconMessages,
  IconPhotoAi,
  IconRobot,
  IconSearch,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const capabilities: { title: string; body: string; icon: TablerIcon }[] = [
  {
    title: "AI chatbots & copilots",
    body: "Custom chat assistants trained on your data, with memory and tool use.",
    icon: IconMessages,
  },
  {
    title: "RAG systems",
    body: "AI that searches your docs, files, and databases and answers with sources.",
    icon: IconSearch,
  },
  {
    title: "AI agents",
    body: "Autonomous workflows that handle research, scheduling, follow-ups.",
    icon: IconRobot,
  },
  {
    title: "Image & video AI",
    body: "Generation, editing, and analysis for content, design, and product use.",
    icon: IconPhotoAi,
  },
  {
    title: "Fine-tuned models",
    body: "Custom models tuned to your domain, tone, and specific business rules.",
    icon: IconBrain,
  },
  {
    title: "AI automation",
    body: "Replace manual ops with AI for support, content, sales, and back-office.",
    icon: IconBolt,
  },
];

export function AiDevCapabilities() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-24 w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12"
    >
      <ContentContainer>
        <h2 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Six AI capabilities <span className="text-[var(--red)]">One integrated stack</span>
        </h2>
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          Each capability stands alone or combines with the rest to power a full AI product.
        </p>
        <div className="grid gap-x-12 gap-y-4 md:grid-cols-3">
          {capabilities.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)]"
            >
              <Icon className="mb-3 size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
              <h3 className="mb-2 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
