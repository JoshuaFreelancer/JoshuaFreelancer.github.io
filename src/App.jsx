import "./App.css";
import { useState } from "react";
import Header from "./layout/Header";
import Hero from "./pages/HeroSection";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./layout/Footer";
import { translations } from "./i18n/translations";

const getInitialLanguage = () => {
  if (typeof navigator === "undefined") {
    return "en";
  }

  const preferredLanguages = [
    ...(Array.isArray(navigator.languages) ? navigator.languages : []),
    navigator.language,
  ]
    .filter(Boolean)
    .map((lang) => lang.toLowerCase());

  if (preferredLanguages.some((lang) => lang.startsWith("es"))) {
    return "es";
  }

  return "en";
};

function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const t = translations[language];

  return (
    <main className="bg-slate-950 min-h-screen">
      <Header t={t} language={language} onToggleLanguage={setLanguage} />
      <div className="pt-20">
        {" "}
        {/* Este padding-top (pt-20) es para que el Header fijo no tape el texto del Hero */}
        <Hero t={t} language={language} />
        <Services t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <Contact t={t} language={language} />
        <Footer t={t} />
      </div>
    </main>
  );
}

export default App;
