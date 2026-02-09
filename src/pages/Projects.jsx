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
import { Github, ExternalLink } from "lucide-react";

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

  const projects = [
    {
      id: 1,
      title: "Frutería Deluxe System v2.0",
      desc: "Sistema de gestión moderno con diseño Glassmorphism. Incluye autenticación, manejo de inventario dinámico, carrito de compras y animaciones fluidas.",
      tags: ["React", "Tailwind", "Vite", "UX/UI"],
      link: "https://github.com/JoshuaFreelancer/fruteria-deluxe/tree/main",
      imageColor: "bg-emerald-900",
    },
    {
      id: 2,
      title: "Bienestar Express SPA",
      desc: "Single Page Application (SPA) enfocada en servicios de salud. Cuenta con enrutamiento optimizado, diseño responsivo y estructura modular de componentes.",
      tags: ["React", "React Router", "Frontend"],
      link: "https://github.com/JoshuaFreelancer/SPA-BIENESTAR-EXPRESS",
      imageColor: "bg-cyan-900",
    },
    {
      id: 3,
      title: "Gamer Forever Reviews",
      desc: "Plataforma interactiva para reseñas de videojuegos. Catálogo visual oscuro, sistema de valoración y filtros de contenido para gamers.",
      tags: ["JavaScript", "CSS3", "Design"],
      link: "https://github.com/JoshuaFreelancer/Gamer-Forever-Game-Reviews/tree/main",
      imageColor: "bg-violet-900",
    },
  ];

  const skillsList = [
    { category: "Front-End", tools: ["HTML", "CSS", "JAVASCRIPT", "REACT"] },
    { category: "Backend", tools: ["NODE.JS", "EXPRESS"] },
    { category: "Bases de datos", tools: ["MYSQL", "MONGODB"] },
    { category: "Herramientas", tools: ["GIT", "FIREBASE", "FIGMA", "VITE"] },
    { category: "Otros", tools: ["RESTFUL APIS", "TAILWIND CSS", "SCRUM"] },
  ];

  return (
    <section id="proyectos" className="p-6 bg-slate-950 text-white py-20">
      {/* TÍTULO DE SECCIÓN */}
      <div className="text-center mb-16">
        <p className="text-green-500 font-bold uppercase tracking-widest text-md mb-2">
          • Portafolio
        </p>
        <h2 className="text-4xl md:text-5xl font-medium text-slate-300">
          Proyectos &{" "}
          <span className="font-bold text-slate-500">Habilidades</span>
        </h2>
      </div>

      {/* SECCIÓN SUPERIOR: HABILIDADES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24 items-center">
        {/* 1. GRID DE ICONOS */}
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
            {techIcons.map((tech, i) => (
              <div
                key={i}
                className={`aspect-square bg-white rounded-full flex items-center justify-center ${tech.customPadding || "p-3"} hover:scale-110 transition-transform shadow-lg shadow-white/5 cursor-pointer group`}
                title={tech.name}
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="w-full h-full object-contain filter group-hover:brightness-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2. LISTA DE TEXTO */}
        <div className="space-y-6 text-left pl-0 lg:pl-8">
          {skillsList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-baseline gap-3 border-b border-slate-800/50 pb-3 last:border-0"
            >
              <span className="text-white font-bold min-w-36 flex items-center gap-2 text-lg">
                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                {item.category}
              </span>
              <div className="flex flex-wrap gap-2 text-sm md:text-base">
                {item.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-slate-400 font-medium tracking-wide hover:text-green-400 transition-colors cursor-default"
                  >
                    {tool}
                    {idx !== item.tools.length - 1 && (
                      <span className="text-slate-700 px-2">|</span>
                    )}
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
            className="group bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-600 transition-all hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] flex flex-col md:flex-row h-auto md:h-72"
          >
            {/* Contenido Texto (Izquierda) */}
            <div className="p-8 md:w-3/5 flex flex-col justify-between relative z-10 bg-slate-900/60 backdrop-blur-sm">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 font-mono group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                  {project.desc}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold text-slate-300 bg-slate-800/50 rounded-full border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botón Ver Código con Icono ExternalLink */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-bold text-sm mt-auto w-fit"
              >
                Ver Repositorio <ExternalLink size={18} />
              </a>
            </div>

            {/* Placeholder Imagen (Derecha) */}
            <div
              className={`md:w-2/5 ${project.imageColor} relative overflow-hidden`}
            >
              {/* Decoración de fondo abstracta */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/20 to-transparent scale-150"></div>

              {/* Icono central Reemplazando el SVG largo por el componente Github */}
              <div className="absolute inset-0 flex items-center justify-center text-white/20 group-hover:scale-110 transition-transform duration-500">
                <Github size={80} strokeWidth={1} />
              </div>

              {/* Overlay Hover */}
              <div className="absolute inset-0 bg-slate-950/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-white text-slate-950 font-bold rounded-full hover:scale-105 transition-transform shadow-xl flex items-center gap-2"
                >
                  <Github size={20} />
                  Ver en GitHub
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Card "Próximo Proyecto" */}
        <div className="border border-dashed border-slate-800 rounded-3xl flex flex-col items-center justify-center h-64 md:h-72 bg-slate-900/20 text-slate-600 hover:border-green-500/30 hover:text-green-500/50 transition-colors cursor-help">
          <span className="text-4xl mb-2">+</span>
          <span className="text-sm tracking-widest uppercase font-bold">
            Próximo Proyecto
          </span>
        </div>
      </div>
    </section>
  );
}
