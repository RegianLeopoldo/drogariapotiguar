"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  Flame,
  MessageCircle,
  Plus,
  Tag,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

interface Oferta {
  id: number;
  nome: string;
  marca: string;
  imagem: string;
  preco: number;
  precoAnterior: number;
  desconto: number;
}

const ofertas: Oferta[] = [
  {
    id: 1,
    nome: "Desodorante Antitranspirante Original 250 ml",
    marca: "Dove",
    imagem: "/images/drogaria-potiguar/produtos/produto-01.jpg",
    preco: 19.99,
    precoAnterior: 29.99,
    desconto: 33,
  },
  {
    id: 2,
    nome: "Fralda Infantil Máxima Proteção XG",
    marca: "Huggies",
    imagem: "/images/drogaria-potiguar/produtos/produto-02.jpg",
    preco: 99.99,
    precoAnterior: 129.99,
    desconto: 23,
  },
  {
    id: 3,
    nome: "Absorvente Geriátrico Super Proteção",
    marca: "Geriatex",
    imagem: "/images/drogaria-potiguar/produtos/produto-03.jpg",
    preco: 17.99,
    precoAnterior: 24.99,
    desconto: 28,
  },
  {
    id: 4,
    nome: "Kit Shampoo e Condicionador com Colágeno",
    marca: "Elseve",
    imagem: "/images/drogaria-potiguar/produtos/produto-04.jpg",
    preco: 29.99,
    precoAnterior: 39.99,
    desconto: 25,
  },
];

const WHATSAPP = "556133341386";

function formatarTempo(segundos: number) {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const segundosRestantes = segundos % 60;

  return {
    horas: String(horas).padStart(2, "0"),
    minutos: String(minutos).padStart(2, "0"),
    segundos: String(segundosRestantes).padStart(2, "0"),
  };
}

