export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-slate-950"
    >
      {/* --- FONDO AMBIENTAL (Efectos Premium) --- */}

      {/* 1. Grid Pattern (Cuadrícula sutil tipo tecnológica) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* 2. Glow Verde Central (Luz ambiental detrás del texto) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-green-500/10 rounded-full blur-[120px] -z-10"></div>

      {/* --- CONTENIDO --- */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* 1. BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-green-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-8 hover:bg-white/10 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Desarrollador Web Disponible
        </div>

        {/* 2. TÍTULO PRINCIPAL */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-8xl md:text-9xl font-black text-white tracking-tighter leading-none">
            JESÚS
          </h1>
          <h1 className="text-8xl md:text-9xl font-black text-green-500 tracking-tighter leading-none">
            GARCÍA
          </h1>
        </div>

        {/* 3. DESCRIPCIÓN */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Transformo tus ideas en{" "}
          <span className="text-slate-200 font-semibold">
            experiencias digitales fluidas
          </span>
          . Especializado en el ecosistema Frontend moderno, fusionando código
          limpio con interfaces intuitivas.
        </p>

        {/* 4. BOTONES */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          {/* Botón Principal (Ahora con scroll nativo gracias al CSS) */}
          <a
            href="#proyectos"
            className="group relative inline-flex h-12 items-center overflow-hidden rounded-md bg-white text-slate-900 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <span className="flex h-full w-12 items-center justify-center bg-green-600 transition-colors duration-300 group-hover:bg-green-500">
              <svg
                className="w-4 h-4 text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="px-6 text-sm font-black uppercase tracking-wider">
              Ver Proyectos
            </span>
          </a>

          {/* Botón Secundario (Descargar CV) */}
          <a
            href="/Currículum Vitae Joshua (Jesus).pdf"
            download="CV_Jesus_Garcia.pdf"
            className="inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-slate-900/50 px-8 font-medium text-slate-300 backdrop-blur-sm transition-all hover:bg-slate-800 hover:text-white hover:border-slate-700"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
