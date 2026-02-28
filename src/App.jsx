import "./App.css";
import Header from "./layout/Header";
import Hero from "./pages/HeroSection";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./layout/Footer";

function App() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Header />
      <div className="pt-20">
        {" "}
        {/* Este padding-top (pt-20) es para que el Header fijo no tape el texto del Hero */}
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
