import type { DesignHeading } from "@/data/site";

const defaultClass =
  "max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl";

type Props = {
  heading: DesignHeading;
  className?: string;
};

export function DesignSectionHeading({ heading, className = "mb-8" }: Props) {
  return (
    <h2 className={[className, defaultClass].filter(Boolean).join(" ")}>
      {heading.before}
      <span className="text-[var(--red)]">{heading.emphasis}</span>
      {heading.after}
    </h2>
  );
}
