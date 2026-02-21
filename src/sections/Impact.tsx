import { useState, useEffect } from 'react';
import { Rocket, Zap, Users, Shield, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';
import { MayanPyramidIcon } from '../components/MayanElements';

const reasons = [
  {
    icon: Rocket,
    title: 'Genera Clientes 24/7',
    description: 'Tu landing page no duerme, no pide vacaciones, no se enferma. Trabaja captando clientes mientras tú te enfocas en lo que mejor haces.',
    stat: '3x',
    statLabel: 'Más consultas',
  },
  {
    icon: Zap,
    title: 'Online en 7 Días',
    description: 'Mientras otros tardan meses, nosotros entregamos en una semana. Cada día sin presencia digital es dinero que pierdes.',
    stat: '7',
    statLabel: 'Días promedio',
  },
  {
    icon: Users,
    title: 'Te Respondemos al Instante',
    description: 'Nada de tickets, esperas de 48 horas o bots. Nos escribes al WhatsApp y te respondemos como si fueras nuestro único cliente.',
    stat: '<5 min',
    statLabel: 'Tiempo de respuesta',
  },
  {
    icon: Shield,
    title: 'Cero Riesgo',
    description: 'Demo gratis antes de pagar. Si el mockup no te convence, no pagas nada. Y si algo falla después del lanzamiento, lo resolvemos sin costo extra.',
    stat: '0',
    statLabel: 'Costos ocultos',
  },
];

export default function Impact() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reasons.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[80px]" />
        <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full mb-6">
            <MayanPyramidIcon className="text-cyan-400" />
            ¿Por qué Balam Code?
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Tu Competencia ya{' '}
            <span className="font-serif italic text-cyan-400">Está Online</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            El 97% de las personas buscan negocios online antes de comprar.
            Si no te encuentran a ti, encuentran a otro.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              const isActive = activeIndex === index;
              return (
                <div
                  key={reason.title}
                  onClick={() => setActiveIndex(index)}
                  className={`group p-6 rounded-[1.5rem] cursor-pointer transition-all duration-500 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/30'
                      : 'bg-slate-900/50 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      isActive ? 'bg-cyan-500 shadow-lg shadow-cyan-500/25' : 'bg-slate-800'
                    }`}>
                      <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-1 transition-colors ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {reason.title}
                      </h3>
                      <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
                      </div>
                    </div>
                    <div className={`text-right transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                      <p className={`text-2xl font-bold font-mono ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>{reason.stat}</p>
                      <p className="text-xs text-slate-500">{reason.statLabel}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:sticky lg:top-32">
            <div className="bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 rounded-[2rem] p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-cyan-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[60px] pointer-events-none" />

              <div key={activeIndex} className="crossfade-enter relative z-10">
                {(() => {
                  const Icon = reasons[activeIndex].icon;
                  return (
                    <>
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-[1.5rem] flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/25">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-white mb-3">{reasons[activeIndex].title}</h3>
                      <p className="text-slate-400 leading-relaxed mb-6">{reasons[activeIndex].description}</p>
                      <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                        <div className="text-center w-full">
                          <p className="text-3xl font-bold text-cyan-400 font-mono">{reasons[activeIndex].stat}</p>
                          <p className="text-xs text-slate-500 mt-1">{reasons[activeIndex].statLabel}</p>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>

              <div className="flex gap-1 mt-8 relative z-10">
                {reasons.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`min-w-[44px] min-h-[44px] p-2 flex items-center justify-center`}
                  >
                    <span className={`block h-1.5 rounded-full transition-all duration-500 ${
                      i === activeIndex ? 'w-8 bg-gradient-to-r from-cyan-500 to-blue-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="magnetic-btn flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                No Perder Más Clientes <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/50433672227?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo%20web.%20Me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] text-white font-medium rounded-full transition-all duration-300"
              >
                <WhatsAppIcon className="w-4 h-4" /> Hablar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
