"use client";

import { FormEvent, useState } from "react";

const ORGANIZACIONES = [
  "Banco",
  "Fintech",
  "Procesador de pagos",
  "Gran empresa",
  "Otra",
];

const SERVICIOS = [
  "Blockchain privada",
  "Despliegue de infraestructura",
  "Infraestructura de pagos",
  "Integración por APIs",
  "Smart contracts",
  "Consultoría",
  "Aún no lo tengo claro",
];

type Fields = {
  nombre: string;
  empresa: string;
  correo: string;
  pais: string;
  organizacion: string;
  servicio: string;
  descripcion: string;
  website: string;
};

const EMPTY: Fields = {
  nombre: "",
  empresa: "",
  correo: "",
  pais: "",
  organizacion: "",
  servicio: "",
  descripcion: "",
  website: "",
};

type Errors = Partial<Record<keyof Fields, string>>;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.nombre.trim()) e.nombre = "Escribe tu nombre y apellido.";
  if (!f.empresa.trim()) e.empresa = "Escribe el nombre de la empresa.";
  if (!f.correo.trim()) e.correo = "Escribe un correo corporativo.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.correo.trim()))
    e.correo = "El correo no tiene un formato válido.";
  if (!f.pais.trim()) e.pais = "Indica el país.";
  if (!f.organizacion) e.organizacion = "Selecciona el tipo de organización.";
  if (!f.servicio) e.servicio = "Selecciona el servicio de interés.";
  if (!f.descripcion.trim()) e.descripcion = "Describe brevemente tu consulta.";
  else if (f.descripcion.trim().length < 20)
    e.descripcion = "Añade un poco más de contexto (al menos 20 caracteres).";
  return e;
}

function buildConsulta(f: Fields): string {
  return [
    `Nombre: ${f.nombre}`,
    `Empresa: ${f.empresa}`,
    `Correo: ${f.correo}`,
    `País: ${f.pais}`,
    `Tipo de organización: ${f.organizacion}`,
    `Servicio de interés: ${f.servicio}`,
    "",
    "Descripción:",
    f.descripcion,
  ].join("\n");
}

export function Contacto() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "ready" | "copied">("idle");
  const [consulta, setConsulta] = useState("");

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (fields.website) {
      // Honeypot: silenciar bots sin simular un envío real.
      return;
    }
    const e = validate(fields);
    setErrors(e);
    if (Object.keys(e).length) return;
    setConsulta(buildConsulta(fields));
    setStatus("ready");
  }

  async function copiar() {
    try {
      await navigator.clipboard.writeText(consulta);
      setStatus("copied");
    } catch {
      // El usuario puede seleccionar el texto a mano.
    }
  }

  return (
    <section id="contacto" className="bg-white py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-cyan-dim uppercase">
            Contacto
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Construyamos juntos tu próxima infraestructura Blockchain.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/75">
            Cuéntanos quién eres y qué tienes en mente. El formulario valida
            los datos en tu navegador. El envío automático al correo de Pagos
            Labs aún no está conectado: si tu consulta está lista, podrás
            copiarla y conservarla hasta que habilitemos ese canal.
          </p>
        </div>

        {status === "idle" ? (
          <form
            onSubmit={onSubmit}
            noValidate
            className="grid gap-5"
            aria-describedby="aviso-envio"
          >
            <p id="aviso-envio" className="sr-only">
              El envío por correo aún no está conectado.
            </p>
            <div className="honeypot" aria-hidden="true">
              <label>
                Sitio web
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={fields.website}
                  onChange={(e) => set("website", e.target.value)}
                />
              </label>
            </div>

            <Field
              id="nombre"
              label="Nombre y apellido"
              value={fields.nombre}
              error={errors.nombre}
              onChange={(v) => set("nombre", v)}
              autoComplete="name"
            />
            <Field
              id="empresa"
              label="Empresa"
              value={fields.empresa}
              error={errors.empresa}
              onChange={(v) => set("empresa", v)}
              autoComplete="organization"
            />
            <Field
              id="correo"
              label="Correo corporativo"
              type="email"
              value={fields.correo}
              error={errors.correo}
              onChange={(v) => set("correo", v)}
              autoComplete="email"
            />
            <Field
              id="pais"
              label="País"
              value={fields.pais}
              error={errors.pais}
              onChange={(v) => set("pais", v)}
              autoComplete="country-name"
            />
            <Select
              id="organizacion"
              label="Tipo de organización"
              value={fields.organizacion}
              error={errors.organizacion}
              onChange={(v) => set("organizacion", v)}
              options={ORGANIZACIONES}
            />
            <Select
              id="servicio"
              label="Servicio de interés"
              value={fields.servicio}
              error={errors.servicio}
              onChange={(v) => set("servicio", v)}
              options={SERVICIOS}
            />
            <div className="field">
              <label htmlFor="descripcion">Descripción</label>
              <textarea
                id="descripcion"
                name="descripcion"
                rows={5}
                value={fields.descripcion}
                onChange={(e) => set("descripcion", e.target.value)}
                aria-invalid={!!errors.descripcion}
                aria-describedby={errors.descripcion ? "err-descripcion" : undefined}
              />
              {errors.descripcion && (
                <span id="err-descripcion" className="error">
                  {errors.descripcion}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-2"
            >
              Enviar consulta
            </button>
          </form>
        ) : (
          <div className="rounded-2xl border border-slate/50 bg-mist p-6">
            <h3 className="text-lg font-semibold text-navy">
              Tu consulta está lista
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/75">
              Los datos son válidos. Todavía no hay un buzón conectado a este
              formulario, así que no se ha enviado nada. Puedes copiar el texto
              y guardarlo.
            </p>
            <pre className="mt-4 max-h-64 overflow-auto rounded-xl bg-white p-4 text-xs leading-relaxed text-navy whitespace-pre-wrap">
              {consulta}
            </pre>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={copiar}
                className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-2"
              >
                {status === "copied" ? "Copiado" : "Copiar consulta"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setConsulta("");
                }}
                className="rounded-full border border-slate px-5 py-2.5 text-sm font-semibold text-navy hover:border-cyan"
              >
                Editar de nuevo
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `err-${id}` : undefined}
      />
      {error && (
        <span id={`err-${id}`} className="error">
          {error}
        </span>
      )}
    </div>
  );
}

function Select({
  id,
  label,
  value,
  onChange,
  error,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  options: string[];
}) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `err-${id}` : undefined}
      >
        <option value="">Selecciona una opción</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && (
        <span id={`err-${id}`} className="error">
          {error}
        </span>
      )}
    </div>
  );
}
