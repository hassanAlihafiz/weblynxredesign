import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Full-width page shell; sections use `ContentContainer` for 1260px content width. */
export function PageContainer({ children, className = "" }: PageContainerProps) {
  return <div className={`w-full ${className}`.trim()}>{children}</div>;
}
