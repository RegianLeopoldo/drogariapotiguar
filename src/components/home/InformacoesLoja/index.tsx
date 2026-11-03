"use client";

import {
  Accessibility,
  Truck,
  Clock3,
  Smartphone,
  Banknote,
  CreditCard,
  Wallet,
  Check,
  ArrowRight,
} from "lucide-react";

import { motion, useReducedMotion } from "motion/react";

const informacoes = [
  {
    titulo: "Acessibilidade",
    subtitulo: "Conforto para receber você",
    descricao:
      "Uma estrutura preparada para proporcionar mais comodidade e acessibilidade durante sua visita.",
    icon: Accessibility,
    itens: ["Entrada acessível para cadeirantes", "Estacionamento acessível"],
  },
  {
    titulo: "Opções de serviço",
    subtitulo: "Escolha como comprar",
    descricao:
      "Mais flexibilidade para você escolher a maneira mais conveniente de receber seus produtos.",
    icon: Truck,
    itens: ["Entrega", "Retirada diretamente na loja"],
  },
  {
    titulo: "Planejamento",
    subtitulo: "Praticidade no seu dia",
    descricao:
      "Um atendimento pensado para facilitar sua rotina e tornar sua visita mais prática.",
    icon: Clock3,
    itens: ["Atendimento todos os dias", "Visita rápida"],
  },
  {
    titulo: "Formas de pagamento",
    subtitulo: "Liberdade para escolher",
    descricao:
      "Diversas opções para oferecer mais comodidade na hora de finalizar suas compras.",
    icon: Wallet,
    itens: [
      "Pix",
      "Dinheiro",
      "Cartões de crédito e débito",
      "Pagamento por aproximação (NFC)",
    ],
  },
];

const paymentMethods = [
  { icon: Smartphone, label: "Pix" },
  { icon: Banknote, label: "Dinheiro" },
  { icon: CreditCard, label: "Crédito e débito" },
  { icon: Wallet, label: "Aproximação" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function InformacoesLoja() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="informacoes-heading"
      className="relative isolate overflow-hidden bg-[#F8FAFD] py-16 sm:py-20 lg:py-24"
    >
      {/* Detalhes sutis de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-[#174D9A]/[0.035] blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-48 -z-10 h-[420px] w-[420px] rounded-full bg-[#D92332]/[0.025] blur-[100px]"
      />

      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Cabeçalho */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="mb-12 grid grid-cols-1 items-end gap-5 sm:mb-14 lg:mb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="h-[2px] w-7 rounded-full bg-[#D92332]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#174D9A] sm:text-xs">
                Drogaria Potiguar
              </span>
            </div>

            <h2
              id="informacoes-heading"
              className="mt-4 text-[30px] font-bold leading-[1.15] tracking-[-0.04em] text-[#142B49] sm:text-4xl lg:text-[42px] xl:text-5xl"
            >
              Uma experiência mais
              <span className="mt-1 block text-[#174D9A]">
                simples e conveniente.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-justify text-[13px] leading-7 text-slate-500 sm:text-sm lg:ml-auto lg:pb-1">
            Conheça os serviços, as comodidades e as opções disponíveis para
            tornar sua experiência na Drogaria Potiguar ainda melhor.
          </p>
        </motion.div>

        {/* Informações da loja */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={shouldReduceMotion ? undefined : containerVariants}
          className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-7 xl:gap-x-10"
        >
          {informacoes.map((grupo) => {
            const Icon = grupo.icon;

            return (
              <motion.article
                key={grupo.titulo}
                variants={shouldReduceMotion ? undefined : itemVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -5,
                        transition: {
                          duration: 0.25,
                          ease: "easeOut",
                        },
                      }
                }
                className="group relative flex h-full flex-col border-t border-slate-200/90 py-7 sm:py-8 lg:py-9"
              >
                {/* Ícone */}
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: 1.08,
                            rotate: -5,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 15,
                            },
                          }
                    }
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#174D9A]/10 bg-white text-[#174D9A] shadow-[0_3px_12px_rgba(23,77,154,0.045)] transition-colors duration-300 group-hover:border-[#174D9A]/20 group-hover:bg-[#174D9A] group-hover:text-white"
                  >
                    <Icon size={23} strokeWidth={1.65} />
                  </motion.div>

                  <ArrowRight
                    size={17}
                    strokeWidth={1.6}
                    className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#174D9A]"
                  />
                </div>

                {/* Títulos */}
                <h3 className="mt-6 text-[17px] font-bold tracking-tight text-[#142B49] sm:text-lg">
                  {grupo.titulo}
                </h3>

                <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.09em] text-[#174D9A] sm:text-xs">
                  {grupo.subtitulo}
                </p>

                {/* Descrição */}
                <p className="mt-4 text-justify text-[13px] leading-[1.8] text-slate-500 sm:text-sm">
                  {grupo.descricao}
                </p>

                {/* Divisor */}
                <div className="my-5 h-px w-full bg-gradient-to-r from-slate-200 via-slate-200/70 to-transparent" />

                {/* Lista */}
                <ul className="flex-1 space-y-3.5">
                  {grupo.itens.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[12px] leading-[1.7] text-slate-600 sm:text-[13px]"
                    >
                      <span className="mt-0.5 flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full bg-[#174D9A]/[0.07] text-[#174D9A]">
                        <Check size={10} strokeWidth={2.8} />
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Detalhe inferior */}
                <div className="mt-7 h-[2px] w-9 rounded-full bg-[#174D9A]/20 transition-all duration-500 group-hover:w-16 group-hover:bg-[#D92332]" />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Formas de pagamento */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: shouldReduceMotion ? 0 : 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-7 flex flex-col gap-6 border-t border-slate-200/90 pt-7 sm:mt-9 sm:pt-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
        >
          <div className="max-w-sm">
            <h3 className="text-sm font-bold tracking-tight text-[#142B49] sm:text-base">
              Pague como preferir.
            </h3>

            <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-[13px]">
              Diferentes opções para facilitar suas compras.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-5 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4 lg:justify-end lg:gap-x-9">
            {paymentMethods.map((method) => {
              const Icon = method.icon;

              return (
                <div key={method.label} className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#174D9A] ring-1 ring-slate-200/80">
                    <Icon size={17} strokeWidth={1.7} />
                  </div>

                  <span className="text-xs font-semibold text-slate-600 sm:text-[13px]">
                    {method.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Assinatura visual */}
        <div className="mt-10 flex items-center justify-center gap-2 sm:mt-12">
          <span className="h-1 w-1 rounded-full bg-[#D92332]" />
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
            Drogaria Potiguar · Recanto das Emas · DF
          </span>
          <span className="h-1 w-1 rounded-full bg-[#174D9A]" />
        </div>
      </div>
    </section>
  );
}
