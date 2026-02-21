import { Link } from 'react-router-dom';

const clients = [
  { name: 'Carilly', logo: '/client-carilly.png', location: 'USA', className: 'h-12 lg:h-16' },
  { name: 'Helpher', logo: '/client-helpher.png', location: 'USA', className: 'h-12 lg:h-16' },
  { name: 'Casa Blanca', logo: '/client-casablanca.png', location: 'Honduras', className: 'h-16 lg:h-24' },
];

const duplicated = [...clients, ...clients, ...clients, ...clients];

const demoLogos = [
  { name: 'Sonrisas Honduras', logo: '/demos/sonrisas.png', url: '/demo/sonrisas-honduras' },
  { name: 'FerreMax', logo: '/demos/ferremax.png', url: '/demo/ferremax' },
  { name: 'Hogar Prime', logo: '/demos/hogar-prime.png', url: '/demo/hogar-prime' },
  { name: 'Café Aroma', logo: '/demos/cafe-aroma.png', url: '/demo/cafe-aroma' },
  { name: 'FitZone', logo: '/demos/fitzone.png', url: '/demo/fitzone' },
  { name: 'Aura Zen', logo: '/demos/aura-zen.png', url: '/demo/aura-zen' },
  { name: 'VitaSalud', logo: '/demos/vitasalud.png', url: '/demo/clinica-medica' },
];

const demoLogosDuplicated = [...demoLogos, ...demoLogos, ...demoLogos, ...demoLogos];

export default function Clients() {
  return (
    <section className="py-16 bg-white border-b border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-200" />
          <h2 className="text-center text-sm font-medium text-slate-400 uppercase tracking-[0.2em] font-mono">
            Empresas de USA y Honduras que confían en nosotros
          </h2>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-200" />
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div
          className="flex items-center gap-16 lg:gap-24 w-max"
          style={{ animation: 'marquee 20s linear infinite' }}
        >
          {duplicated.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 grayscale hover:grayscale-0 opacity-30 hover:opacity-100 transition-all duration-700 hover:scale-105"
            >
              <img src={client.logo} alt={client.name} loading="lazy" className={`${client.className} w-auto object-contain aspect-[3/2]`} />
            </div>
          ))}
        </div>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-14 mb-8">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-200" />
          <h2 className="text-center text-sm font-medium text-slate-400 uppercase tracking-[0.2em] font-mono">
            Algunos de nuestros demos
          </h2>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-200" />
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div
          className="flex items-center gap-12 lg:gap-16 w-max"
          style={{ animation: 'demoMarquee 25s linear infinite' }}
        >
          {demoLogosDuplicated.map((demo, index) => (
            <Link
              key={`${demo.name}-${index}`}
              to={demo.url}
              className="flex-shrink-0 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
            >
              <img src={demo.logo} alt={demo.name} loading="lazy" className="h-14 lg:h-20 w-auto object-contain" />
            </Link>
          ))}
        </div>
        <style>{`@keyframes demoMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      </div>
    </section>
  );
}
