import { lazy, Suspense } from 'react';
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
import EcommerceShowcase from './sections/EcommerceShowcase';

const DemoSonrisas = lazy(() => import('./demos/DemoSonrisas'));
const DemoFerremax = lazy(() => import('./demos/DemoFerremax'));
const DemoHogarPrime = lazy(() => import('./demos/DemoHogarPrime'));
const DemoCafeAroma = lazy(() => import('./demos/DemoCafeAroma'));
const DemoFitZone = lazy(() => import('./demos/DemoFitZone'));
const DemoEstiloSalon = lazy(() => import('./demos/DemoEstiloSalon'));
const DemoEcommerceAdmin = lazy(() => import('./demos/DemoEcommerceAdmin'));

function DemoLoading() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

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
        <EcommerceShowcase />
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
      <Route path="/demo/sonrisas-honduras" element={<Suspense fallback={<DemoLoading />}><DemoSonrisas /></Suspense>} />
      <Route path="/demo/ferremax" element={<Suspense fallback={<DemoLoading />}><DemoFerremax /></Suspense>} />
      <Route path="/demo/hogar-prime" element={<Suspense fallback={<DemoLoading />}><DemoHogarPrime /></Suspense>} />
      <Route path="/demo/cafe-aroma" element={<Suspense fallback={<DemoLoading />}><DemoCafeAroma /></Suspense>} />
      <Route path="/demo/fitzone" element={<Suspense fallback={<DemoLoading />}><DemoFitZone /></Suspense>} />
      <Route path="/demo/estilo-salon" element={<Suspense fallback={<DemoLoading />}><DemoEstiloSalon /></Suspense>} />
      <Route path="/demo/ecommerce-admin" element={<Suspense fallback={<DemoLoading />}><DemoEcommerceAdmin /></Suspense>} />
    </Routes>
    </>
  );
}

export default App;
