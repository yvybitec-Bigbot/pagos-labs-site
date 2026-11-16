import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Nosotros } from "@/components/Nosotros";
import { Tecnologia } from "@/components/Tecnologia";
import { Soluciones } from "@/components/Soluciones";
import { Empresas } from "@/components/Empresas";
import { ComoTrabajamos } from "@/components/ComoTrabajamos";
import { Latinoamerica } from "@/components/Latinoamerica";
import { Billetera } from "@/components/Billetera";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Nosotros />
        <Tecnologia />
        <Soluciones />
        <Empresas />
        <ComoTrabajamos />
        <Latinoamerica />
        <Billetera />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
