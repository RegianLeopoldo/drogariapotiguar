"use client";

import { ArrowRight, Clock3, MapPin, MessageCircle, Phone } from "lucide-react";

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
      y: reduceMotion ? 0 : 14,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const transition = {
    duration: 0.65,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      id="inicio"
      className="relative isolate min-h-[420px] overflow-hidden bg-[#102744] lg:min-h-[470px]"
    >
      {/* Fotografia de fundo */}
      <motion.div
        initial={false}
        animate={
          reduceMotion ? { scale: 1 } : { scale: [1, 1.02, 1], x: [0, -3, 0] }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=2400&q=90')",
        }}
      />

      {/* Camadas de contraste */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#102744]/75 via-[#102744]/45 to-[#102744]/15" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#102744]/65 via-transparent to-[#102744]/10" />

      {/* Totem 3D - Drogaria Potiguar */}
      <div
        aria-label="Placa vertical da Drogaria Potiguar"
        className="pointer-events-none absolute bottom-0 left-5 top-[22%] z-10 hidden w-[138px] [perspective:1200px] lg:block xl:left-8"
      >
        {/* Poste metálico */}
        <div className="absolute bottom-0 left-1/2 top-[155px] z-0 w-[19px] -translate-x-1/2 rounded-sm bg-gradient-to-r from-[#762A25] via-[#F47762] via-35% to-[#70231F] shadow-[5px_4px_14px_rgba(0,0,0,0.4)]">
          <div className="absolute left-[4px] top-0 h-full w-[2px] bg-white/30 blur-[1px]" />
          <div className="absolute right-[3px] top-0 h-full w-[3px] bg-black/25" />
        </div>

        {/* Placa */}
        <motion.div
          initial={false}
          whileHover={{
            rotateY: 58,
            rotateX: -3,
            y: -3,
            scale: 1.035,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 16,
            mass: 0.8,
          }}
          style={{
            rotateY: 45,
            y: 20,
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
          }}
          className="pointer-events-auto relative z-10 translate-y-5 [transform:rotateY(30deg)]"
        >
          <div className="absolute -right-[10px] top-[4px] h-[calc(100%-8px)] w-[11px] rounded-r-[3px] bg-gradient-to-r from-[#A83B32] via-[#61201E] to-[#301416] shadow-[5px_5px_12px_rgba(0,0,0,0.3)]" />

          <div className="absolute -bottom-[10px] left-[5px] h-[10px] w-[calc(100%-5px)] rounded-b-sm bg-gradient-to-b from-[#A83B32] to-[#421719]" />

          <div className="relative overflow-hidden rounded-[5px] border-[4px] border-[#B83B35] bg-[#102F70] shadow-[0_12px_30px_rgba(0,0,0,0.42)]">
            <div className="pointer-events-none absolute inset-[2px] z-20 rounded-[2px] border border-white/20" />

            <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-br from-white/[0.16] via-transparent to-black/20" />

            <div className="relative border-b border-[#8D292A] bg-gradient-to-br from-[#F15B50] via-[#D9433E] to-[#A92B32] px-2 py-3.5 text-center shadow-inner">
              <span className="block text-[18px] font-black leading-tight tracking-[-1px] text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.45)]">
                DROGARIA
              </span>
            </div>

            <div className="relative bg-gradient-to-br from-[#2458A6] via-[#153F83] to-[#0A2352] px-2 pb-3.5 pt-3 text-center">
              <span className="block text-[19px] font-black leading-tight tracking-[-1px] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                POTIGUAR
              </span>

              <div className="mx-auto my-2.5 h-px w-[85%] bg-gradient-to-r from-transparent via-white/45 to-transparent" />

              <span className="block text-[9px] font-bold uppercase tracking-[0.13em] text-white/95">
                TELE-ENTREGA
              </span>

              <span className="mt-1.5 block whitespace-nowrap text-[19px] font-black leading-none tracking-[-1px] text-[#FFE45B] drop-shadow-[0_2px_4px_rgba(0,0,0,0.65)]">
                3334-1386
              </span>
            </div>
          </div>
        </motion.div>

        {/* Base */}
        <div className="absolute bottom-0 left-1/2 z-10 h-3 w-12 -translate-x-1/2 rounded-sm bg-gradient-to-b from-[#E76A56] via-[#A83B32] to-[#63211F] shadow-[0_5px_12px_rgba(0,0,0,0.4)]" />
      </div>

      {/* Conteúdo */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[1fr_330px] lg:gap-16 lg:px-8 lg:py-16">
        {/* Apresentação */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.1,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="max-w-2xl lg:ml-[150px]"
        >
          <motion.p
            variants={reveal}
            transition={transition}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75"
          >
            Drogaria Potiguar
          </motion.p>

          <motion.h1
            variants={reveal}
            transition={transition}
            className="mt-5 max-w-[580px] text-4xl font-bold leading-[1.12] tracking-[-0.045em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)] sm:text-5xl lg:text-[54px]"
          >
            Cuidado e atenção
            <span className="mt-1 block font-medium text-white/90">
              em todos os momentos.
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            transition={transition}
            className="mt-5 max-w-md text-sm leading-7 text-white/85 sm:text-base"
          >
            Entre em contato com nossa equipe para consultar produtos e
            informações sobre atendimento.
          </motion.p>

          {/* Ações principais */}
          <motion.div
            variants={reveal}
            transition={transition}
            className="mt-7 flex flex-wrap gap-3"
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-[#073B24] transition-colors duration-300 hover:bg-[#20BD5A] hover:text-white"
            >
              <MessageCircle size={18} />
              WhatsApp
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/[0.10] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/[0.18]"
            >
              <MapPin size={17} />
              Como chegar
            </motion.a>
          </motion.div>

          {/* Contato */}
          <motion.div
            variants={reveal}
            transition={transition}
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/20 pt-5 text-xs font-medium text-white/85"
          >
            <a
              href="tel:+556133341386"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone size={14} className="text-[#FF8991]" />
              (61) 3334-1386
            </a>

            <span className="inline-flex items-center gap-2">
              <MapPin size={14} className="text-[#FF8991]" />
              Recanto das Emas - DF
            </span>
          </motion.div>
        </motion.div>

        {/* Horários de atendimento */}
        <motion.aside
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : 18,
          }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ...transition,
            delay: reduceMotion ? 0 : 0.15,
          }}
          className="mx-auto w-full max-w-[330px] lg:ml-auto lg:mr-0"
        >
          <div className="rounded-2xl border border-white/20 bg-[#102744]/65 p-5 shadow-[0_16px_45px_rgba(0,0,0,0.20)] backdrop-blur-xl sm:p-6">
            <div className="flex items-center gap-3 border-b border-white/15 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                <Clock3 size={20} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55">
                  Funcionamento
                </p>
                <h2 className="text-base font-semibold text-white">
                  Horários de atendimento
                </h2>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-white/65">Presencial</p>
                  <p className="mt-1 text-xl font-semibold text-white">
                    08h às 22h
                  </p>
                </div>
                <span className="text-[10px] text-white/55">Todos os dias</span>
              </div>

              <div className="h-px bg-white/10" />

              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-white/65">On-line</p>
                  <p className="mt-1 text-xl font-semibold text-white">
                    08h às 23h30
                  </p>
                </div>
                <span className="text-[10px] text-white/55">Todos os dias</span>
              </div>
            </div>

            <p className="mt-4 text-[10px] leading-4 text-white/50">
              Os horários podem sofrer alterações em feriados e datas especiais.
              Consulte a equipe para confirmar.
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
