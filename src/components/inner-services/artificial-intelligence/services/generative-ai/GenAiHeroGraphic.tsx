export function GenAiHeroGraphic() {
  return (
    <svg
      viewBox="0 0 300 240"
      className="relative z-[2] h-auto w-full max-w-[280px]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="genAiRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E63946" />
          <stop offset="100%" stopColor="#A8243A" />
        </linearGradient>
      </defs>

      <rect x="20" y="100" width="80" height="40" rx="6" fill="#141414" stroke="#E63946" strokeWidth="1.2" />
      <rect x="28" y="110" width="50" height="3" rx="1" fill="#FAFAFA" />
      <rect x="28" y="118" width="60" height="2.5" rx="1" fill="#B5B5B5" opacity="0.6" />
      <rect x="28" y="125" width="40" height="2.5" rx="1" fill="#B5B5B5" opacity="0.6" />
      <text x="60" y="148" fontFamily="monospace" fontSize="6" fill="#E63946" textAnchor="middle" fontWeight="bold">
        PROMPT
      </text>

      <circle cx="150" cy="120" r="22" fill="url(#genAiRed)" opacity="0.2" />
      <circle cx="150" cy="120" r="14" fill="#0A0A0A" stroke="#E63946" strokeWidth="1.5" />
      <circle cx="150" cy="120" r="3" fill="#E63946" />
      <circle cx="142" cy="115" r="1.5" fill="#F5C518" />
      <circle cx="158" cy="115" r="1.5" fill="#3B82F6" />
      <circle cx="146" cy="126" r="1.5" fill="#3DDC84" />
      <circle cx="155" cy="126" r="1.5" fill="#FAFAFA" />

      <line x1="100" y1="120" x2="136" y2="120" stroke="#E63946" strokeWidth="1.2" strokeDasharray="2 2" />

      <line x1="164" y1="120" x2="220" y2="60" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
      <rect x="220" y="40" width="60" height="40" rx="6" fill="#141414" stroke="#3B82F6" strokeWidth="1" />
      <rect x="226" y="48" width="20" height="2.5" rx="1" fill="#3B82F6" />
      <rect x="226" y="54" width="44" height="2" rx="1" fill="#B5B5B5" opacity="0.5" />
      <rect x="226" y="60" width="40" height="2" rx="1" fill="#B5B5B5" opacity="0.5" />
      <rect x="226" y="66" width="36" height="2" rx="1" fill="#B5B5B5" opacity="0.5" />
      <rect x="226" y="72" width="30" height="2" rx="1" fill="#B5B5B5" opacity="0.5" />
      <text x="250" y="100" fontFamily="monospace" fontSize="6" fill="#3B82F6" textAnchor="middle" fontWeight="bold">
        TEXT
      </text>

      <line x1="172" y1="120" x2="220" y2="120" stroke="#E63946" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
      <rect x="220" y="105" width="60" height="32" rx="6" fill="#141414" stroke="#E63946" strokeWidth="1" />
      <circle cx="232" cy="118" r="4" fill="#E63946" opacity="0.4" />
      <polygon points="240,128 246,118 254,128" fill="#F5C518" opacity="0.5" />
      <polygon points="252,128 262,114 274,128" fill="#3DDC84" opacity="0.4" />
      <rect x="220" y="133" width="60" height="4" rx="0" fill="#0A0A0A" />
      <text x="250" y="155" fontFamily="monospace" fontSize="6" fill="#E63946" textAnchor="middle" fontWeight="bold">
        IMAGE
      </text>

      <line x1="164" y1="120" x2="220" y2="170" stroke="#F5C518" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
      <rect x="220" y="160" width="60" height="40" rx="6" fill="#141414" stroke="#F5C518" strokeWidth="1" />
      <polygon points="240,172 240,188 255,180" fill="#F5C518" />
      <rect x="226" y="194" width="48" height="2" rx="1" fill="#B5B5B5" opacity="0.5" />
      <text x="250" y="216" fontFamily="monospace" fontSize="6" fill="#F5C518" textAnchor="middle" fontWeight="bold">
        VIDEO
      </text>

      <line x1="138" y1="125" x2="80" y2="180" stroke="#3DDC84" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
      <rect x="20" y="170" width="80" height="40" rx="6" fill="#141414" stroke="#3DDC84" strokeWidth="1" />
      <text x="28" y="182" fontFamily="monospace" fontSize="5" fill="#3DDC84">
        const
      </text>
      <text x="48" y="182" fontFamily="monospace" fontSize="5" fill="#FAFAFA">
        fn = ()
      </text>
      <text x="28" y="190" fontFamily="monospace" fontSize="5" fill="#FAFAFA">
        return
      </text>
      <text x="50" y="190" fontFamily="monospace" fontSize="5" fill="#E63946">
        {"{}"}
      </text>
      <text x="28" y="198" fontFamily="monospace" fontSize="5" fill="#FAFAFA">
        {"{"}
      </text>
      <text x="32" y="206" fontFamily="monospace" fontSize="5" fill="#B5B5B5" opacity="0.7">
        {"// ..."}
      </text>
      <text x="60" y="225" fontFamily="monospace" fontSize="6" fill="#3DDC84" textAnchor="middle" fontWeight="bold">
        CODE
      </text>
    </svg>
  );
}
