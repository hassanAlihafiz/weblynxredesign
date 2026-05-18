import type { SVGProps } from "react";

/** Bark marketplace mark (speech-bubble style). */
export function IconBark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M20 4H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h3v4l4.5-4H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8.2 3.5c.66 0 1.2.54 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm4.4 0c.66 0 1.2.54 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm-8.8 0c.66 0 1.2.54 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2z" />
    </svg>
  );
}
