import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.webp";
import jsImg from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import nodeImg from "../assets/nodejs.png";
import mongoImg from "../assets/mongodb.webp";
import tailwindImg from "../assets/tailwind.png";
import gitImg from "../assets/git.png";
import firebaseImg from "../assets/firebase.png";
import figmaImg from "../assets/figma.png";
// Importamos los nuevos iconos abstractos para los proyectos
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
  const techIcons = [
    { name: "HTML", src: htmlImg },
    { name: "CSS", src: cssImg, customPadding: "p-2" },
    { name: "JavaScript", src: jsImg, customPadding: "p-4" },
    { name: "React", src: reactImg },
    { name: "Node.js", src: nodeImg },
    { name: "MongoDB", src: mongoImg },
    { name: "Tailwind", src: tailwindImg },
    { name: "Git", src: gitImg },
    { name: "Firebase", src: firebaseImg },
    { name: "Figma", src: figmaImg },
  ];

  const skillsList = [
    { category: "Front-End", tools: ["HTML", "CSS", "JAVASCRIPT", "REACT"] },
    { category: "Backend", tools: ["NODE.JS", "EXPRESS"] },
    { category: "Bases de datos", tools: ["MYSQL", "MONGODB"] },
    { category: "Herramientas", tools: ["GIT", "FIREBASE", "FIGMA", "VITE"] },
    { category: "Otros", tools: ["RESTFUL APIS", "TAILWIND CSS", "SCRUM"] },
  ];

  const projects = [
    {
      id: 1,
      title: "Gamer Forever",
      desc: "Catálogo interactivo para descubrir videojuegos mediante la integración de la API de RAWG. Ofrece información actualizada de miles de títulos con una experiencia de exploración fluida.",
      tags: ["React", "Node.js", "UI/UX", "API REST"],
      repoLink: "https://github.com/JoshuaFreelancer/Gamer-Forever",
      liveLink: "https://gamer-forever-web.web.app",
      imageColor: "bg-violet-900/30",
      icon: Gamepad2, // Asignamos el componente del icono
    },
    {
      id: 2,
      title: "Bienestar Express",
      desc: "Plataforma integral para la administración eficiente de inventarios farmacéuticos. Construida bajo el stack MERN para garantizar una gestión de datos rápida, moderna y segura.",
      tags: ["React", "MongoDB", "Express", "JWT"],
      repoLink: "https://github.com/JoshuaFreelancer/SPA-BIENESTAR-EXPRESS",
      liveLink: "https://bienestar-express.web.app",
      imageColor: "bg-cyan-900/30",
      icon: HeartPulse,
    },
    {
      id: 3,
      title: "Altura Andina",
      desc: "Aplicación Full-Stack para gestión y reserva hotelera. Integra pagos en línea, notificaciones y datos meteorológicos en tiempo real de un hotel ficticio ubicado en los Andes venezolanos.",
      tags: ["Stack MERN", "API Integrations", "SPA", "Full-Stack"],
      repoLink: "https://github.com/JoshuaFreelancer/Altura-Andina",
      liveLink: "https://altura-andina.web.app",
      imageColor: "bg-emerald-900/30",
      icon: Building,
    },
    {
      id: 4,
      title: "Frutería Deluxe",
      desc: "Sistema de administración de inventario de una frutería. Implementa diseño isométrico, glassmorphism y retroalimentación auditiva sobre una sólida arquitectura de componentes.",
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
      className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden"
    >
      {/* TÍTULO DE SECCIÓN */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <p className="text-green-500 font-bold uppercase tracking-widest text-sm mb-4">
          • Mi Trabajo
        </p>
        <h2 className="text-4xl md:text-5xl font-medium text-slate-300">
          Proyectos &{" "}
          <span className="font-bold text-slate-500">Habilidades</span>
        </h2>
      </div>

      {/* --- SECCIÓN SUPERIOR: HABILIDADES (El Stack) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl mx-auto mb-24 items-start">
        {/* 1. GRID DE ICONOS */}
        <div className="lg:col-span-5 bg-slate-900/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm shadow-xl">
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
            {techIcons.map((tech, i) => (
              <div
                key={i}
                className={`aspect-square bg-slate-800 rounded-2xl flex items-center justify-center ${tech.customPadding || "p-3"} hover:scale-110 hover:bg-slate-700 transition-all duration-300`}
                title={tech.name}
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="w-full h-full object-contain filter drop-shadow-md group-hover:brightness-125"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2. LISTA DE TEXTO */}
        <div className="lg:col-span-7 space-y-6 text-left pl-0 lg:pl-8 pt-4">
          {skillsList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-6 border-b border-slate-800/50 pb-4 last:border-0 last:pb-0"
            >
              <span className="text-white font-bold min-w-36 flex items-center gap-3 text-base">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                {item.category}
              </span>
              <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm">
                {item.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-slate-400 font-medium tracking-wide hover:text-green-400 transition-colors cursor-default flex items-center"
                  >
                    {tool}
                    {idx !== item.tools.length - 1 && (
                      <span className="text-slate-700 ml-3 select-none">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECCIÓN INFERIOR: TARJETAS DE PROYECTOS --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => {
          // Extraemos el componente del icono para poder renderizarlo en JSX
          const ProjectIcon = project.icon;

          return (
            <div
              key={project.id}
              className="group relative bg-slate-900/30 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-600 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] flex flex-col sm:flex-row min-h-75"
            >
              {/* Contenido Texto */}
              <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-between order-2 sm:order-1 relative z-30 bg-slate-900/80 backdrop-blur-md">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-mono group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                  {/* Tags */}
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

                {/* Botones de Acción */}
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

              {/* Contenedor de Icono (Reemplaza a la imagen) */}
              <div
                className={`sm:w-2/5 h-48 sm:h-auto ${project.imageColor} order-1 sm:order-2 relative overflow-hidden border-b sm:border-b-0 sm:border-l border-slate-800/50`}
              >
                {/* Icono temático del proyecto gigante como marca de agua */}
                <div className="absolute inset-0 flex items-center justify-center text-white/15 group-hover:scale-110 group-hover:text-white/25 transition-all duration-700 z-0">
                  <ProjectIcon size={120} strokeWidth={0.75} />
                </div>

                {/* Overlay Hover (Botón link central, z-20) */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer z-20"
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
