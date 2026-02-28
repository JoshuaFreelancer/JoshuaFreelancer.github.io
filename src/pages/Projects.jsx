import {
  Github,
  ExternalLink,
  Globe,
  Gamepad2,
  HeartPulse,
  Building,
  ShoppingBasket,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Gamer Forever",
      desc: "Construí este catálogo integrando la API de RAWG para demostrar mi dominio en el consumo de datos externos. Desarrollé un backend proxy propio en Node.js para resolver bloqueos CORS y garantizar una exploración sin interrupciones.",
      tags: ["React", "Node.js", "UI/UX", "API REST"],
      repoLink: "https://github.com/JoshuaFreelancer/Gamer-Forever",
      liveLink: "https://gamer-forever-web.web.app",
      imageColor: "bg-violet-900/30",
      icon: Gamepad2,
    },
    {
      id: 2,
      title: "Bienestar Express",
      desc: "Desarrollé esta plataforma MERN para resolver la gestión ineficiente de inventarios. Implementé autenticación JWT, subida de imágenes a la nube y una base de datos segura para entregar un producto final rápido y confiable.",
      tags: ["React", "MongoDB", "Express", "JWT"],
      repoLink: "https://github.com/JoshuaFreelancer/SPA-BIENESTAR-EXPRESS",
      liveLink: "https://bienestar-express.web.app",
      imageColor: "bg-cyan-900/30",
      icon: HeartPulse,
    },
    {
      id: 3,
      title: "Altura Andina",
      desc: "Creé esta aplicación Full-Stack inspirada en los Andes para desafiar mis habilidades en entornos de producción. Integré pagos en línea, notificaciones y clima en tiempo real, demostrando mi capacidad para unir múltiples servicios complejos.",
      tags: ["Stack MERN", "API Integrations", "SPA", "Full-Stack"],
      repoLink: "https://github.com/JoshuaFreelancer/Altura-Andina",
      liveLink: "https://altura-andina.web.app",
      imageColor: "bg-emerald-900/30",
      icon: Building,
    },
    {
      id: 4,
      title: "Frutería Deluxe",
      desc: "Diseñé este sistema de inventario rompiendo el molde aburrido de los paneles tradicionales. Llevé la UX/UI al límite con diseño isométrico, glassmorphism y feedback auditivo, manteniendo siempre una arquitectura de código escalable.",
      tags: ["React", "Tailwind CSS", "UX/UI", "Glassmorphism"],
      repoLink: "https://github.com/JoshuaFreelancer/Fruteria-Deluxe",
      liveLink: "https://fruteria-deluxe.web.app",
      imageColor: "bg-orange-900/30",
      icon: ShoppingBasket,
    },
  ];

  return (
    <section
      id="proyectos"
      className="pb-16 pt-8 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden"
    >
      {/* TÍTULO DE SECCIÓN */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <p className="text-green-500 font-bold uppercase tracking-widest text-md mb-4">
          • Portafolio
        </p>
        <h2 className="text-4xl md:text-5xl font-medium text-slate-300">
          Mis mejores{" "}
          <span className="font-bold text-slate-500">Proyectos</span>
        </h2>
      </div>

      {/* GRID DE TARJETAS DE PROYECTOS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => {
          const ProjectIcon = project.icon;

          return (
            <div
              key={project.id}
              className="group relative bg-slate-900/30 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-600 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] flex flex-col sm:flex-row min-h-75"
            >
              <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-between order-2 sm:order-1 relative z-30 bg-slate-900/80 backdrop-blur-md">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-mono group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-green-400 bg-green-400/10 rounded-full border border-green-400/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-slate-950 hover:bg-green-500 hover:text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg"
                  >
                    <Globe size={16} /> Ver Live
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-300"
                  >
                    <Github size={16} /> Repositorio
                  </a>
                </div>
              </div>

              <div
                className={`sm:w-2/5 h-48 sm:h-auto ${project.imageColor} order-1 sm:order-2 relative overflow-hidden border-b sm:border-b-0 sm:border-l border-slate-800/50`}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white/15 group-hover:scale-110 group-hover:text-white/25 transition-all duration-700 z-0">
                  <ProjectIcon size={120} strokeWidth={0.75} />
                </div>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex absolute inset-0 bg-slate-950/40 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer z-20"
                >
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ExternalLink size={32} className="text-white" />
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
