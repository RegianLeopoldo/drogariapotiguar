"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  ArrowUp,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

interface FooterProps {
  whatsappLink: string;
}

const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=Drogaria+Potiguar+Q+605+Conjunto+03+Lote+12+Recanto+das+Emas+Brasilia+DF";

export default function Footer({ whatsappLink }: FooterProps) {
  const shouldReduceMotion = useReducedMotion();

  const navigation = [
    { label: "Início", href: "#inicio" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Categorias", href: "#categorias" },
    { label: "Sobre a loja", href: "#sobre" },
    { label: "Localização", href: "#localizacao" },
    { label: "Contato", href: "#contato" },
  ];

  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative overflow-hidden bg-[#102D54] text-white">
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#174D9A]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-[#D92332]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-10 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-[1.3fr_0.8fr_1fr] lg:gap-16 lg:py-20"
        >
          {/* Identidade */}
          <div>
            <Link
              href="#inicio"
              aria-label="Drogaria Potiguar - início"
              className="inline-flex flex-col overflow-hidden rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <span className="bg-[#D92332] px-4 py-1.5 text-lg font-black tracking-[0.12em] text-white">
                DROGARIA
              </span>
              <span className="bg-[#174D9A] px-4 py-1.5 text-lg font-black tracking-[0.12em] text-white">
                POTIGUAR
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-justify text-sm leading-7 text-white/65">
              Sua drogaria no Recanto das Emas, em Brasília. Consulte nossos
              serviços, horários e entre em contato sempre que precisar.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BD5A]"
            >
              <MessageCircle size={18} />
              Fale pelo WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.12em] text-white">
              Navegação
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-white/65 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.12em] text-white">
              Informações da loja
            </h3>

            <div className="mt-5 space-y-5">
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <MapPin size={19} className="mt-0.5 shrink-0 text-[#FF727C]" />
                <span className="text-sm leading-6 text-white/65 transition-colors group-hover:text-white">
                  Q 605, Conjunto 03, Lote 12
                  <br />
                  Recanto das Emas, Brasília - DF
                  <br />
                  CEP 72641-103
                </span>
              </a>

              <a
                href="tel:+556133341386"
                className="group flex items-center gap-3"
              >
                <Phone size={18} className="shrink-0 text-[#FF727C]" />
                <span className="text-sm text-white/65 transition-colors group-hover:text-white">
                  (61) 3334-1386
                </span>
              </a>

              <div className="flex items-start gap-3">
                <Clock3 size={19} className="mt-0.5 shrink-0 text-[#FF727C]" />
                <div className="text-sm leading-6 text-white/65">
                  <p>Presencial: 08h às 22h</p>
                  <p>On-line: 08h às 23h30</p>
                  <p className="mt-1 text-xs text-white/40">
                    Segunda a domingo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Linha inferior */}
        <div className="relative flex flex-col gap-3 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs leading-5 text-white/45 sm:text-left">
            © {currentYear ?? "2026"} Drogaria Potiguar. Todos os direitos
            reservados.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
            <p className="text-xs text-white/50">
              Site desenvolvido por{" "}
              <a
                href="https://regian-portfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conheça o trabalho de Regian Leopoldo Vieira"
                className="font-semibold text-white/75 underline decoration-white/30 underline-offset-4 transition-colors hover:text-cyan-300 hover:decoration-cyan-300"
              >
                Regian Leopoldo Vieira
              </a>
            </p>

            <a
              href="#inicio"
              aria-label="Voltar ao início"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] text-white/80 transition-all hover:-translate-y-1 hover:bg-white/10 hover:text-white"
            >
              <ArrowUp size={19} />
            </a>
          </div>
        </div>
      </div>

      {/* Faixa de identidade */}
      <div className="h-1 w-full bg-gradient-to-r from-[#D92332] via-[#F04452] to-[#174D9A]" />
    </footer>
  );
}
