const clients = [
  { name: 'Carilly', logo: '/client-carilly.png', location: 'USA', className: 'h-12 lg:h-16' },
  { name: 'Helpher', logo: '/client-helpher.png', location: 'USA', className: 'h-12 lg:h-16' },
  { name: 'Casa Blanca', logo: '/client-casablanca.png', location: 'Honduras', className: 'h-16 lg:h-24' },
];

const duplicated = [...clients, ...clients, ...clients, ...clients];

export default function Clients() {
  return (
    <section className="py-16 bg-white border-b border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-200" />
          <p className="text-center text-sm font-medium text-slate-400 uppercase tracking-[0.2em] font-mono">
            Empresas de USA y Honduras que confían en nosotros
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-200" />
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div
          className="flex items-center gap-16 lg:gap-24 w-max"
          style={{
            animation: 'marquee 20s linear infinite',
          }}
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
    </section>
  );
}
