import type { ReactNode } from "react";

type ContentContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Centers section content at 1260px; use inside full-width section shells. */
export function ContentContainer({ children, className = "" }: ContentContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1260px] px-6 sm:px-8 lg:px-10 ${className}`.trim()}>
      {children}
    </div>
  );
}
