"use client";

/** Compact landmark silhouettes for Indian metro cities (viewBox 0 0 40 40). */
export function MetroCityIcon({
  cityId,
  color,
}: {
  cityId: string;
  color: string;
}) {
  const common = {
    fill: color,
    stroke: "#fff",
    strokeWidth: 1.2,
    strokeLinejoin: "round" as const,
    strokeLinecap: "round" as const,
  };

  switch (cityId) {
    case "delhi":
      // India Gate
      return (
        <g>
          <path
            {...common}
            d="M6 34 V14 Q6 8 12 8 H28 Q34 8 34 14 V34 H28 V20 Q28 16 20 16 Q12 16 12 20 V34 Z"
          />
          <rect x="17" y="4" width="6" height="5" rx="1" {...common} />
        </g>
      );
    case "mumbai":
      // Gateway of India
      return (
        <g>
          <path
            {...common}
            d="M5 34 V18 Q5 10 12 10 H28 Q35 10 35 18 V34 H30 V22 Q30 18 20 18 Q10 18 10 22 V34 Z"
          />
          <path {...common} d="M14 10 V6 H26 V10" fill="none" />
          <circle cx="20" cy="6" r="2.2" {...common} />
        </g>
      );
    case "bengaluru":
      // Vidhana Soudha / dome + columns
      return (
        <g>
          <path {...common} d="M8 34 V20 H32 V34 Z" />
          <path {...common} d="M12 20 V14 H28 V20 Z" />
          <path {...common} d="M16 14 Q20 6 24 14 Z" />
          <rect x="14" y="22" width="3" height="8" fill="#fff" opacity={0.85} />
          <rect x="18.5" y="22" width="3" height="8" fill="#fff" opacity={0.85} />
          <rect x="23" y="22" width="3" height="8" fill="#fff" opacity={0.85} />
        </g>
      );
    case "hyderabad":
      // Charminar
      return (
        <g>
          <path
            {...common}
            d="M8 34 V16 H12 V34 Z M28 34 V16 H32 V34 Z M12 20 H28 V28 H12 Z"
          />
          <path {...common} d="M10 16 Q20 6 30 16 Z" />
          <circle cx="14" cy="12" r="1.6" fill="#fff" />
          <circle cx="26" cy="12" r="1.6" fill="#fff" />
          <path {...common} d="M18 28 V34 H22 V28 Z" />
        </g>
      );
    case "ahmedabad":
      // Sidi Saiyyed-inspired arch / city pavilion
      return (
        <g>
          <path
            {...common}
            d="M6 34 V18 Q6 10 20 8 Q34 10 34 18 V34 H28 V20 Q28 14 20 14 Q12 14 12 20 V34 Z"
          />
          <path
            d="M15 22 Q20 16 25 22"
            fill="none"
            stroke="#fff"
            strokeWidth={1.6}
          />
        </g>
      );
    case "jaipur":
      // Hawa Mahal
      return (
        <g>
          <path
            {...common}
            d="M7 34 L10 14 H14 L16 8 H24 L26 14 H30 L33 34 Z"
          />
          <rect x="12" y="16" width="3.5" height="5" rx="0.6" fill="#fff" opacity={0.9} />
          <rect x="18.2" y="16" width="3.5" height="5" rx="0.6" fill="#fff" opacity={0.9} />
          <rect x="24.5" y="16" width="3.5" height="5" rx="0.6" fill="#fff" opacity={0.9} />
          <path {...common} d="M18 8 L20 3 L22 8 Z" />
        </g>
      );
    case "chennai":
      // Temple gopuram
      return (
        <g>
          <path
            {...common}
            d="M10 34 L12 24 H28 L30 34 Z M13 24 L15 16 H25 L27 24 Z M16 16 L18 9 H22 L24 16 Z"
          />
          <path {...common} d="M18.5 9 L20 4 L21.5 9 Z" />
          <rect x="17" y="26" width="6" height="8" fill="#fff" opacity={0.85} />
        </g>
      );
    case "kolkata":
      // Howrah Bridge
      return (
        <g>
          <path
            {...common}
            d="M4 28 H36 V32 H4 Z"
          />
          <path
            d="M6 28 Q20 10 34 28"
            fill="none"
            stroke={color}
            strokeWidth={2.4}
            strokeLinecap="round"
          />
          <path
            d="M10 28 L14 18 M20 28 L20 14 M26 28 L30 18"
            fill="none"
            stroke="#fff"
            strokeWidth={1.3}
          />
          <rect x="5" y="26" width="4" height="6" {...common} />
          <rect x="31" y="26" width="4" height="6" {...common} />
        </g>
      );
    default:
      return (
        <g>
          <rect x="10" y="14" width="8" height="20" rx="1" {...common} />
          <rect x="20" y="10" width="10" height="24" rx="1" {...common} />
        </g>
      );
  }
}
