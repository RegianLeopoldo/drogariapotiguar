"use client";

import {
  ArrowUpRight,
  Baby,
  HeartPulse,
  Leaf,
  Sparkles,
  SprayCan,
  Stethoscope,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const WHATSAPP_NUMBER = "556133341386";

const categories = [
  {
    id: "dermocosmeticos",
    title: "Dermocosméticos",
    description: "Cuidados com a pele, beleza e proteção diária.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "vitaminas",
    title: "Vitaminas e suplementos",
    description: "Opções de suplementação e cuidados com o bem-estar.",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "higiene",
    title: "Higiene pessoal",
    description: "Produtos essenciais para sua rotina de cuidados.",
    icon: SprayCan,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "mamae-bebe",
    title: "Mamãe e bebê",
    description: "Cuidados para acompanhar diferentes fases da família.",
    icon: Baby,
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "cabelos",
    title: "Cuidados com os cabelos",
    description: "Produtos para hidratação, tratamento e cuidado capilar.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: "saude",
    title: "Cuidados e saúde",
    description: "Itens para cuidados pessoais e bem-estar diário.",
    icon: Stethoscope,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&q=85",
  },
];

export default function Categories() {
  const reduceMotion = useReducedMotion();

  function getWhatsAppLink(category?: string) {
    const message = category
      ? `Olá! Gostaria de consultar os produtos da categoria ${category}.\n\n(Acesso pelo site)`
      : "Olá! Gostaria de consultar os produtos disponíveis.\n\n(Acesso pelo site)";

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  return (
    <section
      id="categorias"
      aria-labelledby="categories-heading"
      className="relative overflow-hidden bg-gradient-to-br from-[#102744] via-[#174D7A] to-[#0B1B32] py-14 sm:py-16 lg:py-20"
    >
      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[440px] w-[440px] rounded-full border border-white/[0.055]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full border border-white/[0.055]" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#174D9A]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho editorial */}
        <div className="mb-9 flex flex-col justify-between gap-5 border-b border-white/10 pb-7 sm:mb-11 sm:pb-9 lg:flex-row lg:items-end">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#D92332]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-200">
                Drogaria Potiguar
              </span>
            </div>

            <h2
              id="categories-heading"
              className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[46px]"
            >
              Tudo o que faz parte
              <span className="block text-blue-300">
                do seu cuidado diário.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-md text-sm leading-6 text-slate-300 sm:text-[15px]"
          >
            Conheça algumas das categorias da Drogaria Potiguar. Nossa equipe
            está disponível para ajudar você a consultar os produtos.
          </motion.p>
        </div>

        {/* Categorias em painéis horizontais */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.id}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : (index % 2) * 0.08,
                }}
                className="group flex min-h-[142px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.055] transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.09] sm:min-h-[158px]"
              >
                {/* Fotografia */}
                <div className="relative w-[35%] shrink-0 overflow-hidden sm:w-[36%]">
                  <div
                    role="img"
                    aria-label={`Imagem ilustrativa de ${category.title}`}
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url("${category.image}")` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#102744]/20" />
                </div>

                {/* Texto e ação */}
                <div className="flex min-w-0 flex-1 flex-col justify-center p-3.5 sm:p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <Icon
                      size={16}
                      strokeWidth={1.8}
                      className="shrink-0 text-blue-300"
                    />
                    <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-blue-200/75 sm:text-[10px]">
                      
                    </span>
                  </div>

                  <h3 className="text-[15px] font-semibold leading-snug text-white sm:text-lg">
                    {category.title}
                  </h3>

                  <p className="mt-1.5 line-clamp-2 text-[11px] leading-[1.55] text-slate-300 sm:text-[13px] sm:leading-5">
                    {category.description}
                  </p>

                  <a
                    href={getWhatsAppLink(category.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consultar ${category.title} pelo WhatsApp`}
                    className="mt-3 inline-flex w-fit items-center gap-2 text-[11px] font-semibold text-blue-200 transition-colors hover:text-white sm:text-xs"
                  >
                    Consultar produtos
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Chamada de contato */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-col gap-5 rounded-xl border border-white/10 bg-white/[0.07] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D92332] text-white">
              <HeartPulse size={21} />
            </div>

            <div>
              <h3 className="text-base font-semibold text-white">
                Precisa de ajuda para encontrar um produto?
              </h3>
              <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                Converse diretamente com nossa equipe.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#174D9A] transition-colors hover:bg-blue-50"
          >
            Falar com a equipe
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

        <p className="mt-5 text-center text-[11px] text-slate-400">
          Imagens ilustrativas. Consulte a equipe sobre disponibilidade dos
          produtos.
        </p>
      </div>
    </section>
  );
}
