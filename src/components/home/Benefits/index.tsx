"use client";

import {
  Accessibility,
  ArrowUpRight,
  CreditCard,
  HeartHandshake,
  Truck,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const benefits = [
  {
    icon: Truck,
    title: "Mais praticidade",
    description:
      "Consulte as opções de entrega disponíveis para receber seus produtos.",
    color: "blue",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento próximo",
    description:
      "Entre em contato com a equipe para tirar dúvidas e obter informações.",
    color: "red",
  },
  {
    icon: Accessibility,
    title: "Acessibilidade",
    description: "Entrada e estacionamento acessíveis para maior comodidade.",
    color: "blue",
  },
  {
    icon: CreditCard,
    title: "Facilidade no pagamento",
    description:
      "Consulte as opções de pagamento com cartão e por aproximação.",
    color: "red",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

export default function Benefits() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="benefits-heading"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#174D9A]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#D92332]/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-14 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#D92332]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#174D9A] sm:text-xs">
              Nossos diferenciais
            </span>
          </div>

          <h2
            id="benefits-heading"
            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#172B4D] sm:text-4xl lg:text-[42px]"
          >
            Cuidado e praticidade
            <span className="mt-1 block text-[#174D9A]">
              para o seu dia a dia.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-justify text-sm leading-7 text-slate-500 sm:text-base">
            Mais comodidade para você encontrar informações, conhecer nossos
            serviços e entrar em contato com a Drogaria Potiguar.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={shouldReduceMotion ? undefined : containerVariants}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            const isBlue = benefit.color === "blue";

            return (
              <motion.article
                key={benefit.title}
                variants={shouldReduceMotion ? undefined : itemVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -5,
                        transition: { duration: 0.22 },
                      }
                }
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_5px_24px_rgba(15,23,42,0.035)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_18px_42px_rgba(15,23,42,0.085)] sm:rounded-3xl sm:p-7"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                    isBlue ? "bg-[#174D9A]" : "bg-[#D92332]"
                  }`}
                />

                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
                      isBlue
                        ? "bg-[#174D9A]/[0.07] text-[#174D9A] group-hover:bg-[#174D9A] group-hover:text-white"
                        : "bg-[#D92332]/[0.07] text-[#D92332] group-hover:bg-[#D92332] group-hover:text-white"
                    }`}
                  >
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
                      isBlue
                        ? "text-[#174D9A]/40 group-hover:bg-[#174D9A]/[0.07] group-hover:text-[#174D9A]"
                        : "text-[#D92332]/40 group-hover:bg-[#D92332]/[0.07] group-hover:text-[#D92332]"
                    }`}
                  >
                    <ArrowUpRight size={19} strokeWidth={1.8} />
                  </div>
                </div>

                <h3 className="mt-7 text-lg font-bold tracking-tight text-[#172B4D]">
                  {benefit.title}
                </h3>

                <p className="mt-2 flex-1 text-justify text-[13px] leading-5 text-slate-500 sm:text-sm sm:leading-6 lg:text-[13px] lg:leading-5 xl:text-sm xl:leading-6">
                  {benefit.description}
                </p>

                <div
                  className={`mt-6 h-px w-full ${
                    isBlue ? "bg-[#174D9A]/10" : "bg-[#D92332]/10"
                  }`}
                />

                <div className="mt-4 flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isBlue ? "bg-[#174D9A]" : "bg-[#D92332]"
                    }`}
                  />

                  <span className="text-xs font-semibold tracking-wide text-slate-500">
                    Drogaria Potiguar
                  </span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
