/**
 * Original flat-vector illustration: a warm, sun-baked barbershop street.
 * Built as inline SVG (not an imported image) so it ships inside the repo
 * with zero external asset dependencies and scales crisply at any size.
 * Palette is yellow/amber/orange per the brief, in place of the reference's
 * red scheme.
 */
export default function HeroIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMax slice"
      className={`absolute inset-0 h-full w-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="55%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id="shopFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <radialGradient id="sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFFBEB" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* sky */}
      <rect x="0" y="0" width="1600" height="900" fill="url(#sky)" />
      <circle cx="1310" cy="150" r="180" fill="url(#sun)" />
      <circle cx="1310" cy="150" r="60" fill="#FFFBEB" opacity="0.85" />

      {/* distant rooftop skyline */}
      <g opacity="0.55">
        <rect x="0" y="230" width="220" height="260" rx="10" fill="#C2410C" />
        <rect x="230" y="180" width="180" height="310" rx="10" fill="#B45309" />
        <rect x="1180" y="200" width="200" height="290" rx="10" fill="#C2410C" />
        <rect x="1390" y="240" width="210" height="250" rx="10" fill="#B45309" />
      </g>

      {/* palm trees, left + right */}
      <g>
        <rect x="94" y="330" width="16" height="220" rx="8" fill="#7C4A03" />
        <path d="M102 330 C 40 300, 10 250, 30 200 C 70 250, 90 300, 102 330 Z" fill="#65A30D" />
        <path d="M102 330 C 170 300, 200 250, 175 195 C 135 245, 110 300, 102 330 Z" fill="#4D7C0F" />
        <path d="M102 320 C 60 270, 60 220, 95 175 C 100 230, 102 280, 102 320 Z" fill="#84CC16" />
        <path d="M102 320 C 145 265, 150 215, 115 170 C 105 225, 102 280, 102 320 Z" fill="#65A30D" />
      </g>
      <g transform="translate(1460,0)">
        <rect x="94" y="360" width="14" height="190" rx="7" fill="#7C4A03" />
        <path d="M101 360 C 45 335, 18 292, 36 248 C 72 293, 90 335, 101 360 Z" fill="#4D7C0F" />
        <path d="M101 360 C 160 333, 187 290, 168 244 C 132 290, 110 333, 101 360 Z" fill="#65A30D" />
        <path d="M101 352 C 66 308, 66 264, 96 226 C 100 274, 101 316, 101 352 Z" fill="#84CC16" />
      </g>

      {/* ground */}
      <rect x="0" y="620" width="1600" height="280" fill="url(#ground)" />
      <rect x="0" y="620" width="1600" height="10" fill="#92400E" opacity="0.6" />

      {/* barbershop building, centered */}
      <g>
        <rect x="520" y="330" width="560" height="300" rx="6" fill="url(#shopFace)" />
        {/* arched sign band */}
        <path d="M520 330 L 800 210 L 1080 330 Z" fill="#EA580C" />
        <path d="M520 330 L 800 230 L 1080 330 Z" fill="#F97316" opacity="0.55" />
        {/* awning stripes */}
        <g>
          {Array.from({ length: 9 }).map((_, i) => (
            <path
              key={i}
              d={`M${560 + i * 58} 470 q 14 40 0 80 l 40 0 q 14 -40 0 -80 Z`}
              fill={i % 2 === 0 ? "#FFFBEB" : "#EA580C"}
            />
          ))}
        </g>
        {/* shop window */}
        <rect x="700" y="380" width="200" height="90" rx="6" fill="#1F2937" opacity="0.85" />
        <rect x="716" y="392" width="168" height="66" rx="4" fill="#374151" opacity="0.6" />

        {/* barber pole */}
        <g transform="translate(950,400)">
          <rect x="-8" y="0" width="16" height="130" rx="8" fill="#F8FAFC" />
          <rect x="-8" y="0" width="16" height="130" rx="8" fill="url(#pole-stripes)" opacity="0.9" />
          <circle cx="0" cy="-6" r="12" fill="#F8FAFC" />
          <circle cx="0" cy="136" r="12" fill="#F8FAFC" />
        </g>
        <defs>
          <linearGradient id="pole-stripes" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="25%" stopColor="#F8FAFC" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="75%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
        </defs>
      </g>

      {/* --- cartoon figures: barber cutting customer's hair, in the doorway --- */}
      <g transform="translate(600,470)">
        {/* customer, seated */}
        <g transform="translate(120,0)">
          <rect x="-4" y="70" width="70" height="70" rx="14" fill="#7C2D12" />
          <rect x="16" y="60" width="30" height="34" rx="10" fill="#78350F" />
          <circle cx="31" cy="40" r="26" fill="#C2703D" />
          <path d="M6 34 a26 22 0 0 1 50 -2 q -26 -14 -50 2 Z" fill="#1C1917" />
          <rect x="-30" y="60" width="24" height="90" rx="10" fill="#F8FAFC" />
        </g>
        {/* barber, standing */}
        <g transform="translate(20,-20)">
          <rect x="0" y="60" width="34" height="90" rx="12" fill="#334155" />
          <circle cx="17" cy="34" r="24" fill="#B4652E" />
          <path d="M-6 30 a24 20 0 0 1 46 -3 q -23 -12 -46 3 Z" fill="#292524" />
          <rect x="30" y="70" width="46" height="14" rx="7" fill="#B4652E" transform="rotate(18 30 70)" />
        </g>
      </g>

      {/* street vendor cart, left of shop */}
      <g transform="translate(300,560)">
        <rect x="0" y="20" width="120" height="60" rx="8" fill="#78350F" />
        <circle cx="14" cy="86" r="12" fill="#1C1917" />
        <circle cx="106" cy="86" r="12" fill="#1C1917" />
        <circle cx="30" cy="10" r="10" fill="#FACC15" />
        <circle cx="48" cy="6" r="12" fill="#FDE047" />
        <circle cx="66" cy="10" r="10" fill="#FACC15" />
      </g>

      {/* seated customers waiting, right of shop */}
      <g transform="translate(1140,560)">
        {[0, 60, 120].map((dx, i) => (
          <g key={i} transform={`translate(${dx},0)`}>
            <rect x="0" y="20" width="34" height="46" rx="12" fill={["#0F766E", "#9A3412", "#1D4ED8"][i]} />
            <circle cx="17" cy="6" r="16" fill="#B4652E" />
            <rect x="-6" y="66" width="46" height="12" rx="6" fill="#57534E" />
          </g>
        ))}
      </g>

      {/* foreground silhouette figure, far right, walking */}
      <g transform="translate(1420,470)" opacity="0.92">
        <rect x="0" y="70" width="40" height="110" rx="14" fill="#F8FAFC" />
        <circle cx="20" cy="40" r="22" fill="#B4652E" />
        <rect x="-4" y="180" width="20" height="60" rx="8" fill="#1C1917" />
        <rect x="24" y="180" width="20" height="60" rx="8" fill="#1C1917" />
      </g>

      {/* soft foreground shadow gradient for text legibility */}
      <rect x="0" y="560" width="1600" height="340" fill="#000000" opacity="0.18" />
    </svg>
  );
}
