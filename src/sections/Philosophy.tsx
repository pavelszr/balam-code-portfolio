import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ['.phil-line-1', '.phil-line-2', '.phil-line-3', '.phil-line-4'].forEach((sel) => {
        gsap.fromTo(sel,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: sel,
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
    <section ref={sectionRef} className="relative py-32 lg:py-48 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=60"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
      </div>

      <div className="hidden md:block absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '50px 50px',
      }} />

      <div className="hidden md:block absolute top-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-blue-500/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-16 lg:space-y-24">
          <div>
            <p className="phil-line-1 font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-500 leading-tight tracking-tight">
              Otros crean sitios web.
            </p>
          </div>

          <div>
            <p className="phil-line-2 font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Nosotros creamos{' '}
              <span
                className="font-serif italic text-cyan-400 text-glow"
                style={{ textShadow: '0 0 30px rgba(6, 182, 212, 0.3)' }}
              >
                instrumentos digitales.
              </span>
            </p>
          </div>

          <div className="border-t border-slate-800 pt-16 lg:pt-24">
            <p className="phil-line-3 font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-500 leading-tight tracking-tight">
              La pregunta no es: ¿Tienes un sitio web?
            </p>
          </div>

          <div>
            <p className="phil-line-4 font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              La pregunta es:{' '}
              <span
                className="font-serif italic text-cyan-400 text-glow"
                style={{ textShadow: '0 0 30px rgba(6, 182, 212, 0.3)' }}
              >
                ¿Tu sitio web genera clientes?
              </span>
            </p>
          </div>
        </div>

        <div className="mt-20 lg:mt-32 flex items-center gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-800/30 to-transparent" />
          <span className="font-mono text-xs text-slate-600 tracking-widest uppercase">Balam Code Philosophy</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-800/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
