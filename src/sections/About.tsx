import { Code2, Users, Zap, Globe, Heart, Target, Lightbulb, ArrowRight } from 'lucide-react';
import { MayanCornerGlyph } from '../components/MayanElements';

const stats = [
  { icon: Code2, value: '3+', label: 'Clientes Activos' },
  { icon: Users, value: '100%', label: 'Satisfacción' },
  { icon: Zap, value: '5-7', label: 'Días de Entrega' },
  { icon: Globe, value: 'USA+HN', label: 'Clientes Internacionales' },
];

const values = [
  {
    icon: Target,
    title: 'Obsesionados con Resultados',
    description: 'No medimos éxito por lo bonito del diseño. Lo medimos por cuántos clientes nuevos genera tu landing page cada semana.',
  },
  {
    icon: Heart,
    title: 'Tu Único Punto de Contacto',
    description: 'Sin intermediarios, sin departamentos, sin esperas. Nos escribes directo y te respondemos en minutos, no en días.',
  },
  {
    icon: Lightbulb,
    title: 'Calidad de USA, Precio de Honduras',
    description: 'La misma tecnología que usan las empresas de Silicon Valley, pero a un precio que tiene sentido para tu mercado.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-medium rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
              Sobre Nosotros
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              No Somos una Agencia{' '}
              <span className="font-serif italic text-gradient-cyan">Más</span>
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Las agencias grandes te tratan como un número más. Nosotros somos un equipo
                que se sienta contigo, entiende tu negocio y construye exactamente lo que necesitas
                para crecer.
              </p>
              <p>
                Empresas en Honduras y Estados Unidos — como Carilly y Helpher — nos eligieron
                porque entregamos resultados, no promesas. Tu landing page lista en 7 días,
                funcionando y generando clientes desde el primer momento.
              </p>
              <p className="font-medium text-slate-800">
                La pregunta no es si puedes invertir en esto. La pregunta es cuántos
                clientes estás perdiendo sin una presencia digital profesional.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="magnetic-btn flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-full transition-all duration-300"
              >
                Quiero Resultados <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/50433672227?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo%20web.%20Me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 hover:border-slate-300 text-slate-700 font-medium rounded-full transition-all duration-300"
              >
                Hablar Ahora
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/3] bg-slate-100 rounded-[1.5rem] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80" alt="Equipo colaborando" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-[transform,opacity] duration-700 will-change-transform" />
                </div>
                <div className="aspect-[3/4] bg-slate-100 rounded-[1.5rem] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80" alt="Espacio de trabajo" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-[transform,opacity] duration-700 will-change-transform" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[3/4] bg-slate-100 rounded-[1.5rem] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80" alt="Reunión de equipo" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-[transform,opacity] duration-700 will-change-transform" />
                </div>
                <div className="aspect-[4/3] bg-slate-100 rounded-[1.5rem] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=400&q=80" alt="Sesión de código" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-[transform,opacity] duration-700 will-change-transform" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-cyan-500 text-white p-6 rounded-[1.5rem] shadow-xl shadow-cyan-500/25">
              <p className="text-3xl font-bold font-display">3+</p>
              <p className="text-sm text-cyan-100">Clientes Satisfechos</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">US</div>
                  <div className="w-6 h-6 bg-cyan-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">HN</div>
                </div>
                <span className="text-xs font-semibold text-slate-700 font-mono">Internacional</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center p-6 bg-gradient-to-b from-slate-50 to-white rounded-[1.5rem] border border-slate-100 hover:border-cyan-200/60 card-hover-lift group">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-6 h-6 text-cyan-600" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 font-display">{stat.value}</p>
                <p className="text-xs sm:text-sm text-slate-500">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MayanCornerGlyph className="text-cyan-500 opacity-30" position="left" />
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Nuestros <span className="font-serif italic">Valores</span>
              </h3>
              <MayanCornerGlyph className="text-cyan-500 opacity-30" position="right" />
            </div>
            <p className="text-slate-500 max-w-lg mx-auto">
              Lo que nos diferencia no es solo la tecnología — es cómo la usamos para tu beneficio
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="relative group p-8 bg-white rounded-[2rem] border border-slate-100 hover:border-cyan-200/60 card-hover-lift text-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/0 to-blue-50/0 group-hover:from-cyan-50/40 group-hover:to-blue-50/20 transition-[background] duration-700 pointer-events-none" />
                  <div className="relative w-14 h-14 mx-auto mb-5 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-[1.5rem] flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/30 group-hover:scale-110 transition-[transform,opacity] duration-500">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="relative font-display text-xl font-semibold text-slate-900 mb-3">{value.title}</h4>
                  <p className="relative text-slate-500 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
