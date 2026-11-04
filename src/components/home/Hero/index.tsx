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
      y: reduceMotion ? 0 : 18,
      filter: reduceMotion ? "blur(0px)" : "blur(3px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };

  const transition = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const glassItem =
    "flex items-center gap-3 rounded-2xl border border-white/[0.13] bg-[#101D30]/35 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-[#101D30]/50";

  return (
    <section
      id="inicio"
      className="relative isolate min-h-[510px] overflow-hidden bg-[#102744] lg:min-h-[550px]"
    >
      <motion.div
        initial={false}
        animate={
          reduceMotion ? { scale: 1 } : { scale: [1, 1.025, 1], x: [0, -4, 0] }
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

      {/* Sobreposição discreta para preservar a fotografia */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#102744]/45 via-[#102744]/20 to-transparent" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#102744]/50 via-transparent to-black/[0.04]" />

      {/* Totem premium 3D - Drogaria Potiguar */}
      <div
        aria-label="Placa vertical da Drogaria Potiguar"
        className="pointer-events-none absolute bottom-0 left-5 top-[22%] z-10 hidden w-[138px] [perspective:1200px] lg:block xl:left-8"
      >
        {/* Poste metálico fixo */}
        <div className="absolute bottom-0 left-1/2 top-[155px] z-0 w-[19px] -translate-x-1/2 rounded-sm bg-gradient-to-r from-[#762A25] via-[#F47762] via-35% to-[#70231F] shadow-[5px_4px_14px_rgba(0,0,0,0.4)]">
          <div className="absolute left-[4px] top-0 h-full w-[2px] bg-white/30 blur-[1px]" />
          <div className="absolute right-[3px] top-0 h-full w-[3px] bg-black/25" />
        </div>

        {/* Estrutura móvel da placa */}
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
          {/* Lateral direita com profundidade */}
          <div className="absolute -right-[10px] top-[4px] h-[calc(100%-8px)] w-[11px] rounded-r-[3px] bg-gradient-to-r from-[#A83B32] via-[#61201E] to-[#301416] shadow-[5px_5px_12px_rgba(0,0,0,0.3)]" />

          {/* Borda inferior */}
          <div className="absolute -bottom-[10px] left-[5px] h-[10px] w-[calc(100%-5px)] rounded-b-sm bg-gradient-to-b from-[#A83B32] to-[#421719]" />

          {/* Face frontal */}
          <div className="relative overflow-hidden rounded-[5px] border-[4px] border-[#B83B35] bg-[#102F70] shadow-[0_12px_30px_rgba(0,0,0,0.42)]">
            {/* Acabamento externo */}
            <div className="pointer-events-none absolute inset-[2px] z-20 rounded-[2px] border border-white/20" />

            {/* Reflexo de iluminação */}
            <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-br from-white/[0.16] via-transparent to-black/20" />

            {/* Cabeçalho */}
            <div className="relative border-b border-[#8D292A] bg-gradient-to-br from-[#F15B50] via-[#D9433E] to-[#A92B32] px-2 py-3.5 text-center shadow-inner">
              <span className="block text-[18px] font-black leading-tight tracking-[-1px] text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.45)]">
                DROGARIA
              </span>
            </div>

            {/* Corpo azul */}
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

        {/* Base reforçada fixa */}
        <div className="absolute bottom-0 left-1/2 z-10 h-3 w-12 -translate-x-1/2 rounded-sm bg-gradient-to-b from-[#E76A56] via-[#A83B32] to-[#63211F] shadow-[0_5px_12px_rgba(0,0,0,0.4)]" />
      </div>

      <div className="pointer-events-none absolute -right-32 -top-40 -z-10 h-[440px] w-[440px] rounded-full border border-white/[0.09]" />
      <div className="pointer-events-none absolute -right-16 -top-24 -z-10 h-[310px] w-[310px] rounded-full border border-white/[0.07]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-4 py-5 sm:px-6 sm:py-7 lg:grid-cols-[1.08fr_0.82fr] lg:gap-14 lg:px-8 lg:py-7">
        {/* Conteúdo principal */}
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
          <motion.div
            variants={reveal}
            transition={transition}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-[#102744]/25 px-4 py-2 shadow-lg backdrop-blur-xl"
          >
            <HeartPulse size={17} className="text-[#FF8991]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.19em] text-white sm:text-[11px]">
              Saúde e Bem-Estar
            </span>
          </motion.div>

          <motion.h1
            variants={reveal}
            transition={transition}
            className="mt-6 max-w-[620px] text-[2.45rem] font-extrabold leading-[1.12] tracking-[-0.045em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.28)] sm:text-5xl lg:text-[55px]"
          >
            Cuidado e atenção
            <span className="mt-1 block text-[#FF8991]">
              em todos os momentos.
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            transition={transition}
            className="mt-5 max-w-lg text-sm leading-7 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:text-base"
          >
            Estamos aqui para atender você. Consulte informações sobre produtos,
            serviços e atendimento diretamente com nossa equipe.
          </motion.p>

          {/* Botões */}
          <motion.div
            variants={reveal}
            transition={transition}
            className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap"
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-white/20 bg-[#25D366] px-6 py-3 text-sm font-bold text-[#073B24] shadow-[0_8px_25px_rgba(37,211,102,0.20)] transition-all duration-300 hover:bg-[#20BD5A] hover:text-white"
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
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-white/35 bg-white/[0.12] px-6 py-3 text-sm font-bold text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.20]"
            >
              <MapPin size={18} />
              Como chegar
            </motion.a>
          </motion.div>

          {/* Informações de contato */}
          <motion.div
            variants={reveal}
            transition={transition}
            className="mt-7 flex flex-col gap-3 border-t border-white/25 pt-5 text-xs font-medium text-white/90 sm:flex-row sm:flex-wrap sm:gap-x-6"
          >
            <a
              href="tel:+556133341386"
              className="inline-flex items-center gap-2 transition-colors hover:text-[#FF8991]"
            >
              <Phone size={15} className="text-[#FF8991]" />
              (61) 3334-1386
            </a>

            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-[#FF8991]" />
              Recanto das Emas - DF
            </span>
          </motion.div>
        </motion.div>

        {/* Painel de vidro fumê */}
        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : 24,
            y: reduceMotion ? 0 : 10,
          }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            ...transition,
            delay: reduceMotion ? 0 : 0.15,
          }}
          className="mx-auto w-full max-w-[410px] lg:ml-auto lg:mr-0"
        >
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -3 }}
            transition={{ duration: 0.35 }}
            className="relative overflow-hidden rounded-[28px] border border-white/25 bg-[#101D30]/55 p-5 shadow-[0_25px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl backdrop-saturate-150 sm:p-6"
          >
            {/* Reflexos discretos */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.10] via-transparent to-black/[0.08]" />
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#D92332]/10 blur-[65px]" />

            <div className="relative">
              {/* Identificação */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-[#D92332]/80 text-white shadow-lg">
                  <HeartPulse size={23} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                    Drogaria Potiguar
                  </p>
                  <h2 className="mt-0.5 text-lg font-bold tracking-tight text-white">
                    Conte com a gente
                  </h2>
                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-white/75 sm:text-sm">
                Praticidade e atendimento para facilitar seu dia a dia.
              </p>

              <div className="my-4 h-px bg-white/15" />

              {/* Horários */}
              <div className="space-y-2.5">
                <motion.div
                  whileHover={reduceMotion ? undefined : { x: 2 }}
                  className={glassItem}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07] text-[#FF9AA1]">
                    <Clock3 size={19} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold text-white/65">
                      Atendimento presencial
                    </p>
                    <p className="mt-0.5 text-lg font-bold text-white">
                      08h às 22h
                    </p>
                    <p className="text-[10px] text-white/55">
                      Segunda a domingo
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={reduceMotion ? undefined : { x: 2 }}
                  className={glassItem}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07] text-[#FF9AA1]">
                    <MessageCircle size={18} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold text-white/65">
                      Atendimento on-line
                    </p>
                    <p className="mt-0.5 text-lg font-bold text-white">
                      08h às 23h30
                    </p>
                    <p className="text-[10px] text-white/55">
                      Segunda a domingo
                    </p>
                  </div>
                </motion.div>
              </div>

              <p className="mt-3 text-[10px] leading-4 text-white/50">
                Os horários podem sofrer alterações em feriados e datas
                especiais. Consulte a equipe para confirmar.
              </p>

              {/* Serviços */}
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  className="rounded-2xl border border-white/[0.13] bg-white/[0.055] p-3.5 transition-colors hover:bg-white/[0.10]"
                >
                  <Truck size={19} className="text-[#FF9AA1]" />
                  <p className="mt-2 text-xs font-bold text-white">Entrega</p>
                  <p className="mt-1 text-[10px] leading-4 text-white/55">
                    Consulte a disponibilidade
                  </p>
                </motion.div>

                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  className="rounded-2xl border border-white/[0.13] bg-white/[0.055] p-3.5 transition-colors hover:bg-white/[0.10]"
                >
                  <ShieldCheck size={19} className="text-[#FF9AA1]" />
                  <p className="mt-2 text-xs font-bold text-white">
                    Atendimento
                  </p>
                  <p className="mt-1 text-[10px] leading-4 text-white/55">
                    Fale com nossa equipe
                  </p>
                </motion.div>
              </div>

              {/* WhatsApp */}
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className="group mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.10] px-4 py-2.5 text-xs font-bold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:bg-white/[0.17]"
              >
                <MessageCircle size={16} className="text-[#55E58A]" />
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
