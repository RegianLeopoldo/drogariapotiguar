"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    id: 1,
    image: "/images/drogaria-potiguar/banners/banner-01.jpg",
    alt: "Banner promocional da Drogaria Potiguar",
  },
  {
    id: 2,
    image: "/images/drogaria-potiguar/banners/banner-02.jpg",
    alt: "Ofertas e produtos de farmácia",
  },
  {
    id: 3,
    image: "/images/drogaria-potiguar/banners/banner-03.jpg",
    alt: "Cuidados e bem-estar",
  },
];

export default function Banners() {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const next = () => {
    setActive((current) => (current + 1) % banners.length);
  };

  const previous = () => {
    setActive((current) => (current === 0 ? banners.length - 1 : current - 1));
  };

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <section
      aria-label="Banners promocionais"
      className="mx-auto w-full max-w-[1440px] px-3 py-5 sm:px-6 sm:py-6 lg:px-8"
    >
      <div className="group relative mx-auto w-full overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.07)] sm:rounded-3xl">
        <div className="relative w-full overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={banners[active].id}
              src={banners[active].image}
              alt={banners[active].alt}
              className="relative block h-auto w-full"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.01 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            />
          </AnimatePresence>

          <button
            type="button"
            onClick={previous}
            aria-label="Banner anterior"
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/55 text-slate-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/90 sm:left-4 sm:h-10 sm:w-10"
          >
            <ChevronLeft size={21} strokeWidth={2} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Próximo banner"
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/55 text-slate-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/90 sm:right-4 sm:h-10 sm:w-10"
          >
            <ChevronRight size={21} strokeWidth={2} />
          </button>

          <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-slate-900/25 px-3 py-1.5 backdrop-blur-md">
            {banners.map((banner, index) => (
              <button
                key={banner.id}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Ir para o banner ${index + 1}`}
                aria-current={active === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/65 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
