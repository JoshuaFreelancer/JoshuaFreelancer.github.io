export default function Projects() {
  
  // Datos de tus proyectos (Puedes editar esto luego)
  const projects = [
    {
      id: 1,
      title: "ApiRestFul E-commerce",
      desc: "API completa para gestión de productos, usuarios y pedidos. Incluye autenticación JWT y pasarela de pagos.",
      tags: ["Node.js", "Express", "MongoDB"],
      imageColor: "bg-slate-700" // Placeholder gris para la imagen
    },
    {
      id: 2,
      title: "Dashboard Administrativo",
      desc: "Interfaz de administración para gestionar inventarios en tiempo real con gráficos y reportes exportables.",
      tags: ["React", "Tailwind", "Vite"],
      imageColor: "bg-slate-800"
    },
    {
      id: 3,
      title: "Landing Page Corporativa",
      desc: "Sitio web de alto rendimiento optimizado para SEO y conversión, totalmente responsive.",
      tags: ["HTML/CSS", "JavaScript", "SEO"],
      imageColor: "bg-slate-700"
    }
  ]

  // Lista de habilidades para la parte derecha
  const skillsList = [
    { category: "Front-End", tools: ["HTML", "CSS", "JAVASCRIPT", "REACT"] },
    { category: "Backend", tools: ["NODE.JS", "EXPRESS"] },
    { category: "Bases de datos", tools: ["MYSQL", "MONGODB"] },
    { category: "Herramientas", tools: ["GIT", "FIREBASE", "FIGMA", "VITE"] },
    { category: "Otros", tools: ["RESTFUL APIS", "TAILWIND CSS", "SCRUM"] },
  ]

  return (
    <section id="proyectos" className="p-6 bg-slate-950 text-white">
      
      {/* TÍTULO DE SECCIÓN */}
      <div className="text-center mb-16">
        <p className="text-green-500 font-bold uppercase tracking-widest text-md mb-2">
          • Proyectos
        </p>
        <h2 className="text-4xl md:text-5xl font-medium text-slate-300">
          Mis <span className="font-bold text-slate-500">Habilidades</span>
        </h2>
      </div>

      {/* SECCIÓN SUPERIOR: HABILIDADES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20 items-center">
        
        {/* 1. GRID DE ICONOS (Izquierda) */}
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <div className="grid grid-cols-5 gap-6">
             {/* Generamos 10 círculos con iconos SVG genéricos de código */}
             {[...Array(10)].map((_, i) => (
                <div key={i} className="aspect-square bg-white rounded-full flex items-center justify-center text-slate-900 hover:scale-110 transition-transform shadow-lg shadow-white/10">
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
             ))}
          </div>
        </div>

        {/* 2. LISTA DE TEXTO (Derecha) */}
        <div className="space-y-6 text-left">
          {skillsList.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-baseline gap-2">
              <span className="text-white font-bold min-w-35 flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                 {item.category}:
              </span>
              <div className="flex flex-wrap gap-2 text-sm md:text-base">
                {item.tools.map((tool, idx) => (
                  <span key={idx} className="text-green-500 font-medium tracking-wide">
                    {tool} {idx !== item.tools.length - 1 && <span className="text-slate-600 px-1">/</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN INFERIOR: GRID DE PROYECTOS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-colors flex flex-col md:flex-row h-auto md:h-64"
          >
            {/* Contenido Texto (Izquierda) */}
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-3 font-mono">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {project.desc}
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-bold text-green-400 bg-green-900/20 rounded-full border border-green-900/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Placeholder Imagen (Derecha) */}
            <div className={`md:w-1/2 ${project.imageColor} relative group`}>
               {/* Icono central simulando imagen */}
               <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                  <svg className="w-16 h-16 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
               </div>
               {/* Overlay al hacer hover */}
               <div className="absolute inset-0 bg-slate-950/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="px-6 py-2 bg-white text-slate-950 font-bold rounded-full hover:scale-105 transition-transform">
                    Ver Demo
                  </a>
               </div>
            </div>
          </div>
        ))}

        {/* Placeholder vacío para completar el grid (cuadro oscuro) */}
        <div className="border border-dashed border-slate-800 rounded-2xl flex items-center justify-center h-64 bg-slate-900/20 text-slate-600">
          <span className="text-sm tracking-widest uppercase">Próximo Proyecto...</span>
        </div>

      </div>

    </section>
  )
}