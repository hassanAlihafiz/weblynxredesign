/** Cloud infrastructure diagram for the consulting hero. */
export function CloudConsultingHeroGraphic() {
  return (
    <svg
      viewBox="0 0 300 260"
      className="relative z-[2] h-auto w-full max-w-[280px]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cloud infrastructure consulting diagram"
    >
      <defs>
        <linearGradient id="cloudConsultRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E63946" />
          <stop offset="100%" stopColor="#A8243A" />
        </linearGradient>
      </defs>

      <path
        d="M 80 50 Q 50 50 50 75 Q 30 75 30 95 Q 30 115 60 115 L 240 115 Q 270 115 270 90 Q 270 65 240 65 Q 240 40 200 40 Q 180 25 150 30 Q 120 25 100 40 Q 80 40 80 50 Z"
        fill="#141414"
        stroke="#E63946"
        strokeWidth="1.2"
      />
      <text x="150" y="88" fontFamily="monospace" fontSize="8" fill="#E63946" textAnchor="middle" fontWeight="bold">
        CLOUD INFRASTRUCTURE
      </text>

      <circle cx="80" cy="78" r="3" fill="#F5C518" />
      <circle cx="110" cy="65" r="3" fill="#3B82F6" />
      <circle cx="200" cy="65" r="3" fill="#3DDC84" />
      <circle cx="225" cy="80" r="3" fill="#F5C518" />

      <line x1="150" y1="115" x2="150" y2="135" stroke="#E63946" strokeWidth="1.5" strokeDasharray="3 2" />
      <polygon points="146,133 154,133 150,140" fill="#E63946" />

      <rect x="30" y="145" width="80" height="35" rx="6" fill="#0A0A0A" stroke="#3B82F6" strokeWidth="1" />
      <text x="70" y="162" fontFamily="monospace" fontSize="6" fill="#3B82F6" textAnchor="middle" fontWeight="bold">
        COMPUTE
      </text>
      <text x="70" y="173" fontFamily="monospace" fontSize="5" fill="#B5B5B5" textAnchor="middle">
        EC2 · Lambda
      </text>

      <rect x="115" y="145" width="80" height="35" rx="6" fill="#0A0A0A" stroke="#F5C518" strokeWidth="1" />
      <text x="155" y="162" fontFamily="monospace" fontSize="6" fill="#F5C518" textAnchor="middle" fontWeight="bold">
        STORAGE
      </text>
      <text x="155" y="173" fontFamily="monospace" fontSize="5" fill="#B5B5B5" textAnchor="middle">
        S3 · RDS · Redis
      </text>

      <rect x="200" y="145" width="80" height="35" rx="6" fill="#0A0A0A" stroke="#3DDC84" strokeWidth="1" />
      <text x="240" y="162" fontFamily="monospace" fontSize="6" fill="#3DDC84" textAnchor="middle" fontWeight="bold">
        NETWORK
      </text>
      <text x="240" y="173" fontFamily="monospace" fontSize="5" fill="#B5B5B5" textAnchor="middle">
        VPC · CDN · WAF
      </text>

      <line x1="70" y1="180" x2="70" y2="200" stroke="#252525" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="155" y1="180" x2="155" y2="200" stroke="#252525" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="240" y1="180" x2="240" y2="200" stroke="#252525" strokeWidth="1" strokeDasharray="2 2" />

      <rect x="20" y="205" width="90" height="40" rx="6" fill="#141414" stroke="#252525" strokeWidth="1" />
      <text x="65" y="219" fontFamily="monospace" fontSize="5" fill="#6F6F6F" textAnchor="middle" fontWeight="bold">
        OUTCOME
      </text>
      <text
        x="65"
        y="232"
        fontFamily="var(--font-bricolage), 'Bricolage Grotesque', sans-serif"
        fontSize="9"
        fill="#3DDC84"
        textAnchor="middle"
        fontWeight="700"
      >
        −45% cost
      </text>
      <text x="65" y="241" fontFamily="monospace" fontSize="5" fill="#B5B5B5" textAnchor="middle">
        monthly cloud bill
      </text>

      <rect x="115" y="205" width="80" height="40" rx="6" fill="#141414" stroke="#252525" strokeWidth="1" />
      <text x="155" y="219" fontFamily="monospace" fontSize="5" fill="#6F6F6F" textAnchor="middle" fontWeight="bold">
        UPTIME
      </text>
      <text
        x="155"
        y="232"
        fontFamily="var(--font-bricolage), 'Bricolage Grotesque', sans-serif"
        fontSize="9"
        fill="#E63946"
        textAnchor="middle"
        fontWeight="700"
      >
        99.99%
      </text>
      <text x="155" y="241" fontFamily="monospace" fontSize="5" fill="#B5B5B5" textAnchor="middle">
        production SLA
      </text>

      <rect x="200" y="205" width="80" height="40" rx="6" fill="#141414" stroke="#252525" strokeWidth="1" />
      <text x="240" y="219" fontFamily="monospace" fontSize="5" fill="#6F6F6F" textAnchor="middle" fontWeight="bold">
        SCALE
      </text>
      <text
        x="240"
        y="232"
        fontFamily="var(--font-bricolage), 'Bricolage Grotesque', sans-serif"
        fontSize="9"
        fill="#3B82F6"
        textAnchor="middle"
        fontWeight="700"
      >
        10×
      </text>
      <text x="240" y="241" fontFamily="monospace" fontSize="5" fill="#B5B5B5" textAnchor="middle">
        traffic-ready
      </text>
    </svg>
  );
}
