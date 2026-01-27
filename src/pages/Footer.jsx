export default function Footer() {
  return (
    <footer className="bg-slate-950 pb-10 px-6 relative overflow-hidden">
      {/* 1. SECCIÓN SUPERIOR: "YOU CAN FIND ME HERE" */}
      <div className="max-w-5xl mx-auto bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative z-10 overflow-hidden group">
        {/* Efecto de brillo verde al pasar el mouse */}
        <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        {/* Texto */}
        <div className="text-center md:text-left z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Encuéntrame aquí:
          </h3>
          <p className="text-slate-400 text-sm">
            Siempre dispuesto a nuevas oportunidades.
          </p>
        </div>

        {/* Iconos Sociales Grandes */}
        <div className="flex gap-4 z-10">
          {/* GitHub */}
          <a
            href="https://github.com/JoshuaFreelancer"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-slate-950 hover:-translate-y-2 transition-all duration-300 shadow-lg border border-slate-700"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
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
            className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-white hover:bg-[#0077b5] hover:text-white hover:-translate-y-2 transition-all duration-300 shadow-lg border border-slate-700"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 21.227.792 22 1.771 22h20.451C23.202 22 24 21.227 24 20.542V1.729C24 .774 23.202 0 22.225 0z" />
            </svg>
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/tunúmero"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-white hover:bg-green-500 hover:text-white hover:-translate-y-2 transition-all duration-300 shadow-lg border border-slate-700"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
        </div>
      </div>

      {/* 2. SECCIÓN INFERIOR: NAVEGACIÓN Y COPYRIGHT */}
      <div className="max-w-5xl mx-auto mt-20 flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-slate-900">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold italic text-white tracking-tighter">
            JG
          </span>
          <div className="h-8 w-px bg-slate-800 mx-2"></div>
          <span className="text-xs text-slate-500 uppercase tracking-widest leading-tight">
            Jesús
            <br />
            García
          </span>
        </div>

        {/* NAVEGACIÓN ACTUALIZADA */}
        <ul className="flex flex-wrap justify-center gap-8 text-sm font-bold tracking-widest text-slate-400 uppercase">
          <li>
            <a
              href="#inicio"
              className="hover:text-green-500 transition-colors"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#servicios"
              className="hover:text-green-500 transition-colors"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#proyectos"
              className="hover:text-green-500 transition-colors"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="hover:text-green-500 transition-colors"
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* COPYRIGHT */}
        <div className="text-center md:text-right">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Jesús García.
          </p>
          <p className="text-slate-700 text-[10px] mt-1">
            Hecho con React, Vite & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}
