import {
  Network,
  HardDrive,
  ArrowLeftRight,
  Workflow,
  FileCode2,
  MessagesSquare,
} from "lucide-react";
import { Reveal } from "./Reveal";

const SOLUCIONES = [
  {
    icon: Network,
    title: "Blockchain privada",
    text: "Una red propia, con participantes autorizados, pensada para el ecosistema que la organización quiere operar.",
  },
  {
    icon: HardDrive,
    title: "Despliegue de infraestructura",
    text: "Puesta en marcha de nodos, validadores y el entorno técnico necesario para que la red funcione.",
  },
  {
    icon: ArrowLeftRight,
    title: "Infraestructura de pagos",
    text: "La base técnica para que una organización conecte o construya sus propios flujos de pago sobre una red privada.",
  },
  {
    icon: Workflow,
    title: "Integración por APIs",
    text: "Conexión de la red con sistemas existentes, para que la infraestructura entre en la operación diaria.",
  },
  {
    icon: FileCode2,
    title: "Smart contracts",
    text: "Contratos y lógica programable sobre la red, ajustados al alcance acordado del proyecto.",
  },
  {
    icon: MessagesSquare,
    title: "Consultoría",
    text: "Acompañamiento para definir si una red privada es pertinente, qué alcance tiene y cómo abordarla.",
  },
];

export function Soluciones() {
  return (
    <section id="soluciones" className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-cyan-dim uppercase">
            Soluciones
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Lo que diseñamos e implementamos.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy/75">
            Trabajamos por proyecto. El alcance de cada solución se define con
            la organización, sin un catálogo genérico ni capacidades que no
            podamos sostener.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUCIONES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <li className="flex h-full flex-col rounded-2xl border border-slate/40 p-8 transition hover:border-cyan">
                <s.icon className="text-cyan-dim" size={28} strokeWidth={1.6} />
                <h3 className="mt-5 text-lg font-semibold text-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {s.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
