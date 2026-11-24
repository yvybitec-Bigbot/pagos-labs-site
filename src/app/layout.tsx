import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { asset, SITE_URL } from "@/lib/paths";
import "./globals.css";

const sans = localFont({
  src: "./fonts/PlusJakartaSans-latin.woff2",
  display: "swap",
  weight: "400 800",
  variable: "--font-sans",
});

const title = "Pagos Labs — Infraestructura blockchain privada";
const description =
  "Diseñamos, desarrollamos e implementamos redes blockchain privadas para empresas, fintechs y procesadores de pago en Latinoamérica.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: "Pagos Labs",
  keywords: [
    "Pagos Labs",
    "blockchain privada",
    "infraestructura blockchain",
    "Latinoamérica",
    "fintech",
    "redes privadas",
    "PAGA",
    "Paga Wallet",
  ],
  authors: [{ name: "Pagos Labs" }],
  openGraph: {
    type: "website",
    locale: "es_LA",
    url: SITE_URL,
    siteName: "Pagos Labs",
    title,
    description,
    images: [
      {
        url: asset("/og.png"),
        width: 1200,
        height: 630,
        alt: "Pagos Labs — We Build Private Blockchain Infrastructure.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [asset("/og.png")],
  },
  icons: {
    icon: [
      { url: asset("/favicon-32.png"), sizes: "32x32", type: "image/png" },
      { url: asset("/favicon-16.png"), sizes: "16x16", type: "image/png" },
      { url: asset("/icon-dark.png"), type: "image/png" },
    ],
    apple: { url: asset("/apple-touch-icon.png"), sizes: "180x180" },
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#101D35",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={sans.variable}>
      <body className={`${sans.className} antialiased`}>{children}</body>
    </html>
  );
}
