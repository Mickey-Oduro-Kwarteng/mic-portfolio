import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import PortfolioGrid from "./components/PortfolioGrid";
import Cta from "./components/Cta";
import Blog from "./components/Blog";
import Services from "./components/Services";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "'Work Sans', ui-sans-serif, system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap');
        html { scroll-behavior: smooth; scroll-padding-top: 80px; }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } * { transition: none !important; } }
      `}</style>
      <Header />
      <main>
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <Process />
        </Reveal>
        <Reveal>
          <PortfolioGrid />
        </Reveal>
        <Reveal>
          <Cta />
        </Reveal>
        <Reveal>
          <Blog />
        </Reveal>
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <Tech />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
