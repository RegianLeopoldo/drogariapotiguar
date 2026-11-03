import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Benefits from "@/components/home/Benefits";
import InformacoesLoja from "@/components/home/InformacoesLoja";
import Categories from "@/components/home/Categories";
import About from "@/components/home/About";
import Location from "@/components/home/Location";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";
import FloatingWhatsApp from "@/components/home/FloatingWhatsApp";
import Banners from "@/components/home/Banners";
import ProdutosDestaque from "@/components/home/ProdutosDestaque";
import OfertasRelampago from "@/components/home/OfertasRelampago";

const WHATSAPP = "556133341386";

const SITE_URL = "https://drogariapotiguar.vercel.app";

export default function Home() {
  const whatsappLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os produtos da Drogaria Potiguar.\n\n(Acesso pelo site)",
  )}`;

  const mapsLink =
    "https://www.google.com/maps/search/?api=1&query=Drogaria+Potiguar+Q+605+Conjunto+03+Lote+12+Recanto+das+Emas+Brasilia+DF";

  const pharmacyStructuredData = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "@id": `${SITE_URL}/#pharmacy`,
    name: "Drogaria Potiguar",
    url: SITE_URL,
    image: `${SITE_URL}/images/drogaria-potiguar/og-drogaria-potiguar.jpg`,
    telephone: "+55 61 3334-1386",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Q 605, Conjunto 03, Lote 12",
      addressLocality: "Recanto das Emas",
      addressRegion: "DF",
      postalCode: "72641-103",
      addressCountry: "BR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "https://schema.org/Sunday",
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday",
          "https://schema.org/Saturday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    hasMap: mapsLink,
    areaServed: {
      "@type": "Place",
      name: "Recanto das Emas, Brasília - DF",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55 61 3334-1386",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white pt-[106px] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pharmacyStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <Header />

      <Hero whatsappLink={whatsappLink} mapsLink={mapsLink} />
      <Benefits />
      <Banners />
      <OfertasRelampago />
      <InformacoesLoja />
      <Banners />
      <Categories />
      <Banners />
      <ProdutosDestaque />
      <About />
      <Banners />
      <Location />
      <CTA whatsappLink={whatsappLink} />
      <Footer whatsappLink={whatsappLink} />
      <FloatingWhatsApp whatsappLink={whatsappLink} />
    </main>
  );
}
