"use client";

import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

interface FloatingWhatsAppProps {
  whatsappLink: string;
}

export default function FloatingWhatsApp({
  whatsappLink,
}: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed bottom-5 right-4 z-[100] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {/* Cartão de contato */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.95 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              shouldReduceMotion
                ? undefined
                : { opacity: 0, y: 12, scale: 0.95 }
            }
            transition={{ duration: 0.2 }}
            className="w-[min(310px,calc(100vw-32px))] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.18)]"
          >
            {/* Cabeçalho */}
            <div className="flex items-center justify-between bg-[#174D9A] px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                  <FaWhatsapp size={23} />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Drogaria Potiguar
                  </p>
                  <p className="text-xs text-white/70">
                    Atendimento pelo WhatsApp
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar janela de contato"
                className="rounded-lg p-2 text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Conteúdo */}
            <div className="p-4">
              <p className="text-sm leading-6 text-slate-600">
                Olá! Precisa de alguma informação? Entre em contato com nossa
                equipe.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#20BD5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
              >
                <FaWhatsapp size={19} />
                Iniciar conversa
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante */}
      <motion.button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={
          isOpen ? "Fechar contato do WhatsApp" : "Abrir contato do WhatsApp"
        }
        aria-expanded={isOpen}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_rgba(37,211,102,0.4)] transition-shadow hover:shadow-[0_10px_35px_rgba(37,211,102,0.5)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30 sm:h-16 sm:w-16"
      >
        {!shouldReduceMotion && !isOpen && (
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30" />
        )}

        <span className="relative">
          {isOpen ? <X size={25} /> : <FaWhatsapp size={32} />}
        </span>
      </motion.button>
    </div>
  );
}
