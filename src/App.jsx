import "./App.css";
import Navbar from "./pages/Navbar";
import Hero from "./pages/HeroSection";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />
      <div className="pt-20">
        {" "}
        {/* Este padding-top (pt-20) es para que el Navbar fijo no tape el texto del Hero */}
        <Hero />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
