import { Reveal } from "./Reveal";

const ETAPAS = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Entendemos la operación, los sistemas actuales y el objetivo de la red.",
  },
  {
    n: "02",
    title: "Arquitectura",
    text: "Definimos el diseño técnico, los permisos, el consenso y el alcance del proyecto.",
  },
  {
    n: "03",
    title: "Desarrollo",
    text: "Construimos la infraestructura y, cuando corresponde, los contratos y las APIs.",
  },
  {
    n: "04",
    title: "Despliegue e integración",
    text: "Ponemos la red en operación y la conectamos con los sistemas de la organización.",
  },
  {
    n: "05",
    title: "Soporte",
    text: "Acompañamos la operación técnica de la infraestructura una vez en marcha.",
  },
];

export function ComoTrabajamos() {
  return (
    <section id="como-trabajamos" className="bg-mist py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-cyan-dim uppercase">
            Cómo trabajamos
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Un proceso claro, de principio a fin.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy/75">
            Cinco etapas, en este orden. El ritmo de cada una se acuerda con la
            organización; no adelantamos lo que todavía no está definido.
          </p>
        </Reveal>

        <ol className="mt-16">
          {ETAPAS.map((e, i) => (
            <Reveal key={e.n}>
              <li className="relative grid gap-3 border-t border-slate/60 py-8 md:grid-cols-[6rem_16rem_1fr] md:items-baseline md:gap-8">
                {i === ETAPAS.length - 1 ? null : null}
                <span className="font-mono text-sm font-semibold text-cyan-dim">
                  {e.n}
                </span>
                <h3 className="text-xl font-semibold text-navy">{e.title}</h3>
                <p className="text-base leading-relaxed text-navy/70">{e.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
