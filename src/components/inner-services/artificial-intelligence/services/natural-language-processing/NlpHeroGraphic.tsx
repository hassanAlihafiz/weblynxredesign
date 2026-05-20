export function NlpHeroGraphic() {
  return (
    <svg
      viewBox="0 0 300 240"
      className="relative z-[2] h-auto w-full max-w-[280px]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="20" y="20" width="260" height="40" rx="6" fill="#141414" stroke="#252525" strokeWidth="1" />
      <text x="28" y="14" fontFamily="monospace" fontSize="5" fill="#6F6F6F" fontWeight="bold">
        INPUT TEXT
      </text>
      <text x="28" y="34" fontFamily="monospace" fontSize="6" fill="#FAFAFA">
        &quot;Maria from Acme Corp signed a $50K deal
      </text>
      <text x="28" y="44" fontFamily="monospace" fontSize="6" fill="#FAFAFA">
        on March 15 in New York. Customer was
      </text>
      <text x="28" y="54" fontFamily="monospace" fontSize="6" fill="#FAFAFA">
        very positive about the onboarding process.&quot;
      </text>

      <line x1="150" y1="65" x2="150" y2="80" stroke="#E63946" strokeWidth="1.5" />
      <polygon points="146,78 154,78 150,86" fill="#E63946" />

      <rect x="80" y="86" width="140" height="36" rx="6" fill="#141414" stroke="#E63946" strokeWidth="1.5" />
      <text x="150" y="100" fontFamily="monospace" fontSize="6" fill="#E63946" textAnchor="middle" fontWeight="bold">
        NLP PIPELINE
      </text>
      <text x="150" y="112" fontFamily="monospace" fontSize="5" fill="#B5B5B5" textAnchor="middle">
        tokenize · classify · extract · analyze
      </text>

      <line x1="150" y1="124" x2="150" y2="140" stroke="#E63946" strokeWidth="1.5" />
      <polygon points="146,138 154,138 150,146" fill="#E63946" />

      <rect x="20" y="150" width="260" height="80" rx="6" fill="#141414" stroke="#252525" strokeWidth="1" />
      <text x="28" y="144" fontFamily="monospace" fontSize="5" fill="#6F6F6F" fontWeight="bold">
        STRUCTURED OUTPUT
      </text>

      <rect x="28" y="160" width="34" height="14" rx="3" fill="#E63946" opacity="0.2" stroke="#E63946" strokeWidth="0.6" />
      <text x="45" y="170" fontFamily="monospace" fontSize="5" fill="#E63946" textAnchor="middle">
        PERSON
      </text>
      <text x="65" y="170" fontFamily="monospace" fontSize="5" fill="#FAFAFA">
        Maria
      </text>

      <rect x="98" y="160" width="34" height="14" rx="3" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="0.6" />
      <text x="115" y="170" fontFamily="monospace" fontSize="5" fill="#3B82F6" textAnchor="middle">
        ORG
      </text>
      <text x="135" y="170" fontFamily="monospace" fontSize="5" fill="#FAFAFA">
        Acme Corp
      </text>

      <rect x="175" y="160" width="34" height="14" rx="3" fill="#F5C518" opacity="0.2" stroke="#F5C518" strokeWidth="0.6" />
      <text x="192" y="170" fontFamily="monospace" fontSize="5" fill="#F5C518" textAnchor="middle">
        MONEY
      </text>
      <text x="215" y="170" fontFamily="monospace" fontSize="5" fill="#FAFAFA">
        $50,000
      </text>

      <rect x="28" y="180" width="34" height="14" rx="3" fill="#3DDC84" opacity="0.2" stroke="#3DDC84" strokeWidth="0.6" />
      <text x="45" y="190" fontFamily="monospace" fontSize="5" fill="#3DDC84" textAnchor="middle">
        DATE
      </text>
      <text x="65" y="190" fontFamily="monospace" fontSize="5" fill="#FAFAFA">
        2026-03-15
      </text>

      <rect x="118" y="180" width="34" height="14" rx="3" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" strokeWidth="0.6" />
      <text x="135" y="190" fontFamily="monospace" fontSize="5" fill="#3B82F6" textAnchor="middle">
        PLACE
      </text>
      <text x="155" y="190" fontFamily="monospace" fontSize="5" fill="#FAFAFA">
        New York
      </text>

      <rect x="28" y="200" width="44" height="14" rx="3" fill="#E63946" opacity="0.2" stroke="#E63946" strokeWidth="0.6" />
      <text x="50" y="210" fontFamily="monospace" fontSize="5" fill="#E63946" textAnchor="middle">
        SENTIMENT
      </text>
      <text x="80" y="210" fontFamily="monospace" fontSize="5" fill="#3DDC84">
        + Positive (0.87)
      </text>

      <rect x="160" y="200" width="34" height="14" rx="3" fill="#3DDC84" opacity="0.2" stroke="#3DDC84" strokeWidth="0.6" />
      <text x="177" y="210" fontFamily="monospace" fontSize="5" fill="#3DDC84" textAnchor="middle">
        INTENT
      </text>
      <text x="200" y="210" fontFamily="monospace" fontSize="5" fill="#FAFAFA">
        deal_closed
      </text>
    </svg>
  );
}
