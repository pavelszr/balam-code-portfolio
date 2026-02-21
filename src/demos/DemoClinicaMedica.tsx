import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Star, ChevronLeft, ChevronRight, ArrowRight, Calendar, Menu, X, Stethoscope, Activity, FlaskConical, HeartPulse, Ambulance, ShieldCheck, TestTube2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon, FacebookIcon, InstagramIcon, GoogleMapsIcon } from '../components/SocialIcons';
import { useRef, useState, useEffect } from 'react';

const specialties = [
  { name: 'Medicina General', icon: Stethoscope, desc: 'Consulta medica integral con medicos certificados', price: 'L.500', image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80' },
  { name: 'Laboratorio Clinico', icon: TestTube2, desc: 'Mas de 50 examenes con resultados en 24h', price: 'Desde L.150', image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=800&q=80' },
  { name: 'Cardiologia', icon: HeartPulse, desc: 'Electrocardiogramas y pruebas de esfuerzo', price: 'L.800', image: 'https://images.unsplash.com/photo-1559757175-7cb057fba93c?w=800&q=80' },
  { name: 'Pediatria', icon: Activity, desc: 'Atencion para bebes, ninos y adolescentes', price: 'L.600', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80' },
  { name: 'Ginecologia', icon: ShieldCheck, desc: 'Salud de la mujer con ultrasonido 4D', price: 'L.700', image: 'https://images.unsplash.com/photo-1666214280557-091f5438d37e?w=800&q=80' },
  { name: 'Radiologia', icon: FlaskConical, desc: 'Rayos X, ultrasonidos y tomografias', price: 'Desde L.400', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80' },
];

const labCategories = ['Todos', 'Hematologia', 'Quimica', 'Hormonal', 'Otros'];

const labTests = [
  { name: 'Hemograma Completo', price: 'L.250', time: '4 horas', category: 'Hematologia' },
  { name: 'Perfil Lipidico', price: 'L.450', time: '24 horas', category: 'Quimica' },
  { name: 'Glucosa en Ayunas', price: 'L.150', time: '2 horas', category: 'Quimica' },
  { name: 'Funcion Hepatica', price: 'L.550', time: '24 horas', category: 'Quimica' },
  { name: 'Perfil Tiroideo', price: 'L.650', time: '48 horas', category: 'Hormonal' },
  { name: 'Examen General de Orina', price: 'L.180', time: '3 horas', category: 'Otros' },
  { name: 'Prueba de Embarazo', price: 'L.200', time: '1 hora', category: 'Hormonal' },
  { name: 'COVID-19 PCR', price: 'L.350', time: '24 horas', category: 'Otros' },
];

const testimonials = [
  { name: 'Patricia Gomez', text: 'Excelente atencion desde la recepcion hasta la consulta. Los resultados de laboratorio estuvieron listos antes de lo esperado.', rating: 5, service: 'Laboratorio' },
  { name: 'Manuel Reyes', text: 'Mi cardiologo me explico todo con paciencia. Las instalaciones son modernas y me senti en buenas manos.', rating: 5, service: 'Cardiologia' },
  { name: 'Carmen Flores', text: 'Llevo a mis tres hijos a pediatria y siempre nos atienden con amabilidad. El doctor es muy dedicado.', rating: 5, service: 'Pediatria' },
  { name: 'Jorge Hernandez', text: 'Finalmente encontre un lugar donde se toman el tiempo para escucharte. Atencion de primera calidad.', rating: 5, service: 'Medicina General' },
];

const team = [
  { name: 'Dr. Roberto Castillo', specialty: 'Medicina Interna', role: 'Director Medico', years: 18, initials: 'RC' },
  { name: 'Dra. Lucia Fernandez', specialty: 'Cardiologia', role: 'Jefa de Cardiologia', years: 14, initials: 'LF' },
  { name: 'Dra. Andrea Mejia', specialty: 'Pediatria', role: 'Jefa de Pediatria', years: 10, initials: 'AM' },
];

const stats = [
  { value: 25, suffix: '+', label: 'Anos de Experiencia' },
  { value: 15000, suffix: '+', label: 'Pacientes Atendidos' },
  { value: 98, suffix: '%', label: 'Satisfaccion' },
  { value: 50, suffix: '+', label: 'Examenes Disponibles' },
];

const processSteps = [
  { num: '01', title: 'Agenda tu Cita', desc: 'Online, por WhatsApp o por telefono', icon: Calendar },
  { num: '02', title: 'Consulta Medica', desc: 'Evaluacion completa con tu especialista', icon: Stethoscope },
  { num: '03', title: 'Examenes', desc: 'Laboratorio e imagen si es necesario', icon: FlaskConical },
  { num: '04', title: 'Seguimiento', desc: 'Resultados, diagnostico y tratamiento', icon: HeartPulse },
];

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

export default function DemoClinicaMedica() {
  const [navSolid, setNavSolid] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeLabTab, setActiveLabTab] = useState('Todos');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setNavSolid(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const filteredTests = activeLabTab === 'Todos' ? labTests : labTests.filter(t => t.category === activeLabTab);

  const navLinks = [
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Laboratorio', href: '#laboratorio' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const scrollSpecialties = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const amount = 320;
      scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style>{`
        .gradient-text-teal {
          background: linear-gradient(135deg, #0D9488, #14B8A6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glow-teal {
          box-shadow: 0 0 20px rgba(13, 148, 136, 0.3);
        }
        .input-medical:focus {
          border-color: #0D9488;
          box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="fixed top-0 left-0 right-0 z-[60] bg-teal-700 text-white text-center py-2.5 text-sm font-medium">
        <Activity className="w-3.5 h-3.5 inline-block mr-1" /> Esto es un ejemplo creado por <Link to="/" className="underline font-bold hover:text-teal-200 transition-colors">Balam Code</Link> — <Link to="/" className="underline hover:text-teal-200 transition-colors">Solicita el tuyo</Link>
      </div>

      <nav className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 bg-white ${navSolid ? 'shadow-md' : 'shadow-none'} border-b border-slate-100`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src="/demos/vitasalud.png" alt="VitaSalud" className="h-10 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} className="relative text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:+50425678901" className="hidden sm:flex items-center gap-1.5 text-sm text-slate-600">
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>+504 2567-8901</span>
            </a>
            <a href="#contacto" className="hidden sm:inline-flex px-5 py-2 bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold rounded-lg transition-colors">
              Agendar Cita
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu" className="md:hidden p-2 min-w-[44px] min-h-[44px] text-slate-700">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="md:hidden fixed top-[104px] right-0 bottom-0 w-72 bg-white shadow-2xl border-l border-slate-100 z-50"
            >
              <div className="px-6 py-6 space-y-1">
                {navLinks.map(link => (
                  <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block py-3.5 text-slate-700 font-medium text-base border-b border-slate-50 hover:text-teal-600 transition-colors">{link.label}</a>
                ))}
                <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="block mt-4 text-center py-3 bg-teal-600 text-white font-semibold rounded-lg">Agendar Cita</a>
                <a href="tel:+50425678901" className="flex items-center gap-2 py-3 text-teal-600 font-medium mt-2">
                  <Phone className="w-4 h-4" /> +504 2567-8901
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section className="pt-[104px] min-h-[100dvh] flex">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="lg:w-[60%] bg-slate-800 flex items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 border border-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 border border-teal-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-0 w-full">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <span className="inline-block px-4 py-1.5 bg-teal-600/20 border border-teal-500/30 text-teal-400 text-xs font-semibold tracking-widest uppercase rounded-sm mb-6">
                  Clinica Medica y Laboratorio
                </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[0.95] mb-4 uppercase">
                Cuidamos tu
                <br />
                <span className="text-teal-400">salud</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                Mas de 25 anos brindando atencion medica de calidad con tecnologia avanzada y un equipo comprometido con tu bienestar.
              </motion.p>

              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.65 }} className="flex flex-col sm:flex-row gap-3 mb-12">
                <a href="#contacto" className="group px-7 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm">
                  Agendar Cita
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#especialidades" className="px-7 py-3.5 border border-slate-600 hover:border-teal-500 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 text-sm hover:bg-white/5">
                  Ver Especialidades
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className="flex gap-4 sm:gap-6">
                {[
                  { val: '25+', lbl: 'Anos' },
                  { val: '15K+', lbl: 'Pacientes' },
                  { val: '24h', lbl: 'Emergencias' },
                ].map((s, i) => (
                  <div key={s.lbl} className={`flex-1 py-3 px-4 bg-slate-700/50 border border-slate-600/50 rounded-lg text-center ${i < 2 ? 'border-r-0 sm:border-r' : ''}`}>
                    <p className="text-xl sm:text-2xl font-extrabold text-white">{s.val}</p>
                    <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider mt-0.5">{s.lbl}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="lg:w-[40%] relative min-h-[300px] lg:min-h-0">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80" alt="" className="w-full h-full object-cover" fetchPriority="high" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg hidden sm:flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm">Laboratorio Certificado</p>
                <p className="text-teal-600 text-xs font-medium">Resultados en 24h</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="bg-teal-600 py-3.5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center flex-wrap gap-x-8 gap-y-2">
          {[
            { icon: Clock, text: 'Lun-Vie 7AM-7PM | Sab 7AM-1PM' },
            { icon: Phone, text: '+504 2567-8901' },
            { icon: MapPin, text: 'Blvd. Morazan, Tegucigalpa' },
            { icon: Ambulance, text: 'Emergencias 24H' },
          ].map(item => {
            const Icon = item.icon;
            return (
              <div key={item.text} className="flex items-center gap-2 text-white text-xs sm:text-sm">
                <Icon className="w-3.5 h-3.5 text-teal-200" />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      <section id="especialidades" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 uppercase tracking-tight">
              Nuestras <span className="gradient-text-teal">Especialidades</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-slate-500 mt-3 text-base max-w-lg mx-auto">
              Atencion medica integral con los mejores especialistas
            </motion.p>
          </div>

          <div className="relative">
            <button onClick={() => scrollSpecialties('left')} aria-label="Anterior" className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full shadow-md flex items-center justify-center text-slate-500 hover:text-teal-600 hover:border-teal-300 transition-colors hidden md:flex">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollSpecialties('right')} aria-label="Siguiente" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full shadow-md flex items-center justify-center text-slate-500 hover:text-teal-600 hover:border-teal-300 transition-colors hidden md:flex">
              <ChevronRight className="w-5 h-5" />
            </button>

            <div ref={scrollContainerRef} className="flex gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 px-1">
              {specialties.map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <motion.div
                    key={spec.name}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex-shrink-0 w-[280px] sm:w-[300px] bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow snap-start group"
                  >
                    <div className="relative h-48 overflow-hidden rounded-t-xl">
                      <img src={spec.image} alt={spec.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute bottom-3 left-3 w-10 h-10 bg-white rounded-lg shadow flex items-center justify-center">
                        <Icon className="w-5 h-5 text-teal-600" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-slate-800 text-lg">{spec.name}</h3>
                      <p className="text-slate-500 text-sm mt-1 leading-relaxed">{spec.desc}</p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-teal-600 font-bold">{spec.price}</span>
                        <a href="#contacto" className="text-sm font-semibold text-teal-600 hover:text-teal-500 flex items-center gap-1 transition-colors">
                          Agendar <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="laboratorio" className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <motion.h2 initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 uppercase tracking-tight">
              Laboratorio <span className="gradient-text-teal">Clinico</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-slate-500 mt-3 text-base">
              Examenes confiables con resultados rapidos
            </motion.p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {labCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveLabTab(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeLabTab === cat ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="hidden sm:grid grid-cols-4 gap-4 px-6 py-3 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span>Examen</span>
              <span>Categoria</span>
              <span>Tiempo</span>
              <span className="text-right">Precio</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={activeLabTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                {filteredTests.map((test, i) => (
                  <div key={test.name} className={`grid grid-cols-1 sm:grid-cols-4 gap-1 sm:gap-4 px-6 py-4 border-b border-slate-100 last:border-0 hover:bg-teal-50/50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                    <span className="font-semibold text-slate-800 text-sm">{test.name}</span>
                    <span className="text-slate-500 text-sm">{test.category}</span>
                    <span className="text-slate-500 text-sm flex items-center gap-1">
                      <Clock className="w-3 h-3 text-teal-500" /> {test.time}
                    </span>
                    <span className="font-bold text-teal-600 text-sm sm:text-right">{test.price}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="text-center text-slate-400 text-sm mt-6">
            Toma de muestras sin cita previa &bull; Resultados por WhatsApp
          </p>
        </div>
      </section>

      <section id="proceso" className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 uppercase tracking-tight">
              Como <span className="gradient-text-teal">Funciona</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-12 left-[18%] right-[18%] border-t-2 border-dashed border-teal-200" />
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                  className="relative bg-white rounded-xl p-6 border border-slate-100 shadow-sm"
                >
                  <div className="h-1 w-12 bg-teal-500 rounded-full mb-5" />
                  <span className="text-6xl font-extrabold text-teal-100 leading-none absolute top-4 right-4">{step.num}</span>
                  <div className="relative z-10">
                    <div className="w-11 h-11 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg mb-1">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-teal-400 text-[10px] sm:text-xs uppercase tracking-[0.2em] mt-2 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipo" className="py-20 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.h2 initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 uppercase tracking-tight">
              Equipo <span className="gradient-text-teal">Medico</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: i === 0 ? -30 : i === 2 ? 30 : 0, y: i === 1 ? 30 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-2 bg-gradient-to-r from-teal-600 to-teal-500" />
                <div className="p-6 text-center">
                  <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-100 transition-colors">
                    <span className="text-teal-600 font-bold text-2xl">{member.initials}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-xl">{member.name}</h3>
                  <p className="text-teal-600 text-xs font-semibold uppercase tracking-wider mt-1">{member.specialty}</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">{member.role}</span>
                  <p className="text-slate-400 text-sm mt-3">{member.years} anos de experiencia</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 uppercase tracking-tight">
              Testimonios
            </motion.h2>
          </div>

          <div className="relative">
            <button onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} aria-label="Anterior" className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full shadow flex items-center justify-center text-slate-400 hover:text-teal-600 hover:border-teal-300 transition-colors hidden sm:flex">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)} aria-label="Siguiente" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full shadow flex items-center justify-center text-slate-400 hover:text-teal-600 hover:border-teal-300 transition-colors hidden sm:flex">
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="min-h-[280px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 sm:p-10 w-full"
                >
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    &ldquo;{testimonials[activeTestimonial].text}&rdquo;
                  </p>
                  <div className="h-px bg-slate-100 mb-5" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-800">{testimonials[activeTestimonial].name}</p>
                    </div>
                    <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full">{testimonials[activeTestimonial].service}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 mt-6 sm:hidden">
              <button onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} aria-label="Anterior" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)} aria-label="Siguiente" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight mb-4">
              Tu salud no puede esperar
            </h2>
            <p className="text-teal-100 text-base sm:text-lg mb-8 max-w-lg mx-auto">
              Agenda tu cita hoy y pon tu bienestar en manos de profesionales dedicados a cuidarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#contacto" className="px-8 py-3.5 bg-white text-teal-700 font-bold rounded-lg hover:bg-teal-50 transition-colors text-sm flex items-center justify-center gap-2">
                Agendar Cita <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://wa.me/50491234567" className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm flex items-center justify-center gap-2">
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contacto" className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 uppercase tracking-tight">Agendar una Cita</h2>
              <p className="text-slate-500 text-sm mt-2">Completa el formulario y te contactaremos en menos de 24 horas.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Nombre" className="input-medical w-full px-4 py-3 rounded-lg border border-slate-200 outline-none transition-all text-sm" />
                <input type="text" placeholder="Apellido" className="input-medical w-full px-4 py-3 rounded-lg border border-slate-200 outline-none transition-all text-sm" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="tel" placeholder="Telefono" className="input-medical w-full px-4 py-3 rounded-lg border border-slate-200 outline-none transition-all text-sm" />
                <input type="email" placeholder="Email" className="input-medical w-full px-4 py-3 rounded-lg border border-slate-200 outline-none transition-all text-sm" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="input-medical w-full px-4 py-3 rounded-lg border border-slate-200 outline-none transition-all text-sm text-slate-500">
                  <option>Seleccionar especialidad</option>
                  {specialties.map(s => <option key={s.name}>{s.name}</option>)}
                  <option>Laboratorio</option>
                  <option>Emergencias</option>
                </select>
                <input type="text" placeholder="Fecha preferida" className="input-medical w-full px-4 py-3 rounded-lg border border-slate-200 outline-none transition-all text-sm" />
              </div>
              <textarea placeholder="Describa brevemente su consulta o sintomas" rows={3} className="input-medical w-full px-4 py-3 rounded-lg border border-slate-200 outline-none transition-all resize-none text-sm" />
              <button type="submit" className="w-full py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg transition-colors text-sm uppercase tracking-wider">
                Agendar Mi Cita
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-600" />
                <span>+504 2567-8901</span>
              </div>
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-teal-600" />
                <span>+504 9123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>Blvd. Morazan</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>Lun-Vie 7-7PM</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-slate-900 pt-14 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="mb-4">
                <img src="/demos/vitasalud.png" alt="VitaSalud" className="h-10 w-auto brightness-0 invert opacity-80" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Clinica medica y laboratorio con mas de 25 anos brindando atencion de calidad en Honduras.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" aria-label="Facebook" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-teal-400 hover:bg-slate-700 transition-colors">
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Instagram" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-teal-400 hover:bg-slate-700 transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Google Maps" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-teal-400 hover:bg-slate-700 transition-colors">
                  <GoogleMapsIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Enlaces</h4>
              <ul className="space-y-2.5">
                {['Especialidades', 'Laboratorio', 'Equipo', 'Contacto'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-slate-400 text-sm hover:text-teal-400 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contacto</h4>
              <ul className="space-y-2.5 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                  Blvd. Morazan, frente a Mall Multiplaza, Tegucigalpa
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  +504 2567-8901
                </li>
                <li className="flex items-center gap-2">
                  <WhatsAppIcon className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  +504 9123-4567
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  Lun-Vie 7AM-7PM | Sab 7AM-1PM
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-600">
            <p>&copy; 2025 VitaSalud. Todos los derechos reservados.</p>
            <p>Ejemplo creado por <Link to="/" className="text-teal-400 hover:underline">Balam Code</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
