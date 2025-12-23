export default function Services() {
  
  // Datos de tus 6 servicios reales (basados en tu CV)
  const services = [
    {
      id: 1,
      title: "Desarrollo Web Full-Stack",
      desc: "Sitios web completos y aplicaciones robustas utilizando React, Node.js y bases de datos modernas.",
      icon: (
        <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
      )
    },
    {
      id: 2,
      title: "E-commerce & Tiendas",
      desc: "Integración de pasarelas de pago (Stripe/PayPal), carritos de compra y gestión de productos.",
      icon: (
        <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
      )
    },
    {
      id: 3,
      title: "Diseño UI/UX Responsive",
      desc: "Interfaces adaptables a móviles (Mobile First) con enfoque en la experiencia de usuario y estética limpia.",
      icon: (
        <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      )
    },
    {
      id: 4,
      title: "Sistemas a Medida",
      desc: "Desarrollo de software interno: inventarios, nóminas, dashboards administrativos y automatización.",
      icon: (
        <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
      )
    },
    {
      id: 5,
      title: "Optimización SEO",
      desc: "Mejora de la velocidad de carga y estructura para posicionar tu marca en los primeros lugares de Google.",
      icon: (
        <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    },
    {
      id: 6,
      title: "Mantenimiento & API",
      desc: "Conexión con servicios externos, corrección de errores y actualizaciones de seguridad constantes.",
      icon: (
        <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>
      )
    },
  ]

  return (
    <section id="servicios" className="p-6 bg-slate-950 relative">
      
      {/* HEADER DE LA SECCIÓN */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <p className="text-green-500 font-bold uppercase tracking-widest text-md mb-4">
          • ¿Qué ofrezco?
        </p>
        <h2 className="text-4xl md:text-5xl text-white font-medium leading-tight">
          Soluciones de <span className="font-bold text-white">diseño</span> <span className="text-slate-500">adaptados a la medida de sus necesidades</span>
        </h2>
      </div>

      {/* GRID DE TARJETAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service) => (
          <div 
            key={service.id}
            className="group p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Icono */}
            <div className="mb-6 group-hover:text-green-500 transition-colors">
              {service.icon}
            </div>
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
          ¡Hablemos de tus ideas! <a href="#contacto" className="text-green-500 font-bold hover:underline">Contáctame.</a>
        </p>
      </div>

    </section>
  )
}