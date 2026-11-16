/** Decorative permissioned-network graphic for the hero. Pure SVG + CSS. */
export function NetworkBackdrop() {
  return (
    <svg
      className="network-float pointer-events-none absolute inset-y-0 right-[-8%] hidden h-full w-[70%] max-w-3xl lg:block"
      viewBox="0 0 640 640"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#43C9D9" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#43C9D9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="420" cy="260" r="240" fill="url(#glow)" />

      <g stroke="#43C9D9" strokeOpacity="0.35" strokeWidth="1.2">
        <line className="network-flow" x1="120" y1="320" x2="260" y2="180" />
        <line className="network-flow" x1="260" y1="180" x2="430" y2="140" />
        <line className="network-flow" x1="430" y1="140" x2="560" y2="230" />
        <line className="network-flow" x1="560" y1="230" x2="520" y2="380" />
        <line className="network-flow" x1="520" y1="380" x2="360" y2="460" />
        <line className="network-flow" x1="360" y1="460" x2="200" y2="420" />
        <line className="network-flow" x1="200" y1="420" x2="120" y2="320" />
        <line className="network-flow" x1="260" y1="180" x2="360" y2="300" />
        <line className="network-flow" x1="360" y1="300" x2="520" y2="380" />
        <line className="network-flow" x1="360" y1="300" x2="200" y2="420" />
        <line className="network-flow" x1="360" y1="300" x2="430" y2="140" />
        <line className="network-flow" x1="430" y1="140" x2="520" y2="380" />
      </g>

      {[
        [120, 320, 1],
        [260, 180, 1.4],
        [430, 140, 1],
        [560, 230, 1.8],
        [520, 380, 1.2],
        [360, 460, 1],
        [200, 420, 1.6],
        [360, 300, 2],
      ].map(([x, y, delay], i) => (
        <g key={i} className="network-node" style={{ animationDelay: `${delay}s` }}>
          <circle cx={x} cy={y} r="14" stroke="#43C9D9" strokeOpacity="0.25" fill="none" />
          <circle cx={x} cy={y} r="5" fill="#43C9D9" />
        </g>
      ))}
    </svg>
  );
}
