"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const images = [
  {
    src: "/images/drogaria-potiguar/fachada-1.jpg",
    alt: "Fachada da Drogaria Potiguar",
  },
  {
    src: "/images/drogaria-potiguar/fachada-2.jpg",
    alt: "Vista da Drogaria Potiguar",
  },
  {
    src: "/images/drogaria-potiguar/interior-1.jpg",
    alt: "Interior da Drogaria Potiguar",
  },
];

const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=Drogaria+Potiguar+Q+605+Conjunto+03+Lote+12+Recanto+das+Emas+Brasilia+DF";

const whatsappLink =
  "https://wa.me/556133341386?text=Olá! Gostaria de obter mais informações sobre a Drogaria Potiguar.";

const features = [
  {
    icon: Truck,
    title: "Opções de entrega",
    description: "Mais praticidade para receber seus produtos.",
  },
  {
    icon: ShieldCheck,
    title: "Acessibilidade",
    description: "Entrada e estacionamento acessíveis.",
  },
  {
    icon: Clock3,
    title: "Amplo horário",
    description: "Atendimento presencial todos os dias, das 8h às 22h.",
  },
];

export default function About() {
  const [activeImage, setActiveImage] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const nextImage = () => {
    setActiveImage((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#174D9A]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#D92332]/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Carrossel de fotografias */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="min-w-0"
          >
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-[0_20px_55px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/11] lg:aspect-[5/5] xl:aspect-[6/5]">
                {images.map((image, index) => (
                  <div
                    key={image.src}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      activeImage === index
                        ? "z-10 opacity-100"
                        : "z-0 opacity-0"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}

                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#10233F]/45 via-transparent to-transparent" />

                {/* Identificação */}
                <div className="absolute left-4 top-4 z-30 rounded-xl border border-white/30 bg-white/90 px-3.5 py-2.5 shadow-lg backdrop-blur-md sm:left-6 sm:top-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#174D9A]">
                    Conheça nossa loja
                  </p>
                  <p className="mt-0.5 text-sm font-extrabold text-[#142B49]">
                    Drogaria Potiguar
                  </p>
                </div>

                {/* Navegação */}
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Fotografia anterior"
                  className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/90 text-[#174D9A] shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-white sm:left-5 sm:h-11 sm:w-11"
                >
                  <ArrowLeft size={19} />
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Próxima fotografia"
                  className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/90 text-[#174D9A] shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-white sm:right-5 sm:h-11 sm:w-11"
                >
                  <ArrowRight size={19} />
                </button>

                {/* Indicadores */}
                <div className="absolute bottom-5 left-0 right-0 z-30 flex items-center justify-center gap-2">
                  {images.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-label={`Mostrar fotografia ${index + 1}`}
                      aria-current={activeImage === index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeImage === index
                          ? "w-8 bg-white"
                          : "w-2 bg-white/60 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>

                {/* Contador */}
                <div className="absolute bottom-4 right-4 z-30 rounded-lg border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  {String(activeImage + 1).padStart(2, "0")} /{" "}
                  {String(images.length).padStart(2, "0")}
                </div>
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-slate-400">
              Conheça o espaço da Drogaria Potiguar.
            </p>
          </motion.div>

          {/* Apresentação institucional */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex min-w-0 flex-col"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#174D9A]/10 bg-[#174D9A]/[0.045] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#174D9A] sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D92332]" />
              Sobre a farmácia
            </span>

            <h2
              id="about-heading"
              className="mt-5 text-[28px] font-extrabold leading-[1.15] tracking-tight text-[#142B49] sm:text-3xl md:text-4xl xl:text-[42px]"
            >
              Drogaria Potiguar.
              <span className="mt-1 block text-[#174D9A]">
                Mais perto de você.
              </span>
            </h2>

            <p className="mt-4 text-justify text-[13px] leading-6 text-slate-600 sm:text-sm sm:leading-7">
              Localizada no Recanto das Emas, em Brasília, a Drogaria Potiguar
              oferece opções de atendimento presencial e on-line, além de
              serviços pensados para proporcionar mais comodidade aos seus
              clientes.
            </p>

            <p className="mt-3 text-justify text-[13px] leading-6 text-slate-600 sm:text-sm sm:leading-7">
              Conheça nossa loja, consulte as opções de atendimento e entre em
              contato com nossa equipe para obter mais informações.
            </p>

            {/* Diferenciais */}
            <div className="mt-7 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white p-3.5 transition-colors hover:border-[#174D9A]/20 sm:p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#174D9A]/[0.07] text-[#174D9A]">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-[#142B49]">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-justify text-xs leading-5 text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Endereço */}
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 transition-all hover:border-[#174D9A]/25 hover:bg-[#174D9A]/[0.025]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D92332]/[0.07] text-[#D92332]">
                <MapPin size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-[#142B49]">
                  Visite nossa loja
                </p>
                <p className="mt-1 text-justify text-xs leading-5 text-slate-500 sm:text-sm">
                  Q 605, Conjunto 03, Lote 12 – Recanto das Emas, Brasília – DF.
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="mt-1 shrink-0 text-[#174D9A]"
              />
            </a>

            {/* Botões */}
            <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row">
              <Link
                href={mapsLink}
                target="_blank"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#174D9A] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(23,77,154,0.16)] transition-all hover:-translate-y-0.5 hover:bg-[#123E7C]"
              >
                Como chegar
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-[#073B20] shadow-[0_8px_20px_rgba(37,211,102,0.13)] transition-all hover:-translate-y-0.5 hover:bg-[#20BD5A]"
              >
                <MessageCircle size={18} />
                Fale conosco
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
