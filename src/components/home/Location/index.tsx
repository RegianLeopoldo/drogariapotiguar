"use client";

import {
  Clock3,
  MapPin,
  Navigation,
  Phone,
  Store,
  Monitor,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const address =
  "Q 605, Conjunto 03, Lote 12 - Recanto das Emas, Brasília - DF, 72641-103";

const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=Drogaria+Potiguar+Q+605+Conjunto+03+Lote+12+Recanto+das+Emas+Brasilia+DF";

const mapEmbed =
  "https://maps.google.com/maps?q=Drogaria%20Potiguar%2C%20Q%20605%20Conjunto%2003%20Lote%2012%2C%20Recanto%20das%20Emas%2C%20Brasilia%20DF&output=embed";

export default function Location() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    initial: shouldReduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  return (
    <section
      id="localizacao"
      className="relative overflow-hidden bg-[#F7F9FC] py-16 sm:py-20 lg:py-24"
    >
      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#174D9A]/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#D92332]/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}

        <motion.div
          {...reveal}
          className="mx-auto mb-8 max-w-3xl px-3 text-center sm:mb-11 sm:px-0 lg:mb-12"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#174D9A] sm:text-[11px]">
            Nossa localização
          </span>

          <h2 className="mt-3 text-[1.7rem] font-semibold leading-[1.14] tracking-[-0.045em] text-[#142B49] sm:text-3xl md:text-4xl lg:text-[42px]">
            Sua farmácia, mais perto de você.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-slate-500 sm:mt-4 sm:text-sm sm:leading-7">
            Estamos no Recanto das Emas, em Brasília. Consulte nossa localização
            e encontre o melhor caminho para chegar até nós.
          </p>
        </motion.div>

        {/* Conteúdo */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Informações */}
          <motion.div {...reveal} className="flex flex-col gap-4">
            {/* Endereço */}
            <div className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_rgba(20,43,73,0.05)] sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#174D9A]/[0.08] text-[#174D9A]">
                  <MapPin size={21} />
                </div>

                <div>
                  <h3 className="font-bold text-[#142B49]">Nosso endereço</h3>
                  <p className="text-xs text-slate-400">
                    Recanto das Emas · Brasília/DF
                  </p>
                </div>
              </div>

              <p className="mt-5 text-justify text-sm leading-6 text-slate-600">
                {address}
              </p>

              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#174D9A] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123D7B] hover:shadow-lg hover:shadow-[#174D9A]/20"
              >
                <Navigation size={17} />
                Ver rota no Google Maps
              </a>
            </div>

            {/* Horários */}
            <div className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_rgba(20,43,73,0.05)] sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#D92332]/[0.08] text-[#D92332]">
                  <Clock3 size={21} />
                </div>

                <div>
                  <h3 className="font-bold text-[#142B49]">
                    Horários de atendimento
                  </h3>
                  <p className="text-xs text-slate-400">Segunda a domingo</p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Store size={17} className="text-[#174D9A]" />
                    <span className="text-sm font-medium text-slate-600">
                      Atendimento presencial
                    </span>
                  </div>

                  <span className="whitespace-nowrap text-sm font-bold text-[#142B49]">
                    08h às 22h
                  </span>
                </div>

                <div className="h-px bg-slate-100" />

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Monitor size={17} className="text-[#174D9A]" />
                    <span className="text-sm font-medium text-slate-600">
                      Atendimento on-line
                    </span>
                  </div>

                  <span className="whitespace-nowrap text-sm font-bold text-[#142B49]">
                    08h às 23h30
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-400">
                Os horários podem sofrer alterações em feriados.
              </p>
            </div>

            {/* Telefone */}
            <a
              href="tel:+556133341386"
              className="group flex items-center justify-between gap-3 rounded-3xl border border-[#174D9A]/10 bg-[#174D9A]/[0.045] p-5 transition-all duration-300 hover:border-[#174D9A]/25 hover:bg-[#174D9A]/[0.07] sm:p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#174D9A] shadow-sm">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Entre em contato
                  </p>
                  <p className="mt-0.5 font-bold text-[#142B49]">
                    (61) 3334-1386
                  </p>
                </div>
              </div>

              <Navigation
                size={19}
                className="text-[#174D9A] transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Mapa */}
          <motion.div
            {...reveal}
            transition={{
              duration: 0.7,
              delay: shouldReduceMotion ? 0 : 0.12,
              ease: "easeOut",
            }}
            className="min-h-[350px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-[0_12px_40px_rgba(20,43,73,0.08)] sm:min-h-[430px] lg:min-h-full"
          >
            <div className="relative h-full min-h-[334px] overflow-hidden rounded-[20px] bg-slate-100 sm:min-h-[414px] lg:min-h-full">
              <iframe
                title="Localização da Drogaria Potiguar no Google Maps"
                src={mapEmbed}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  position: "absolute",
                  inset: 0,
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/95 px-4 py-3 text-sm font-bold text-[#174D9A] shadow-lg backdrop-blur transition-all hover:bg-white sm:bottom-5 sm:left-auto sm:right-5 sm:w-auto"
              >
                <MapPin size={17} />
                Abrir mapa completo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
