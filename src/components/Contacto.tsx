"use client";

import { FormEvent, useState } from "react";

const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/xtccarlos9995@gmail.com";

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
type Status = "idle" | "sending" | "success" | "error" | "copied";

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
  const [status, setStatus] = useState<Status>("idle");
  const [consulta, setConsulta] = useState("");

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (fields.website) {
      // Honeypot: silenciar bots sin simular un envío real.
      return;
    }
    const e = validate(fields);
    setErrors(e);
    if (Object.keys(e).length) return;
    const texto = buildConsulta(fields);
    setConsulta(texto);
    setStatus("sending");
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: fields.nombre.trim(),
          empresa: fields.empresa.trim(),
          correo: fields.correo.trim(),
          pais: fields.pais.trim(),
          organizacion: fields.organizacion,
          servicio: fields.servicio,
          descripcion: fields.descripcion.trim(),
          _subject: "Nueva consulta – Pagos Labs web",
          _template: "table",
          _honey: "",
          _cc: "bigbot.vaultarmor@gmail.com",
          _replyto: fields.correo.trim(),
        }),
      });
      const data = await res.json().catch(() => null);
      const ok =
        res.ok &&
        data &&
        data.success !== false &&
        data.success !== "false";
      if (!ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
      setFields(EMPTY);
    } catch {
      setStatus("error");
    }
  }

  async function copiar() {
    try {
      await navigator.clipboard.writeText(consulta);
      setStatus("copied");
    } catch {
      // El usuario puede seleccionar el texto a mano.
    }
  }

  function volverAlFormulario() {
    setStatus("idle");
    setConsulta("");
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
            los datos en tu navegador y nos envía tu consulta para que podamos
            responderte.
          </p>
        </div>

        {status === "idle" || status === "sending" ? (
          <form onSubmit={onSubmit} noValidate className="grid gap-5">
            <div className="honeypot" aria-hidden="true">
              <label>
                Sitio web
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  name="_honey"
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
                aria-describedby={
                  errors.descripcion ? "err-descripcion" : undefined
                }
              />
              {errors.descripcion && (
                <span id="err-descripcion" className="error">
                  {errors.descripcion}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-2 disabled:opacity-60"
            >
              {status === "sending" ? "Enviando…" : "Enviar consulta"}
            </button>
          </form>
        ) : status === "success" ? (
          <div className="rounded-2xl border border-slate/50 bg-mist p-6">
            <h3 className="text-lg font-semibold text-navy">Consulta enviada</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/75">
              Gracias, hemos recibido tu consulta. Te responderemos pronto.
            </p>
            <button
              type="button"
              onClick={volverAlFormulario}
              className="mt-4 rounded-full border border-slate px-5 py-2.5 text-sm font-semibold text-navy hover:border-cyan"
            >
              Enviar otra consulta
            </button>
          </div>
        ) : (
          <div className="rounded-2xl border border-slate/50 bg-mist p-6">
            <h3 className="text-lg font-semibold text-navy">
              No hemos podido enviar tu consulta
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/75">
              Ha ocurrido un problema al enviarla. Puedes copiar el texto y
              conservarlo, o intentarlo de nuevo.
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
                onClick={volverAlFormulario}
                className="rounded-full border border-slate px-5 py-2.5 text-sm font-semibold text-navy hover:border-cyan"
              >
                Intentarlo de nuevo
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
