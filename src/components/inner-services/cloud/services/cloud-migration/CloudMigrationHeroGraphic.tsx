/** Migration path visual for the cloud migration hero. */
export function CloudMigrationHeroGraphic() {
  return (
    <svg
      viewBox="0 0 300 260"
      className="relative z-[2] h-auto w-full max-w-[280px]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cloud migration diagram from on-prem to AWS, GCP, and Azure"
    >
      <rect x="20" y="90" width="80" height="80" rx="8" fill="#141414" stroke="#6F6F6F" strokeWidth="1" />
      <text x="60" y="80" fontFamily="monospace" fontSize="6" fill="#6F6F6F" textAnchor="middle" fontWeight="bold">
        FROM
      </text>
      <rect x="32" y="104" width="56" height="10" rx="2" fill="#0A0A0A" stroke="#6F6F6F" strokeWidth="0.6" />
      <circle cx="38" cy="109" r="1.5" fill="#6F6F6F" />
      <rect x="32" y="118" width="56" height="10" rx="2" fill="#0A0A0A" stroke="#6F6F6F" strokeWidth="0.6" />
      <circle cx="38" cy="123" r="1.5" fill="#6F6F6F" />
      <rect x="32" y="132" width="56" height="10" rx="2" fill="#0A0A0A" stroke="#6F6F6F" strokeWidth="0.6" />
      <circle cx="38" cy="137" r="1.5" fill="#6F6F6F" />
      <rect x="32" y="146" width="56" height="10" rx="2" fill="#0A0A0A" stroke="#6F6F6F" strokeWidth="0.6" />
      <circle cx="38" cy="151" r="1.5" fill="#6F6F6F" />
      <text x="60" y="184" fontFamily="monospace" fontSize="5" fill="#B5B5B5" textAnchor="middle">
        on-prem · Heroku
      </text>

      <path
        d="M 100 130 Q 150 60 200 130"
        fill="none"
        stroke="#E63946"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <circle cx="125" cy="98" r="6" fill="#0A0A0A" stroke="#E63946" strokeWidth="1.2" />
      <text x="125" y="100.5" fontFamily="monospace" fontSize="5" fill="#E63946" textAnchor="middle" fontWeight="bold">
        1
      </text>
      <circle cx="150" cy="84" r="6" fill="#0A0A0A" stroke="#E63946" strokeWidth="1.2" />
      <text x="150" y="86.5" fontFamily="monospace" fontSize="5" fill="#E63946" textAnchor="middle" fontWeight="bold">
        2
      </text>
      <circle cx="175" cy="98" r="6" fill="#0A0A0A" stroke="#E63946" strokeWidth="1.2" />
      <text x="175" y="100.5" fontFamily="monospace" fontSize="5" fill="#E63946" textAnchor="middle" fontWeight="bold">
        3
      </text>
      <polygon points="194,126 202,122 200,132" fill="#E63946" />
      <rect x="116" y="58" width="68" height="14" rx="7" fill="#0A0A0A" stroke="#E63946" strokeWidth="0.6" />
      <text x="150" y="67.5" fontFamily="monospace" fontSize="5" fill="#E63946" textAnchor="middle" fontWeight="bold">
        ZERO DOWNTIME
      </text>

      <rect x="200" y="90" width="80" height="80" rx="8" fill="#141414" stroke="#E63946" strokeWidth="1.2" />
      <text x="240" y="80" fontFamily="monospace" fontSize="6" fill="#E63946" textAnchor="middle" fontWeight="bold">
        TO
      </text>
      <path
        d="M 222 130 Q 210 130 210 120 Q 210 110 222 110 Q 224 102 234 104 Q 240 98 248 104 Q 258 104 258 114 Q 268 114 268 124 Q 268 134 256 134 L 224 134 Q 222 132 222 130 Z"
        fill="#0A0A0A"
        stroke="#E63946"
        strokeWidth="1"
      />
      <circle cx="228" cy="120" r="2" fill="#F5C518" />
      <circle cx="240" cy="115" r="2" fill="#3B82F6" />
      <circle cx="252" cy="122" r="2" fill="#3DDC84" />
      <circle cx="240" cy="150" r="9" fill="rgba(61,220,132,0.15)" stroke="#3DDC84" strokeWidth="1" />
      <polyline points="235,150 239,154 246,146" fill="none" stroke="#3DDC84" strokeWidth="1.5" />
      <text x="240" y="184" fontFamily="monospace" fontSize="5" fill="#B5B5B5" textAnchor="middle">
        AWS · GCP · Azure
      </text>

      <rect x="20" y="200" width="260" height="40" rx="8" fill="#141414" stroke="#252525" strokeWidth="1" />
      <text x="34" y="216" fontFamily="monospace" fontSize="5" fill="#6F6F6F" fontWeight="bold">
        SAFETY CHECKS
      </text>
      <circle cx="40" cy="228" r="4" fill="rgba(61,220,132,0.15)" stroke="#3DDC84" strokeWidth="0.7" />
      <polyline points="38,228 39.5,229.5 42,226.5" fill="none" stroke="#3DDC84" strokeWidth="1" />
      <text x="48" y="230" fontFamily="monospace" fontSize="5" fill="#FAFAFA">
        Data verified
      </text>
      <circle cx="120" cy="228" r="4" fill="rgba(61,220,132,0.15)" stroke="#3DDC84" strokeWidth="0.7" />
      <polyline points="118,228 119.5,229.5 122,226.5" fill="none" stroke="#3DDC84" strokeWidth="1" />
      <text x="128" y="230" fontFamily="monospace" fontSize="5" fill="#FAFAFA">
        Rollback ready
      </text>
      <circle cx="205" cy="228" r="4" fill="rgba(61,220,132,0.15)" stroke="#3DDC84" strokeWidth="0.7" />
      <polyline points="203,228 204.5,229.5 207,226.5" fill="none" stroke="#3DDC84" strokeWidth="1" />
      <text x="213" y="230" fontFamily="monospace" fontSize="5" fill="#FAFAFA">
        Load tested
      </text>
    </svg>
  );
}
