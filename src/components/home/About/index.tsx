"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  MapPin,
  MessageCircle,
  Store,
  X,
  ZoomIn,
} from "lucide-react";

const images = [
  {
    src: "/images/drogaria-potiguar/fachada-1.jpg",
    alt: "Fachada da Drogaria Potiguar",
    title: "Uma farmácia próxima de você",
    subtitle: "Recanto das Emas, Brasília",
  },
  {
    src: "/images/drogaria-potiguar/fachada-2.jpg",
    alt: "Vista da Drogaria Potiguar",
    title: "Conheça nossa estrutura",
    subtitle: "Drogaria Potiguar",
  },
  {
    src: "/images/drogaria-potiguar/interior-1.jpg",
    alt: "Interior da Drogaria Potiguar",
    title: "Um espaço para receber você",
    subtitle: "Conheça nossa loja",
  },
  {
    src: "/images/drogaria-potiguar/interior-2.jpg",
    alt: "Interior da Drogaria Potiguar",
    title: "Um espaço para receber você",
    subtitle: "Conheça nossa loja",
  },
];

const address = "Q 605, Conjunto 03, Lote 12 - Recanto das Emas, Brasília - DF";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Drogaria+Potiguar+Q+605+Conjunto+03+Lote+12+Recanto+das+Emas+Brasilia+DF";

const whatsappUrl = "https://wa.me/556133341386";

export default function About() {
  const [activeImage, setActiveImage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion || lightboxOpen) return;

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [paused, reduceMotion, lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);

      if (event.key === "ArrowLeft") {
        setActiveImage((current) =>
          current === 0 ? images.length - 1 : current - 1,
        );
      }

      if (event.key === "ArrowRight") {
        setActiveImage((current) => (current + 1) % images.length);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % images.length);
  };

  return (
    <>
      <section
        id="sobre"
        className="overflow-hidden bg-[#f7f9fc] py-10 sm:py-12 lg:py-14"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:gap-9">
            {/* Galeria de imagens */}
            <div
              className="min-w-0"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            >
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_12px_35px_rgba(15,23,42,0.10)]">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={images[activeImage].src}
                      initial={reduceMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[activeImage].src}
                        alt={images[activeImage].alt}
                        fill
                        priority={activeImage === 0}
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover object-center"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Abrir imagem */}
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    aria-label="Ampliar imagem"
                    className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/35 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-black/55"
                  >
                    <ZoomIn size={19} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    aria-label="Ampliar fotografia"
                    className="absolute inset-0 z-[5] cursor-zoom-in"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-5 pb-5 pt-14 sm:px-6">
                    <p className="text-lg font-semibold text-white sm:text-xl">
                      {images[activeImage].title}
                    </p>
                    <p className="mt-1 text-sm text-white/85">
                      {images[activeImage].subtitle}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={previousImage}
                    aria-label="Imagem anterior"
                    className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-[#174d9a] shadow-md transition hover:bg-white"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Próxima imagem"
                    className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-[#174d9a] shadow-md transition hover:bg-white"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Miniaturas */}
              <div className="mt-3 grid grid-cols-4 gap-3">
                {images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`Ver imagem ${index + 1}`}
                    aria-pressed={activeImage === index}
                    className={`relative aspect-[16/9] overflow-hidden rounded-xl border-2 bg-slate-100 transition ${
                      activeImage === index
                        ? "border-[#174d9a] shadow-sm"
                        : "border-transparent opacity-80 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 25vw, 180px"
                      className="object-cover object-center transition-transform duration-300 hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Conteúdo institucional */}
            <div className="min-w-0">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-[2px] w-7 rounded-full bg-[#d92332]" />
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#174d9a]">
                  Sobre a nossa farmácia
                </span>
              </div>

              <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Cuidado e praticidade mais perto de você.
              </h2>

              <p className="mt-4 text-base font-medium leading-relaxed text-slate-700">
                Um atendimento pensado para facilitar o seu dia a dia.
              </p>

              <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-slate-600">
                <p>
                  A Drogaria Potiguar está no Recanto das Emas para oferecer
                  praticidade e atenção no seu dia a dia. Nosso espaço reúne
                  opções para diferentes necessidades, com atendimento próximo e
                  facilidade para você encontrar a farmácia.
                </p>

                <p>
                  Seja para visitar a loja ou entrar em contato, você encontra
                  aqui as principais informações para planejar sua visita e
                  falar com a nossa equipe.
                </p>
              </div>

              {/* Informações rápidas */}
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#174d9a]">
                    <Store size={19} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Loja física
                    </p>
                    <p className="text-xs text-slate-500">Recanto das Emas</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#174d9a]">
                    <Clock3 size={19} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Todos os dias
                    </p>
                    <p className="text-xs text-slate-500">Das 08h às 22h</p>
                  </div>
                </div>
              </div>

              {/* Endereço */}
              <div className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#d92332]" />
                <span>{address}</span>
              </div>

              {/* Botões */}
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#174d9a] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#123e7c]"
                >
                  Como chegar
                  <ArrowUpRight size={17} />
                </Link>

                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#174d9a]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#174d9a] transition hover:bg-blue-50"
                >
                  <MessageCircle size={17} />
                  Fale conosco
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visualizador em tela cheia */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md sm:p-8"
            onClick={() => setLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Visualizador de imagens da Drogaria Potiguar"
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              aria-label="Fechar imagem"
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-7 sm:top-7"
            >
              <X size={23} />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              aria-label="Imagem anterior"
              className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:left-7 sm:h-12 sm:w-12"
            >
              <ArrowLeft size={21} />
            </button>

            <motion.div
              key={images[activeImage].src}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="relative flex h-full max-h-[85vh] w-full max-w-6xl flex-col items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-full min-h-0 w-full">
                <Image
                  src={images[activeImage].src}
                  alt={images[activeImage].alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="mt-4 text-center">
                <p className="text-base font-semibold text-white sm:text-lg">
                  {images[activeImage].title}
                </p>
                <p className="mt-1 text-sm text-white/60">
                  {images[activeImage].subtitle}
                </p>
                <p className="mt-2 text-xs text-white/45">
                  {activeImage + 1} de {images.length}
                </p>
              </div>
            </motion.div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              aria-label="Próxima imagem"
              className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-7 sm:h-12 sm:w-12"
            >
              <ArrowRight size={21} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
