import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Star, ChevronLeft, ChevronRight, Shield, Sparkles, Heart, ArrowRight, Calendar, Menu, X, Award, Users, CheckCircle, Smile } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { WhatsAppIcon, FacebookIcon, InstagramIcon, GoogleMapsIcon } from '../components/SocialIcons';
import { useRef, useState, useEffect } from 'react';

const services = [
  { name: 'Limpieza Dental', price: 'L.800', desc: 'Limpieza profunda profesional con ultrasonido', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80', popular: false, size: 'large' as const },
  { name: 'Blanqueamiento', price: 'L.3,500', desc: 'Dientes hasta 8 tonos mas blancos en 1 sesion', image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80', popular: true, size: 'medium' as const },
  { name: 'Ortodoncia', price: 'Desde L.15,000', desc: 'Brackets metalicos, ceramicos o invisalign', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80', popular: false, size: 'medium' as const },
  { name: 'Implantes Dentales', price: 'Desde L.20,000', desc: 'Implantes de titanio con corona de porcelana', image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80', popular: false, size: 'small' as const },
  { name: 'Carillas de Porcelana', price: 'Desde L.5,000', desc: 'Sonrisa perfecta con carillas ultrafinas', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80', popular: true, size: 'small' as const },
  { name: 'Endodoncia', price: 'L.4,500', desc: 'Tratamiento de conducto indoloro y seguro', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80', popular: false, size: 'wide' as const },
];

const testimonials = [
  { name: 'Maria Lopez', text: 'Me hicieron un blanqueamiento y quede impresionada con los resultados. El equipo es muy profesional y el lugar esta impecable.', rating: 5, service: 'Blanqueamiento' },
  { name: 'Carlos Reyes', text: 'Lleve a mis hijos por primera vez y les encanto. La doctora tiene una paciencia increible con los ninos. Definitivamente regresaremos.', rating: 5, service: 'Limpieza Dental' },
  { name: 'Ana Martinez', text: 'Despues de anos con miedo al dentista, aqui me senti segura. El procedimiento fue sin dolor y el resultado supero mis expectativas.', rating: 5, service: 'Implantes' },
  { name: 'Roberto Hernandez', text: 'Las carillas me cambiaron la vida. Ahora sonrio con confianza. Excelente inversion y servicio de primera.', rating: 5, service: 'Carillas' },
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80', height: 'h-64', label: 'Consultorio' },
  { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80', height: 'h-80', label: 'Tratamiento' },
  { src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80', height: 'h-56', label: 'Ortodoncia' },
  { src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80', height: 'h-72', label: 'Tecnologia' },
  { src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80', height: 'h-60', label: 'Blanqueamiento' },
  { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80', height: 'h-96', label: 'Recepcion' },
];

const timelineSteps = [
  { step: '01', title: 'Consulta', desc: 'Evaluacion completa gratuita con radiografias digitales y plan de tratamiento personalizado.', icon: Calendar },
  { step: '02', title: 'Diagnostico', desc: 'Analisis detallado con escaner 3D intraoral para un diagnostico preciso y transparente.', icon: Shield },
  { step: '03', title: 'Tratamiento', desc: 'Procedimientos sin dolor con tecnologia de punta y atencion personalizada en cada paso.', icon: Heart },
  { step: '04', title: 'Sonrisa', desc: 'Resultados que transforman tu vida. Seguimiento continuo para mantener tu sonrisa perfecta.', icon: Sparkles },
];

const team = [
  { name: 'Dra. Gabriela Mejia', specialty: 'Odontologia General & Estetica', years: 12, initials: 'GM', bio: 'Fundadora de Sonrisas Honduras. Especializada en sonrisas de diseno y estetica dental avanzada con formacion en USA.' },
  { name: 'Dr. Alejandro Reyes', specialty: 'Implantologia & Cirugia Oral', years: 10, initials: 'AR', bio: 'Especialista en implantes de carga inmediata y regeneracion osea. Mas de 3,000 implantes exitosos.' },
  { name: 'Dra. Sofia Hernandez', specialty: 'Ortodoncia & Invisalign', years: 8, initials: 'SH', bio: 'Certificada Invisalign Diamond Provider. Experta en ortodoncia invisible y tratamientos acelerados.' },
];

const beforeAfter = [
  { treatment: 'Carillas de Porcelana', duration: '2 semanas', before: 'https://images.unsplash.com/photo-1495462911434-be47104d70fa?w=400&q=80', after: 'https://images.unsplash.com/photo-1581585575795-98d8a6a84626?w=400&q=80' },
  { treatment: 'Blanqueamiento Laser', duration: '1 sesion', before: 'https://images.unsplash.com/photo-1495462911434-be47104d70fa?w=400&q=80', after: 'https://images.unsplash.com/photo-1581585575795-98d8a6a84626?w=400&q=80' },
  { treatment: 'Ortodoncia Invisalign', duration: '8 meses', before: 'https://images.unsplash.com/photo-1495462911434-be47104d70fa?w=400&q=80', after: 'https://images.unsplash.com/photo-1581585575795-98d8a6a84626?w=400&q=80' },
];

const marqueeItems = ['BLANQUEAMIENTO', 'ORTODONCIA', 'IMPLANTES', 'CARILLAS', 'LIMPIEZA DENTAL', 'ENDODONCIA', 'INVISALIGN', 'SPA DENTAL', 'RADIOGRAFIA 3D', 'DISENO DE SONRISA'];

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1200;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const FloatingBlob = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full opacity-30 blur-3xl ${className}`}
    animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay }}
    style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
  />
);

const WaveDivider = ({ flip = false, color = '#f8fafc' }: { flip?: boolean; color?: string }) => (
  <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`}>
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-16 md:h-24">
      <path d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,20 1440,40 L1440,100 L0,100 Z" fill={color} />
    </svg>
  </div>
);

const WaveDivider2 = ({ color = '#f8fafc' }: { color?: string }) => (
  <div className="w-full overflow-hidden leading-[0]">
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-20">
      <path d="M0,60 C240,20 480,80 720,40 C960,0 1200,60 1440,30 L1440,80 L0,80 Z" fill={color} />
    </svg>
  </div>
);

export default function DemoSonrisas() {
  const [navSolid, setNavSolid] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeBA, setActiveBA] = useState<number | null>(null);
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setNavSolid(latest > 60);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style>{`
        @keyframes toothGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.15); }
          50% { box-shadow: 0 0 30px rgba(6, 182, 212, 0.5), 0 0 60px rgba(6, 182, 212, 0.25); }
        }
        @keyframes shimmerGold {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .glow-btn { animation: toothGlow 2.5s ease-in-out infinite; }
        .shimmer-gold-text {
          background: linear-gradient(90deg, #FBBF24 0%, #FDE68A 25%, #FBBF24 50%, #FDE68A 75%, #FBBF24 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerGold 4s linear infinite;
        }
        .gradient-text-dental {
          background: linear-gradient(135deg, #06B6D4, #0EA5E9, #06B6D4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .neon-input-dental:focus {
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.2), 0 0 30px rgba(6, 182, 212, 0.1);
          border-color: #06B6D4;
        }
      `}</style>

      <div className="fixed top-0 left-0 right-0 z-[60] bg-slate-900 border-b border-cyan-500/30 text-white text-center py-2.5 text-sm font-medium">
        <Sparkles className="w-3.5 h-3.5 inline-block mr-1 text-cyan-400" /> Esto es un ejemplo creado por <Link to="/" className="underline font-bold text-cyan-400 hover:text-cyan-300 transition-colors">Balam Code</Link> — <Link to="/" className="underline hover:text-cyan-300 transition-colors">Solicita el tuyo</Link>
      </div>

      <motion.nav className={`fixed top-10 left-0 right-0 z-50 transition-all duration-500 ${navSolid ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2.5">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 ${navSolid ? 'bg-cyan-500' : 'bg-white/15 backdrop-blur-sm'}`}>
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className={`text-lg font-serif italic font-semibold transition-colors duration-500 ${navSolid ? 'text-slate-800' : 'text-white'}`}>
              Sonrisas
            </span>
          </Link>

          <div className="hidden md:flex items-center">
            <div className={`flex items-center gap-6 text-sm font-light tracking-wide px-6 py-2.5 rounded-full transition-all duration-500 ${navSolid ? 'bg-slate-100 text-slate-600' : 'bg-white/10 backdrop-blur-sm text-white/90'}`}>
              {navLinks.map(link => (
                <a key={link.label} href={link.href} className="hover:text-cyan-500 transition-colors">{link.label}</a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://wa.me/50422345678" className={`hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ${navSolid ? 'bg-cyan-500 text-white hover:bg-cyan-400' : 'bg-white text-slate-800 hover:bg-white/90'}`}>
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`md:hidden p-2.5 rounded-full transition-colors duration-500 ${navSolid ? 'text-slate-800' : 'text-white'}`}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-slate-100"
            >
              <div className="px-6 py-4 space-y-1">
                {navLinks.map(link => (
                  <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block py-3 text-slate-700 font-light text-lg border-b border-slate-100 last:border-0">{link.label}</a>
                ))}
                <a href="https://wa.me/50422345678" className="flex items-center gap-2 py-3 text-cyan-600 font-medium">
                  <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80" alt="Clinica dental" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/30" />
        <FloatingBlob className="w-96 h-96 bg-cyan-500 top-20 -right-20" delay={0} />
        <FloatingBlob className="w-72 h-72 bg-amber-400 bottom-20 left-10" delay={3} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 min-h-screen flex items-center">
          <div className="max-w-2xl pt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-cyan-400" />
              <span className="text-cyan-400 text-sm font-mono tracking-[0.2em] uppercase">Clinica Dental de Primer Nivel</span>
            </motion.div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] mb-8">
              <motion.span className="block overflow-hidden">
                <motion.span className="block" initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}>
                  Tu sonrisa
                </motion.span>
              </motion.span>
              <motion.span className="block overflow-hidden">
                <motion.span className="block shimmer-gold-text" initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}>
                  perfecta
                </motion.span>
              </motion.span>
            </h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-lg">
              Mas de 10 anos transformando sonrisas con tecnologia de punta y atencion personalizada. Tu primera consulta es completamente gratuita.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }} className="flex flex-col sm:flex-row gap-4 mb-14">
              <a href="#contacto" className="glow-btn group px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2 text-sm tracking-wide">
                Agendar Cita Gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+50422345678" className="px-8 py-4 border border-white/20 hover:border-cyan-400/50 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2 text-sm tracking-wide hover:bg-white/5">
                <Phone className="w-4 h-4" />
                Llamar Ahora
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }} className="flex items-center gap-6 sm:gap-10">
              {[
                { value: '10+', label: 'Anos' },
                { value: '5,000+', label: 'Pacientes' },
                { value: '4.9', label: 'Rating' },
              ].map((s, i) => (
                <div key={s.label} className={`${i > 0 ? 'border-l border-white/10 pl-6 sm:pl-10' : ''}`}>
                  <p className="text-2xl sm:text-3xl font-serif text-white">{s.value}</p>
                  <p className="text-xs text-slate-400 font-light tracking-wider uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, x: 10 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 right-6 sm:bottom-12 sm:right-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl max-w-xs hidden sm:block"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            </div>
            <div>
              <p className="font-serif text-white text-lg">Primera consulta</p>
              <p className="text-cyan-400 font-semibold text-sm">Completamente GRATIS</p>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="bg-cyan-500 py-3 overflow-hidden relative">
        <motion.div className="flex whitespace-nowrap" animate={{ x: ['0%', '-50%'] }} transition={{ x: { duration: 20, repeat: Infinity, ease: 'linear' } }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-6 text-white font-mono text-sm tracking-[0.2em] uppercase flex items-center gap-4">
              {item} <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            </span>
          ))}
        </motion.div>
      </div>

      <div className="bg-white py-5 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-center sm:justify-between flex-wrap gap-3 sm:gap-4">
          {[
            { icon: Clock, text: 'Lun-Vie 8AM-5PM | Sab 8AM-12PM' },
            { icon: Phone, text: '+504 2234-5678' },
            { icon: MapPin, text: 'Col. Altamira, San Pedro Sula' },
          ].map(item => {
            const Icon = item.icon;
            return (
              <div key={item.text} className="flex items-center gap-2 text-slate-500 text-xs sm:text-sm font-light">
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-500 flex-shrink-0" />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-light tracking-[0.15em] uppercase text-slate-400 mb-8">Trabajamos con las mejores marcas</p>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {[
              { src: '/brands/colgate-logo-1.svg', name: 'Colgate' },
              { src: '/brands/Oral-B_logo.svg.png', name: 'Oral-B' },
              { src: '/brands/Listerine_logo.svg', name: 'Listerine' },
            ].map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex items-center justify-center h-12 w-28"
              >
                <img src={brand.src} alt={brand.name} className="h-10 max-w-[120px] w-auto object-contain opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="#f8fafc" />

      <section id="servicios" className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-cyan-500 text-sm font-mono tracking-[0.2em] uppercase">
              Nuestros Servicios
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-800 mt-3">
              Tratamientos <em className="gradient-text-dental">Dentales</em>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] sm:auto-rows-[180px] md:auto-rows-[200px]">
            {services.map((svc, i) => {
              const spanClass = svc.size === 'large'
                ? 'col-span-1 sm:col-span-2 row-span-1 sm:row-span-2'
                : svc.size === 'medium'
                  ? 'col-span-1 sm:col-span-2 row-span-1 md:col-span-1 md:row-span-2'
                  : svc.size === 'wide'
                    ? 'col-span-1 sm:col-span-2 row-span-1'
                    : 'col-span-1 row-span-1';
              return (
                <motion.div
                  key={svc.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className={`${spanClass} group relative rounded-2xl overflow-hidden cursor-pointer`}
                >
                  <img src={svc.image} alt={svc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {svc.popular && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-amber-400 text-slate-900 text-xs font-bold rounded-full z-10">Popular</span>
                  )}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 bg-cyan-500/90 text-white text-xs font-medium rounded-full">{svc.price}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-serif text-xl sm:text-2xl mb-1">{svc.name}</h3>
                    <p className="text-white/0 group-hover:text-white/80 text-sm font-light leading-relaxed transition-all duration-500">{svc.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <WaveDivider flip color="#f8fafc" />

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-cyan-500 text-sm font-mono tracking-[0.2em] uppercase">
              Transformaciones
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-800 mt-3">
              Resultados que <em className="gradient-text-dental">hablan</em>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beforeAfter.map((item, i) => (
              <motion.div
                key={item.treatment}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, type: 'spring', stiffness: 100 }}
                className="group relative rounded-2xl overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => setActiveBA(activeBA === i ? null : i)}
              >
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeBA === i ? 'after' : 'before'}
                      src={activeBA === i ? item.after : item.before}
                      alt={item.treatment}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </AnimatePresence>
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${activeBA === i ? 'bg-cyan-500 text-white' : 'bg-white/90 text-slate-700'}`}>
                      {activeBA === i ? 'DESPUES' : 'ANTES'}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 z-10">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-600 text-xs font-medium rounded-full">Toca para ver</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-slate-800 mb-1">{item.treatment}</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500 font-light">
                    <Clock className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{item.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="#0f172a" />

      <section id="proceso" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <FloatingBlob className="w-80 h-80 bg-cyan-500 top-10 -right-20" delay={0} />
        <FloatingBlob className="w-64 h-64 bg-cyan-400 bottom-20 -left-10" delay={4} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-cyan-400 text-sm font-mono tracking-[0.2em] uppercase">
              Tu Experiencia
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mt-3">
              El camino hacia tu <span className="shimmer-gold-text">sonrisa</span>
            </motion.h2>
          </div>

          <div className="relative">
            <motion.div
              className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-cyan-500/20 origin-top sm:-translate-x-px"
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
                    <span className="text-7xl font-serif text-slate-800/50">{step.step}</span>
                    <h3 className="font-serif text-2xl text-white mt-2 mb-2">{step.title}</h3>
                    <p className="text-slate-400 font-light leading-7">{step.desc}</p>
                  </div>
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-slate-800 border-2 border-cyan-500 flex items-center justify-center"
                      style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' }}
                      whileInView={{ scale: [0.5, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.3, duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </motion.div>
                  </div>
                  <div className="flex-1 sm:hidden">
                    <span className="text-3xl font-serif text-slate-700">{step.step}</span>
                    <h3 className="font-serif text-xl text-white mt-1 mb-1">{step.title}</h3>
                    <p className="text-slate-400 font-light leading-7 text-sm">{step.desc}</p>
                  </div>
                  <div className={`hidden sm:block flex-1 ${isLeft ? 'pl-12' : 'pr-12'}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-cyan-600 py-20 sm:py-24" style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
            {[
              { target: 10, suffix: '+', label: 'Anos de Experiencia', icon: Award },
              { target: 5000, suffix: '+', label: 'Pacientes Felices', icon: Users },
              { target: 98, suffix: '%', label: 'Tasa de Exito', icon: CheckCircle },
              { target: 15000, suffix: '+', label: 'Procedimientos', icon: Smile },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Icon className="w-6 h-6 text-cyan-200 mx-auto mb-3" />
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-mono">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </p>
                  <p className="text-cyan-100 text-xs sm:text-sm uppercase tracking-[0.15em] mt-2 font-light">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <WaveDivider2 color="#f8fafc" />

      <section id="galeria" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-cyan-500 text-sm font-mono tracking-[0.2em] uppercase">
              Nuestra Clinica
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-800 mt-3">
              Instalaciones de <em className="gradient-text-dental">primer nivel</em>
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
                className="break-inside-avoid group"
              >
                <div className={`overflow-hidden rounded-xl ${img.height} relative`}>
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium rounded-full">{img.label}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip color="#f8fafc" />

      <section className="py-24 bg-white relative overflow-hidden">
        <FloatingBlob className="w-80 h-80 bg-cyan-200 -top-20 -right-20" delay={2} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-cyan-500 text-sm font-mono tracking-[0.2em] uppercase">
            Testimonios
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-800 mt-3 mb-16">
            Lo que dicen nuestros <em className="gradient-text-dental">pacientes</em>
          </motion.h2>

          <div className="relative bg-slate-50 rounded-3xl p-8 sm:p-12">
            <span className="absolute top-6 left-8 font-serif text-8xl text-cyan-100 leading-none select-none">"</span>
            <div className="relative min-h-[260px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex flex-col items-center justify-center px-4"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="font-serif text-xl sm:text-2xl text-slate-700 leading-relaxed mb-8 italic max-w-xl">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-cyan-700 font-serif text-lg italic">{testimonials[activeTestimonial].name[0]}</span>
                  </div>
                  <p className="font-medium text-slate-800">{testimonials[activeTestimonial].name}</p>
                  <p className="text-cyan-500 text-sm font-light">{testimonials[activeTestimonial].service}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6">
              <button onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-cyan-500 hover:text-cyan-500 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActiveTestimonial(i)} className={`h-2 rounded-full transition-all duration-300 ${i === activeTestimonial ? 'w-8 bg-cyan-500' : 'w-2 bg-slate-300 hover:bg-slate-400'}`} />
                ))}
              </div>
              <button onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-cyan-500 hover:text-cyan-500 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="#0f172a" />

      <section id="equipo" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <FloatingBlob className="w-72 h-72 bg-cyan-500 top-0 right-0" delay={1} />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-cyan-400 text-sm font-mono tracking-[0.2em] uppercase">
              Nuestro Equipo
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mt-3">
              Profesionales de <span className="shimmer-gold-text">confianza</span>
            </motion.h2>
          </div>

          <div className="space-y-16">
            {team.map((member, i) => {
              const isReversed = i % 2 !== 0;
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`flex flex-col ${isReversed ? 'sm:flex-row-reverse' : 'sm:flex-row'} items-center gap-8 sm:gap-12`}
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center"
                      style={{
                        borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%',
                        background: `linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(6, 182, 212, 0.3))`,
                        border: '2px solid rgba(6, 182, 212, 0.2)',
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="font-serif text-4xl sm:text-5xl italic text-cyan-400">{member.initials}</span>
                    </motion.div>
                  </div>
                  <div className={`flex-1 ${isReversed ? 'sm:text-right' : ''} text-center sm:text-left`}>
                    <h3 className="font-serif text-2xl text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-400 text-sm font-mono tracking-wider uppercase mb-3">{member.specialty}</p>
                    <p className="text-slate-400 font-light leading-7 max-w-md">{member.bio}</p>
                    <p className="text-slate-600 font-light text-sm mt-3">{member.years} anos de experiencia</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-slate-50 relative overflow-hidden">
        <FloatingBlob className="w-80 h-80 bg-cyan-200 -top-20 right-0" delay={0} />
        <FloatingBlob className="w-64 h-64 bg-amber-200 bottom-0 -left-10" delay={3} />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-800 mb-6">
              Listo para tu <em className="gradient-text-dental">nueva sonrisa?</em>
            </h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed mb-10 max-w-xl mx-auto">
              Agenda tu consulta gratuita hoy y da el primer paso hacia la sonrisa que siempre sonaste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contacto" className="glow-btn group px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2 text-sm tracking-wide">
                Agendar Consulta Gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://wa.me/50422345678" className="px-10 py-4 border border-slate-300 hover:border-cyan-400 text-slate-700 hover:text-cyan-600 font-medium rounded-full transition-all flex items-center justify-center gap-2 text-sm tracking-wide">
                <WhatsAppIcon className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <WaveDivider color="#f5f5f4" />

      <section id="contacto" className="relative py-24 bg-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2 bg-slate-900 p-8 sm:p-10 flex flex-col justify-between">
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
                          <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-cyan-400" />
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
                <div className="flex items-center gap-4 mt-10 pt-8 border-t border-slate-800">
                  <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-colors">
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-colors">
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-colors">
                    <GoogleMapsIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="lg:col-span-3 p-8 sm:p-10">
                <h3 className="font-serif text-2xl text-slate-800 mb-1">Solicitar Cita</h3>
                <p className="text-slate-400 font-light text-sm mb-8">Completa el formulario y te contactaremos en menos de 24 horas.</p>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Nombre" className="neon-input-dental w-full px-4 py-3.5 rounded-xl border border-stone-200 outline-none transition-all text-sm font-light" />
                    <input type="text" placeholder="Apellido" className="neon-input-dental w-full px-4 py-3.5 rounded-xl border border-stone-200 outline-none transition-all text-sm font-light" />
                  </div>
                  <input type="tel" placeholder="Telefono / WhatsApp" className="neon-input-dental w-full px-4 py-3.5 rounded-xl border border-stone-200 outline-none transition-all text-sm font-light" />
                  <input type="email" placeholder="Correo electronico" className="neon-input-dental w-full px-4 py-3.5 rounded-xl border border-stone-200 outline-none transition-all text-sm font-light" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select className="neon-input-dental w-full px-4 py-3.5 rounded-xl border border-stone-200 outline-none transition-all text-sm font-light text-slate-500">
                      <option>Seleccionar servicio</option>
                      {services.map(s => <option key={s.name}>{s.name}</option>)}
                      <option>Consulta General</option>
                    </select>
                    <input type="text" placeholder="Fecha preferida" className="neon-input-dental w-full px-4 py-3.5 rounded-xl border border-stone-200 outline-none transition-all text-sm font-light" />
                  </div>
                  <textarea placeholder="Algo mas que debamos saber?" rows={3} className="neon-input-dental w-full px-4 py-3.5 rounded-xl border border-stone-200 outline-none transition-all resize-none text-sm font-light" />
                  <button type="submit" className="glow-btn w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-medium rounded-full transition-all text-sm tracking-wide">
                    Agendar Mi Cita Gratis
                  </button>
                  <p className="text-center text-slate-400 text-xs font-light">Te contactaremos en menos de 24 horas. Sin compromiso.</p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-slate-900 border-t border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <span className="font-serif italic text-white text-lg">Sonrisas Honduras</span>
          </div>
          <p className="text-slate-600 text-sm font-light text-center">Col. Altamira, 3ra calle, San Pedro Sula, Honduras</p>
          <div className="w-12 h-px bg-slate-800" />
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-slate-600 font-light">
            <p>&copy; 2025 Sonrisas Honduras</p>
            <span className="hidden sm:inline">·</span>
            <p>Ejemplo creado por <Link to="/" className="text-cyan-400 hover:underline">Balam Code</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
