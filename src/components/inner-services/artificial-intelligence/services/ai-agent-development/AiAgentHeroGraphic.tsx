export function AiAgentHeroGraphic() {
  return (
    <svg
      viewBox="0 0 300 260"
      className="relative z-[2] h-auto w-full max-w-[280px]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="aiAgentRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E63946" />
          <stop offset="100%" stopColor="#A8243A" />
        </linearGradient>
      </defs>

      <circle cx="150" cy="130" r="36" fill="url(#aiAgentRed)" opacity="0.15" />
      <circle cx="150" cy="130" r="26" fill="#0A0A0A" stroke="#E63946" strokeWidth="1.5" />
      <text x="150" y="128" fontFamily="monospace" fontSize="6" fill="#E63946" textAnchor="middle" fontWeight="bold">
        AGENT
      </text>
      <text x="150" y="138" fontFamily="monospace" fontSize="5" fill="#B5B5B5" textAnchor="middle">
        plan · act · learn
      </text>
      <circle cx="142" cy="122" r="1.5" fill="#F5C518" />
      <circle cx="158" cy="122" r="1.5" fill="#3B82F6" />
      <circle cx="142" cy="142" r="1.5" fill="#3DDC84" />
      <circle cx="158" cy="142" r="1.5" fill="#FAFAFA" />

      <circle cx="150" cy="130" r="86" fill="none" stroke="#252525" strokeWidth="0.8" strokeDasharray="2 3" />

      <g transform="translate(135, 30)">
        <rect width="30" height="22" rx="4" fill="#141414" stroke="#3B82F6" strokeWidth="0.8" />
        <text x="15" y="14" fontFamily="monospace" fontSize="5" fill="#3B82F6" textAnchor="middle" fontWeight="bold">
          EMAIL
        </text>
      </g>
      <g transform="translate(220, 55)">
        <rect width="30" height="22" rx="4" fill="#141414" stroke="#F5C518" strokeWidth="0.8" />
        <text x="15" y="14" fontFamily="monospace" fontSize="5" fill="#F5C518" textAnchor="middle" fontWeight="bold">
          CAL
        </text>
      </g>
      <g transform="translate(240, 145)">
        <rect width="30" height="22" rx="4" fill="#141414" stroke="#3DDC84" strokeWidth="0.8" />
        <text x="15" y="14" fontFamily="monospace" fontSize="5" fill="#3DDC84" textAnchor="middle" fontWeight="bold">
          DB
        </text>
      </g>
      <g transform="translate(135, 210)">
        <rect width="30" height="22" rx="4" fill="#141414" stroke="#E63946" strokeWidth="0.8" />
        <text x="15" y="14" fontFamily="monospace" fontSize="5" fill="#E63946" textAnchor="middle" fontWeight="bold">
          SLACK
        </text>
      </g>
      <g transform="translate(28, 145)">
        <rect width="30" height="22" rx="4" fill="#141414" stroke="#3B82F6" strokeWidth="0.8" />
        <text x="15" y="14" fontFamily="monospace" fontSize="5" fill="#3B82F6" textAnchor="middle" fontWeight="bold">
          CRM
        </text>
      </g>
      <g transform="translate(45, 55)">
        <rect width="30" height="22" rx="4" fill="#141414" stroke="#F5C518" strokeWidth="0.8" />
        <text x="15" y="14" fontFamily="monospace" fontSize="5" fill="#F5C518" textAnchor="middle" fontWeight="bold">
          API
        </text>
      </g>

      <line x1="150" y1="104" x2="150" y2="52" stroke="#3B82F6" strokeWidth="0.6" strokeDasharray="1 2" />
      <line x1="174" y1="116" x2="220" y2="70" stroke="#F5C518" strokeWidth="0.6" strokeDasharray="1 2" />
      <line x1="174" y1="144" x2="240" y2="160" stroke="#3DDC84" strokeWidth="0.6" strokeDasharray="1 2" />
      <line x1="150" y1="156" x2="150" y2="210" stroke="#E63946" strokeWidth="0.6" strokeDasharray="1 2" />
      <line x1="126" y1="144" x2="58" y2="160" stroke="#3B82F6" strokeWidth="0.6" strokeDasharray="1 2" />
      <line x1="126" y1="116" x2="75" y2="70" stroke="#F5C518" strokeWidth="0.6" strokeDasharray="1 2" />

      <path d="M 110 80 Q 100 90 105 110" fill="none" stroke="#E63946" strokeWidth="1" strokeDasharray="2 2" />
      <polygon points="103,108 106,114 110,109" fill="#E63946" />
    </svg>
  );
}
