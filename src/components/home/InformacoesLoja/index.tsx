"use client";

import {
  Accessibility,
  Truck,
  Clock3,
  CreditCard,
  Check,
  ArrowUpRight,
} from "lucide-react";

import { motion, useReducedMotion } from "motion/react";

const informacoes = [
  {
    titulo: "Acessibilidade",
    descricao: "Mais conforto e acessibilidade para receber você.",
    icon: Accessibility,
    destaque: "Estrutura acessível",
    itens: [
      "Entrada com acessibilidade para pessoas em cadeira de rodas",
      "Estacionamento com acessibilidade para pessoas em cadeira de rodas",
    ],
    cor: "blue",
  },
  {
    titulo: "Opções de serviço",
    descricao: "Mais praticidade para fazer suas compras.",
    icon: Truck,
    destaque: "Receba ou retire",
    itens: ["Entrega", "Retirada na loja"],
    cor: "red",
  },
  {
    titulo: "Planejamento",
    descricao: "Atendimento pensado para facilitar sua rotina.",
    icon: Clock3,
    destaque: "Praticidade no atendimento",
    itens: ["Visita rápida"],
    cor: "blue",
  },
  {
    titulo: "Pagamentos",
    descricao: "Opções para deixar sua compra mais conveniente.",
    icon: CreditCard,
    destaque: "Formas de pagamento",
    itens: [
      "Cartão de crédito",
      "Cartão de débito",
      "Pagamentos por dispositivo móvel via NFC",
      "Cartões de crédito",
    ],
    cor: "red",
  },
];

export default function InformacoesLoja() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-50/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-red-50/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto mb-9 w-full max-w-3xl px-1 text-center sm:mb-11 lg:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#174D9A]/10 bg-[#174D9A]/[0.045] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#174D9A] shadow-sm sm:px-4 sm:py-2 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D92332] sm:h-2 sm:w-2" />
              Drogaria Potiguar
            </span>

            <h2 className="mx-auto mt-4 max-w-2xl text-[26px] font-extrabold leading-[1.15] tracking-tight text-[#142B49] sm:mt-5 sm:text-3xl sm:leading-tight md:text-4xl lg:mt-4 lg:text-[38px] xl:mt-5 xl:text-[42px]">
              Tudo pensado para
              <span className="block text-[#174D9A]">facilitar sua vida.</span>
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-justify text-[13px] leading-[1.65] text-slate-500 sm:mt-4 sm:text-sm sm:leading-6 lg:mt-3 lg:text-[13px] lg:leading-[1.65] xl:mt-4 xl:text-sm xl:leading-6">
              Conheça os serviços e as comodidades disponíveis na Drogaria
              Potiguar para tornar sua experiência mais prática.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {informacoes.map((grupo, index) => {
            const Icon = grupo.icon;
            const isBlue = grupo.cor === "blue";

            return (
              <motion.article
                key={grupo.titulo}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 26,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -7,
                        transition: { duration: 0.25 },
                      }
                }
                className="group relative flex min-h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_5px_24px_rgba(15,23,42,0.045)] transition-all duration-300 hover:border-blue-200 hover:shadow-[0_20px_45px_rgba(23,77,154,0.11)] sm:p-7"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${
                    isBlue ? "bg-[#174D9A]" : "bg-[#D92332]"
                  }`}
                />

                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105 ${
                      isBlue
                        ? "bg-blue-50 text-[#174D9A] group-hover:bg-[#174D9A] group-hover:text-white"
                        : "bg-red-50 text-[#D92332] group-hover:bg-[#D92332] group-hover:text-white"
                    }`}
                  >
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#174D9A]"
                  />
                </div>

                <div className="mt-7">
                  <h3 className="text-xl font-extrabold tracking-tight text-[#142B49]">
                    {grupo.titulo}
                  </h3>

                  <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
                    {grupo.descricao}
                  </p>
                </div>

                <div className="my-5 h-px bg-slate-100" />

                <div
                  className={`mb-4 inline-flex w-fit rounded-lg px-3 py-2 text-xs font-bold ${
                    isBlue
                      ? "bg-blue-50 text-[#174D9A]"
                      : "bg-red-50 text-[#D92332]"
                  }`}
                >
                  {grupo.destaque}
                </div>

                <ul className="flex-1 space-y-4">
                  {grupo.itens.map((item, itemIndex) => (
                    <li
                      key={`${grupo.titulo}-${itemIndex}`}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        <Check size={12} strokeWidth={2.8} />
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full ${
                    isBlue ? "bg-[#174D9A]" : "bg-[#D92332]"
                  }`}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
