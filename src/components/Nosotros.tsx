import { Reveal } from "./Reveal";
import { asset } from "@/lib/paths";

const VALORES = [
  {
    title: "Precisión técnica",
    text: "Construimos lo que se puede desplegar y operar, sin promesas que la tecnología no sostiene.",
  },
  {
    title: "Control del cliente",
    text: "La red es de quien la encarga: sus permisos, sus reglas y su operación.",
  },
  {
    title: "Claridad",
    text: "Explicamos el alcance de cada proyecto con honestidad, en un lenguaje que permite decidir.",
  },
  {
    title: "Vocación regional",
    text: "Trabajamos para las necesidades reales de las organizaciones en Latinoamérica.",
  },
];

const EQUIPO = [
  {
    name: "Jesús",
    role: "CEO",
    photo: "/team/jesus.jpg",
  },
  {
    name: "Carlos",
    role: "COO",
    photo: "/team/carlos.jpg",
  },
  {
    name: "Santi Armor",
    role: "CTO",
    photo: "/team/santi-armor.jpg",
  },
];

export function Nosotros() {
  return (
    <section id="nosotros" className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-cyan-dim uppercase">
            Nosotros
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Infraestructura tecnológica para una nueva generación financiera.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy/75">
            Pagos Labs construye infraestructura blockchain privada para
            organizaciones que necesitan su propia red: con sus reglas, sus
            permisos y su operación. No somos un banco ni una pasarela de pagos.
            Diseñamos e implementamos la base técnica sobre la que una empresa
            puede operar su propio ecosistema.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <Reveal>
            <article className="rounded-2xl border border-slate/40 bg-mist p-8">
              <h3 className="text-sm font-semibold tracking-[0.12em] text-cyan-dim uppercase">
                Misión
              </h3>
              <p className="mt-3 text-base leading-relaxed text-navy/80">
                Diseñar, desarrollar e implementar infraestructura blockchain
                privada que permita a cada organización crear y operar su propio
                ecosistema financiero, con control sobre su red y sus sistemas
                de pago.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="rounded-2xl border border-slate/40 bg-mist p-8">
              <h3 className="text-sm font-semibold tracking-[0.12em] text-cyan-dim uppercase">
                Visión
              </h3>
              <p className="mt-3 text-base leading-relaxed text-navy/80">
                Que las empresas, las fintechs y los procesadores de pago de
                Latinoamérica cuenten con infraestructura propia, clara y
                operable, construida a la medida de su actividad.
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <h3 className="text-xl font-bold text-navy">Valores</h3>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {VALORES.map((v) => (
              <li
                key={v.title}
                className="border-l-2 border-cyan pl-5"
              >
                <p className="font-semibold text-navy">{v.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-navy/70">
                  {v.text}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-20">
          <h3 className="text-xl font-bold text-navy">Equipo</h3>
          <p className="mt-2 max-w-2xl text-navy/70">
            Las personas que impulsan Pagos Labs.
          </p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {EQUIPO.map((m) => (
              <li key={m.name} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-navy-2">
                  <img
                    src={asset(m.photo)}
                    alt={m.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <p className="mt-4 text-lg font-semibold text-navy">{m.name}</p>
                <p className="text-sm text-navy/60">{m.role}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
