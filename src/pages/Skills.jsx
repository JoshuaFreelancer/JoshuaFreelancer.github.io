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

export default function Skills() {
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
    { category: "Front-End", tools: ["HTML", "CSS", "JavaScript", "React"] },
    { category: "Backend", tools: ["Node.js", "Express"] },
    { category: "Bases de datos", tools: ["MySQL", "MongoDB"] },
    { category: "Herramientas", tools: ["Git", "Firebase", "Figma", "Vite"] },
    { category: "Otros", tools: ["APIs RESTful", "Tailwind CSS", "Scrum"] },
  ];

  return (
    <section
      id="habilidades"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden"
    >
      {/* TÍTULO DE SECCIÓN */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <p className="text-green-500 font-bold uppercase tracking-widest text-md mb-4">
          • Ecosistema Técnico
        </p>
        <h2 className="text-4xl md:text-5xl font-medium text-slate-300">
          Tecnologías que{" "}
          <span className="font-bold text-slate-500">Domino</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl mx-auto items-start">
        {/* 1. GRID DE ICONOS (Izquierda) */}
        {/* Eliminamos el 'group' y la capa verde de fondo para que quede estático */}
        <div className="lg:col-span-5 relative bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-800/60 backdrop-blur-sm shadow-xl overflow-hidden">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-5 relative z-10">
            {techIcons.map((tech, i) => (
              <div
                key={i}
                // El hover ahora aplica estrictamente a la caja de cada icono individual
                className={`aspect-square bg-slate-800/80 border border-slate-700/50 rounded-2xl flex items-center justify-center ${tech.customPadding || "p-3"} hover:bg-slate-800 hover:border-green-500/50 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer`}
                title={tech.name}
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="w-full h-full object-contain filter drop-shadow-md hover:brightness-110 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2. LISTA DE TEXTO (Derecha) */}
        <div className="lg:col-span-7 space-y-6 text-left pl-0 lg:pl-8 pt-2">
          {skillsList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-b border-slate-800/50 pb-5 last:border-0 last:pb-0"
            >
              {/* Categoría */}
              <span className="text-white font-bold min-w-36 flex items-center gap-3 text-base">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                {item.category}
              </span>

              {/* Etiquetas (Badges) de Tecnologías */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {item.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 text-slate-400 font-medium text-xs sm:text-sm tracking-wide rounded-lg hover:border-green-500/40 hover:text-green-400 hover:bg-green-500/5 transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
