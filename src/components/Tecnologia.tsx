import {
  Layers,
  Server,
  GitBranch,
  ShieldCheck,
  FileCode2,
  Plug,
  Activity,
  Link2,
} from "lucide-react";
import { Reveal } from "./Reveal";

const PUNTOS = [
  {
    icon: Layers,
    title: "Arquitectura",
    text: "Diseño de la red privada a la medida de la organización: alcance, participantes y operación.",
  },
  {
    icon: Server,
    title: "Nodos y validadores",
    text: "Despliegue y operación de los nodos que sostienen la red y de los validadores autorizados.",
  },
  {
    icon: GitBranch,
    title: "Consenso",
    text: "Reglas de acuerdo entre los participantes autorizados, definidas para esa red.",
  },
  {
    icon: ShieldCheck,
    title: "Permisos",
    text: "Quién puede entrar, validar, consultar o transaccionar, con control explícito de accesos.",
  },
  {
    icon: FileCode2,
    title: "Smart contracts",
    text: "Lógica programable sobre la red, cuando el proyecto lo requiere.",
  },
  {
    icon: Plug,
    title: "APIs",
    text: "Interfaces para conectar la red con los sistemas que la organización ya utiliza.",
  },
  {
    icon: Activity,
    title: "Monitoreo",
    text: "Visibilidad del estado de la red y de su operación, para acompañar el día a día.",
  },
  {
    icon: Link2,
    title: "Integración",
    text: "Encaje con sistemas de pago y con los procesos internos de la empresa.",
  },
];

export function Tecnologia() {
  return (
    <section id="tecnologia" className="bg-mist py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-cyan-dim uppercase">
            Tecnología
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Tu propia infraestructura. Tu propio ecosistema.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy/75">
            Cada proyecto parte de las necesidades de la organización. Estos son
            los componentes con los que construimos una red privada, desde la
            arquitectura hasta la integración con los sistemas existentes.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PUNTOS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04}>
              <li className="h-full rounded-2xl border border-slate/50 bg-white p-6">
                <p.icon className="text-cyan-dim" size={28} strokeWidth={1.6} />
                <h3 className="mt-4 font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
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
