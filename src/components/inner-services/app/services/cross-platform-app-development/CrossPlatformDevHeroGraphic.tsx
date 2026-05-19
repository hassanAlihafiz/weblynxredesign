export function CrossPlatformDevHeroGraphic() {
  return (
    <div className="relative flex h-[240px] items-center justify-center sm:h-[260px] md:h-[280px]" aria-hidden>
      <div className="pointer-events-none absolute size-[240px] rounded-full bg-[radial-gradient(circle,rgba(230,57,70,0.35),transparent_70%)] blur-xl" />

      {/* iPhone — back, tilted left */}
      <svg
        viewBox="0 0 200 280"
        width={130}
        height={200}
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[18%] z-[1] h-[180px] w-auto translate-y-2 -rotate-[8deg] sm:h-[200px]"
      >
        <rect x="5" y="5" width="190" height="270" rx="34" fill="#1A1A1A" stroke="#FAFAFA" strokeWidth="1.5" />
        <rect x="12" y="12" width="176" height="256" rx="28" fill="#0A0A0A" />
        <rect x="78" y="20" width="44" height="14" rx="7" fill="#000" />
        <rect x="22" y="48" width="100" height="6" rx="2" fill="#FAFAFA" />
        <rect x="22" y="74" width="156" height="22" rx="11" fill="#1A1A1A" />
        <rect x="22" y="106" width="156" height="44" rx="12" fill="#1A1A1A" />
        <circle cx="38" cy="128" r="10" fill="#E63946" />
        <rect x="56" y="118" width="80" height="4" rx="2" fill="#FAFAFA" />
        <rect x="56" y="128" width="100" height="2.5" rx="1" fill="#B5B5B5" opacity="0.6" />
        <rect x="22" y="158" width="156" height="44" rx="12" fill="#1A1A1A" />
        <circle cx="38" cy="180" r="10" fill="#3B82F6" />
        <rect x="56" y="170" width="70" height="4" rx="2" fill="#FAFAFA" />
        <rect x="56" y="180" width="100" height="2.5" rx="1" fill="#B5B5B5" opacity="0.6" />
        <rect x="75" y="260" width="50" height="3" rx="1.5" fill="#FAFAFA" />
      </svg>

      {/* Android — front, tilted right */}
      <svg
        viewBox="0 0 200 280"
        width={130}
        height={200}
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-[18%] z-[2] h-[180px] w-auto translate-y-2 rotate-[8deg] sm:h-[200px]"
      >
        <rect x="5" y="5" width="190" height="270" rx="22" fill="#1A1A1A" stroke="#3DDC84" strokeWidth="1.5" />
        <rect x="12" y="20" width="176" height="240" rx="6" fill="#0A0A0A" />
        <rect x="12" y="20" width="176" height="32" fill="#E63946" />
        <circle cx="25" cy="36" r="4" fill="#FAFAFA" />
        <rect x="35" y="32" width="50" height="3" rx="1.5" fill="#FAFAFA" opacity="0.9" />
        <rect x="35" y="38" width="35" height="2" rx="1" fill="#FAFAFA" opacity="0.7" />
        <rect x="22" y="64" width="156" height="40" rx="6" fill="#1A1A1A" />
        <rect x="30" y="72" width="80" height="3" rx="1.5" fill="#3DDC84" />
        <rect x="30" y="80" width="120" height="2.5" rx="1" fill="#B5B5B5" opacity="0.6" />
        <rect x="22" y="112" width="156" height="40" rx="6" fill="#1A1A1A" />
        <rect x="30" y="120" width="90" height="3" rx="1.5" fill="#E63946" />
        <rect x="30" y="128" width="120" height="2.5" rx="1" fill="#B5B5B5" opacity="0.6" />
        <circle cx="160" cy="232" r="14" fill="#E63946" />
        <line x1="160" y1="226" x2="160" y2="238" stroke="#FAFAFA" strokeWidth="2" />
        <line x1="154" y1="232" x2="166" y2="232" stroke="#FAFAFA" strokeWidth="2" />
      </svg>
    </div>
  );
}
