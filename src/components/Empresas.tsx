import { Landmark, Sparkles, ArrowLeftRight, Building2 } from "lucide-react";
import { Reveal } from "./Reveal";

const PERFILES = [
  {
    icon: Landmark,
    title: "Bancos",
    text: "Redes privadas con permisos claros y un control que pueda encajar con el gobierno interno de la entidad.",
  },
  {
    icon: Sparkles,
    title: "Fintechs",
    text: "Infraestructura para crear o extender un ecosistema de pagos propio, conectado a los sistemas actuales.",
  },
  {
    icon: ArrowLeftRight,
    title: "Procesadores de pago",
    text: "Una red a la medida para conectar flujos entre participantes autorizados, según las reglas de cada operación.",
  },
  {
    icon: Building2,
    title: "Grandes empresas",
    text: "Infraestructura para optimizar operaciones internas y conectar los sistemas de pago de la organización.",
  },
];

export function Empresas() {
  return (
    <section id="empresas" className="bg-navy py-24 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-cyan uppercase">
            Empresas
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Infraestructura diseñada para las necesidades de cada organización.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate">
            No ofrecemos un producto único para todos. Cada red se define con
            quien la va a operar. Trabajamos con organizaciones que necesitan
            control, permisos y una infraestructura propia, no una red genérica.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {PERFILES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <li className="h-full rounded-2xl border border-white/10 bg-navy-2 p-8">
                <p.icon className="text-cyan" size={28} strokeWidth={1.6} />
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {p.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
