"use client";

import { motion, useReducedMotion } from "motion/react";
import { ShoppingBag, MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP = "556133341386";

const produtos = [
  {
    id: 1,
    nome: "Desodorante Antitranspirante Aerossol Original 250 ml — Proteção e Hidratação Prolongada",
    marca: "Dove",
    imagem: "/images/drogaria-potiguar/produtos/produto-01.jpg",
    precoAnterior: 28.49,
    precoAtual: 24.49,
  },
  {
    id: 2,
    nome: "Fralda Máxima Proteção 82 Unidades XG",
    marca: "Huggies",
    imagem: "/images/drogaria-potiguar/produtos/produto-02.jpg",
    precoAnterior: null,
    precoAtual: 129.99,
  },
  {
    id: 3,
    nome: "Absorvente Geriátrico Super Proteção 20 Unidades",
    marca: "Geriatex",
    imagem: "/images/drogaria-potiguar/produtos/produto-03.jpg",
    precoAnterior: null,
    precoAtual: 21.99,
  },
  {
    id: 4,
    nome: "Kit Collagen Lifter Shampoo 385 ml + Condicionador 170 ml com Colágeno Vegetal",
    marca: "Elseve",
    imagem: "/images/drogaria-potiguar/produtos/produto-04.jpg",
    precoAnterior: null,
    precoAtual: 34.29,
  },
];

function calcularDesconto(anterior: number, atual: number) {
  if (anterior <= 0 || atual >= anterior || atual < 0) return 0;

  return Math.round(((anterior - atual) / anterior) * 100);
}

function formatarPreco(valor: number) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default function ProdutosDestaque() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="produtos"
      className="relative overflow-hidden bg-slate-50/70 py-14 sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-red-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-9 text-center sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#D92332]">
            <ShoppingBag size={15} />
            Nossa seleção
          </span>

          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Produtos em destaque
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-justify text-sm leading-7 text-slate-600 sm:text-center sm:text-base">
            Confira alguns produtos selecionados da Drogaria Potiguar. Entre em
            contato para consultar a disponibilidade.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#D92332]" />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 xl:gap-5">
          {produtos.map((produto, index) => {
            const desconto = produto.precoAnterior
              ? calcularDesconto(produto.precoAnterior, produto.precoAtual)
              : 0;

            const mensagem = encodeURIComponent(
              `Olá! Gostaria de consultar a disponibilidade do produto ${produto.nome}, da marca ${produto.marca}.\n\n(Acesso pelo site)`,
            );

            return (
              <motion.article
                key={produto.id}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 35, scale: 0.98 }
                }
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                className="group flex min-w-0 gap-3 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3 shadow-[0_5px_20px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_15px_35px_rgba(15,23,42,0.10)] sm:gap-5 sm:p-4"
              >
                <div className="relative flex min-h-[145px] w-[108px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-50 sm:min-h-[180px] sm:w-[145px]">
                  {desconto > 0 && (
                    <span className="absolute left-2 top-2 z-10 rounded-md bg-[#D92332] px-2 py-1 text-[10px] font-extrabold text-white shadow-sm sm:text-xs">
                      -{desconto}%
                    </span>
                  )}

                  <img
                    src={produto.imagem}
                    alt={`${produto.nome} - ${produto.marca}`}
                    loading="lazy"
                    className="h-full max-h-40 w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105 sm:max-h-48"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-center py-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#174D9A] sm:text-xs">
                    {produto.marca}
                  </span>

                  <h3 className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-slate-900 sm:text-base">
                    {produto.nome}
                  </h3>

                  {produto.precoAnterior !== null && desconto > 0 && (
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="text-xs text-slate-400 line-through sm:text-sm">
                        {formatarPreco(produto.precoAnterior)}
                      </span>

                      <span className="rounded-md bg-red-50 px-2 py-1 text-[10px] font-extrabold text-[#D92332] sm:text-xs">
                        -{desconto}% OFF
                      </span>
                    </div>
                  )}

                  <p className="mt-2 text-xl font-extrabold tracking-tight text-[#174D9A] sm:text-2xl">
                    {formatarPreco(produto.precoAtual)}
                  </p>

                  <span className="text-[10px] text-slate-500 sm:text-xs">
                    Preço atual
                  </span>

                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${mensagem}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex w-fit items-center gap-2 rounded-lg bg-[#174D9A] px-3 py-2 text-[11px] font-bold text-white transition-colors hover:bg-[#123e7b] sm:text-xs"
                  >
                    <MessageCircle size={14} />
                    Consultar produto
                    <ArrowRight size={13} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
