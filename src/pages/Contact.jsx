import { useState, useEffect } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "", visible: false });

  // Auto-cerrar la alerta tras 5 segundos
  useEffect(() => {
    if (status.visible) {
      const timer = setTimeout(() => {
        setStatus((prev) => ({ ...prev, visible: false }));
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [status.visible]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.target);
    formData.append("access_key", "b52b4164-0dd5-4290-87d9-6d2a67cf420d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "¡Mensaje enviado! Te contactaré pronto, Atte. Jesús.",
          visible: true,
        });
        event.target.reset();
      } else {
        throw new Error(data.message);
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setStatus({
        type: "error",
        message: "Hubo un error. Inténtalo de nuevo.",
        visible: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      
      {/* ALERTA VISUAL CENTRADA */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none transition-all duration-500 ${status.visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        {status.visible && (
          <div className={`px-8 py-4 rounded-2xl shadow-2xl border backdrop-blur-md flex items-center gap-3 animate-in fade-in zoom-in duration-300 ${
            status.type === 'success' 
            ? 'bg-green-500/10 border-green-500/50 text-green-400' 
            : 'bg-red-500/10 border-red-500/50 text-red-400'
          }`}>
            {status.type === 'success' ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            )}
            <p className="font-bold tracking-wide">{status.message}</p>
          </div>
        )}
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-green-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* COLUMNA IZQUIERDA: FORMULARIO */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-green-500 font-bold uppercase tracking-widest text-sm">• ¿Tienes una idea?</p>
            <h2 className="text-4xl md:text-5xl text-white font-black tracking-tight leading-tight">
              Hablemos de tu <br />
              <span className="text-slate-400">próximo proyecto</span>
            </h2>
            <div className="h-1.5 w-24 bg-green-500 rounded-full"></div>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input 
                type="text" name="name" required placeholder="Tu Nombre" 
                className="w-full bg-slate-900/50 border border-slate-800 text-white p-4 rounded-xl focus:outline-none focus:border-green-500 transition-all" 
              />
              <input 
                type="email" name="email" required placeholder="Tu Email" 
                className="w-full bg-slate-900/50 border border-slate-800 text-white p-4 rounded-xl focus:outline-none focus:border-green-500 transition-all" 
              />
            </div>

            <textarea 
              name="message" required rows="4" placeholder="Cuéntame sobre tu proyecto..." 
              className="w-full bg-slate-900/50 border border-slate-800 text-white p-4 rounded-xl resize-none focus:outline-none focus:border-green-500 transition-all"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`group w-full md:w-auto px-8 py-4 font-black uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                isSubmitting ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-green-500 text-slate-950 hover:bg-white hover:scale-[1.02]'
              }`}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              {!isSubmitting && (
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              )}
            </button>
          </form>
        </div>

        {/* COLUMNA DERECHA: IMAGEN + CV */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm aspect-4/5 rounded-2xl overflow-hidden border border-slate-800 shadow-[0_0_50px_rgba(34,197,94,0.1)] group">
            <img
              src="/perfil.png"
              alt="Joshua García"
              className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-110"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"; }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <a
              href="/Currículum Vitae Joshua (Jesus).pdf"
              download="CV_Joshua_Garcia.pdf"
              className="absolute bottom-6 right-6 z-20 w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center text-slate-950 font-bold shadow-xl cursor-pointer hover:scale-110 hover:bg-green-500 hover:text-white transition-all duration-300 group/btn border-4 border-slate-950"
            >
              <svg className="w-8 h-8 mb-1 group-hover/btn:animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              <span className="text-[10px] uppercase tracking-tighter text-center leading-tight">Mi CV<br />PDF</span>
            </a>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500/10 rounded-full -z-10 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}