import { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, MapPin } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: 'Balam Code nos ayudó a lanzar nuestra landing page en tiempo récord. El diseño es profesional y hemos visto un aumento real en consultas desde que la publicamos. Totalmente recomendados.',
    author: 'Callie Miller',
    role: 'CEO',
    company: 'Carilly',
    location: 'Estados Unidos',
    avatar: 'CM',
    rating: 5,
  },
  {
    id: 2,
    quote: 'Necesitábamos una presencia web que reflejara la calidad de nuestro servicio. Balam Code entendió nuestra visión desde el primer día y entregó exactamente lo que buscábamos, a un precio justo.',
    author: 'Callie Miller',
    role: 'Fundadora',
    company: 'Helpher',
    location: 'Estados Unidos',
    avatar: 'CM',
    rating: 5,
  },
  {
    id: 3,
    quote: 'Balam Code transformó nuestra imagen digital con un sitio web que refleja la elegancia de nuestros productos. Su atención al detalle y compromiso con la calidad superó nuestras expectativas.',
    author: 'Brenda Moncada',
    role: 'Directora',
    company: 'Casa Blanca Mobiliario & Diseño',
    location: 'Honduras',
    avatar: 'BM',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const goTo = useCallback((index: number, dir: 'next' | 'prev' = 'next') => {
    if (isTransitioning || index === currentIndex) return;
    setDirection(dir);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  }, [isTransitioning, currentIndex]);

  const nextTestimonial = useCallback(() => {
    goTo((currentIndex + 1) % testimonials.length, 'next');
  }, [currentIndex, goTo]);

  const prevTestimonial = useCallback(() => {
    goTo((currentIndex - 1 + testimonials.length) % testimonials.length, 'prev');
  }, [currentIndex, goTo]);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const t = testimonials[currentIndex];

  return (
    <section id="testimonios" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl opacity-40" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-medium rounded-full mb-6">
            <Star className="w-3.5 h-3.5 fill-cyan-500 text-cyan-500" />
            Testimonios
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            Ellos ya{' '}
            <span className="font-serif italic text-gradient-cyan">Dieron el Paso</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Empresas reales con resultados reales. El siguiente caso de éxito puede ser el tuyo.
          </p>
        </div>

        <div className="relative">
          <div
            className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isTransitioning
                ? `opacity-0 ${direction === 'next' ? 'translate-y-4' : '-translate-y-4'} scale-[0.98] blur-[2px]`
                : 'opacity-100 translate-y-0 scale-100 blur-0'
            }`}
          >
            <div className="bg-gradient-to-b from-slate-50 to-white rounded-[2rem] border border-slate-100 p-8 sm:p-12 shadow-xl shadow-slate-100/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-cyan-50 to-transparent rounded-bl-full opacity-50 pointer-events-none" />

              <Quote className="w-10 h-10 text-cyan-200 mb-6 relative z-10" />
              <div className="flex items-center gap-1 mb-8 relative z-10">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <blockquote className="text-xl sm:text-2xl text-slate-800 font-light leading-relaxed mb-10 font-serif italic relative z-10">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-[1rem] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/20">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">{t.author}</p>
                  <p className="text-slate-500 text-sm">{t.role} @ {t.company}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-cyan-500" />
                    <p className="text-cyan-600 text-xs font-medium font-mono">{t.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-3">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => goTo(index, index > currentIndex ? 'next' : 'prev')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-white text-[10px] font-bold transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-br from-cyan-400 to-blue-500'
                      : 'bg-gradient-to-br from-cyan-500 to-blue-500'
                  }`}>
                    {item.avatar}
                  </div>
                  <span className="text-xs font-medium hidden sm:block">{item.company}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button onClick={prevTestimonial} className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 hover:scale-105 text-slate-600 transition-all duration-300">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextTestimonial} className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 hover:scale-105 text-slate-600 transition-all duration-300">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
