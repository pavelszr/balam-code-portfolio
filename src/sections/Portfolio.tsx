import { useEffect, useRef } from 'react';
import { Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'Sonrisas Honduras',
    type: 'Landing Page',
    category: 'Clínica Dental',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
    description: 'Landing page profesional para clínica dental con sistema de citas online y galería de tratamientos.',
    demoUrl: '/demo/sonrisas-honduras',
    features: ['Reserva de citas online', 'Galería de tratamientos', 'Testimonios de pacientes', 'Integración WhatsApp', 'Mapa de ubicación'],
    animation: 'helix',
  },
  {
    name: 'FerreMax',
    type: 'E-Commerce',
    category: 'Ferretería',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80',
    description: 'Tienda en línea con catálogo completo de productos, búsqueda por categorías y carrito de compras.',
    demoUrl: '/demo/ferremax',
    features: ['Catálogo de 500+ productos', 'Búsqueda y filtros', 'Carrito de compras', 'Gestión de inventario', 'Panel de administración'],
    animation: 'grid',
  },
  {
    name: 'Hogar Prime',
    type: 'Landing Page',
    category: 'Bienes Raíces',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    description: 'Sitio web para inmobiliaria con catálogo de propiedades, filtros de búsqueda y formulario de contacto.',
    demoUrl: '/demo/hogar-prime',
    features: ['Catálogo de propiedades', 'Filtros por precio y zona', 'Galería de fotos HD', 'Formulario de interés', 'Integración WhatsApp'],
    animation: 'ekg',
  },
  {
    name: 'Café Aroma',
    type: 'Landing Page',
    category: 'Restaurante / Café',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
    description: 'Sitio web para cafetería premium con menú digital interactivo, sistema de reservaciones y galería del local.',
    demoUrl: '/demo/cafe-aroma',
    features: ['Menú digital con filtros', 'Sistema de reservaciones', 'Galería del local', 'Integración WhatsApp', 'Horarios y ubicación'],
    animation: 'helix',
  },
  {
    name: 'FitZone',
    type: 'Landing Page',
    category: 'Gimnasio / Fitness',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    description: 'Landing page para gimnasio con horarios de clases, planes de membresía y perfiles de entrenadores.',
    demoUrl: '/demo/fitzone',
    features: ['Horario de clases', 'Planes de membresía', 'Perfiles de entrenadores', 'Prueba gratis online', 'Múltiples sedes'],
    animation: 'grid',
  },
  {
    name: 'Estilo Salón & Spa',
    type: 'Landing Page',
    category: 'Salón de Belleza',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    description: 'Sitio web elegante para salón de belleza con catálogo de servicios, galería de trabajos y reserva de citas.',
    demoUrl: '/demo/estilo-salon',
    features: ['Catálogo de servicios', 'Galería de trabajos', 'Reserva de citas online', 'Equipo de estilistas', 'Testimonios de clientes'],
    animation: 'ekg',
  },
];

function HelixAnimation() {
  return (
    <svg viewBox="0 0 120 120" className="w-20 h-20 animate-spin" style={{ animationDuration: '8s' }}>
      <circle cx="60" cy="60" r="45" fill="none" stroke="rgba(6,182,212,0.15)" strokeWidth="2" />
      <circle cx="60" cy="60" r="30" fill="none" stroke="rgba(6,182,212,0.25)" strokeWidth="1.5" strokeDasharray="8 4" />
      <circle cx="60" cy="15" r="4" fill="#06B6D4" />
      <circle cx="60" cy="105" r="4" fill="#3B82F6" />
      <line x1="60" y1="15" x2="60" y2="105" stroke="rgba(6,182,212,0.1)" strokeWidth="1" />
    </svg>
  );
}

function GridAnimation() {
  return (
    <div className="w-20 h-20 relative">
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="rounded-sm bg-cyan-500/10 animate-pulse"
            style={{ animationDelay: `${i * 0.15}s`, animationDuration: '2s' }}
          />
        ))}
      </div>
      <div
        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"
        style={{
          animation: 'scan 3s linear infinite',
        }}
      />
      <style>{`@keyframes scan { 0% { top: 0; } 50% { top: 100%; } 100% { top: 0; } }`}</style>
    </div>
  );
}

function EKGAnimation() {
  return (
    <svg viewBox="0 0 120 60" className="w-20 h-10">
      <path
        d="M0 30 L20 30 L30 30 L35 10 L40 50 L45 20 L50 40 L55 30 L80 30 L90 30 L95 10 L100 50 L105 30 L120 30"
        fill="none"
        stroke="#06B6D4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="200"
        strokeDashoffset="200"
        style={{ animation: 'ekg-draw 2s linear infinite' }}
      />
      <style>{`@keyframes ekg-draw { to { stroke-dashoffset: 0; } }`}</style>
    </svg>
  );
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.stack-card');
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: 'top 10%',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(card, {
              scale: 1 - progress * 0.08,
              filter: `blur(${progress * 12}px)`,
              opacity: 1 - progress * 0.4,
            });
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const animations = [<HelixAnimation />, <GridAnimation />, <EKGAnimation />, <HelixAnimation />, <GridAnimation />, <EKGAnimation />];

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-medium rounded-full mb-6">
            <Eye className="w-3.5 h-3.5" />
            Portafolio de Demos
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Así se Verá{' '}
            <span className="font-serif italic text-gradient-cyan">Tu Negocio</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            No te pedimos que imagines. Te mostramos. Explora demos interactivos
            de landing pages listas para generar clientes.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="stack-card sticky top-24 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden group/card"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 lg:h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold rounded-full">
                      {project.type}
                    </span>
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    {animations[index]}
                    <div>
                      <h3 className="font-display text-2xl font-bold text-slate-900">{project.name}</h3>
                      <p className="text-sm text-slate-500">{project.category}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                  <ul className="space-y-2 mb-8">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={project.demoUrl}
                    className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-white font-semibold rounded-full transition-all duration-300 w-fit shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 group"
                  >
                    Ver Demo Completo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
            <p className="text-slate-700 font-medium">¿No ves tu rubro? Lo creamos a tu medida.</p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="magnetic-btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/20"
            >
              Quiero una Igual <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
