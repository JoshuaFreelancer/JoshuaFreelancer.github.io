export default function HeroSection() {
  return (
    <section 
      id="inicio"
      className="flex flex-col justify-center items-center text-center p-6 bg-slate-950 relative overflow-hidden"
    >
        {/* 1. BADGE */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-900/30 border border-green-800/50 text-green-400 text-[12px] font-bold tracking-widest uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></span>
            Desarrollador Web Disponible
        </div>

        {/* 2. NOMBRE (Corregido: Sin superposición, tamaño intermedio) */}
        <div className="flex flex-col mb-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-tight">
                JESÚS
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-green-500 tracking-tighter leading-tight -mt-2 md:-mt-4">
                GARCÍA
            </h1>
        </div>
        
        {/* 3. LÍNEA DECORATIVA (Más larga) */}
        <div className="w-32 md:w-64 h-1.5 bg-green-500 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(74,222,128,0.5)]"></div>

        {/* 4. DESCRIPCIÓN (Texto Blanco Puro) */}
        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-light">
            Transformo ideas en experiencias digitales excepcionales. 
            Especializado en desarrollo frontend moderno con pasión por 
            el código limpio y el diseño intuitivo.
        </p>

        {/* 5. BOTÓN (Solo uno, centrado y con buen padding) */}
        <div className="flex justify-center">
            <a 
              href="#proyectos" 
              className="group flex items-center bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
                {/* Cuadro verde con icono */}
                <div className="bg-green-600 p-4 flex items-center justify-center text-slate-950 group-hover:bg-green-500 transition-colors">
                     <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                {/* Texto del botón (Espaciado mejorado) */}
                <span className="px-8 py-3 font-extrabold text-slate-950 tracking-widest text-sm uppercase">
                    VER PROYECTOS
                </span>
            </a>
        </div>
    </section>
  )
}