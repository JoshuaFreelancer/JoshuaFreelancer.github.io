export default function Services() {
  const services = [
    {
      id: 1,
      title: "Desarrollo Frontend Moderno",
      desc: "Creación de interfaces de usuario interactivas, rápidas y escalables utilizando React, Vite y Tailwind CSS.",
      icon: (
        // Quitamos el group-focus y dejamos solo group-hover y group-active
        <svg
          className="w-8 h-8 text-slate-400 group-hover:text-green-500 group-active:text-green-500 transition-colors"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Arquitectura Backend & APIs",
      desc: "Diseño de servidores y gestión de bases de datos en tiempo real con tecnologías como Node.js y Firebase.",
      icon: (
        <svg
          className="w-8 h-8 text-slate-400 group-hover:text-green-500 group-active:text-green-500 transition-colors"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "E-commerce & Landing Pages",
      desc: "Soluciones enfocadas en la conversión. Desde tiendas virtuales hasta páginas de aterrizaje optimizadas.",
      icon: (
        <svg
          className="w-8 h-8 text-slate-400 group-hover:text-green-500 group-active:text-green-500 transition-colors"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Sistemas de Gestión & Dashboards",
      desc: "Desarrollo de software interno a medida, paneles de administración e inventarios para automatizar procesos.",
      icon: (
        <svg
          className="w-8 h-8 text-slate-400 group-hover:text-green-500 group-active:text-green-500 transition-colors"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Diseño UX/UI & Mobile First",
      desc: "Interfaces adaptables a móviles con enfoque en la experiencia de usuario y una estética limpia.",
      icon: (
        <svg
          className="w-8 h-8 text-slate-400 group-hover:text-green-500 group-active:text-green-500 transition-colors"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Optimización & Despliegue",
      desc: "Mejora de la velocidad de carga, SEO técnico y configuración de hosting para tus aplicaciones.",
      icon: (
        <svg
          className="w-8 h-8 text-slate-400 group-hover:text-green-500 group-active:text-green-500 transition-colors"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.438 4.438 0 002.736-2.736m2.329-3.376a3.314 3.314 0 01-4.686-4.686"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="servicios" className="p-6 md:p-10 bg-slate-950 relative">
      {/* HEADER DE LA SECCIÓN */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <p className="text-green-500 font-bold uppercase tracking-widest text-md mb-4">
          • ¿Qué ofrezco?
        </p>
        <h2 className="text-4xl md:text-5xl text-white font-medium leading-tight">
          Soluciones de <span className="font-bold text-white">ingeniería</span>{" "}
          <span className="text-slate-500">
            adaptadas a la medida de tus necesidades
          </span>
        </h2>
      </div>

      {/* GRID DE TARJETAS LIGERO */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="group p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-green-500/50 transition-all hover:duration-300 hover:-translate-y-1"
          >
            {/* Icono */}
            <div className="mb-6">{service.icon}</div>
            {/* Título */}
            <h3 className="text-xl text-white font-bold mb-3">
              {service.title}
            </h3>
            {/* Descripción */}
            <p className="text-slate-400 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* FOOTER DE LA SECCIÓN */}
      <div className="text-center mt-16">
        <p className="text-slate-400 text-lg">
          Entusiasmado por asumir nuevos proyectos y colaborar,
        </p>
        <p className="text-slate-400 text-lg">
          ¡Hablemos de tus ideas!{" "}
          <a
            href="#contacto"
            className="text-green-500 font-bold hover:underline"
          >
            Contáctame.
          </a>
        </p>
      </div>
    </section>
  );
}
