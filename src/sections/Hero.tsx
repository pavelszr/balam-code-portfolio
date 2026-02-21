import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';

import gsap from 'gsap';

const HeroBackground3D = lazy(() => import('../components/HeroBackground3D'));

const rotatingWords = ['tus Ventas.', 'tu Marca.', 'tus Leads.', 'tu Alcance.', 'tu Éxito.'];

function AnimatedStat({ end, suffix, trigger }: { end: number; suffix: string; trigger: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let current = 0;
    const steps = 40;
    const increment = end / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.round(current));
      }
    }, 1500 / steps);
    return () => clearInterval(timer);
  }, [trigger, end]);
  return <>{count}{suffix}</>;
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setTimeout(() => setIsAnimating(false), 50);
      }, 350);
    }, 3200);
    return () => clearInterval(interval);
  }, [wordIndex]);

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-badge', { y: 40, opacity: 0, duration: 0.8 }, 0.3)
        .from('.hero-line-1', { y: 60, opacity: 0, duration: 1 }, 0.5)
        .from('.hero-line-2', { y: 60, opacity: 0, duration: 1 }, 0.7)
        .from('.hero-line-serif', { y: 80, opacity: 0, duration: 1.2, ease: 'power4.out' }, 0.9)
        .from('.hero-desc', { y: 30, opacity: 0, duration: 0.8 }, 1.2)
        .from('.hero-buttons', { y: 30, opacity: 0, duration: 0.8 }, 1.4)
        .from('.hero-stats > div', { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, 1.6)
        .from('.hero-scroll', { opacity: 0, duration: 0.6 }, 2)
        .from('.hero-orb', { scale: 0, opacity: 0, stagger: 0.2, duration: 1.5, ease: 'elastic.out(1, 0.5)' }, 0.8);
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[100dvh] flex items-center lg:items-end overflow-hidden">
      <div className="absolute inset-0 bg-slate-950">
        <Suspense fallback={null}>
          <HeroBackground3D />
        </Suspense>

        <div className="hero-orb hero-orb-1 hidden md:block absolute top-[15%] right-[10%] w-[500px] h-[500px] rounded-full bg-cyan-500/[0.07] blur-[80px] pointer-events-none z-[1]" />
        <div className="hero-orb hero-orb-2 hidden md:block absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-blue-500/[0.05] blur-[80px] pointer-events-none z-[1]" />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent z-[2]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-16 lg:pt-0 lg:pb-24">
        <div className="max-w-4xl">
          <div className="hero-badge inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/[0.06] border border-white/[0.08] rounded-full mb-10 shadow-[0_0_30px_rgba(6,182,212,0.06)]">
            <span className="relative w-2 h-2">
              <span className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
              <span className="relative block w-2 h-2 bg-emerald-400 rounded-full" />
            </span>
            <span className="text-emerald-300 text-sm font-medium tracking-wide font-mono">
              Solo aceptamos 3 proyectos al mes
            </span>
          </div>

          <h1 className="mb-8">
            <span className="hero-line-1 block font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[0.95]">
              Código que
            </span>
            <span className="hero-line-2 block font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[0.95] mt-2">
              Transforma
            </span>
            <span className="hero-line-serif block overflow-hidden mt-3 h-[1.2em] text-5xl sm:text-6xl lg:text-[7rem] relative">
              <span
                className={`inline-block font-serif italic text-5xl sm:text-6xl lg:text-[7rem] text-cyan-400 leading-[1.15] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isAnimating
                    ? 'translate-y-[110%] opacity-0 blur-sm scale-95'
                    : 'translate-y-0 opacity-100 blur-0 scale-100'
                }`}
                style={{ textShadow: '0 0 40px rgba(6, 182, 212, 0.25)' }}
              >
                {rotatingWords[wordIndex]}
              </span>
            </span>
          </h1>

          <p className="hero-desc text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed mb-10 font-light">
            Mientras lees esto, tus clientes potenciales están eligiendo a tu competencia.
            Creamos landing pages que convierten visitantes en compradores — lista en 7 días.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 mb-14">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="magnetic-btn group px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-900 font-semibold rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2"
            >
              Quiero mi Demo Gratis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://wa.me/50433672227?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo%20web.%20Me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn px-8 py-4 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Hablar Ahora
            </a>
          </div>

          <div className="hero-stats flex items-center gap-6 sm:gap-10 flex-wrap">
            {[
              { end: 3, suffix: 'x', label: 'Más Conversiones' },
              { end: 7, suffix: ' Días', label: 'Entrega Garantizada' },
              { end: 100, suffix: '%', label: 'Satisfacción' },
            ].map((stat) => (
              <div key={stat.label} className="relative group">
                <div className="absolute -inset-3 bg-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="relative font-mono text-cyan-400 font-bold text-sm tracking-wider">
                  <AnimatedStat end={stat.end} suffix={stat.suffix} trigger={statsVisible} />
                </p>
                <p className="relative text-slate-500 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' })}
        className="hero-scroll absolute bottom-6 left-1/2 -translate-x-1/2 w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-white/30 hover:text-cyan-400 transition-all duration-300 z-10 group"
        aria-label="Desplazar hacia abajo"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-full transition-all duration-500" />
          <ChevronDown className="w-8 h-8 animate-bounce relative" aria-hidden="true" />
        </div>
      </button>
    </section>
  );
}
