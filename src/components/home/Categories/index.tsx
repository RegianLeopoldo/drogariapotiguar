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
    description: "Produtos para cuidados com a pele, beleza e proteção diária.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
    color: "blue",
  },
  {
    id: "vitaminas",
    title: "Vitaminas e suplementos",
    description: "Opções de suplementação e cuidados com o bem-estar.",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=85",
    color: "red",
  },
  {
    id: "higiene",
    title: "Higiene pessoal",
    description: "Cuidados essenciais para acompanhar sua rotina.",
    icon: SprayCan,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
    color: "blue",
  },
  {
    id: "mamae-bebe",
    title: "Mamãe e bebê",
    description: "Uma seleção de cuidados para diferentes fases da família.",
    icon: Baby,
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=85",
    color: "red",
  },
  {
    id: "cabelos",
    title: "Cuidados com os cabelos",
    description: "Produtos para tratamento, hidratação e cuidado capilar.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
    color: "blue",
  },
  {
    id: "saude",
    title: "Cuidados e saúde",
    description: "Itens para cuidados pessoais e bem-estar no dia a dia.",
    icon: Stethoscope,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=85",
    color: "red",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function Categories() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="categorias"
      aria-labelledby="categories-heading"
      className="relative overflow-hidden bg-[#F7F9FC] py-14 sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#174D9A]/[0.045] blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#D92332]/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="mx-auto mb-9 w-full max-w-3xl text-center sm:mb-11 lg:mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#174D9A]/10 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#174D9A] shadow-sm sm:px-4 sm:py-2 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D92332]" />
            Drogaria Potiguar
          </span>

          <h2
            id="categories-heading"
            className="mx-auto mt-4 max-w-2xl text-[26px] font-extrabold leading-[1.15] tracking-tight text-[#142B49] sm:mt-5 sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px]"
          >
            Encontre o que você precisa
            <span className="mt-1 block text-[#174D9A]">
              em nossas categorias.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-justify text-[13px] leading-[1.65] text-slate-500 sm:mt-4 sm:text-sm sm:leading-6">
            Explore algumas categorias de produtos e entre em contato com nossa
            equipe para consultar as opções disponíveis na Drogaria Potiguar.
          </p>
        </motion.div>

        {/* Categorias */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={shouldReduceMotion ? undefined : containerVariants}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:gap-6"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isBlue = category.color === "blue";

            const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              `Olá! Gostaria de consultar os produtos da categoria ${category.title}.`,
            )}`;

            return (
              <motion.article
                key={category.id}
                variants={shouldReduceMotion ? undefined : itemVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -5,
                        transition: { duration: 0.22 },
                      }
                }
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_5px_24px_rgba(15,23,42,0.035)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_18px_42px_rgba(15,23,42,0.09)] sm:rounded-3xl"
              >
                {/* Imagem */}
                <div className="relative h-48 overflow-hidden sm:h-52 lg:h-48 xl:h-56">
                  <div
                    role="img"
                    aria-label={`Imagem ilustrativa de ${category.title}`}
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{
                      backgroundImage: `url("${category.image}")`,
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#10233F]/65 via-[#10233F]/10 to-transparent" />

                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-white/90 text-[#174D9A] shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <div className="absolute bottom-4 left-5 right-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/80">
                      Explore a categoria
                    </span>

                    <h3 className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-5 sm:p-6">
                  <p className="min-h-[42px] text-justify text-[13px] leading-5 text-slate-500 sm:text-sm sm:leading-6">
                    {category.description}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Consultar ${category.title} pelo WhatsApp`}
                      className={`inline-flex min-h-10 w-full items-center justify-between rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-300 sm:text-sm ${
                        isBlue
                          ? "bg-[#174D9A]/[0.055] text-[#174D9A] hover:bg-[#174D9A] hover:text-white"
                          : "bg-[#D92332]/[0.055] text-[#D92332] hover:bg-[#D92332] hover:text-white"
                      }`}
                    >
                      Consultar produtos
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Rodapé da seção */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="mt-9 flex flex-col items-center justify-center gap-3 text-center sm:mt-11"
        >
          <p className="max-w-lg text-xs leading-5 text-slate-400 sm:text-sm">
            Não encontrou o que procura? Nossa equipe pode ajudar você a
            consultar a disponibilidade.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Olá! Gostaria de consultar os produtos disponíveis na Drogaria Potiguar.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#174D9A] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(23,77,154,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123E7C] hover:shadow-[0_12px_25px_rgba(23,77,154,0.22)]"
          >
            Falar com a equipe
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
