export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${p}`;
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://yvybitec-bigbot.github.io/pagos-labs-site";
