import { NetworkBackdrop } from "./NetworkBackdrop";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-navy text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 0%, rgba(67,201,217,0.12), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(36,180,144,0.08), transparent 45%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(170,187,205,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(170,187,205,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <NetworkBackdrop />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-24 pt-28 md:px-8 md:pt-32">
        <p className="text-sm font-semibold tracking-wide text-cyan">
          We Build Private Blockchain Infrastructure.
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
          Construimos la infraestructura Blockchain que impulsa el futuro
          financiero.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate sm:text-xl">
          Diseñamos, desarrollamos e implementamos redes Blockchain privadas
          para empresas que buscan crear sus propios ecosistemas financieros,
          optimizar sus operaciones y conectar sus sistemas de pago.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#soluciones"
            className="inline-flex items-center justify-center rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white"
          >
            Conoce nuestras soluciones
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full border border-slate/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan hover:text-cyan"
          >
            Hablemos de tu proyecto
          </a>
        </div>
      </div>
    </section>
  );
}
