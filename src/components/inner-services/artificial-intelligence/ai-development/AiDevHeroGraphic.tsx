export function AiDevHeroGraphic() {
  return (
    <div className="relative flex h-[200px] items-center justify-center sm:h-[220px] md:h-[240px]" aria-hidden>
      <div className="pointer-events-none absolute size-[200px] rounded-full bg-[radial-gradient(circle,rgba(230,57,70,0.35),transparent_70%)] blur-xl sm:size-[220px] md:size-[240px]" />
      <svg
        viewBox="0 0 240 240"
        className="relative z-[2] h-auto w-full max-w-[240px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="aiRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E63946" />
            <stop offset="100%" stopColor="#A8243A" />
          </linearGradient>
          <radialGradient id="centerGlow">
            <stop offset="0%" stopColor="#E63946" stopOpacity="1" />
            <stop offset="100%" stopColor="#E63946" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="40" cy="60" r="6" fill="url(#aiRed)" />
        <circle cx="40" cy="120" r="6" fill="url(#aiRed)" />
        <circle cx="40" cy="180" r="6" fill="url(#aiRed)" />
        <circle cx="120" cy="40" r="5" fill="#F5C518" />
        <circle cx="120" cy="90" r="5" fill="#F5C518" />
        <circle cx="120" cy="150" r="5" fill="#F5C518" />
        <circle cx="120" cy="200" r="5" fill="#F5C518" />
        <circle cx="200" cy="80" r="6" fill="#3B82F6" />
        <circle cx="200" cy="160" r="6" fill="#3B82F6" />
        <g stroke="#2A2A2A" strokeWidth="0.8" opacity="0.7">
          <line x1="40" y1="60" x2="120" y2="40" />
          <line x1="40" y1="60" x2="120" y2="90" />
          <line x1="40" y1="60" x2="120" y2="150" />
          <line x1="40" y1="60" x2="120" y2="200" />
          <line x1="40" y1="120" x2="120" y2="40" />
          <line x1="40" y1="120" x2="120" y2="90" />
          <line x1="40" y1="120" x2="120" y2="150" />
          <line x1="40" y1="120" x2="120" y2="200" />
          <line x1="40" y1="180" x2="120" y2="40" />
          <line x1="40" y1="180" x2="120" y2="90" />
          <line x1="40" y1="180" x2="120" y2="150" />
          <line x1="40" y1="180" x2="120" y2="200" />
        </g>
        <g stroke="#E63946" strokeWidth="1" opacity="0.5">
          <line x1="120" y1="40" x2="200" y2="80" />
          <line x1="120" y1="40" x2="200" y2="160" />
          <line x1="120" y1="90" x2="200" y2="80" />
          <line x1="120" y1="90" x2="200" y2="160" />
          <line x1="120" y1="150" x2="200" y2="80" />
          <line x1="120" y1="150" x2="200" y2="160" />
          <line x1="120" y1="200" x2="200" y2="80" />
          <line x1="120" y1="200" x2="200" y2="160" />
        </g>
        <circle cx="120" cy="120" r="40" fill="url(#centerGlow)" opacity="0.3" />
      </svg>
    </div>
  );
}
