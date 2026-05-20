import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "sm" | "md" | "lg";

const baseClass =
  "inline-flex items-center justify-center gap-1.5 rounded-[var(--border-radius-md)] font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] active:translate-y-px";

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-[var(--shadow-primary)] ring-1 ring-[var(--color-primary-border)] hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-primary-hover)]",
  secondary:
    "border border-[var(--color-border-secondary)] bg-transparent text-[var(--color-text-primary)] shadow-[var(--shadow-xs)] hover:border-[var(--color-primary-border)] hover:bg-[var(--color-surface-raised)] hover:shadow-[var(--shadow-sm)]",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "min-h-11 px-5 py-2.5 text-sm",
  md: "min-h-11 px-5 py-3 text-sm",
  lg: "min-h-12 px-8 py-4 text-base",
};

function combineClass(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function buttonClassName({
  variant = "primary",
  size = "sm",
  fullWidth,
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}) {
  return combineClass(
    baseClass,
    variantClass[variant],
    sizeClass[size],
    fullWidth && "flex w-full min-h-[48px]",
    className,
  );
}

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonProps = SharedProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof SharedProps> & {
    href?: undefined;
  };

type LinkButtonProps = SharedProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof SharedProps | "href"> & {
    href: string;
    external?: boolean;
  };

export type ButtonComponentProps = ButtonProps | LinkButtonProps;

export function Button({
  variant = "primary",
  size = "sm",
  fullWidth,
  className,
  children,
  ...props
}: ButtonComponentProps) {
  const classes = buttonClassName({ variant, size, fullWidth, className });

  if ("href" in props && props.href !== undefined) {
    const { href, external, ...linkProps } = props as LinkButtonProps;

    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...(linkProps as Omit<ComponentPropsWithoutRef<"a">, keyof LinkButtonProps>)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonProps;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
