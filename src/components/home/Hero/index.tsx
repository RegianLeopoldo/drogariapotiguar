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
      className="relative isolate overflow-hidden bg-[#102C50]"
    >
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=2200&q=90')",
        }}
      />

      {/* Camada de contraste */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#0B2342]/75 via-[#102C50]/55 to-[#102C50]/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0B2342]/60 via-transparent to-[#0B2342]/10" />

      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute -right-32 top-0 -z-10 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-16 top-12 -z-10 h-56 w-56 rounded-full border border-white/10 sm:h-72 sm:w-72" />

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 lg:px-8 lg:py-16">
        {/* Conteúdo principal */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={transition}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.17em] text-white shadow-lg backdrop-blur-md sm:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Drogaria Potiguar
          </span>

          <h1 className="mt-5 text-3xl font-black leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-[54px]">
            Cuidado e atenção
            <span className="block text-[#FF6670]">em todos os momentos.</span>
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-6 text-white/95 drop-shadow-md sm:text-base sm:leading-7">
            Estamos aqui para atender você. Consulte informações sobre produtos,
            serviços e atendimento diretamente com nossa equipe.
          </p>

          {/* Ações */}
          <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-[#073B24] shadow-[0_8px_22px_rgba(37,211,102,0.22)] transition-colors hover:bg-[#20BD5A] hover:text-white"
            >
              <MessageCircle size={19} />
              Fale pelo WhatsApp
              <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <MapPin size={18} />
              Como chegar
            </motion.a>
          </div>

          {/* Contato */}
          <div className="mt-6 flex flex-col gap-3 border-t border-white/20 pt-5 text-xs font-medium text-white sm:flex-row sm:flex-wrap sm:gap-x-6">
            <a
              href="tel:+556133341386"
              className="inline-flex items-center gap-2 transition-colors hover:text-[#FF6670]"
            >
              <Phone size={15} className="text-[#FF6670]" />
              (61) 3334-1386
            </a>

            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-[#FF6670]" />
              Recanto das Emas - DF
            </span>
          </div>
        </motion.div>

        {/* Painel de informações */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            ...transition,
            delay: reduceMotion ? 0 : 0.12,
          }}
          className="mx-auto w-full max-w-[390px] lg:ml-auto lg:mr-0"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/25 bg-[#102C50]/65 p-4 shadow-[0_20px_55px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-5">
            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#D92332]/20 blur-3xl" />

            <div className="relative">
              {/* Identificação */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D92332] text-white shadow-lg">
                  <HeartPulse size={23} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-100">
                    Drogaria Potiguar
                  </p>
                  <h2 className="mt-0.5 text-lg font-extrabold text-white">
                    Conte com a gente
                  </h2>
                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-100 sm:text-sm">
                Praticidade e atendimento para facilitar seu dia a dia.
              </p>

              <div className="my-4 h-px bg-white/15" />

              {/* Horários */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.08] p-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#FF6670]">
                    <Clock3 size={19} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-white">
                      Atendimento presencial
                    </p>
                    <p className="mt-0.5 text-base font-extrabold text-white">
                      08h às 22h
                    </p>
                    <p className="text-[10px] text-blue-100">
                      Segunda a domingo
                    </p>
                  </div>

                  <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[9px] font-bold text-emerald-200">
                    Diário
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.08] p-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#FF6670]">
                    <MessageCircle size={18} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-white">
                      Atendimento on-line
                    </p>
                    <p className="mt-0.5 text-base font-extrabold text-white">
                      08h às 23h30
                    </p>
                    <p className="text-[10px] text-blue-100">
                      Segunda a domingo
                    </p>
                  </div>

                  <span className="rounded-full bg-blue-400/15 px-2 py-1 text-[9px] font-bold text-blue-100">
                    Diário
                  </span>
                </div>
              </div>

              <p className="mt-2.5 text-[10px] leading-4 text-slate-300">
                Os horários podem sofrer alterações em feriados e datas
                especiais. Consulte a equipe para confirmar.
              </p>

              {/* Serviços */}
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <div className="rounded-xl border border-white/10 bg-white/[0.07] p-3">
                  <Truck size={19} className="text-[#FF6670]" />
                  <p className="mt-2 text-xs font-bold text-white">Entrega</p>
                  <p className="mt-0.5 text-[10px] leading-4 text-blue-100">
                    Consulte a disponibilidade
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.07] p-3">
                  <ShieldCheck size={19} className="text-[#FF6670]" />
                  <p className="mt-2 text-xs font-bold text-white">
                    Atendimento
                  </p>
                  <p className="mt-0.5 text-[10px] leading-4 text-blue-100">
                    Fale com nossa equipe
                  </p>
                </div>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex min-h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-xs font-bold text-[#073B24] transition-colors hover:bg-[#20BD5A] hover:text-white"
              >
                <MessageCircle size={16} />
                Fale com a Drogaria
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
