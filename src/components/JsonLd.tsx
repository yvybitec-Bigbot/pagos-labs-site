import { SITE_URL, asset } from "@/lib/paths";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pagos Labs",
    slogan: "We Build Private Blockchain Infrastructure.",
    url: SITE_URL,
    logo: `${SITE_URL}${asset("/icon-dark.png")}`,
    description:
      "Infraestructura blockchain privada para empresas, fintechs y procesadores de pago en Latinoamérica.",
    areaServed: "Latin America",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
