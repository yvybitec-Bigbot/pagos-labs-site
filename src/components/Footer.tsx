import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy text-slate">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-sm tracking-wide text-cyan">
              We Build Private Blockchain Infrastructure.
            </p>
          </div>
          <nav aria-label="Pie de página" className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            <a href="/#inicio" className="hover:text-white">
              Inicio
            </a>
            <a href="/#nosotros" className="hover:text-white">
              Nosotros
            </a>
            <a href="/#tecnologia" className="hover:text-white">
              Tecnología
            </a>
            <a href="/#soluciones" className="hover:text-white">
              Soluciones
            </a>
            <a href="/#empresas" className="hover:text-white">
              Empresas
            </a>
            <a href="/#contacto" className="hover:text-white">
              Contacto
            </a>
            <a href="/#billetera" className="hover:text-white">
              Billetera
            </a>
            <a href="/privacidad-paga-wallet.html" className="hover:text-white col-span-2">
              Política de privacidad de nuestras apps
            </a>
          </nav>
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-slate/90">
          Billeteras de autocustodia: úsalas bajo tu propio riesgo. Lee las
          reglas antes de intercambiar.
        </p>
        <p className="mt-3 text-sm text-slate/80">
          Pagos Labs no es un banco ni una pasarela de pagos. Esta web no
          utiliza cookies ni rastreadores.
        </p>
        <p className="mt-8 text-xs text-slate/60">© 2026 Pagos Labs</p>
      </div>
    </footer>
  );
}
