import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Clients from './sections/Clients';
import Features from './sections/Features';
import Philosophy from './sections/Philosophy';
import Pricing from './sections/Pricing';
import Portfolio from './sections/Portfolio';
import Impact from './sections/Impact';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import About from './sections/About';
import Footer from './sections/Footer';
import DemoSonrisas from './demos/DemoSonrisas';
import DemoFerremax from './demos/DemoFerremax';
import DemoHogarPrime from './demos/DemoHogarPrime';
import DemoCafeAroma from './demos/DemoCafeAroma';
import DemoFitZone from './demos/DemoFitZone';
import DemoEstiloSalon from './demos/DemoEstiloSalon';

function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Features />
        <Philosophy />
        <Pricing />
        <Portfolio />
        <Impact />
        <Testimonials />
        <FAQ />
        <About />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/demo/sonrisas-honduras" element={<DemoSonrisas />} />
      <Route path="/demo/ferremax" element={<DemoFerremax />} />
      <Route path="/demo/hogar-prime" element={<DemoHogarPrime />} />
      <Route path="/demo/cafe-aroma" element={<DemoCafeAroma />} />
      <Route path="/demo/fitzone" element={<DemoFitZone />} />
      <Route path="/demo/estilo-salon" element={<DemoEstiloSalon />} />
    </Routes>
    </>
  );
}

export default App;
