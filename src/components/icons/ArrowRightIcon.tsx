type ArrowRightIconProps = {
  className?: string;
  strokeWidth?: number;
};

/** Lightweight arrow icon for server components (avoids @tabler/icons-react in critical path). */
export function ArrowRightIcon({ className, strokeWidth = 1.5 }: ArrowRightIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
