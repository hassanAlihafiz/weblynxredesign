import type { CrossPlatformAppDevHeading } from "@/data/site";

const defaultClass =
  "text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl";

type Props = {
  heading: CrossPlatformAppDevHeading;
  className?: string;
};

export function CrossPlatformDevSectionHeading({ heading, className = "mb-5" }: Props) {
  return (
    <h2 className={[className, defaultClass].filter(Boolean).join(" ")}>
      {heading.before}
      <span className="text-[var(--red)]">{heading.emphasis}</span>
      {heading.after}
    </h2>
  );
}
