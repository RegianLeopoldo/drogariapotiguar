"use client";

import { Accessibility, CreditCard, HeartHandshake, Truck } from "lucide-react";

import { motion, useReducedMotion } from "motion/react";

const benefits = [
  {
    icon: Truck,
    title: "Entrega e comodidade",
    description: "Consulte as opções de entrega.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    description: "Conte com nossa equipe.",
  },
  {
    icon: Accessibility,
    title: "Espaço acessível",
    description: "Entrada e estacionamento acessíveis.",
  },
  {
    icon: CreditCard,
    title: "Pagamento facilitado",
    description: "Cartões e pagamento por aproximação.",
  },
];

export default function Benefits() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Diferenciais da Drogaria Potiguar"
      className="relative border-y border-slate-100 bg-white"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#174D9A]/25 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className={`flex items-center gap-4 ${
                  index > 0 ? "lg:border-l lg:border-slate-200 lg:pl-7" : ""
                } ${index < benefits.length - 1 ? "lg:pr-5" : ""}`}
              >
                <div className="shrink-0 text-[#174D9A]">
                  <Icon size={25} strokeWidth={1.45} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-[13px] font-semibold tracking-tight text-slate-800 sm:text-sm">
                    {benefit.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-slate-100" />
    </section>
  );
}
