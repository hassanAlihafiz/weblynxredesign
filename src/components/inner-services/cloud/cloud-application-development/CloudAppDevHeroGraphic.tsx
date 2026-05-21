/** Cloud-native architecture diagram for the hero (client → gateway → functions → data). */
export function CloudAppDevHeroGraphic() {
  return (
    <svg
      viewBox="0 0 300 260"
      className="relative z-[2] h-auto w-full max-w-[280px]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cloud-native architecture diagram"
    >
      <rect x="125" y="14" width="50" height="26" rx="5" fill="#141414" stroke="#FAFAFA" strokeWidth="0.8" />
      <text x="150" y="26" fontFamily="monospace" fontSize="5" fill="#FAFAFA" textAnchor="middle" fontWeight="bold">
        CLIENT
      </text>
      <text x="150" y="34" fontFamily="monospace" fontSize="4.5" fill="#B5B5B5" textAnchor="middle">
        Web · Mobile · API
      </text>

      <line x1="150" y1="40" x2="150" y2="56" stroke="#E63946" strokeWidth="1.2" strokeDasharray="2 2" />
      <polygon points="146,54 154,54 150,62" fill="#E63946" />

      <rect x="105" y="64" width="90" height="22" rx="5" fill="#141414" stroke="#E63946" strokeWidth="1.2" />
      <text x="150" y="74" fontFamily="monospace" fontSize="5" fill="#E63946" textAnchor="middle" fontWeight="bold">
        API GATEWAY
      </text>
      <text x="150" y="82" fontFamily="monospace" fontSize="4.5" fill="#B5B5B5" textAnchor="middle">
        auth · rate-limit · routing
      </text>

      <line x1="130" y1="86" x2="80" y2="108" stroke="#252525" strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="150" y1="86" x2="150" y2="108" stroke="#252525" strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="170" y1="86" x2="220" y2="108" stroke="#252525" strokeWidth="0.8" strokeDasharray="2 2" />

      <rect x="40" y="112" width="80" height="30" rx="5" fill="#141414" stroke="#3B82F6" strokeWidth="1" />
      <text x="80" y="124" fontFamily="monospace" fontSize="5" fill="#3B82F6" textAnchor="middle" fontWeight="bold">
        λ AUTH
      </text>
      <text x="80" y="133" fontFamily="monospace" fontSize="4.5" fill="#B5B5B5" textAnchor="middle">
        login · sessions
      </text>

      <rect x="120" y="112" width="60" height="30" rx="5" fill="#141414" stroke="#F5C518" strokeWidth="1" />
      <text x="150" y="124" fontFamily="monospace" fontSize="5" fill="#F5C518" textAnchor="middle" fontWeight="bold">
        λ API
      </text>
      <text x="150" y="133" fontFamily="monospace" fontSize="4.5" fill="#B5B5B5" textAnchor="middle">
        core logic
      </text>

      <rect x="180" y="112" width="80" height="30" rx="5" fill="#141414" stroke="#3DDC84" strokeWidth="1" />
      <text x="220" y="124" fontFamily="monospace" fontSize="5" fill="#3DDC84" textAnchor="middle" fontWeight="bold">
        λ WORKER
      </text>
      <text x="220" y="133" fontFamily="monospace" fontSize="4.5" fill="#B5B5B5" textAnchor="middle">
        jobs · queues
      </text>

      <line x1="80" y1="142" x2="80" y2="158" stroke="#252525" strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="150" y1="142" x2="150" y2="158" stroke="#252525" strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="220" y1="142" x2="220" y2="158" stroke="#252525" strokeWidth="0.8" strokeDasharray="2 2" />

      <rect
        x="40"
        y="162"
        width="220"
        height="20"
        rx="5"
        fill="#141414"
        stroke="#E63946"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      <text x="150" y="175" fontFamily="monospace" fontSize="5" fill="#E63946" textAnchor="middle" fontWeight="bold">
        EVENT BUS · QUEUES · STREAMS
      </text>

      <line x1="80" y1="182" x2="80" y2="198" stroke="#252525" strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="150" y1="182" x2="150" y2="198" stroke="#252525" strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="220" y1="182" x2="220" y2="198" stroke="#252525" strokeWidth="0.8" strokeDasharray="2 2" />

      <rect x="40" y="202" width="64" height="32" rx="5" fill="#141414" stroke="#3B82F6" strokeWidth="1" />
      <text x="72" y="214" fontFamily="monospace" fontSize="5" fill="#3B82F6" textAnchor="middle" fontWeight="bold">
        DATABASE
      </text>
      <text x="72" y="223" fontFamily="monospace" fontSize="4.5" fill="#B5B5B5" textAnchor="middle">
        Postgres · Dynamo
      </text>

      <rect x="116" y="202" width="68" height="32" rx="5" fill="#141414" stroke="#F5C518" strokeWidth="1" />
      <text x="150" y="214" fontFamily="monospace" fontSize="5" fill="#F5C518" textAnchor="middle" fontWeight="bold">
        CACHE
      </text>
      <text x="150" y="223" fontFamily="monospace" fontSize="4.5" fill="#B5B5B5" textAnchor="middle">
        Redis · Memcached
      </text>

      <rect x="196" y="202" width="64" height="32" rx="5" fill="#141414" stroke="#3DDC84" strokeWidth="1" />
      <text x="228" y="214" fontFamily="monospace" fontSize="5" fill="#3DDC84" textAnchor="middle" fontWeight="bold">
        STORAGE
      </text>
      <text x="228" y="223" fontFamily="monospace" fontSize="4.5" fill="#B5B5B5" textAnchor="middle">
        S3 · GCS · Blob
      </text>

      <g transform="translate(248, 30)">
        <circle r="14" fill="#0A0A0A" stroke="#E63946" strokeWidth="0.8" />
        <text y="3" fontFamily="monospace" fontSize="6" fill="#E63946" textAnchor="middle" fontWeight="bold">
          ∞
        </text>
      </g>
    </svg>
  );
}
