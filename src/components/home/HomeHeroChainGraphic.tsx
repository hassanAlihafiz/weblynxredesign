/** Decorative chain-link motif for the home hero (matches design SVG). */
export function HomeHeroChainGraphic() {
  return (
    <svg
      viewBox="0 0 300 300"
      className="relative z-[2] h-auto w-full max-w-[min(100%,260px)] sm:max-w-[280px] lg:max-w-[300px]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Decorative chain link motif"
    >
      <defs>
        <linearGradient id="homeHeroRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E63946" />
          <stop offset="100%" stopColor="#A8243A" />
        </linearGradient>
        <linearGradient id="homeHeroYellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5C518" />
          <stop offset="100%" stopColor="#D4A50E" />
        </linearGradient>
        <linearGradient id="homeHeroBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
      </defs>
      <circle
        cx="150"
        cy="150"
        r="135"
        fill="none"
        stroke="rgba(42,42,42,0.28)"
        strokeWidth="1"
        strokeDasharray="2 6"
      />
      <circle
        cx="150"
        cy="150"
        r="105"
        fill="none"
        stroke="rgba(42,42,42,0.22)"
        strokeWidth="1"
        strokeDasharray="2 4"
      />
      <g transform="translate(80, 100) rotate(-30)">
        <rect x="0" y="0" width="100" height="50" rx="25" fill="none" stroke="url(#homeHeroYellowGrad)" strokeWidth="8" />
      </g>
      <g transform="translate(140, 145) rotate(45)">
        <rect x="0" y="0" width="100" height="50" rx="25" fill="none" stroke="url(#homeHeroBlueGrad)" strokeWidth="8" />
      </g>
      <g transform="translate(105, 130) rotate(10)">
        <rect x="0" y="0" width="120" height="60" rx="30" fill="none" stroke="url(#homeHeroRedGrad)" strokeWidth="10" />
      </g>
      <circle cx="60" cy="60" r="3" fill="#E63946" />
      <circle cx="240" cy="80" r="2" fill="#F5C518" />
      <circle cx="250" cy="220" r="3" fill="#3B82F6" />
      <circle cx="50" cy="240" r="2" fill="#E63946" />
    </svg>
  );
}
