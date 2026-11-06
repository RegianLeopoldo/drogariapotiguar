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
} from "lucide-react";

import { motion, useReducedMotion } from "motion/react";

const paymentMethods = [
  { icon: Smartphone, label: "Pix" },
  { icon: Banknote, label: "Dinheiro" },
  { icon: CreditCard, label: "Crédito e débito" },
  { icon: Wallet, label: "Aproximação" },
];

const informations = [
  {
    icon: Accessibility,
    title: "Acessibilidade",
    description: "Mais comodidade durante sua visita.",
    details: ["Entrada acessível para cadeirantes", "Estacionamento acessível"],
  },
  {
    icon: Truck,
    title: "Opções de serviço",
    description: "Escolha como prefere fazer suas compras.",
    details: ["Entrega", "Retirada diretamente na loja"],
  },
  {
    icon: Clock3,
    title: "Atendimento",
    description: "Estamos disponíveis todos os dias.",
    details: ["Presencial: 08h às 22h"],
  },
];

export default function InformacoesLoja() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-[76px] lg:py-20">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        {/* Cabeçalho */}
        <motion.header
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="mb-11 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#174D9A]">
              Drogaria Potiguar
            </span>

            <h2 className="mt-3 text-[1.8rem] font-semibold tracking-[-0.04em] text-[#142B49] sm:text-3xl lg:text-[2.15rem]">
              Praticidade em cada detalhe.
            </h2>
          </div>

          <p className="max-w-[410px] text-sm leading-7 text-slate-500 sm:text-right">
            Mais comodidade para suas compras e para o seu dia a dia.
          </p>
        </motion.header>

        {/* Informações */}
        <div className="grid gap-9 border-y border-slate-200 py-9 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-12">
          {informations.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 12,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : index * 0.07,
                }}
                className="min-w-0"
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    size={19}
                    strokeWidth={1.7}
                    className="shrink-0 text-[#174D9A]"
                  />

                  <h3 className="text-lg font-semibold tracking-tight text-[#142B49]">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-2.5 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-[13px] leading-5 text-slate-700"
                    >
                      <Check
                        size={15}
                        strokeWidth={1.8}
                        className="mt-0.5 shrink-0 text-[#174D9A]"
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* Formas de pagamento */}
        <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-[#142B49]">
              Formas de pagamento
            </h3>

            <p className="mt-1.5 text-sm text-slate-500">
              Escolha a opção mais conveniente.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-4">
            {paymentMethods.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon size={18} strokeWidth={1.7} className="text-[#174D9A]" />

                <span className="text-sm font-medium text-slate-600">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
