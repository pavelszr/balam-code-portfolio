import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Star, ChevronLeft, ChevronRight, Shield, Sparkles, Heart, ArrowRight, Calendar } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { WhatsAppIcon } from '../components/SocialIcons';
import { ColgateLogo, OralBLogo, PhilipsLogo, DentsplyLogo, ThreeMlogo, IvoclarLogo } from '../components/BrandLogos';
import { useRef, useState, useEffect } from 'react';

const services = [
  { name: 'Limpieza Dental', price: 'L.800', desc: 'Limpieza profunda profesional con ultrasonido', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80', popular: false },
  { name: 'Blanqueamiento', price: 'L.3,500', desc: 'Dientes hasta 8 tonos más blancos en 1 sesión', image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&q=80', popular: true },
  { name: 'Ortodoncia', price: 'Desde L.15,000', desc: 'Brackets metálicos, cerámicos o invisalign', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80', popular: false },
  { name: 'Implantes Dentales', price: 'Desde L.20,000', desc: 'Implantes de titanio con corona de porcelana', image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=400&q=80', popular: false },
  { name: 'Carillas de Porcelana', price: 'Desde L.5,000', desc: 'Sonrisa perfecta con carillas ultrafinas', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80', popular: true },
  { name: 'Endodoncia', price: 'L.4,500', desc: 'Tratamiento de conducto indoloro y seguro', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80', popular: false },
];

const testimonials = [
  { name: 'María López', text: 'Me hicieron un blanqueamiento y quedé impresionada con los resultados. El equipo es muy profesional y el lugar está impecable.', rating: 5, service: 'Blanqueamiento' },
  { name: 'Carlos Reyes', text: 'Llevé a mis hijos por primera vez y les encantó. La doctora tiene una paciencia increíble con los niños. Definitivamente regresaremos.', rating: 5, service: 'Limpieza Dental' },
  { name: 'Ana Martínez', text: 'Después de años con miedo al dentista, aquí me sentí segura. El procedimiento fue sin dolor y el resultado superó mis expectativas.', rating: 5, service: 'Implantes' },
  { name: 'Roberto Hernández', text: 'Las carillas me cambiaron la vida. Ahora sonrío con confianza. Excelente inversión y servicio de primera.', rating: 5, service: 'Carillas' },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80',
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80',
  'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=400&q=80',
  'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&q=80',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80',
];

const masonryHeights = ['h-64', 'h-80', 'h-56', 'h-72', 'h-60', 'h-96'];

const timelineSteps = [
  { step: '01', title: 'Consulta', desc: 'Evaluación completa gratuita con radiografías digitales y plan de tratamiento personalizado.', icon: Calendar },
  { step: '02', title: 'Diagnóstico', desc: 'Análisis detallado con escáner 3D intraoral para un diagnóstico preciso y transparente.', icon: Shield },
  { step: '03', title: 'Tratamiento', desc: 'Procedimientos sin dolor con tecnología de punta y atención personalizada en cada paso.', icon: Heart },
  { step: '04', title: 'Sonrisa', desc: 'Resultados que transforman tu vida. Seguimiento continuo para mantener tu sonrisa perfecta.', icon: Sparkles },
];

const WaveDivider = ({ flip = false, color = '#f8fafc' }: { flip?: boolean; color?: string }) => (
  <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}>
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-16">
      <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z" fill={color} />
    </svg>
  </div>
);

export default function DemoSonrisas() {
  const [navSolid, setNavSolid] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const servicesScrollRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setNavSolid(latest > 60);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollServices = (dir: 'left' | 'right') => {
    if (servicesScrollRef.current) {
      const amount = dir === 'left' ? -320 : 320;
      servicesScrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-[60] bg-teal-600 text-white text-center py-2.5 text-sm font-medium shadow-lg">
        Esto es un ejemplo creado por <Link to="/" className="underline font-bold hover:text-amber-200 transition-colors">Balam Code</Link> — <Link to="/" className="underline hover:text-amber-200 transition-colors">Solicita el tuyo</Link>
      </div>

      <motion.nav
        className={`fixed top-10 left-0 right-0 z-50 transition-all duration-500 ${navSolid ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <div className="w-32 sm:w-40" />
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-500 ${navSolid ? 'bg-teal-600' : 'bg-white/20 backdrop-blur-sm'}`}>
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className={`text-xl font-serif font-bold transition-colors duration-500 ${navSolid ? 'text-slate-800' : 'text-white'}`}>
              Sonrisas Honduras
            </span>
          </Link>
          <div className="hidden md:flex items-center">
            <div className={`flex items-center gap-6 text-sm font-light tracking-wide px-6 py-2 rounded-full transition-all duration-500 ${navSolid ? 'bg-stone-100 text-slate-600' : 'bg-white/10 backdrop-blur-sm text-white/90'}`}>
              <a href="#servicios" className="hover:text-teal-500 transition-colors">Servicios</a>
              <a href="#proceso" className="hover:text-teal-500 transition-colors">Proceso</a>
              <a href="#galeria" className="hover:text-teal-500 transition-colors">Galeria</a>
              <a href="#contacto" className="hover:text-teal-500 transition-colors">Contacto</a>
            </div>
          </div>
          <a href="https://wa.me/50422345678" className={`hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ${navSolid ? 'bg-teal-600 text-white hover:bg-teal-500' : 'bg-white text-slate-800 hover:bg-white/90'}`}>
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </motion.nav>

      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-32 lg:py-20 bg-stone-50 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-lg"
          >
            <div className="flex items-center gap-2 mb-8">
              <MapPin className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-light text-slate-500 tracking-wider uppercase">San Pedro Sula, Honduras</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-slate-800 leading-[1.1] mb-8">
              <motion.span
                className="block overflow-hidden"
              >
                <motion.span
                  className="block"
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  Tu sonrisa
                </motion.span>
              </motion.span>
              <motion.span
                className="block overflow-hidden"
              >
                <motion.span
                  className="block"
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                >
                  merece lo{' '}
                  <em className="text-teal-600">mejor</em>
                </motion.span>
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-slate-500 font-light leading-8 mb-10 max-w-md"
            >
              Mas de 10 anos transformando sonrisas con tecnologia de punta y atencion personalizada. Tu primera consulta es gratuita.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <a href="#contacto" className="group px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-medium rounded-full transition-all hover:shadow-xl hover:shadow-teal-600/20 flex items-center justify-center gap-2 text-sm tracking-wide">
                Agendar Cita Gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+50422345678" className="px-8 py-4 border border-slate-300 hover:border-teal-400 text-slate-700 font-medium rounded-full transition-all flex items-center justify-center gap-2 text-sm tracking-wide">
                <Phone className="w-4 h-4" />
                Llamar Ahora
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-10"
            >
              {[
                { value: '10+', label: 'Anos' },
                { value: '5,000+', label: 'Pacientes' },
                { value: '4.9', label: 'Rating' },
              ].map(s => (
                <div key={s.label}>
                  <p className="text-2xl font-serif text-slate-800">{s.value}</p>
                  <p className="text-xs text-slate-400 font-light tracking-wider uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <div className="relative order-1 lg:order-2 min-h-[50vh] lg:min-h-screen">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80"
            alt="Clinica dental"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-8 right-8 sm:left-auto sm:right-8 sm:bottom-10 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg max-w-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              </div>
              <div>
                <p className="font-serif text-slate-800 text-lg">Primera consulta</p>
                <p className="text-teal-600 font-semibold text-sm">Completamente GRATIS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="bg-white py-5 border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between flex-wrap gap-4">
          {[
            { icon: Clock, text: 'Lun-Vie 8AM-5PM | Sab 8AM-12PM' },
            { icon: Phone, text: '+504 2234-5678' },
            { icon: MapPin, text: 'Col. Altamira, San Pedro Sula' },
          ].map(item => {
            const Icon = item.icon;
            return (
              <div key={item.text} className="flex items-center gap-2 text-slate-500 text-sm font-light">
                <Icon className="w-4 h-4 text-teal-600" />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-light tracking-[0.15em] uppercase text-slate-400 mb-8">Trabajamos con las mejores marcas</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
            {[
              { Logo: ColgateLogo, name: 'Colgate' },
              { Logo: OralBLogo, name: 'Oral-B' },
              { Logo: PhilipsLogo, name: 'Philips' },
              { Logo: DentsplyLogo, name: 'Dentsply' },
              { Logo: ThreeMlogo, name: '3M' },
              { Logo: IvoclarLogo, name: 'Ivoclar' },
            ].map(brand => (
              <div key={brand.name} className="group flex items-center justify-center">
                <brand.Logo className="h-8 opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="#f8fafc" />

      <section id="servicios" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-teal-600 text-sm font-light tracking-[0.2em] uppercase"
              >
                Nuestros Servicios
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl text-slate-800 mt-3"
              >
                Tratamientos <em className="text-teal-600">Dentales</em>
              </motion.h2>
            </div>
            <div className="hidden sm:flex gap-2">
              <button onClick={() => scrollServices('left')} className="w-11 h-11 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:border-teal-500 hover:text-teal-600 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scrollServices('right')} className="w-11 h-11 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:border-teal-500 hover:text-teal-600 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div
          ref={servicesScrollRef}
          className="flex gap-5 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex-shrink-0 w-[calc((100vw-1280px)/2+1rem)] hidden lg:block" />
          {services.map((svc, i) => (
            <motion.div
              key={svc.name}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex-shrink-0 w-64 sm:w-72 snap-start"
            >
              <div className="relative group rounded-2xl overflow-hidden" style={{ aspectRatio: '2/3' }}>
                <img
                  src={svc.image}
                  alt={svc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {svc.popular && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-amber-400 text-slate-900 text-xs font-bold rounded-full">
                    Popular
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block px-3 py-1 bg-teal-500/90 text-white text-xs font-medium rounded-full mb-3">
                    {svc.price}
                  </span>
                  <h3 className="text-white font-serif text-xl mb-1">{svc.name}</h3>
                  <p className="text-white/70 text-sm font-light leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="flex-shrink-0 w-4" />
        </div>
      </section>

      <WaveDivider flip color="#f8fafc" />

      <section id="proceso" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-teal-600 text-sm font-light tracking-[0.2em] uppercase"
            >
              Tu Experiencia
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl text-slate-800 mt-3"
            >
              El camino hacia tu <em className="text-teal-600">sonrisa</em>
            </motion.h2>
          </div>
          <div className="relative">
            <motion.div
              className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-stone-200 origin-top sm:-translate-x-px"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
            {timelineSteps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className={`relative flex items-start gap-6 mb-16 last:mb-0 ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  <div className={`hidden sm:block flex-1 ${isLeft ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <span className="text-5xl font-serif text-stone-200">{step.step}</span>
                    <h3 className="font-serif text-2xl text-slate-800 mt-2 mb-2">{step.title}</h3>
                    <p className="text-slate-500 font-light leading-7">{step.desc}</p>
                  </div>
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-white border-2 border-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/10"
                      whileInView={{ scale: [0.5, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.3, duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-teal-600" />
                    </motion.div>
                  </div>
                  <div className="flex-1 sm:hidden">
                    <span className="text-3xl font-serif text-stone-200">{step.step}</span>
                    <h3 className="font-serif text-xl text-slate-800 mt-1 mb-1">{step.title}</h3>
                    <p className="text-slate-500 font-light leading-7 text-sm">{step.desc}</p>
                  </div>
                  <div className={`hidden sm:block flex-1 ${isLeft ? 'pl-12' : 'pr-12'}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <WaveDivider color="#f8fafc" />

      <section id="galeria" className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-teal-600 text-sm font-light tracking-[0.2em] uppercase"
            >
              Nuestra Clinica
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl text-slate-800 mt-3"
            >
              Instalaciones de <em className="text-teal-600">primer nivel</em>
            </motion.h2>
          </div>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="break-inside-avoid"
              >
                <div className={`overflow-hidden rounded-xl ${masonryHeights[i]}`}>
                  <img
                    src={img}
                    alt={`Instalacion ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip color="#f8fafc" />

      <section id="testimonios" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-teal-600 text-sm font-light tracking-[0.2em] uppercase"
          >
            Testimonios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl text-slate-800 mt-3 mb-16"
          >
            Lo que dicen nuestros <em className="text-teal-600">pacientes</em>
          </motion.h2>
          <div className="relative min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <div className="flex gap-1 mb-8 justify-center">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="font-serif text-2xl sm:text-3xl text-slate-700 leading-relaxed mb-10 italic">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <div>
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-teal-700 font-serif text-lg">{testimonials[activeTestimonial].name[0]}</span>
                  </div>
                  <p className="font-medium text-slate-800 text-lg">{testimonials[activeTestimonial].name}</p>
                  <p className="text-teal-600 text-sm font-light">{testimonials[activeTestimonial].service}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-11 h-11 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:border-teal-500 hover:text-teal-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === activeTestimonial ? 'w-8 bg-teal-600' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                />
              ))}
            </div>
            <button
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="w-11 h-11 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:border-teal-500 hover:text-teal-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-xl">
            <div className="lg:col-span-3 bg-teal-600 p-10 sm:p-14 flex flex-col justify-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-6"
              >
                Listo para tu <em>nueva sonrisa?</em>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-teal-100 text-lg font-light leading-8 mb-10 max-w-lg"
              >
                Agenda tu consulta gratuita hoy y da el primer paso hacia la sonrisa que siempre sonaste.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="#contacto" className="px-8 py-4 bg-white text-teal-700 font-medium rounded-full hover:shadow-lg transition-all text-center">
                  Agendar Consulta Gratis
                </a>
                <a href="https://wa.me/50422345678" className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2">
                  <WhatsAppIcon className="w-5 h-5" /> WhatsApp
                </a>
              </motion.div>
            </div>
            <div className="lg:col-span-2 relative min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80"
                alt="Sonrisa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-teal-600/10" />
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="#f5f5f4" />

      <section id="contacto" className="relative py-24 bg-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2 bg-slate-800 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <h2 className="font-serif text-3xl text-white mb-3">Agenda tu cita</h2>
                  <p className="text-slate-400 font-light leading-7 mb-10">Primera consulta de evaluacion completamente gratuita. Sin compromiso.</p>
                  <div className="space-y-6">
                    {[
                      { icon: Phone, label: 'Telefono', value: '+504 2234-5678' },
                      { icon: WhatsAppIcon, label: 'WhatsApp', value: '+504 9876-5432' },
                      { icon: MapPin, label: 'Direccion', value: 'Col. Altamira, 3ra calle, San Pedro Sula' },
                      { icon: Clock, label: 'Horario', value: 'Lun - Vie: 8AM - 5PM | Sab: 8AM - 12PM' },
                    ].map(item => {
                      const Icon = item.icon;
                      return (
                        <div key={item.label} className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-teal-400" />
                          </div>
                          <div>
                            <p className="text-slate-500 text-xs uppercase tracking-wider">{item.label}</p>
                            <p className="text-white font-light text-sm mt-0.5">{item.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 p-8 sm:p-10">
                <h3 className="font-serif text-2xl text-slate-800 mb-1">Solicitar Cita</h3>
                <p className="text-slate-400 font-light text-sm mb-8">Completa el formulario y te contactaremos en menos de 24 horas.</p>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Nombre" className="w-full px-4 py-3.5 rounded-xl border border-stone-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-sm font-light" />
                    <input type="text" placeholder="Apellido" className="w-full px-4 py-3.5 rounded-xl border border-stone-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-sm font-light" />
                  </div>
                  <input type="tel" placeholder="Telefono / WhatsApp" className="w-full px-4 py-3.5 rounded-xl border border-stone-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-sm font-light" />
                  <input type="email" placeholder="Correo electronico" className="w-full px-4 py-3.5 rounded-xl border border-stone-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-sm font-light" />
                  <select className="w-full px-4 py-3.5 rounded-xl border border-stone-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-sm font-light text-slate-500">
                    <option>Seleccionar servicio</option>
                    <option>Limpieza Dental</option>
                    <option>Blanqueamiento</option>
                    <option>Ortodoncia</option>
                    <option>Implantes Dentales</option>
                    <option>Carillas de Porcelana</option>
                    <option>Endodoncia</option>
                    <option>Consulta General</option>
                  </select>
                  <textarea placeholder="Algo mas que debamos saber?" rows={3} className="w-full px-4 py-3.5 rounded-xl border border-stone-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all resize-none text-sm font-light" />
                  <button type="submit" className="w-full py-4 bg-teal-600 hover:bg-teal-500 text-white font-medium rounded-full transition-all hover:shadow-lg hover:shadow-teal-600/20 text-sm tracking-wide">
                    Agendar Mi Cita Gratis
                  </button>
                  <p className="text-center text-slate-400 text-xs font-light">Te contactaremos en menos de 24 horas. Sin compromiso.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-stone-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-400 font-light">
          <p>&copy; 2025 Sonrisas Honduras</p>
          <p>Ejemplo creado por <Link to="/" className="text-teal-600 hover:underline">Balam Code</Link></p>
        </div>
      </footer>
    </div>
  );
}
