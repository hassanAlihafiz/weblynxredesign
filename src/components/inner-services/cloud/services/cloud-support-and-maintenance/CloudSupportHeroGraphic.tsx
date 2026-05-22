/** Monitoring dashboard visual for the cloud support hero. */
export function CloudSupportHeroGraphic() {
  return (
    <svg
      viewBox="0 0 280 250"
      className="relative z-[2] h-auto w-full max-w-[260px]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cloud monitoring dashboard showing system health metrics"
    >
      <rect x="10" y="10" width="260" height="230" rx="8" fill="#1A1A1A" stroke="#2F2F2F" strokeWidth="1" />
      <rect x="18" y="18" width="244" height="214" rx="4" fill="#0A0A0A" />
      <rect x="18" y="18" width="244" height="20" fill="#141414" />
      <circle cx="28" cy="28" r="3" fill="#3DDC84" />
      <text x="38" y="31" fontFamily="monospace" fontSize="6" fill="#FAFAFA" fontWeight="bold">
        SYSTEM HEALTHY
      </text>
      <text x="232" y="31" fontFamily="monospace" fontSize="5" fill="#6F6F6F">
        live
      </text>
      <circle cx="246" cy="28" r="2" fill="#E63946" />

      <rect x="26" y="46" width="70" height="40" rx="3" fill="#141414" />
      <text x="33" y="58" fontFamily="monospace" fontSize="5" fill="#B5B5B5">
        UPTIME
      </text>
      <text
        x="33"
        y="72"
        fontFamily="var(--font-bricolage), 'Bricolage Grotesque', sans-serif"
        fontSize="13"
        fill="#3DDC84"
        fontWeight="700"
      >
        99.99%
      </text>
      <text x="33" y="81" fontFamily="monospace" fontSize="4.5" fill="#6F6F6F">
        30-day
      </text>

      <rect x="104" y="46" width="70" height="40" rx="3" fill="#141414" />
      <text x="111" y="58" fontFamily="monospace" fontSize="5" fill="#B5B5B5">
        LATENCY
      </text>
      <text
        x="111"
        y="72"
        fontFamily="var(--font-bricolage), 'Bricolage Grotesque', sans-serif"
        fontSize="13"
        fill="#3B82F6"
        fontWeight="700"
      >
        82ms
      </text>
      <text x="111" y="81" fontFamily="monospace" fontSize="4.5" fill="#6F6F6F">
        p95
      </text>

      <rect x="182" y="46" width="72" height="40" rx="3" fill="#141414" />
      <text x="189" y="58" fontFamily="monospace" fontSize="5" fill="#B5B5B5">
        INCIDENTS
      </text>
      <text
        x="189"
        y="72"
        fontFamily="var(--font-bricolage), 'Bricolage Grotesque', sans-serif"
        fontSize="13"
        fill="#FAFAFA"
        fontWeight="700"
      >
        0
      </text>
      <text x="189" y="81" fontFamily="monospace" fontSize="4.5" fill="#6F6F6F">
        open
      </text>

      <rect x="26" y="94" width="228" height="58" rx="3" fill="#141414" />
      <text x="33" y="106" fontFamily="monospace" fontSize="5" fill="#B5B5B5">
        REQUESTS / MIN
      </text>
      <polyline
        points="33,142 52,138 71,140 90,130 109,134 128,124 147,128 166,118 185,122 204,114 223,118 242,110"
        fill="none"
        stroke="#E63946"
        strokeWidth="1.5"
      />
      <polyline
        points="33,146 52,144 71,145 90,140 109,142 128,137 147,139 166,133 185,135 204,130 223,132 242,128"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="1"
        opacity="0.5"
      />
      <circle cx="33" cy="148" r="1" fill="#6F6F6F" />
      <circle cx="138" cy="148" r="1" fill="#6F6F6F" />
      <circle cx="242" cy="148" r="1" fill="#6F6F6F" />

      <rect x="26" y="160" width="228" height="64" rx="3" fill="#141414" />
      <text x="33" y="172" fontFamily="monospace" fontSize="5" fill="#B5B5B5">
        SERVICES
      </text>
      <circle cx="36" cy="184" r="3" fill="#3DDC84" />
      <text x="44" y="186" fontFamily="monospace" fontSize="5" fill="#FAFAFA">
        api-gateway
      </text>
      <rect x="200" y="181" width="46" height="6" rx="3" fill="#0A0A0A" />
      <rect x="200" y="181" width="44" height="6" rx="3" fill="#3DDC84" />
      <circle cx="36" cy="198" r="3" fill="#3DDC84" />
      <text x="44" y="200" fontFamily="monospace" fontSize="5" fill="#FAFAFA">
        database-primary
      </text>
      <rect x="200" y="195" width="46" height="6" rx="3" fill="#0A0A0A" />
      <rect x="200" y="195" width="42" height="6" rx="3" fill="#3DDC84" />
      <circle cx="36" cy="212" r="3" fill="#F5C518" />
      <text x="44" y="214" fontFamily="monospace" fontSize="5" fill="#FAFAFA">
        worker-queue
      </text>
      <rect x="200" y="209" width="46" height="6" rx="3" fill="#0A0A0A" />
      <rect x="200" y="209" width="33" height="6" rx="3" fill="#F5C518" />
    </svg>
  );
}
