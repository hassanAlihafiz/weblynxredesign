type IconProps = { className?: string; strokeWidth?: number };

function strokeProps(strokeWidth: number) {
  return {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

export function IconCode({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...strokeProps(strokeWidth)}>
      <path d="M9 6l6 0" />
      <path d="M10 6l0 12" />
      <path d="M14 6l0 12" />
      <path d="M7 18l10 0" />
    </svg>
  );
}

export function IconDeviceMobile({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...strokeProps(strokeWidth)}>
      <path d="M8 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
      <path d="M11 17h2" />
    </svg>
  );
}

export function IconTrendingUp({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...strokeProps(strokeWidth)}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  );
}

export function IconCloud({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...strokeProps(strokeWidth)}>
      <path d="M6.5 18a4.5 4.5 0 0 1 0-9 5.5 5.5 0 0 1 10.8 1.5A4 4 0 0 1 18 18H7" />
    </svg>
  );
}

export function IconBrain({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...strokeProps(strokeWidth)}>
      <path d="M9 4a3 3 0 0 0-3 3v1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v1a3 3 0 0 0 6 0v-1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2V7a3 3 0 0 0-3-3" />
      <path d="M15 4a3 3 0 0 1 3 3v1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2v1a3 3 0 0 1-6 0" />
    </svg>
  );
}

export function IconPalette({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...strokeProps(strokeWidth)}>
      <path d="M12 3a9 9 0 0 0 0 18h1a2 2 0 0 0 2-2v-1a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2v-1a2 2 0 0 1 2-2h1a9 9 0 0 0-9-9" />
      <circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
