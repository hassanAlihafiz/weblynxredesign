import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { HOME_PAGE } from "@/data/site";
import type { ComponentType } from "react";

type IconProps = { className?: string; strokeWidth?: number };

const cardClassName =
  "group/card block h-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-6 transition-[transform,border-color] duration-200 motion-safe:hover:-translate-y-0.5 hover:border-[var(--border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]";

export function HomeServiceCard({
  service: { href, n, title, description, stack, duration },
  Icon,
  learnMoreLabel,
}: {
  service: (typeof HOME_PAGE.services.items)[number];
  Icon: ComponentType<IconProps>;
  learnMoreLabel: string;
}) {
  return (
    <Link href={href} className={`${cardClassName} min-w-0 w-full`}>
      <div
        className="mb-5 flex size-11 items-center justify-center rounded-lg bg-[rgba(230,57,70,0.1)]"
        aria-hidden
      >
        <Icon className="size-6 text-[var(--red-bright)]" strokeWidth={1.5} />
      </div>
      <div className="mb-1 flex items-baseline justify-between gap-2">
        <span className="font-medium text-[var(--text)]">{title}</span>
        <span className="text-meta">{n}</span>
      </div>
      <p className="mb-4 break-words text-sm leading-relaxed text-[var(--text-muted)]">
        {description}
      </p>
      <div className="mb-4 font-mono text-sm text-[var(--text-dim)]">{stack}</div>
      <div className="flex items-center justify-between border-t border-[var(--border-subtle)] pt-3">
        <span className="text-sm text-[var(--text-muted)]">{duration}</span>
        <span className="text-accent inline-flex items-center gap-0.5 text-sm font-semibold transition-colors group-hover/card:text-[var(--text)]">
          {learnMoreLabel}
          <ArrowRightIcon className="size-3 shrink-0" />
        </span>
      </div>
    </Link>
  );
}
