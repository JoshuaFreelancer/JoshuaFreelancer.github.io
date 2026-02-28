export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950"
    >
      {/* --- FONDO AMBIENTAL --- */}
      {/* Corrección de sintaxis Tailwind para bg-size y mask-image para que renderice bien el grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Glow de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-100 h-100 md:w-150 md:h-150 bg-green-500/10 rounded-full blur-[100px] md:blur-[120px] -z-10 pointer-events-none"></div>

      {/* --- CONTENIDO --- */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* 1. BADGE (Status) */}
        <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-green-400 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase mb-8 hover:bg-white/10 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Desarrollador Full-Stack Disponible
        </div>

        {/* 2. TÍTULO PRINCIPAL */}
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-white tracking-tighter leading-none">
            JESÚS
          </h1>
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-green-500 tracking-tighter leading-none">
            GARCÍA
          </h1>
        </div>

        {/* 3. DESCRIPCIÓN */}
        <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          <span className="text-slate-200 font-semibold">
            Ingeniero en Computación
          </span>{" "}
          transformando ideas en{" "}
          <span className="text-slate-200 font-semibold">
            experiencias digitales fluidas
          </span>
          . Especializado en el ecosistema de desarrollo moderno, fusionando
          código limpio, bases de datos robustas e interfaces intuitivas.
        </p>

        {/* 4. BOTONES */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          {/* Botón Principal (NUEVO DISEÑO CON CÍRCULO Y FLECHA) */}
          <a
            href="#proyectos"
            className="group w-full sm:w-auto inline-flex h-12 items-center justify-center gap-3 rounded-full bg-white pl-6 pr-2 text-slate-900 shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
          >
            <span className="text-sm font-black uppercase tracking-wider">
              Ver Proyectos
            </span>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-black group-hover:bg-green-600">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                {/* Flecha apuntando hacia abajo gruesa y limpia */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </a>

          {/* Botón Secundario (Ahora también rounded-full para hacer juego) */}
          <a
            href="/Currículum_Vitae_Joshua_Jesus.pdf"
            download="CV_Jesus_Garcia.pdf"
            className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50 px-8 font-medium text-slate-300 backdrop-blur-sm transition-all hover:bg-slate-800 hover:text-white hover:border-slate-700"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