function formatarPreco(valor: number) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default function OfertasRelampago() {
  const reduceMotion = useReducedMotion();
  const carrosselRef = useRef<HTMLDivElement>(null);

  const [tempo, setTempo] = useState(24 * 60 * 60);

  useEffect(() => {
    const intervalo = window.setInterval(() => {
      setTempo((atual) => (atual <= 1 ? 24 * 60 * 60 : atual - 1));
    }, 1000);

    return () => window.clearInterval(intervalo);
  }, []);

  const horario = formatarTempo(tempo);

  function moverCarrossel(direcao: "anterior" | "proximo") {
    const elemento = carrosselRef.current;
    if (!elemento) return;

    elemento.scrollBy({
      left: direcao === "proximo" ? 290 : -290,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  function consultarOferta(oferta: Oferta) {
    const mensagem = encodeURIComponent(
      `Olá! Gostaria de consultar a disponibilidade e o preço do produto ${oferta.nome}.\n\n(Acesso pelo site)`,
    );

    window.open(
      `https://wa.me/${WHATSAPP}?text=${mensagem}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section
      id="ofertas"
      className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#0864AD] p-5 shadow-[0_20px_60px_rgba(8,100,173,0.20)] sm:p-8 lg:p-10">
          {/* Elementos decorativos */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-12 -top-12 h-52 w-52 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[0.85fr_1.65fr] lg:gap-10">
            {/* Chamada promocional */}
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-white"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/90 backdrop-blur-md">
                <Flame size={14} className="text-[#FF8790]" />
                Drogaria Potiguar
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-[42px]">
                Ofertas
                <span className="block text-[#FF8790]">Relâmpago!</span>
              </h2>

              <p className="mt-3 max-w-sm text-sm leading-6 text-blue-50/90">
                Confira algumas ofertas especiais e aproveite para consultar
                nossos produtos.
              </p>

              {/* Cronômetro */}
              <div className="mt-7">
                <p className="mb-3 flex items-center gap-2 text-xs font-semibold text-blue-100">
                  <Clock3 size={15} />
                  Ofertas por tempo limitado
                </p>

                <div className="flex items-center gap-2">
                  {[
                    { valor: horario.horas, label: "Horas" },
                    { valor: horario.minutos, label: "Minutos" },
                    { valor: horario.segundos, label: "Segundos" },
                  ].map((item, index) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <div className="flex min-w-[58px] flex-col items-center rounded-xl border border-white/15 bg-white/[0.17] px-2 py-3 shadow-inner backdrop-blur-md sm:min-w-[68px] sm:py-4">
                        <span className="font-mono text-2xl font-black tabular-nums sm:text-3xl">
                          {item.valor}
                        </span>
                        <span className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-blue-100/80">
                          {item.label}
                        </span>
                      </div>

                      {index < 2 && (
                        <span className="text-xl font-black text-white/80">
                          :
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#ofertas"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-[#FF8790]"
              >
                Ver todas as ofertas
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            {/* Produtos */}
            <div className="min-w-0">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-100/80">
                    Seleção especial
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold text-white">
                    Produtos em destaque
                  </h3>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => moverCarrossel("anterior")}
                    aria-label="Produtos anteriores"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/25"
                  >
                    <ArrowLeft size={17} />
                  </button>

                  <button
                    type="button"
                    onClick={() => moverCarrossel("proximo")}
                    aria-label="Próximos produtos"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/25"
                  >
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>

              <div
                ref={carrosselRef}
                className="grid grid-flow-col auto-cols-[76%] gap-3 overflow-x-auto scroll-smooth pb-3 snap-x snap-mandatory sm:auto-cols-[45%] lg:auto-cols-[calc((100%-36px)/4)]"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(255,255,255,.45) transparent",
                }}
              >
                {ofertas.map((oferta, index) => (
                  <motion.article
                    key={oferta.id}
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : 25,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.55,
                      delay: reduceMotion ? 0 : index * 0.1,
                    }}
                    whileHover={reduceMotion ? undefined : { y: -5 }}
                    className="relative flex min-w-0 snap-start flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-[0_8px_25px_rgba(0,0,0,0.12)]"
                  >
                    <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-md bg-[#B51F3B] px-2 py-1 text-[10px] font-extrabold text-white shadow-md">
                      <Tag size={11} />-{oferta.desconto}%
                    </div>

                    <div className="relative flex h-40 items-center justify-center sm:h-44">
                      <img
                        src={oferta.imagem}
                        alt={`${oferta.nome} - ${oferta.marca}`}
                        className="h-full w-full object-contain p-2 transition-transform duration-500 hover:scale-105"
                      />

                      <button
                        type="button"
                        onClick={() => consultarOferta(oferta)}
                        aria-label={`Consultar ${oferta.nome}`}
                        className="absolute bottom-1 right-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#0875C9] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#D92332]"
                      >
                        <Plus size={21} />
                      </button>
                    </div>

                    <div className="mt-3 flex flex-1 flex-col">
                      <h4 className="line-clamp-2 min-h-[42px] text-xs font-medium leading-5 text-slate-600">
                        {oferta.nome}
                      </h4>

                      <p className="mt-1 text-xs font-bold text-slate-900">
                        {oferta.marca}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-bold text-white">
                          <span className="rounded bg-[#B51F3B] px-1.5 py-1">
                            -{oferta.desconto}%
                          </span>
                        </span>

                        <span className="text-base font-black text-slate-900">
                          {formatarPreco(oferta.preco)}
                        </span>
                      </div>

                      <p className="mt-1 text-[11px] text-slate-400 line-through">
                        {formatarPreco(oferta.precoAnterior)}
                      </p>

                      <button
                        type="button"
                        onClick={() => consultarOferta(oferta)}
                        className="mt-auto pt-3 text-left text-[11px] font-bold text-[#0864AD] transition-colors hover:text-[#D92332]"
                      >
                        Consultar disponibilidade
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>

          {/* Assinatura da seção */}
          <div className="relative mt-5 border-t border-white/20 pt-3">
            <p className="text-center text-[10px] font-medium text-blue-100/80">
              Drogaria Potiguar • Cuidado, qualidade e economia para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
