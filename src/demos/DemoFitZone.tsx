import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Users, Dumbbell, Flame, Zap, CheckCircle, Calendar, Trophy, Home, CreditCard, Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WhatsAppIcon } from '../components/SocialIcons';
import { useRef, useState, useEffect } from 'react';

const classes = [
  { name: 'CrossFit', schedule: 'Lun, Mié, Vie — 6:00 AM', difficulty: 'Alta', instructor: 'Carlos Mejía', image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80' },
  { name: 'Yoga', schedule: 'Mar, Jue — 7:00 AM', difficulty: 'Baja', instructor: 'Sofía Hernández', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80' },
  { name: 'Spinning', schedule: 'Lun a Vie — 5:30 PM', difficulty: 'Media', instructor: 'Roberto Lagos', image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&q=80' },
  { name: 'Boxeo', schedule: 'Mar, Jue, Sáb — 4:00 PM', difficulty: 'Alta', instructor: 'Miguel Ávila', image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&q=80' },
  { name: 'Pilates', schedule: 'Lun, Mié — 9:00 AM', difficulty: 'Baja', instructor: 'Andrea Reyes', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80' },
  { name: 'Funcional', schedule: 'Lun a Sáb — 6:30 AM', difficulty: 'Media', instructor: 'David Pineda', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80' },
];

const plans = [
  {
    name: 'Básico',
    price: 'L.800',
    period: '/mes',
    popular: false,
    features: ['Acceso a sala de pesas', 'Horario de 5AM a 10PM', '1 clase grupal por semana', 'Casillero compartido', 'Evaluación inicial'],
  },
  {
    name: 'Premium',
    price: 'L.1,200',
    period: '/mes',
    popular: true,
    features: ['Todo del plan Básico', 'Clases grupales ilimitadas', 'Acceso a zona cardio premium', 'Casillero personal', 'Plan nutricional básico', '1 sesión con entrenador/mes'],
  },
  {
    name: 'Elite',
    price: 'L.1,800',
    period: '/mes',
    popular: false,
    features: ['Todo del plan Premium', 'Entrenador personal 3x/semana', 'Plan nutricional personalizado', 'Acceso a sauna y spa', 'Acceso a las 3 sedes', 'Invitados gratis (2/mes)'],
  },
];

const trainers = [
  { name: 'Carlos Mejía', specialty: 'CrossFit & Fuerza', years: 8, initials: 'CM' },
  { name: 'Sofía Hernández', specialty: 'Yoga & Pilates', years: 6, initials: 'SH' },
  { name: 'Miguel Ávila', specialty: 'Boxeo & MMA', years: 10, initials: 'MA' },
  { name: 'Andrea Reyes', specialty: 'Funcional & Cardio', years: 5, initials: 'AR' },
];

const planFeatureRows = [
  'Acceso a sala de pesas',
  'Horario de 5AM a 10PM',
  'Clases grupales',
  'Casillero',
  'Plan nutricional',
  'Entrenador personal',
  'Acceso a sauna y spa',
  'Acceso a todas las sedes',
  'Invitados gratis',
];

const planFeatureMap: Record<string, Record<string, string>> = {
  'Básico': {
    'Acceso a sala de pesas': '✓',
    'Horario de 5AM a 10PM': '✓',
    'Clases grupales': '1/semana',
    'Casillero': 'Compartido',
    'Plan nutricional': '—',
    'Entrenador personal': '—',
    'Acceso a sauna y spa': '—',
    'Acceso a todas las sedes': '—',
    'Invitados gratis': '—',
  },
  'Premium': {
    'Acceso a sala de pesas': '✓',
    'Horario de 5AM a 10PM': '✓',
    'Clases grupales': 'Ilimitadas',
    'Casillero': 'Personal',
    'Plan nutricional': 'Básico',
    'Entrenador personal': '1 sesión/mes',
    'Acceso a sauna y spa': '—',
    'Acceso a todas las sedes': '—',
    'Invitados gratis': '—',
  },
  'Elite': {
    'Acceso a sala de pesas': '✓',
    'Horario de 5AM a 10PM': '✓',
    'Clases grupales': 'Ilimitadas',
    'Casillero': 'Personal',
    'Plan nutricional': 'Personalizado',
    'Entrenador personal': '3x/semana',
    'Acceso a sauna y spa': '✓',
    'Acceso a todas las sedes': '✓',
    'Invitados gratis': '2/mes',
  },
};

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1200;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(eased * target);
            setCount(start);
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

const navItems = [
  { icon: Home, label: 'Inicio', href: '#' },
  { icon: Flame, label: 'Clases', href: '#clases' },
  { icon: CreditCard, label: 'Planes', href: '#planes' },
  { icon: Users, label: 'Equipo', href: '#entrenadores' },
  { icon: Mail, label: 'Contacto', href: '#contacto' },
];

export default function DemoFitZone() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0A0A] overflow-x-hidden">
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(132, 204, 22, 0.4), 0 0 40px rgba(132, 204, 22, 0.2); }
          50% { box-shadow: 0 0 30px rgba(132, 204, 22, 0.6), 0 0 60px rgba(132, 204, 22, 0.3); }
        }
        @keyframes neonPulse {
          0%, 100% { text-shadow: 0 0 10px rgba(132, 204, 22, 0.5), 0 0 20px rgba(132, 204, 22, 0.3); }
          50% { text-shadow: 0 0 20px rgba(132, 204, 22, 0.8), 0 0 40px rgba(132, 204, 22, 0.5); }
        }
        @keyframes diagonalSlide {
          from { transform: translateX(50px) translateY(30px); opacity: 0; }
          to { transform: translateX(0) translateY(0); opacity: 1; }
        }
        .neon-glow-text {
          animation: neonPulse 2s ease-in-out infinite;
        }
        .pulse-glow-btn {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .neon-input:focus {
          box-shadow: 0 0 15px rgba(132, 204, 22, 0.3), 0 0 30px rgba(132, 204, 22, 0.1), inset 0 0 15px rgba(132, 204, 22, 0.05);
        }
        .gradient-text {
          background: linear-gradient(135deg, #84CC16, #22D3EE, #84CC16);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stat-number {
          background: linear-gradient(180deg, #84CC16 0%, #22D3EE 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @media (min-width: 640px) {
          .class-card-0 { transform: skewY(-1.5deg); margin-left: 0px; }
          .class-card-1 { transform: skewY(1.5deg); margin-left: 20px; }
          .class-card-2 { transform: skewY(-1.5deg); margin-left: 40px; }
          .class-card-3 { transform: skewY(1.5deg); margin-left: 60px; }
          .class-card-4 { transform: skewY(-1.5deg); margin-left: 80px; }
          .class-card-5 { transform: skewY(1.5deg); margin-left: 100px; }
        }
        @media (min-width: 640px) {
          .class-inner-0, .class-inner-2, .class-inner-4 { transform: skewY(1.5deg); }
          .class-inner-1, .class-inner-3, .class-inner-5 { transform: skewY(-1.5deg); }
        }
        @media (max-width: 639px) {
          .class-card { transform: none !important; margin-left: 0 !important; }
        }
        @media (max-width: 767px) {
          .neon-glow-text { animation: none; text-shadow: 0 0 10px rgba(132, 204, 22, 0.3); }
          .pulse-glow-btn { animation: none; box-shadow: 0 0 15px rgba(132, 204, 22, 0.2); }
          .neon-input:focus { box-shadow: 0 0 8px rgba(132, 204, 22, 0.15); }
        }
      `}</style>

      <div className="fixed top-0 left-0 right-0 z-[60] bg-zinc-950 border-b border-lime-500/30 text-white text-center py-2.5 text-sm font-medium">
        <span className="text-lime-400">&#9889;</span> Esto es un ejemplo creado por <Link to="/" className="underline font-bold text-lime-400 hover:text-lime-300 transition-colors">Balam Code</Link> — <Link to="/" className="underline hover:text-lime-300 transition-colors">Solicita el tuyo</Link>
      </div>

      <nav className="fixed left-0 top-10 bottom-0 z-50 w-16 bg-zinc-950/95 backdrop-blur-md border-r border-zinc-800/50 hidden lg:flex flex-col items-center justify-center gap-1">
        {navItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                onMouseEnter={() => setHoveredNav(i)}
                onMouseLeave={() => setHoveredNav(null)}
                className="w-10 h-10 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-zinc-500 hover:text-lime-400 hover:bg-lime-500/10 transition-all duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
              {hoveredNav === i && (
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute left-14 top-1/2 -translate-y-1/2 bg-zinc-900 text-lime-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-md whitespace-nowrap border border-lime-500/20 shadow-lg shadow-lime-500/10"
                >
                  {item.label}
                </motion.div>
              )}
            </div>
          );
        })}
        <div className="mt-6 w-6 h-px bg-zinc-800" />
        <a
          href="https://wa.me/50431567890"
          className="w-10 h-10 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-lime-400 hover:bg-lime-500/10 transition-all"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon className="w-5 h-5" />
        </a>
      </nav>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950 border-t border-zinc-800/50 flex lg:hidden items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a key={item.label} href={item.href} className="flex flex-col items-center gap-0.5 text-zinc-500 hover:text-lime-400 transition-colors px-3 py-1 min-w-[44px] min-h-[44px] justify-center">
              <Icon className="w-5 h-5" />
              <span className="text-[10px] uppercase tracking-wider font-medium">{item.label}</span>
            </a>
          );
        })}
      </div>

      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center overflow-hidden"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
      >
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=75" alt="" aria-hidden="true" className="w-full h-full object-cover" width={800} height={533} fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/95 via-[#0A0A0A]/80 to-transparent" />
        </motion.div>

        <div className="absolute top-1/4 right-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl hidden md:block" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl hidden md:block" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:pl-24">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 border border-lime-500/30 text-lime-400 text-xs font-bold uppercase tracking-widest rounded-sm mb-8">
              <Zap className="w-3 h-3" /> GIMNASIO #1 EN HONDURAS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, type: 'spring', stiffness: 120 }}
            className="text-6xl sm:text-7xl lg:text-9xl font-extrabold text-white uppercase tracking-tighter leading-[0.85] mb-8"
          >
            TRANSFORMA
            <br />
            <span className="neon-glow-text text-lime-400">TU VIDA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-zinc-400 text-lg lg:text-xl max-w-lg mb-10 font-light leading-relaxed"
          >
            Más de 50 clases semanales, entrenadores certificados y equipos de última generación. Tu primera clase es completamente gratis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contacto"
              className="pulse-glow-btn inline-flex items-center justify-center gap-3 px-10 py-5 bg-lime-500 hover:bg-lime-400 text-black font-extrabold uppercase tracking-wider text-sm transition-all duration-200 hover:scale-105"
              style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
            >
              <Dumbbell className="w-5 h-5" />
              EMPEZAR AHORA
            </a>
            <a
              href="https://wa.me/50431567890"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-zinc-700 text-white font-bold uppercase tracking-wider text-sm hover:border-lime-500/50 hover:text-lime-400 transition-all duration-200"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WHATSAPP
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-500/50 to-transparent" />
      </section>

      <section className="relative py-4 bg-lime-500 overflow-hidden" style={{ marginTop: '-7.5vh' }}>
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ x: { duration: 12, repeat: Infinity, ease: 'linear' } }}
            className="flex gap-16 w-max items-center"
          >
            {[...Array(2)].flatMap(() => [
              'CROSSFIT', 'YOGA', 'SPINNING', 'BOXEO', 'FUNCIONAL', 'HIIT', 'PILATES',
            ]).map((text, i) => (
              <span key={i} className="text-black font-extrabold text-xs uppercase tracking-[0.3em] whitespace-nowrap flex items-center gap-4">
                {text} <span className="w-1.5 h-1.5 bg-black/40 rounded-full" />
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4 lg:pl-24">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600 text-center mb-8">Marcas que nos respaldan</p>
          <div className="flex flex-wrap justify-center gap-14 items-center">
            {[
              { src: '/brands/Logo_NIKE.svg', name: 'Nike' },
              { src: '/brands/Adidas_Logo.svg', name: 'Adidas' },
              { src: '/brands/puma-logo-logo.svg', name: 'Puma' },
              { src: '/brands/oakley.svg', name: 'Oakley' },
            ].map(brand => (
              <div key={brand.name} className="group w-32 h-10 flex items-center justify-center">
                <img src={brand.src} alt={brand.name} loading="lazy" width={128} height={40} className="max-w-full max-h-full object-contain opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 invert" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="clases"
        className="relative py-32 bg-zinc-950"
        style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)' }}
      >
        <div className="max-w-6xl mx-auto px-4 lg:pl-24">
          <motion.div
            initial={{ opacity: 0, x: 50, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-lime-400">Nuestras Clases</span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-tighter mt-3">
              ENCUENTRA TU
              <br />
              <span className="text-lime-400">DISCIPLINA</span>
            </h2>
          </motion.div>

          <div className="relative flex flex-col gap-4 max-w-3xl">
            {classes.map((cls, i) => (
              <motion.div
                key={cls.name}
                initial={{ opacity: 0, x: 60, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.3, type: 'spring', stiffness: 150 }}
                whileHover={{ skewY: 0, x: 10 }}
                className={`class-card class-card-${i} group relative bg-zinc-900 border border-zinc-800 overflow-hidden flex items-stretch cursor-pointer hover:border-lime-500/40 transition-all duration-300`}
                style={{
                  zIndex: classes.length - i,
                }}
              >
                <div className={`w-20 sm:w-36 flex-shrink-0 overflow-hidden class-inner-${i}`}>
                  <img src={cls.image} alt={cls.name} loading="lazy" width={400} height={267} className="w-full h-full object-cover aspect-[3/2] group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className={`flex-1 p-3 sm:p-5 flex items-center justify-between class-inner-${i}`}>
                  <div>
                    <h3 className="text-white font-extrabold text-sm sm:text-lg uppercase tracking-tight group-hover:text-lime-400 transition-colors">{cls.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-zinc-500 text-[10px] sm:text-xs flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-lime-500 flex-shrink-0" />
                        <span className="hidden sm:inline">{cls.schedule}</span>
                        <span className="sm:hidden">{cls.schedule.split('—')[0]?.trim()}</span>
                      </span>
                    </div>
                    <span className="text-zinc-600 text-[10px] sm:text-xs mt-1 block">{cls.instructor}</span>
                  </div>
                  <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-sm ${
                    cls.difficulty === 'Alta' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                    cls.difficulty === 'Media' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    'bg-lime-500/20 text-lime-400 border border-lime-500/30'
                  }`}>
                    {cls.difficulty}
                  </span>
                </div>
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-lime-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-[#0A0A0A]" style={{ clipPath: 'polygon(0 0, 100% 8%, 100% 100%, 0 92%)' }}>
        <div className="max-w-7xl mx-auto px-4 lg:pl-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-end">
            {[
              { value: 3, suffix: '', label: 'SEDES' },
              { value: 50, suffix: '+', label: 'CLASES SEMANALES' },
              { value: 2, suffix: 'K+', label: 'MIEMBROS ACTIVOS' },
              { value: 15, suffix: '', label: 'ENTRENADORES' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4, type: 'spring', stiffness: 100 }}
                className="text-center lg:text-left"
              >
                <div className="stat-number text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-none tracking-tighter font-mono whitespace-nowrap">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-zinc-600 text-xs uppercase tracking-[0.3em] font-bold mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="planes"
        className="relative py-32 bg-zinc-950"
        style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 97%, 0 100%)' }}
      >
        <div className="max-w-6xl mx-auto px-4 lg:pl-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-lime-400">Planes y Precios</span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-tighter mt-3">
              ELIGE TU <span className="text-lime-400">PLAN</span>
            </h2>
            <p className="text-zinc-500 mt-4 font-light">Sin contratos de permanencia. Cancela cuando quieras.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 text-zinc-600 text-xs uppercase tracking-[0.2em] font-bold border-b border-zinc-800 w-1/4">
                    Característica
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={`p-4 text-center border-b w-1/4 ${
                        plan.popular
                          ? 'border-lime-500 bg-lime-500/5'
                          : 'border-zinc-800'
                      }`}
                    >
                      {plan.popular && (
                        <span className="inline-block px-3 py-0.5 bg-lime-500 text-black text-[10px] font-bold uppercase tracking-widest rounded-sm mb-2">
                          Popular
                        </span>
                      )}
                      <div className="text-white font-extrabold uppercase tracking-tight text-lg">{plan.name}</div>
                      <div className="mt-1">
                        <span className={`text-3xl font-mono font-extrabold ${plan.popular ? 'text-lime-400' : 'text-white'}`}>{plan.price}</span>
                        <span className="text-zinc-600 text-sm">{plan.period}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {planFeatureRows.map((feature, _fi) => (
                  <tr key={feature} className="group">
                    <td className="p-4 text-zinc-400 text-sm border-b border-zinc-800/50 font-medium">
                      {feature}
                    </td>
                    {plans.map((plan) => {
                      const val = planFeatureMap[plan.name][feature];
                      return (
                        <td
                          key={plan.name}
                          className={`p-4 text-center text-sm border-b font-medium ${
                            plan.popular
                              ? 'border-lime-500/20 bg-lime-500/5'
                              : 'border-zinc-800/50'
                          } ${val === '—' ? 'text-zinc-700' : val === '✓' ? 'text-lime-400' : 'text-white'}`}
                        >
                          {val === '✓' ? (
                            <CheckCircle className="w-4 h-4 text-lime-400 mx-auto" />
                          ) : val}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr>
                  <td className="p-4" />
                  {plans.map((plan) => (
                    <td key={plan.name} className={`p-4 text-center ${plan.popular ? 'bg-lime-500/5' : ''}`}>
                      <a
                        href="#contacto"
                        className={`inline-block px-8 py-3 font-bold uppercase text-xs tracking-widest transition-all duration-200 ${
                          plan.popular
                            ? 'bg-lime-500 text-black hover:bg-lime-400 shadow-lg shadow-lime-500/30'
                            : 'border border-zinc-700 text-zinc-400 hover:border-lime-500/50 hover:text-lime-400'
                        }`}
                      >
                        Elegir Plan
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section
        id="entrenadores"
        className="relative py-32 bg-[#0A0A0A]"
        style={{ clipPath: 'polygon(0 0, 100% 6%, 100% 100%, 0 94%)' }}
      >
        <div className="max-w-6xl mx-auto px-4 lg:pl-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-20"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-lime-400">Nuestro Equipo</span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-tighter mt-3">
              ENTRENADORES
              <br />
              <span className="text-lime-400">CERTIFICADOS</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center lg:justify-start items-center -space-x-6 lg:-space-x-10">
            {trainers.map((trainer, i) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, scale: 0.6, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4, type: 'spring', stiffness: 120 }}
                whileHover={{ scale: 1.1, zIndex: 50 }}
                className="relative group cursor-pointer"
                style={{ zIndex: trainers.length - i }}
              >
                <div
                  className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full flex items-center justify-center border-4 border-zinc-900 group-hover:border-lime-500 transition-all duration-300 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${i % 2 === 0 ? '#84CC16' : '#22D3EE'}, ${i % 2 === 0 ? '#22D3EE' : '#84CC16'})`,
                  }}
                >
                  <span className="text-black font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter">{trainer.initials}</span>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-20 left-1/2 -translate-x-1/2 bg-zinc-900 border border-lime-500/30 rounded-lg px-4 py-3 text-center whitespace-nowrap shadow-xl shadow-lime-500/10 z-50"
                >
                  <p className="text-white font-bold text-sm">{trainer.name}</p>
                  <p className="text-lime-400 text-xs font-medium">{trainer.specialty}</p>
                  <p className="text-zinc-500 text-xs flex items-center justify-center gap-1 mt-1">
                    <Trophy className="w-3 h-3 text-cyan-400" /> {trainer.years} años
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden" style={{ clipPath: 'polygon(0 8%, 100% 0, 100% 92%, 0 100%)' }}>
        <div className="flex flex-col lg:flex-row min-h-[50vh]">
          <div className="flex-1 bg-zinc-950 flex items-center justify-center p-12 lg:p-20 relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-lime-500/5 rounded-full blur-3xl hidden md:block" />
            <div className="relative z-10 max-w-md">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-lime-400">Oferta Especial</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tighter mt-4 leading-[0.9]">
                  TU PRIMERA
                  <br />
                  CLASE ES
                  <br />
                  <span className="neon-glow-text text-lime-400">GRATIS</span>
                </h2>
                <p className="text-zinc-500 font-light mt-6 leading-relaxed">
                  Sin compromiso, sin excusas. Ven, conoce nuestras instalaciones y entrena con nosotros un día completo.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="flex-1 bg-lime-500 flex items-center justify-center p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)' }} />
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="relative z-10 text-center"
            >
              <Dumbbell className="w-16 h-16 text-black/20 mx-auto mb-6" />
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 px-12 py-5 bg-black text-lime-400 font-extrabold uppercase tracking-wider text-sm hover:bg-zinc-900 transition-all duration-200 hover:scale-105 shadow-2xl"
              >
                RECLAMAR MI CLASE
              </a>
              <div className="mt-6 flex items-center justify-center gap-6">
                <a href="https://wa.me/50431567890" className="text-black/70 hover:text-black font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition-colors">
                  <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                </a>
                <a href="tel:+50425567890" className="text-black/70 hover:text-black font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition-colors">
                  <Phone className="w-4 h-4" /> Llamar
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="relative py-32 bg-[#0A0A0A]"
        style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 100%, 0 100%)' }}
      >
        <div className="max-w-6xl mx-auto px-4 lg:pl-24">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-lime-400">Contacto</span>
                <h2 className="text-5xl sm:text-6xl font-extrabold text-white uppercase tracking-tighter mt-3">
                  EMPIEZA <span className="text-lime-400">HOY</span>
                </h2>
              </motion.div>

              <p className="text-zinc-500 font-light mt-4 mb-10">Visítanos en cualquiera de nuestras 3 sedes o escríbenos por WhatsApp.</p>

              <div className="space-y-5 mb-10">
                {[
                  { icon: Phone, label: 'TELÉFONO', value: '+504 2556-7890' },
                  { icon: WhatsAppIcon, label: 'WHATSAPP', value: '+504 3156-7890' },
                  { icon: Clock, label: 'HORARIO', value: 'Lun - Sáb: 5:00 AM - 10:00 PM' },
                ].map(item => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 border border-lime-500/30 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-lime-400" />
                      </div>
                      <div>
                        <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-bold">{item.label}</p>
                        <p className="text-white font-medium text-sm">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div>
                <h3 className="text-white font-extrabold text-sm uppercase tracking-wider flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-lime-400" /> Nuestras Sedes
                </h3>
                <div className="space-y-3">
                  {[
                    { sede: 'FitZone Tegucigalpa', address: 'Blvd. Morazán, Centro Comercial Plaza Criolla, Local 15, Tegucigalpa' },
                    { sede: 'FitZone San Pedro Sula', address: 'Col. Trejo, 3ra Avenida NO, Barrio Guamilito, San Pedro Sula' },
                    { sede: 'FitZone La Ceiba', address: 'Barrio La Isla, frente al Parque Swinford, La Ceiba, Atlántida' },
                  ].map(loc => (
                    <div key={loc.sede} className="border-l-2 border-lime-500/30 pl-4 py-2">
                      <p className="text-lime-400 font-bold text-xs uppercase tracking-wider">{loc.sede}</p>
                      <p className="text-zinc-500 text-xs mt-0.5">{loc.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <div className="bg-zinc-950 border border-zinc-800 p-8 lg:p-10">
                <h3 className="text-xl font-extrabold text-white uppercase tracking-tight mb-1">Clase Gratis</h3>
                <p className="text-zinc-600 text-sm mb-8 font-light">Completa el formulario y agenda tu primera clase sin costo.</p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="neon-input w-full px-4 py-3.5 bg-transparent border border-zinc-800 text-white placeholder-zinc-600 focus:border-lime-500 outline-none transition-all duration-300 text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono / WhatsApp"
                    className="neon-input w-full px-4 py-3.5 bg-transparent border border-zinc-800 text-white placeholder-zinc-600 focus:border-lime-500 outline-none transition-all duration-300 text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="neon-input w-full px-4 py-3.5 bg-transparent border border-zinc-800 text-white placeholder-zinc-600 focus:border-lime-500 outline-none transition-all duration-300 text-sm"
                  />
                  <select className="neon-input w-full px-4 py-3.5 bg-zinc-950 border border-zinc-800 text-zinc-500 focus:border-lime-500 outline-none transition-all duration-300 text-sm">
                    <option>Sede de preferencia</option>
                    <option>FitZone Tegucigalpa</option>
                    <option>FitZone San Pedro Sula</option>
                    <option>FitZone La Ceiba</option>
                  </select>
                  <select className="neon-input w-full px-4 py-3.5 bg-zinc-950 border border-zinc-800 text-zinc-500 focus:border-lime-500 outline-none transition-all duration-300 text-sm">
                    <option>Clase que te interesa</option>
                    <option>CrossFit</option>
                    <option>Yoga</option>
                    <option>Spinning</option>
                    <option>Boxeo</option>
                    <option>Pilates</option>
                    <option>Funcional</option>
                  </select>
                  <button
                    type="submit"
                    className="pulse-glow-btn w-full py-4 bg-lime-500 text-black font-extrabold uppercase tracking-wider text-sm hover:bg-lime-400 transition-all duration-200"
                  >
                    AGENDAR MI CLASE GRATIS
                  </button>
                  <p className="text-center text-zinc-700 text-[10px] uppercase tracking-widest">Sin compromiso. Sin tarjeta de crédito.</p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0A0A0A] border-t border-zinc-900 py-6 pb-20 lg:pb-6">
        <div className="max-w-6xl mx-auto px-4 lg:pl-24 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-zinc-700 text-xs uppercase tracking-widest">&copy; 2025 FitZone Honduras</p>
          <div className="h-px w-8 bg-lime-500/30 hidden sm:block" />
          <p className="text-zinc-700 text-xs">
            Ejemplo creado por <Link to="/" className="text-lime-500 hover:text-lime-400 font-bold transition-colors">Balam Code</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
