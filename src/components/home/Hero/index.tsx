"use client";

import {
  ArrowRight,
  Clock3,
  HeartPulse,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { motion, useReducedMotion } from "motion/react";

interface HeroProps {
  whatsappLink: string;
  mapsLink: string;
}

export default function Hero({ whatsappLink, mapsLink }: HeroProps) {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
      filter: reduceMotion ? "blur(0px)" : "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };

  const transition = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const glassItem =
    "rounded-xl border border-white/20 bg-white/[0.075] shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/[0.13]";

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[#102C50]"
    >
      {/* Imagem de fundo com movimento suave */}
      <motion.div
        initial={false}
        animate={
          reduceMotion ? { scale: 1 } : { scale: [1, 1.045, 1], x: [0, -8, 0] }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=2200&q=90')",
        }}
      />

      {/* Contraste mais leve: permite enxergar melhor a fotografia */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#0B2342]/55 via-[#102C50]/35 to-[#102C50]/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0B2342]/45 via-transparent to-[#0B2342]/10" />

      {/* Luzes decorativas */}
      <div className="pointer-events-none absolute -right-32 top-0 -z-10 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-16 top-12 -z-10 h-56 w-56 rounded-full border border-white/10 sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 lg:px-8 lg:py-16">
        {/* Conteúdo principal */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.12,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl"
        >
          <motion.span
            variants={reveal}
            transition={transition}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/[0.13] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.17em] text-white shadow-lg backdrop-blur-xl sm:text-[11px]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Drogaria Potiguar
          </motion.span>

          <motion.h1
            variants={reveal}
            transition={transition}
            className="mt-5 text-3xl font-black leading-[1.1] tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] sm:text-4xl md:text-5xl lg:text-[54px]"
          >
            Cuidado e atenção
            <span className="block text-[#FF7780]">em todos os momentos.</span>
          </motion.h1>

          <motion.p
            variants={reveal}
            transition={transition}
            className="mt-4 max-w-lg text-justify text-sm leading-6 text-white drop-shadow-md sm:text-base sm:leading-7"
          >
            Estamos aqui para atender você. Consulte informações sobre produtos,
            serviços e atendimento diretamente com nossa equipe.
          </motion.p>

          {/* Ações */}
          <motion.div
            variants={reveal}
            transition={transition}
            className="mt-6 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap"
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.015 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-[#25D366] px-5 py-3 text-sm font-bold text-[#073B24] shadow-[0_10px_30px_rgba(37,211,102,0.25)] transition-all duration-300 hover:bg-[#20BD5A] hover:text-white hover:shadow-[0_14px_35px_rgba(37,211,102,0.35)]"
            >
              <MessageCircle size={19} />
              Fale pelo WhatsApp
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/[0.12] px-5 py-3 text-sm font-bold text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-white/55 hover:bg-white/[0.22]"
            >
              <MapPin size={18} />
              Como chegar
            </motion.a>
          </motion.div>

          {/* Contato */}
          <motion.div
            variants={reveal}
            transition={transition}
            className="mt-6 flex flex-col gap-3 border-t border-white/25 pt-5 text-xs font-medium text-white sm:flex-row sm:flex-wrap sm:gap-x-6"
          >
            <a
              href="tel:+556133341386"
              className="inline-flex items-center gap-2 transition-colors hover:text-[#FF8790]"
            >
              <Phone size={15} className="text-[#FF8790]" />
              (61) 3334-1386
            </a>

            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-[#FF8790]" />
              Recanto das Emas - DF
            </span>
          </motion.div>
        </motion.div>

        {/* Painel de informações em vidro */}
        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : 35,
            y: reduceMotion ? 0 : 12,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            ...transition,
            delay: reduceMotion ? 0 : 0.2,
          }}
          className="mx-auto w-full max-w-[390px] lg:ml-auto lg:mr-0"
        >
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-2xl border border-white/35 bg-[#102C50]/[0.38] p-4 shadow-[0_25px_70px_rgba(0,0,0,0.22)] backdrop-blur-lg backdrop-saturate-125 sm:p-5"
          >
            {/* Reflexos do vidro */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.12] via-white/[0.025] to-transparent" />
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#D92332]/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-blue-300/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

            <div className="relative">
              {/* Identificação */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-[#D92332]/85 text-white shadow-[0_6px_20px_rgba(217,35,50,0.25)] backdrop-blur-md">
                  <HeartPulse size={23} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-100/90">
                    Drogaria Potiguar
                  </p>
                  <h2 className="mt-0.5 text-lg font-extrabold text-white drop-shadow-sm">
                    Conte com a gente
                  </h2>
                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-white/90 sm:text-sm">
                Praticidade e atendimento para facilitar seu dia a dia.
              </p>

              <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              {/* Horários */}
              <div className="space-y-2.5">
                <motion.div
                  whileHover={reduceMotion ? undefined : { x: 3 }}
                  className={`flex items-center gap-3 p-3 ${glassItem}`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/[0.12] text-[#FF9AA1]">
                    <Clock3 size={19} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-white">
                      Atendimento presencial
                    </p>
                    <p className="mt-0.5 text-base font-extrabold text-white">
                      08h às 22h
                    </p>
                    <p className="text-[10px] text-blue-100/85">
                      Segunda a domingo
                    </p>
                  </div>

                  <span className="rounded-full border border-emerald-200/25 bg-emerald-300/15 px-2 py-1 text-[9px] font-bold text-emerald-100">
                    Diário
                  </span>
                </motion.div>

                <motion.div
                  whileHover={reduceMotion ? undefined : { x: 3 }}
                  className={`flex items-center gap-3 p-3 ${glassItem}`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/[0.12] text-[#FF9AA1]">
                    <MessageCircle size={18} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-white">
                      Atendimento on-line
                    </p>
                    <p className="mt-0.5 text-base font-extrabold text-white">
                      08h às 23h30
                    </p>
                    <p className="text-[10px] text-blue-100/85">
                      Segunda a domingo
                    </p>
                  </div>

                  <span className="rounded-full border border-blue-200/25 bg-blue-300/15 px-2 py-1 text-[9px] font-bold text-blue-100">
                    Diário
                  </span>
                </motion.div>
              </div>

              <p className="mt-2.5 text-[10px] leading-4 text-white/75">
                Os horários podem sofrer alterações em feriados e datas
                especiais. Consulte a equipe para confirmar.
              </p>

              {/* Serviços */}
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  className={`p-3 ${glassItem}`}
                >
                  <Truck size={19} className="text-[#FF9AA1]" />
                  <p className="mt-2 text-xs font-bold text-white">Entrega</p>
                  <p className="mt-0.5 text-[10px] leading-4 text-blue-100/85">
                    Consulte a disponibilidade
                  </p>
                </motion.div>

                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  className={`p-3 ${glassItem}`}
                >
                  <ShieldCheck size={19} className="text-[#FF9AA1]" />
                  <p className="mt-2 text-xs font-bold text-white">
                    Atendimento
                  </p>
                  <p className="mt-0.5 text-[10px] leading-4 text-blue-100/85">
                    Fale com nossa equipe
                  </p>
                </motion.div>
              </div>

              {/* WhatsApp */}
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className="group mt-4 flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-[#25D366]/95 px-4 py-2.5 text-xs font-bold text-[#073B24] shadow-[0_8px_24px_rgba(37,211,102,0.20)] transition-all duration-300 hover:bg-[#25D366] hover:text-white hover:shadow-[0_10px_28px_rgba(37,211,102,0.30)]"
              >
                <MessageCircle size={16} />
                Fale com a Drogaria
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
