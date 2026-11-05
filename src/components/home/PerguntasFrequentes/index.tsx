"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ChevronDown,
  Clock3,
  MapPin,
  Truck,
  PackageCheck,
  MessageCircle,
  Phone,
  Plus,
  Sparkles,
} from "lucide-react";

const perguntas = [
  {
    pergunta: "Qual é o horário de funcionamento?",
    resposta:
      "A Drogaria Potiguar funciona todos os dias, das 8h às 22h. Nosso atendimento online pelo WhatsApp está disponível das 8h às 23h30. Em feriados, os horários podem sofrer alterações.",
    icon: Clock3,
  },
  {
    pergunta: "Onde fica a Drogaria Potiguar?",
    resposta:
      "Estamos na Q 605, Conjunto 03, Lote 12, Recanto das Emas, Brasília – DF, CEP 72641-103. Você pode utilizar o botão de localização do site para abrir a rota no Google Maps.",
    icon: MapPin,
  },
  {
    pergunta: "A drogaria realiza entregas?",
    resposta:
      "Sim! Consulte pelo WhatsApp a disponibilidade de entrega para seu endereço, as condições e possíveis taxas.",
    icon: Truck,
  },
  {
    pergunta: "Posso retirar meu pedido na drogaria?",
    resposta:
      "Sim, você pode consultar a disponibilidade do produto e combinar a retirada diretamente com nossa equipe.",
    icon: PackageCheck,
  },
  {
    pergunta: "Como consultar a disponibilidade de um produto?",
    resposta:
      "Entre em contato pelo WhatsApp e informe o nome do produto que procura. Nossa equipe poderá verificar a disponibilidade e fornecer mais informações.",
    icon: MessageCircle,
  },
  {
    pergunta: "Como entrar em contato com a Drogaria Potiguar?",
    resposta:
      "Você pode falar conosco pelo WhatsApp ou ligar para (61) 3334-1386. Nossa equipe está à disposição para ajudar.",
    icon: Phone,
  },
];

export default function PerguntasFrequentes() {
  const [aberta, setAberta] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="perguntas-frequentes"
      className="relative isolate overflow-hidden bg-[#F4F7FB] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      {/* Luzes decorativas */}
      <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-[#174D9A]/[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-[#D92332]/[0.045] blur-[100px]" />

      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          {/* Coluna de apresentação */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:sticky lg:top-24"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#174D9A]/10 bg-white px-3.5 py-2 shadow-sm">
              <Sparkles size={14} className="text-[#D92332]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#174D9A]">
                Central de ajuda
              </span>
            </div>

            <h2 className="max-w-md text-[34px] font-bold leading-[1.16] tracking-[-0.055em] text-[#142B49] sm:text-[42px] lg:text-[48px]">
              Dúvidas?
              <br />
              <span className="font-semibold text-[#174D9A]">
                Conte com a gente.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500 sm:text-base">
              Reunimos algumas informações para facilitar seu atendimento e
              deixar tudo mais simples na hora de cuidar de você.
            </p>

            {/* Cartão de contato */}
            <div className="group relative mt-9 overflow-hidden rounded-2xl bg-[#142B49] p-6 shadow-[0_18px_45px_rgba(20,43,73,0.16)] sm:p-7">
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/[0.08] transition-transform duration-700 group-hover:scale-125" />
              <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full border border-white/[0.08]" />

              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/10">
                  <MessageCircle size={21} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  Precisa de mais informações?
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/65">
                  Nossa equipe está pronta para atender você pelo WhatsApp.
                </p>

                <a
                  href="https://wa.me/556133341386"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#D92332] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#BD1C2B] hover:shadow-[0_10px_25px_rgba(217,35,50,0.25)]"
                >
                  Falar com a equipe
                  <MessageCircle size={17} />
                </a>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 px-1">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#174D9A] shadow-sm">
                <Phone size={16} />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Telefone
                </span>
                <span className="text-sm font-bold text-[#142B49]">
                  (61) 3334-1386
                </span>
              </div>
            </div>
          </motion.div>

          {/* Coluna das perguntas */}
          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Perguntas e respostas
              </span>
              {/*<span className="rounded-full border border-[#174D9A]/10 bg-white px-3 py-1.5 text-[11px] font-bold text-[#174D9A]">
                {String(perguntas.length).padStart(2, "0")} perguntas
              </span>*/}
            </div>

            <div className="space-y-3">
              {perguntas.map((item, index) => {
                const Icon = item.icon;
                const isOpen = aberta === index;

                return (
                  <motion.div
                    key={item.pergunta}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{
                      duration: 0.5,
                      delay: shouldReduceMotion ? 0 : index * 0.055,
                    }}
                    className={`group relative overflow-hidden rounded-xl border bg-white transition-all duration-300 ${
                      isOpen
                        ? "border-[#174D9A]/20 shadow-[0_12px_32px_rgba(20,43,73,0.075)]"
                        : "border-slate-200/80 shadow-[0_3px_12px_rgba(20,43,73,0.025)] hover:-translate-y-0.5 hover:border-[#174D9A]/20 hover:shadow-md"
                    }`}
                  >
                    {/* Linha de destaque */}
                    <motion.div
                      initial={false}
                      animate={{
                        scaleY: isOpen ? 1 : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 top-0 w-[3px] origin-top bg-[#D92332]"
                    />

                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setAberta(isOpen ? null : index)}
                      className="flex w-full items-center gap-4 px-4 py-[18px] text-left sm:px-5"
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                          isOpen
                            ? "bg-[#174D9A] text-white shadow-md shadow-[#174D9A]/20"
                            : "bg-[#F0F4FA] text-[#174D9A] group-hover:bg-[#E8EEF8]"
                        }`}
                      >
                        <Icon size={18} strokeWidth={1.8} />
                      </span>

                      <span className="flex-1 text-[13px] font-bold leading-6 text-[#142B49] sm:text-[14px]">
                        {item.pergunta}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "bg-[#D92332] text-white"
                            : "bg-slate-100 text-slate-500 group-hover:bg-[#174D9A] group-hover:text-white"
                        }`}
                      >
                        <motion.span
                          animate={{
                            rotate: isOpen ? 45 : 0,
                          }}
                          transition={{ duration: 0.25 }}
                          className="flex"
                        >
                          <Plus size={17} />
                        </motion.span>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${index}`}
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.3,
                            ease: "easeInOut",
                          }}
                          className="overflow-hidden"
                        >
                          <div className="ml-[60px] mr-4 border-t border-slate-100 pb-5 pt-4 sm:ml-[68px] sm:mr-5">
                            <p className="text-[13px] leading-[1.85] text-slate-500 sm:text-sm">
                              {item.resposta}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            <p className="mt-5 text-center text-[11px] leading-5 text-slate-400 sm:text-right">
              Não encontrou o que procura? Entre em contato com nossa equipe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
