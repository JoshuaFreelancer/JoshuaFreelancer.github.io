import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 start-0 bg-slate-950/95 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto py-5 px-6">
        {/* 1. LOGO JG (Más compacto) */}
        <a href="#" className="flex items-center">
          <span className="self-center text-2xl font-bold italic text-white tracking-tighter hover:text-green-500 transition-colors">
            JG
          </span>
        </a>

        {/* Botón Hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-9 h-9 justify-center text-slate-400 rounded-lg md:hidden hover:bg-slate-800"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Contenedor Principal */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-slate-800 rounded-xl bg-slate-900 md:flex-row md:items-center md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            {/* 2. ENLACES (Tamaño de fuente equilibrado) */}
            {["Inicio", "Sobre mí", "Habilidades", "Proyectos"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="block py-2 px-3 text-white uppercase text-[13px] font-bold tracking-widest hover:text-green-500 transition-colors md:p-0"
                >
                  {item}
                </a>
              </li>
            ))}

            {/* 3. BOTÓN CONTÁCTAME (Más estilizado) */}
            <li className="mt-4 md:mt-0">
              <a
                href="#contacto"
                className="block text-white bg-green-600 hover:bg-green-500 font-bold rounded-full text-[12px] uppercase px-5 py-2 text-center transition-all transform hover:scale-105"
              >
                Contáctame
              </a>
            </li>

            {/* 4. ICONOS SOCIALES (Fondo de color de marca + Icono Blanco) */}
            <li className="flex items-center space-x-3 mt-4 md:mt-0 md:pl-6 md:border-l md:border-slate-800">
              {/* GitHub (Fondo oscuro de marca) */}
              <a
                href="https://github.com/JoshuaFreelancer"
                target="_blank"
                className="flex items-center justify-center w-8 h-8 bg-[#24292e] text-white rounded-lg hover:bg-black hover:scale-110 transition-all shadow-lg shadow-black/20"
                title="GitHub"
              >
                <svg
                  className="w-4 h-4"
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

              {/* LinkedIn (Azul Oscuro Profesional) */}
              <a
                href="#"
                target="_blank"
                className="flex items-center justify-center w-8 h-8 bg-[#0a66c2] text-white rounded-lg hover:bg-[#004182] hover:scale-110 transition-all shadow-lg shadow-blue-900/20"
                title="LinkedIn"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 21.227.792 22 1.771 22h20.451C23.202 22 24 21.227 24 20.542V1.729C24 .774 23.202 0 22.225 0z" />
                </svg>
              </a>

              {/* WhatsApp (Verde Oficial) */}
              <a
                href="https://wa.me/tunúmero"
                target="_blank"
                className="flex items-center justify-center w-8 h-8 bg-[#25d366] text-white rounded-lg hover:bg-[#128c7e] hover:scale-110 transition-all shadow-lg shadow-green-900/20"
                title="WhatsApp"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
