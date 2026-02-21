import { useEffect, useRef } from 'react';
import { Check, Rocket, ShoppingCart, Sparkles, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';
import { MayanBgPattern } from '../components/MayanElements';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Demo Gratis',
    price: 'Gratis',
    period: '',
    description: 'Ve con tus propios ojos lo que podemos hacer',
    icon: Sparkles,
    highlight: false,
    cta: 'Quiero mi Demo',
    promo: '',
    features: [
      'Reunión de consulta gratuita',
      'Mockup de TU landing page',
      'Asesoría de presencia digital',
      'Propuesta personalizada',
      'Cero compromiso, cero riesgo',
    ],
  },
  {
    name: 'Landing Page',
    price: 'L.8,000 - L.10,000',
    period: 'pago único',
    altPrice: 'o desde L.1,000/mes x 12 meses',
    description: 'Lo que eligen el 80% de nuestros clientes',
    icon: Rocket,
    highlight: true,
    cta: 'Empezar Hoy',
    promo: '🔥 Primeros 3 clientes del mes: L.6,500',
    features: [
      'Diseño profesional personalizado',
      'Responsive (móvil, tablet, desktop)',
      'Hosting incluido por 1 año',
      'Dominio incluido (.com)',
      'Certificado SSL (HTTPS)',
      'Formulario de contacto',
      'Integración con WhatsApp',
      'SEO básico configurado',
      'Entrega en 5-7 días',
      'Soporte post-lanzamiento',
    ],
  },
  {
    name: 'E-Commerce',
    price: 'A Cotizar',
    period: '',
    description: 'Tienda en línea completa para vender',
    icon: ShoppingCart,
    highlight: false,
    cta: 'Solicitar Cotización',
    promo: '',
    features: [
      'Todo lo del plan Landing Page',
      'Catálogo de productos ilimitado',
      'Carrito de compras',
      'Pasarela de pago integrada',
      'Gestión de inventario',
      'Panel de administración',
      'Notificaciones de pedidos',
      'Reportes de ventas',
      'Hosting y dominio incluido',
      'Capacitación de uso',
    ],
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.pricing-card') as HTMLElement[];
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      <MayanBgPattern className="hidden md:block opacity-[0.15] text-cyan-500" />
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full mb-6">
            <span className="font-mono text-xs">$</span>
            Precios Transparentes
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Diseño Personalizado,{' '}
            <span className="font-serif italic text-cyan-400">Todo Incluido</span>
          </h2>
          <p className="text-cyan-400/80 text-sm font-medium tracking-wide uppercase mb-6">
            Cada sitio es diseñado desde cero para tu negocio — sin plantillas, sin reciclados
          </p>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Una landing page trabaja para ti 24/7, los 365 días del año.
            Menos de lo que cuesta un empleado — sin vacaciones, sin excusas.
          </p>
        </div>

        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`pricing-card relative group rounded-[2rem] flex flex-col transition-all duration-500 ${
                  plan.highlight
                    ? 'animated-border lg:scale-105 shadow-2xl shadow-cyan-500/10'
                    : 'bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:shadow-lg hover:shadow-cyan-500/5'
                }`}
                style={plan.highlight ? { '--card-bg': '#0f172a', contain: 'layout style paint' } as React.CSSProperties : { contain: 'layout style paint' }}
              >
                {plan.highlight && (
                  <>
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-cyan-500/15 via-transparent to-transparent rounded-[2rem] pointer-events-none" />
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold rounded-full shadow-lg shadow-cyan-500/30">
                      Lo Eligen el 80%
                    </div>
                  </>
                )}

                <div className="p-8 flex-grow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 rounded-xl ${plan.highlight ? 'bg-cyan-500/20' : 'bg-slate-800'}`}>
                      <Icon className={`w-6 h-6 ${plan.highlight ? 'text-cyan-400' : 'text-slate-400'}`} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
                  </div>

                  <div className="mb-2">
                    <div className="flex items-baseline gap-1 flex-wrap">
                      <span className="text-3xl sm:text-4xl font-bold text-white font-display">{plan.price}</span>
                      {plan.period && <span className="text-slate-400 text-sm">/ {plan.period}</span>}
                    </div>
                  </div>

                  {plan.altPrice && (
                    <p className="text-cyan-400 text-sm font-medium mb-3 font-mono">{plan.altPrice}</p>
                  )}

                  {plan.promo && (
                    <div className="mb-3 px-3 py-2 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                      <p className="text-amber-400 text-sm font-bold text-center">{plan.promo}</p>
                    </div>
                  )}

                  <p className="text-slate-400 text-sm mb-8">{plan.description}</p>

                  <button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`magnetic-btn w-full py-3.5 px-6 rounded-full font-semibold transition-all duration-300 mb-8 flex items-center justify-center gap-2 relative z-10 ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlight ? 'bg-cyan-500/20' : 'bg-slate-800'}`}>
                          <Check className={`w-3 h-3 ${plan.highlight ? 'text-cyan-400' : 'text-slate-500'}`} />
                        </div>
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-full">
            <p className="text-slate-400 text-sm pl-4">¿Tu proyecto necesita algo especial?</p>
            <a
              href="https://wa.me/50433672227?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo%20web.%20Me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 min-h-[44px] bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium rounded-full hover:bg-green-500/20 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Cotización en 5 minutos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
