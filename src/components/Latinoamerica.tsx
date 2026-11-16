import { Reveal } from "./Reveal";

export function Latinoamerica() {
  return (
    <section
      id="latinoamerica"
      className="relative overflow-hidden bg-white py-24 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-cyan-dim uppercase">
            Latinoamérica
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Conectando el futuro financiero de Latinoamérica.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/75">
            Latinoamérica es el centro de nuestro trabajo. Diseñamos
            infraestructura para organizaciones de la región que quieren operar
            con reglas propias, sin depender de una red genérica.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-navy/75">
            No anunciamos oficinas ni alianzas que no existen. Trabajamos con
            las empresas que nos encargan un proyecto, en los países donde ese
            proyecto se necesita.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            aria-hidden="true"
            className="relative aspect-square overflow-hidden rounded-3xl bg-navy"
          >
            <svg viewBox="0 0 400 400" className="h-full w-full">
              <defs>
                <radialGradient id="latam-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#43C9D9" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#43C9D9" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="400" height="400" fill="#101D35" />
              <circle cx="200" cy="200" r="150" fill="url(#latam-glow)" />
              {/* stylized meridians / nodes, not a fake map of offices */}
              <g
                fill="none"
                stroke="#43C9D9"
                strokeOpacity="0.35"
                strokeWidth="1"
              >
                <ellipse cx="200" cy="200" rx="120" ry="160" />
                <ellipse cx="200" cy="200" rx="80" ry="160" />
                <ellipse cx="200" cy="200" rx="40" ry="160" />
                <ellipse cx="200" cy="200" rx="160" ry="70" />
                <ellipse cx="200" cy="200" rx="160" ry="120" />
                <circle cx="200" cy="200" r="160" />
              </g>
              {[
                [200, 70],
                [280, 130],
                [310, 220],
                [250, 300],
                [160, 290],
                [110, 200],
                [150, 120],
                [200, 200],
              ].map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="10" fill="#43C9D9" fillOpacity="0.2" />
                  <circle cx={x} cy={y} r="4" fill="#43C9D9" />
                </g>
              ))}
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
