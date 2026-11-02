"use client";

import { useState } from "react";
import { Menu, X, MessageCircle, Truck, Phone, MapPin } from "lucide-react";

const WHATSAPP = "556133341386";
const PHONE = "(61) 3334-1386";

const INSTAGRAM_URL = "https://www.instagram.com/drogariapotiguar_?vrfl=MTNlMWUyY3N0cnV2MQ%3D%3D";
const MAPS_URL = "https://maps.app.goo.gl/asgqEZ2ChAuoBDaDA";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Categorias", href: "#categorias" },
  { label: "A drogaria", href: "#sobre" },
  { label: "Localização", href: "#localizacao" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#inicio");

  const whatsappLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Olá! Gostaria de informações sobre a Drogaria Potiguar.",
  )}`;

  function handleNavigation(href: string) {
    setActiveLink(href);
    setMenuOpen(false);
  }

  function InstagramIcon() {
    return (
      <svg
        viewBox="0 0 24 24"
        width="19"
        height="19"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 animate-header-enter">
      {/* Faixa principal */}
      <div className="relative bg-gradient-to-r from-[#B91F2D] via-[#D92332] to-[#C51F30] shadow-[0_5px_20px_rgba(0,0,0,0.18)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),transparent_55%)]"
        />

        <div className="relative mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#inicio"
            aria-label="Drogaria Potiguar - Página inicial"
            onClick={() => handleNavigation("#inicio")}
            className="group shrink-0"
          >
            <div className="flex flex-col overflow-hidden rounded-md shadow-md transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg">
              <div className="bg-[#D92332] px-3 py-0.5 text-center text-xs font-black tracking-wider text-white">
                DROGARIA
              </div>

              <div className="bg-[#174D9A] px-3 py-1 text-center text-lg font-black leading-tight tracking-tight text-white">
                POTIGUAR
              </div>
            </div>
          </a>

          {/* Navegação desktop */}
          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-7 lg:flex xl:gap-9"
          >
            {navigation.map((item) => {
              const isActive = activeLink === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavigation(item.href)}
                  aria-current={isActive ? "location" : undefined}
                  className={`group relative flex h-[76px] items-center text-sm font-semibold transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/85 hover:text-white"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-[17px] left-0 h-[2px] rounded-full bg-[#174D9A] transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Acessos rápidos e contato */}
          <div className="hidden items-center gap-2 lg:flex">
            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Drogaria Potiguar"
              title="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20"
            >
              <InstagramIcon />
            </a>

            {/* Google Maps */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Localização da Drogaria Potiguar"
              title="Localização"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20"
            >
              <MapPin size={19} />
            </a>

            {/* Separador */}
            <span className="mx-1 h-8 w-px bg-white/25" />

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-[#174D9A] px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123D7A] hover:shadow-lg"
            >
              <MessageCircle size={17} />
              Fale conosco
            </a>
          </div>

          {/* Menu mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Faixa inferior de tele-entrega */}
      <div className="relative flex h-[30px] items-center justify-center gap-2 bg-gradient-to-r from-[#123D7A] via-[#174D9A] to-[#123D7A] px-3 text-white shadow-md">
        <Truck size={14} />

        <span className="text-[10px] font-extrabold uppercase tracking-[0.13em] sm:text-[11px]">
          Tele-entrega
        </span>

        <span className="h-3 w-px bg-white/40" />

        <span className="text-[10px] font-medium sm:text-[11px]">
          Atendimento pelo telefone
        </span>

        <a
          href={`tel:+55${PHONE.replace(/\D/g, "")}`}
          className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wide transition hover:text-blue-200 sm:text-[11px]"
        >
          <Phone size={12} />
          {PHONE}
        </a>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-b border-blue-950/20 bg-[#174D9A] shadow-xl transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "max-h-[420px] opacity-100"
            : "max-h-0 border-b-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <nav
          aria-label="Navegação mobile"
          className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4"
        >
          {navigation.map((item) => {
            const isActive = activeLink === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavigation(item.href)}
                className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-white/15 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}

                <span
                  className={`h-[2px] rounded-full bg-white transition-all duration-300 ${
                    isActive ? "w-8" : "w-0"
                  }`}
                />
              </a>
            );
          })}

          {/* Acessos rápidos mobile */}
          <div className="mt-3 flex gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Drogaria Potiguar"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              <InstagramIcon />
              Instagram
            </a>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Localização da Drogaria Potiguar"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              <MapPin size={18} />
              Localização
            </a>
          </div>

          {/* WhatsApp mobile */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#D92332] px-4 py-3.5 text-sm font-bold text-white transition hover:bg-[#BD1E2B]"
          >
            <MessageCircle size={18} />
            Fale conosco
          </a>
        </nav>
      </div>
    </header>
  );
}
