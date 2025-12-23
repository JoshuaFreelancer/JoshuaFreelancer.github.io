export default function Contact() {
  return (
    <section id="contacto" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* COLUMNA IZQUIERDA: FORMULARIO PRO */}
        <div className="space-y-8">
            <div className="space-y-4">
                <p className="text-green-500 font-bold uppercase tracking-widest text-sm">
                    • ¿Tienes una idea?
                </p>
                <h2 className="text-4xl md:text-5xl text-white font-black tracking-tight leading-tight">
                    Hablemos de tu <br/>
                    <span className="text-slate-500">próximo proyecto</span>
                </h2>
                <div className="h-1.5 w-24 bg-green-500 rounded-full"></div>
            </div>

            <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Input Nombre */}
                    <div className="relative group">
                        <input 
                            type="text" 
                            placeholder="Tu Nombre" 
                            className="w-full bg-slate-900/50 border border-slate-800 text-white placeholder-slate-500 px-6 py-4 rounded-xl focus:outline-none focus:border-green-500 focus:bg-slate-900 transition-all duration-300"
                        />
                    </div>
                    {/* Input Email */}
                    <div className="relative group">
                        <input 
                            type="email" 
                            placeholder="Tu Email" 
                            className="w-full bg-slate-900/50 border border-slate-800 text-white placeholder-slate-500 px-6 py-4 rounded-xl focus:outline-none focus:border-green-500 focus:bg-slate-900 transition-all duration-300"
                        />
                    </div>
                </div>

                {/* Textarea */}
                <div className="relative group">
                    <textarea 
                        rows="4"
                        placeholder="Cuéntame sobre tu proyecto..." 
                        className="w-full bg-slate-900/50 border border-slate-800 text-white placeholder-slate-500 px-6 py-4 rounded-xl resize-none focus:outline-none focus:border-green-500 focus:bg-slate-900 transition-all duration-300"
                    ></textarea>
                </div>
                
                {/* Botón de Enviar Estilizado */}
                <button type="submit" className="group w-full md:w-auto px-8 py-4 bg-white text-slate-950 font-black uppercase tracking-widest rounded-xl hover:bg-green-500 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2">
                    Enviar Mensaje
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
            </form>
        </div>

        {/* COLUMNA DERECHA: IMAGEN + BOTÓN CV (Corregido) */}
        <div className="relative flex justify-center md:justify-end">
            
            {/* Contenedor Imagen */}
            <div className="relative w-full max-w-sm aspect-4/5 rounded-2xl overflow-hidden border border-slate-800 shadow-[0_0_50px_rgba(34,197,94,0.1)] group">
                
                {/* FOTO DE PERFIL */}
                <img 
                    src="/perfil.png" 
                    alt="Jesús García" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"; 
                    }}
                />

                {/* Overlay oscuro suave en la parte inferior */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>

                {/* BOTÓN DESCARGA CV (Ahora Verde y Coherente) */}
                <a 
                    href="/cv.pdf" 
                    download="CV_Jesus_Garcia.pdf"
                    className="absolute bottom-6 right-6 z-20 w-20 h-20 md:w-24 md:h-24 bg-green-500 rounded-full flex flex-col items-center justify-center text-slate-950 font-black shadow-lg shadow-green-500/30 cursor-pointer hover:scale-110 hover:bg-white transition-all duration-300 group/btn border-4 border-slate-950"
                >
                    <svg className="w-6 h-6 md:w-8 md:h-8 mb-1 animate-bounce group-hover/btn:text-slate-950" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 12.75l-4.5-4.5m0 0l4.5-4.5m-4.5 4.5h14.25" transform="rotate(-90 12 12)" /></svg>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-center leading-tight">Download<br/>CV</span>
                </a>
            </div>

            {/* Elemento decorativo detrás */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-800 rounded-full -z-10 opacity-50 blur-2xl"></div>
            
        </div>

      </div>
    </section>
  )
}