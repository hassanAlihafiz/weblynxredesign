import type { AboutHeading } from "@/data/site";

const defaultClass =
  "mb-3 max-w-2xl font-sans text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-[var(--text)] md:text-5xl";

type Props = {
  heading: AboutHeading;
  className?: string;
};

export function AboutSectionHeading({ heading, className }: Props) {
  return (
    <h2 className={[defaultClass, className].filter(Boolean).join(" ")}>
      {heading.before}
      <span className="text-[var(--red)]">{heading.emphasis}</span>
      {heading.after}
    </h2>
  );
}
