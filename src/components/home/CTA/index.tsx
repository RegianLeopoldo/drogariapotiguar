"use client";

import {
  ArrowUpRight,
  Clock3,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

interface CTAProps {
  whatsappLink: string;
}

export default function CTA({ whatsappLink }: CTAProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[28px] bg-[#174D9A] px-6 py-12 shadow-[0_20px_60px_rgba(23,77,154,0.18)] sm:rounded-[36px] sm:px-10 sm:py-14 lg:px-16 lg:py-16"
        >
          {/* Elementos decorativos */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[35px] border-white/[0.045]" />
          <div className="pointer-events-none absolute -bottom-36 -left-20 h-80 w-80 rounded-full bg-[#D92332]/20 blur-3xl" />
          <div className="pointer-events-none absolute right-1/3 top-0 h-full w-px bg-white/[0.06]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
            {/* Texto */}
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/90 sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-[#F04452]" />
                Estamos aqui para ajudar
              </span>

              <h2 className="mt-5 text-[29px] font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[46px]">
                Precisa de ajuda?
                <span className="block text-[#FFB9BE]">Fale com a gente!</span>
              </h2>

              <p className="mt-4 max-w-xl text-justify text-[13px] leading-6 text-white/75 sm:text-sm sm:leading-7">
                Entre em contato com a Drogaria Potiguar para esclarecer suas
                dúvidas e obter informações sobre nossos serviços. Nossa equipe
                está pronta para atender você.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                <div className="flex items-center gap-2 text-xs font-medium text-white/80 sm:text-sm">
                  <Clock3 size={17} className="text-[#FFB9BE]" />
                  Atendimento presencial até 22h
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-white/80 sm:text-sm">
                  <ShieldCheck size={17} className="text-[#FFB9BE]" />
                  Atendimento próximo
                </div>
              </div>
            </div>

            {/* Ações */}
            <div className="flex w-full flex-col gap-3 lg:w-[260px]">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[54px] items-center justify-between gap-3 rounded-2xl bg-[#25D366] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#20BD5A] hover:shadow-xl"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle size={21} />
                  Falar pelo WhatsApp
                </span>
                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="tel:+556133341386"
                className="group flex min-h-[54px] items-center justify-between gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <span className="flex items-center gap-3">
                  <Phone size={20} />
                  Ligar para a loja
                </span>
                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <p className="mt-1 text-center text-[11px] text-white/55">
                (61) 3334-1386
              </p>
            </div>
          </div>

          {/* Detalhe inferior */}
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#D92332] via-[#F04452] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
