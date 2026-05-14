import { IconBolt, IconMessageCircle, IconTarget, IconUsers } from "@tabler/icons-react";
import { SectionEyebrow } from "@/components/home/SectionEyebrow";

const principles = [
  {
    title: "Speed without shortcuts",
    body: "We ship in weeks, not quarters — but never at the cost of quality.",
    icon: IconBolt,
  },
  {
    title: "Honest communication",
    body: "No buzzwords, no ghosting. You'll always know where your project stands.",
    icon: IconMessageCircle,
  },
  {
    title: "Outcomes over output",
    body: "Pretty screens are easy. We care about whether your business actually grows.",
    icon: IconTarget,
  },
  {
    title: "Partners, not vendors",
    body: "We turn down projects we can't fully commit to. The ones we take, we own.",
    icon: IconUsers,
  },
] as const;

export function AboutValues() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] py-10 sm:py-12">
      <SectionEyebrow className="mb-3.5">SECTION 4 — PRINCIPLES</SectionEyebrow>
      <h2 className="mb-1.5 text-xl font-medium">How we work</h2>
      <p className="mb-5 text-[13px] text-[var(--color-text-secondary)]">Four things we never compromise on.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {principles.map(({ title, body, icon: Icon }) => (
          <article
            key={title}
            className="rounded-[var(--border-radius-lg)] border border-[var(--color-border-tertiary)] bg-[var(--color-surface-raised)] p-4 shadow-[var(--shadow-card)] transition-all duration-200 hover:border-[var(--color-primary-border)] hover:shadow-[var(--shadow-card-hover)] sm:p-4"
          >
            <Icon className="size-[22px] text-[var(--color-text-info)]" stroke={1.5} aria-hidden />
            <h3 className="my-2 text-[13px] font-medium">{title}</h3>
            <p className="text-xs leading-relaxed text-[var(--color-text-secondary)] sm:text-[12px] sm:leading-[1.6]">
              {body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
