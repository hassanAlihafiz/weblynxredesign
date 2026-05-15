import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Centers page content at a maximum width of 1260px (`--page-max-width`).
 */
export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[var(--page-max-width)]${className}`}>
      {children}
    </div>
  );
}
