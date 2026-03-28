import { useState } from "react";

export default function Header({ t, language, onToggleLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  const isSpanish = language === "es";

  return (
    <nav className="fixed w-full z-50 top-0 start-0 bg-slate-950/80 backdrop-blur-lg border-b border-white/10 transition-all duration-300">
      {/* Aquí aumenté el padding a py-5 para devolverle la altura original */}
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto py-5 px-4 sm:px-6 lg:px-8">
        {/* LADO IZQUIERDO: SOLO EL LOGO */}
        <a href="#home" className="flex items-center group">
          <span className="text-2xl font-bold italic text-white tracking-tighter transition-transform group-hover:scale-105">
            JG<span className="text-green-500">.</span>
          </span>
        </a>

        {/* BOTÓN HAMBURGUESA (Para móviles) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-slate-400 rounded-lg md:hidden hover:bg-white/10 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-green-500/50"
        >
          <span className="sr-only">{isOpen ? t.nav.closeMenu : t.nav.openMenu}</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* LADO DERECHO: ENLACES + CTA + REDES + SWITCH IDIOMA */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto transition-all duration-300`}
        >
          <ul className="flex flex-col p-5 md:p-0 mt-4 border border-white/10 rounded-2xl bg-slate-900/95 md:flex-row md:items-center md:gap-6 md:mt-0 md:border-0 md:bg-transparent md:backdrop-blur-none shadow-2xl md:shadow-none">
            {/* MAPEO DE ENLACES */}
            {t.nav.links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="relative block py-2 md:py-0 text-slate-300 uppercase text-[12px] font-bold tracking-[0.15em] hover:text-white transition-colors group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}

            {/* SEPARADOR VISUAL, CTA, REDES Y SWITCH */}
            <li className="flex flex-col md:flex-row items-center gap-5 mt-4 md:mt-0 md:pl-6 md:border-l md:border-white/10 pt-4 md:pt-0 border-t border-white/10 md:border-t-0">
              {/* BOTÓN CONTÁCTAME */}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full md:w-auto text-white bg-green-600 hover:bg-green-500 font-bold rounded-full text-[12px] uppercase px-6 py-2.5 text-center transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(22,163,74,0.3)] hover:shadow-[0_0_25px_rgba(22,163,74,0.6)]"
              >
                {t.nav.contactCta || "CONTÁCTAME"}
              </a>

              {/* CONTENEDOR REDES Y SWITCH */}
              <div className="flex items-center gap-3 mt-4 md:mt-0">
                {/* GitHub */}
                <a
                  href="https://github.com/JoshuaFreelancer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-9 h-9 bg-white/5 text-slate-400 rounded-lg hover:bg-[#24292e] hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/joshuadevpro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-9 h-9 bg-white/5 text-slate-400 rounded-lg hover:bg-[#0a66c2] hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 21.227.792 22 1.771 22h20.451C23.202 22 24 21.227 24 20.542V1.729C24 .774 23.202 0 22.225 0z" />
                  </svg>
                </a>
                {/* Telegram */}
                <a
                  href="https://t.me/Joshua_dev19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-9 h-9 bg-white/5 text-slate-400 rounded-lg hover:bg-[#2AABEE] hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                  </svg>
                </a>

                {/* Pequeño separador visual para desktop */}
                <div className="hidden md:block w-px h-8 bg-white/20 ml-2"></div>

                {/* Switch de Idioma Minimalista (A la derecha) */}
                <label
                  htmlFor="lang-switch"
                  className="relative inline-flex items-center cursor-pointer select-none ml-2"
                  aria-label={t.nav.langToggleLabel}
                >
                  <input
                    id="lang-switch"
                    type="checkbox"
                    className="sr-only peer"
                    checked={isSpanish}
                    onChange={(event) => {
                      onToggleLanguage(event.target.checked ? "es" : "en");
                    }}
                  />
                  <span className="w-14 h-7 rounded-full border border-white/20 bg-slate-900/90 peer-checked:bg-slate-800 transition-colors"></span>
                  <span className="absolute left-1 top-1 h-5 w-6 rounded-full bg-green-500 transition-transform duration-300 peer-checked:translate-x-6"></span>
                  <span
                    className={`absolute left-2 text-[9px] font-bold tracking-wider pointer-events-none transition-colors ${
                      isSpanish ? "text-slate-300" : "text-slate-950"
                    }`}
                  >
                    EN
                  </span>
                  <span
                    className={`absolute right-2 text-[9px] font-bold tracking-wider pointer-events-none transition-colors ${
                      isSpanish ? "text-slate-950" : "text-slate-300"
                    }`}
                  >
                    ES
                  </span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
