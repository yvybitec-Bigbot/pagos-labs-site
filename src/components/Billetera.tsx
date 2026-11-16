import { Reveal } from "./Reveal";

export function Billetera() {
  return (
    <section id="billetera" className="bg-mist py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-cyan-dim uppercase">
            Nuestro ecosistema
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            También operamos nuestra propia infraestructura de pagos.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy/75">
            Además del trabajo para otras organizaciones, Pagos Labs opera su
            propia red. PAGA es el token de ese ecosistema. Quienes desean
            intercambiar PAGA lo hacen desde una billetera de autocustodia —
            Paga Wallet — que se entrega de forma directa, no a través de
            tiendas de aplicaciones.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-navy/75">
            Pagos Labs no es un banco y no custodia fondos de los usuarios. Las
            reglas del intercambio las aplica el propio sistema; cada persona
            usa su billetera bajo su responsabilidad.
          </p>
          <aside
            className="mt-8 max-w-3xl rounded-2xl border border-slate/60 bg-white px-6 py-5 text-navy"
            role="note"
          >
            <p className="text-sm leading-relaxed font-medium">
              Billeteras de autocustodia: úsalas bajo tu propio riesgo. Lee las
              reglas antes de intercambiar.
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
