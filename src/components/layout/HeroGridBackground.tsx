type HeroGridBackgroundProps = {
  className?: string;
  /** Soft radial fade so the grid does not overpower foreground content */
  fade?: boolean;
};

export function HeroGridBackground({ className = "", fade = false }: HeroGridBackgroundProps) {
  return (
    <div
      className={`hero-grid-bg pointer-events-none absolute inset-0 ${fade ? "hero-grid-bg--fade" : ""} ${className}`.trim()}
      aria-hidden
    />
  );
}
