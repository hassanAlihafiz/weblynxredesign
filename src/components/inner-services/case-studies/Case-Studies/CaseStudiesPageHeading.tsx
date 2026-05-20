import type { CaseStudiesIndexHeading } from "@/data/site";

const defaultClass =
  "mb-2.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl";

type Props = {
  heading: CaseStudiesIndexHeading;
};

export function CaseStudiesPageHeading({ heading }: Props) {
  return (
    <h1 className={defaultClass}>
      {heading.before}
      <span className="text-[var(--red)]">{heading.emphasis}</span>
      {heading.after}
    </h1>
  );
}
