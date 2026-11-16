"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#soluciones", label: "Soluciones" },
  { href: "#empresas", label: "Empresas" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid || open
          ? "bg-navy/95 shadow-[0_1px_0_rgba(170,187,205,0.12)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <Logo variant="light" />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.92rem] font-medium text-slate transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden rounded-full bg-cyan px-4 py-2 text-sm font-semibold text-navy transition hover:bg-white lg:inline-flex"
        >
          Hablemos de tu proyecto
        </a>

        <button
          type="button"
          className="inline-flex rounded-md p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          id="menu-movil"
          className="border-t border-white/10 bg-navy lg:hidden"
        >
          <nav className="flex flex-col px-5 py-4" aria-label="Móvil">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="border-b border-white/5 py-3 text-base font-medium text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={close}
              className="mt-4 rounded-full bg-cyan px-4 py-3 text-center text-sm font-semibold text-navy"
            >
              Hablemos de tu proyecto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
