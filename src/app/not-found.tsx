import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center text-white">
      <Logo variant="light" />
      <h1 className="mt-12 text-3xl font-bold tracking-tight">
        Página no encontrada
      </h1>
      <p className="mt-3 max-w-md text-slate">
        El enlace no existe o se ha movido. Vuelve al inicio para conocer Pagos
        Labs.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white"
      >
        Ir al inicio
      </Link>
    </main>
  );
}
