import { useState, useEffect } from "react";
import {
  User,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Download,
} from "lucide-react";

// Importamos la imagen directamente desde la carpeta assets (Ajusta la ruta según tu estructura de carpetas)
import profileImg from "../assets/profile.png";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
    visible: false,
  });

  // Auto-cerrar la alerta tras 6 segundos
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

    // Usamos la variable de entorno segura en lugar de la clave expuesta
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "¡Mensaje enviado! Te contactaré muy pronto.",
          visible: true,
        });
        event.target.reset();
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error en el formulario:", error);
      setStatus({
        type: "error",
        message: "Hubo un error al enviar. Por favor, inténtalo de nuevo.",
        visible: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacto"
      className="pb-24 px-6 bg-slate-950 relative overflow-hidden"
    >
      {/* --- TOAST NOTIFICATION (ALERTA) --- */}
      <div
        className={`fixed top-10 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          status.visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        {status.visible && (
          <div
            className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl ${
              status.type === "success"
                ? "bg-green-500/10 border-green-500/30 text-green-400"
                : "bg-red-500/10 border-red-500/30 text-red-400"
            }`}
          >
            {status.type === "success" ? (
              <CheckCircle2 size={24} />
            ) : (
              <AlertCircle size={24} />
            )}
            <p className="font-bold tracking-wide">{status.message}</p>
          </div>
        )}
      </div>

      {/* --- CONTENEDOR PRINCIPAL --- */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 pt-10">
        {/* COLUMNA IZQUIERDA: FORMULARIO */}
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-green-500 font-bold uppercase tracking-widest text-md">
              • ¿Tienes una idea?
            </p>
            <h2 className="text-4xl md:text-6xl text-white font-black tracking-tight leading-tight">
              Hablemos de tu <br />
              {/* Se corrigió el color para igualar el Hero (text-green-500) */}
              <span className="text-green-500">próximo proyecto</span>
            </h2>
            <div className="h-1.5 w-24 bg-green-500 rounded-full"></div>
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-3xl space-y-6"
          >
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Input Nombre */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-500 group-focus-within:text-green-500 transition-colors" />
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Tu Nombre"
                  className="w-full bg-slate-900 hover:bg-slate-800 focus:bg-slate-900 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-xl outline-none focus:border-green-500 transition-colors placeholder:text-slate-500"
                />
              </div>

              {/* Input Email */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-500 group-focus-within:text-green-500 transition-colors" />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Tu Correo Electrónico"
                  className="w-full bg-slate-900 hover:bg-slate-800 focus:bg-slate-900 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-xl outline-none focus:border-green-500 transition-colors placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Input Mensaje */}
            <div className="relative group">
              <div className="absolute top-4 left-4 pointer-events-none">
                <MessageSquare className="h-5 w-5 text-slate-500 group-focus-within:text-green-500 transition-colors" />
              </div>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Cuéntame los detalles de tu proyecto..."
                className="w-full bg-slate-900 hover:bg-slate-800 focus:bg-slate-900 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-xl resize-none outline-none focus:border-green-500 transition-colors placeholder:text-slate-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 font-bold text-lg uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                isSubmitting
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                  : "bg-green-500 text-slate-950 hover:bg-white hover:scale-[1.01]"
              }`}
            >
              {isSubmitting ? "Enviando mensaje..." : "Enviar Mensaje"}
              {!isSubmitting && <Send className="w-5 h-5" />}
            </button>
          </form>
        </div>

        {/* COLUMNA DERECHA: IMAGEN + CV */}
        <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="relative w-full max-w-md aspect-4/5 rounded-3xl overflow-hidden border border-slate-800 group bg-slate-900">
            {/* Se removió el onError y se usa la imagen importada de assets */}
            <img
              src={profileImg}
              alt="Fotografía profesional de Jesús García"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Se corrigió sintaxis Tailwind: de bg-linear-to-t a bg-gradient-to-t */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent z-10 pointer-events-none"></div>

            {/* Botón Flotante CV */}
            <a
              href="/Currículum Vitae Joshua (Jesus).pdf"
              download="CV_Jesus_Garcia.pdf"
              className="absolute bottom-8 right-8 z-20 flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-4 rounded-2xl shadow-xl hover:bg-green-500 hover:border-green-400 hover:text-slate-950 transition-all duration-300 group/btn hover:-translate-y-2"
            >
              <div className="bg-white/20 p-2 rounded-full group-hover/btn:bg-slate-950/10 transition-colors">
                <Download className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest opacity-80 font-bold">
                  Descargar
                </p>
                <p className="text-lg font-black leading-none">Mi Currículum</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
