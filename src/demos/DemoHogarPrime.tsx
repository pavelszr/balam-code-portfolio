import { Link } from 'react-router-dom';
import { Phone, MapPin, Search, Bed, Bath, Maximize, Heart, Home, Building, TreePine, ArrowRight, Shield, Users, Key, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon } from '../components/SocialIcons';
import { BACLogo, FicohsaLogo, DaviviendaLogo, CemcolLogo, InversaLogo } from '../components/BrandLogos';
import { useState, useRef, useEffect } from 'react';

const filters = [
  { name: 'Todas', icon: Home },
  { name: 'Casas', icon: Home },
  { name: 'Apartamentos', icon: Building },
  { name: 'Terrenos', icon: TreePine },
];

const properties = [
  {
    title: 'Casa Residencial Los Castaños',
    price: 'L.2,850,000',
    type: 'Casas',
    location: 'Col. Los Castaños, San Pedro Sula',
    beds: 3, baths: 2, area: '180 m²',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
    featured: true,
  },
  {
    title: 'Apartamento Torre Platinum',
    price: 'L.1,950,000',
    type: 'Apartamentos',
    location: 'Zona Viva, Tegucigalpa',
    beds: 2, baths: 2, area: '95 m²',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80',
    featured: false,
  },
  {
    title: 'Casa Campestre Valle de Ángeles',
    price: 'L.4,200,000',
    type: 'Casas',
    location: 'Valle de Ángeles, Francisco Morazán',
    beds: 4, baths: 3, area: '280 m²',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    featured: true,
  },
  {
    title: 'Terreno Residencial El Pedregal',
    price: 'L.890,000',
    type: 'Terrenos',
    location: 'El Pedregal, San Pedro Sula',
    beds: 0, baths: 0, area: '500 m²',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
    featured: false,
  },
  {
    title: 'Penthouse Lomas del Mayab',
    price: 'L.3,450,000',
    type: 'Apartamentos',
    location: 'Lomas del Mayab, Tegucigalpa',
    beds: 3, baths: 2, area: '145 m²',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80',
    featured: true,
  },
  {
    title: 'Casa Moderna Res. Maya',
    price: 'L.3,600,000',
    type: 'Casas',
    location: 'Res. Maya, San Pedro Sula',
    beds: 4, baths: 3, area: '220 m²',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
    featured: false,
  },
];

const testimonials = [
  { name: 'Familia Rodríguez', text: 'Encontramos nuestra casa soñada en menos de 2 semanas. El equipo de Hogar Prime fue excepcional en todo el proceso.', location: 'San Pedro Sula' },
  { name: 'Carlos Mendoza', text: 'Comprar mi primer apartamento fue fácil gracias a la asesoría de Hogar Prime. Financiamiento y todo incluido.', location: 'Tegucigalpa' },
  { name: 'Andrea & Luis', text: 'Profesionales de verdad. Nos ayudaron con todo el papeleo legal y encontramos el terreno perfecto para construir.', location: 'Valle de Ángeles' },
];

const services = [
  { icon: Search, title: 'Búsqueda Personalizada', desc: 'Encontramos propiedades que se ajustan a tus necesidades y presupuesto.' },
  { icon: Shield, title: 'Asesoría Legal', desc: 'Revisión de documentos, escrituras y trámites legales incluidos.' },
  { icon: Key, title: 'Financiamiento', desc: 'Conexión directa con bancos y cooperativas para tu crédito hipotecario.' },
  { icon: Users, title: 'Atención 24/7', desc: 'Nuestro equipo está disponible para resolver todas tus dudas.' },
];

export default function DemoHogarPrime() {
  const [activeFilter, setActiveFilter] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const toggleFavorite = (title: string) => {
    setFavorites(prev => prev.includes(title) ? prev.filter(f => f !== title) : [...prev, title]);
  };

  const filtered = properties.filter(p => {
    const matchType = activeFilter === 'Todas' || p.type === activeFilter;
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchType && matchSearch;
  });

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1.0, ease: 'easeOut' as const },
  };

  const lineReveal = {
    initial: { scaleX: 0 },
    whileInView: { scaleX: 1 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: 'easeOut' as const },
  };

  return (
    <div className="min-h-screen bg-stone-50 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-50 text-center py-2 text-xs tracking-widest uppercase font-serif" style={{ backgroundColor: '#1E293B', color: '#D4A853' }}>
        Esto es un ejemplo creado por <Link to="/" className="underline font-medium hover:opacity-80 transition-opacity">Balam Code</Link> — <Link to="/" className="underline hover:opacity-80 transition-opacity">Solicita el tuyo</Link>
      </div>

      <nav className={`fixed top-8 left-0 right-0 z-40 transition-all duration-700 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          <Link to="/" className="font-serif text-2xl tracking-wide">
            <span className={`transition-colors duration-700 ${scrolled ? 'text-slate-900' : 'text-white'}`}>Hogar</span>
            <span className="italic" style={{ color: '#D4A853' }}> Prime</span>
          </Link>
          <div className={`hidden md:flex items-center gap-12 text-xs font-light tracking-[0.25em] uppercase transition-colors duration-700 ${scrolled ? 'text-slate-600' : 'text-white/80'}`}>
            <a href="#propiedades" className="hover:opacity-60 transition-opacity">Propiedades</a>
            <a href="#servicios" className="hover:opacity-60 transition-opacity">Servicios</a>
            <a href="#testimonios" className="hover:opacity-60 transition-opacity">Testimonios</a>
            <a href="#contacto" className="hover:opacity-60 transition-opacity">Contacto</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/50427890123" className={`hidden sm:flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-700 ${scrolled ? 'text-slate-600' : 'text-white/80'} hover:opacity-60`}>
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
            <a href="#contacto" className="px-6 py-2 border text-xs tracking-widest uppercase transition-all duration-700 hover:bg-white hover:text-slate-900" style={{ borderColor: '#D4A853', color: scrolled ? '#1E293B' : '#D4A853' }}>
              Contactar
            </a>
          </div>
        </div>
      </nav>

      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        >
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80" alt="Propiedad" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-slate-900/40" />
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' as const }}
          >
            <p className="text-xs tracking-[0.4em] uppercase mb-8 font-light" style={{ color: '#D4A853' }}>
              Bienes Raíces de Prestigio en Honduras
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' as const }}
            className="font-serif text-5xl sm:text-6xl lg:text-8xl text-white leading-[1.1] mb-8"
          >
            Donde la <em className="italic" style={{ color: '#D4A853' }}>elegancia</em><br />encuentra su hogar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6, ease: 'easeOut' as const }}
            className="text-white/70 font-light text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Casas, apartamentos y terrenos en las mejores zonas de Honduras. Asesoría gratuita y financiamiento disponible.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.9, ease: 'easeOut' as const }}
            className="flex items-center justify-center gap-12 flex-wrap"
          >
            {[
              { value: '150+', label: 'Propiedades' },
              { value: '500+', label: 'Familias felices' },
              { value: '8+', label: 'Años de experiencia' },
            ].map((s, i) => (
              <div key={s.label} className="text-center">
                {i > 0 && <span className="hidden" />}
                <p className="font-serif text-3xl text-white">{s.value}</p>
                <p className="text-xs tracking-[0.2em] uppercase text-white/50 mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.2, ease: 'easeOut' as const }}
            className="mt-14"
          >
            <a href="#propiedades" className="inline-flex items-center gap-3 px-10 py-4 border text-sm tracking-widest uppercase text-white hover:bg-white hover:text-slate-900 transition-all duration-500" style={{ borderColor: '#D4A853' }}>
              Explorar Propiedades <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"
          />
        </motion.div>
      </section>

      <section id="propiedades" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase font-light text-slate-400 mb-4">Portafolio</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-slate-900">Propiedades <em className="italic" style={{ color: '#D4A853' }}>Disponibles</em></h2>
            <motion.div {...lineReveal} className="h-px w-20 mx-auto mt-8 origin-center" style={{ backgroundColor: '#D4A853' }} />
          </motion.div>

          <motion.div {...fadeUp} className="max-w-2xl mx-auto mb-14">
            <div className="relative">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
              <input
                type="text"
                placeholder="Buscar por ubicación o nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-4 py-4 bg-transparent border-b border-slate-200 focus:border-slate-900 outline-none transition-colors font-serif text-slate-700 placeholder:text-slate-300 placeholder:font-serif placeholder:italic"
              />
            </div>
          </motion.div>

          <div className="flex justify-center gap-10 mb-16">
            {filters.map((f) => (
              <button
                key={f.name}
                onClick={() => setActiveFilter(f.name)}
                className={`relative text-xs tracking-[0.2em] uppercase font-light pb-3 transition-colors duration-500 ${
                  activeFilter === f.name ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {f.name}
                {activeFilter === f.name && (
                  <motion.div
                    layoutId="filterUnderline"
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ backgroundColor: '#D4A853' }}
                    transition={{ duration: 0.4, ease: 'easeOut' as const }}
                  />
                )}
              </button>
            ))}
          </div>

          <p className="text-center text-xs tracking-[0.2em] uppercase text-slate-400 mb-12">{filtered.length} propiedades encontradas</p>

          <div className="space-y-10">
            {filtered.map((prop, i) => {
              const isFullWidth = i % 3 === 0;
              const isFirstOfPair = i % 3 === 1;
              const isSecondOfPair = i % 3 === 2;
              const nextProp = isFirstOfPair && i + 1 < filtered.length ? filtered[i + 1] : null;

              if (isSecondOfPair) return null;

              if (isFullWidth) {
                return (
                  <motion.div
                    key={prop.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, ease: 'easeOut' as const }}
                    className="relative group overflow-hidden"
                  >
                    <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
                      <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    <button
                      onClick={() => toggleFavorite(prop.title)}
                      className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all z-10"
                    >
                      <Heart className={`w-5 h-5 transition-colors ${favorites.includes(prop.title) ? 'text-red-400 fill-red-400' : 'text-white/70'}`} />
                    </button>
                    {prop.featured && (
                      <span className="absolute top-6 left-6 px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase z-10" style={{ backgroundColor: '#D4A853', color: '#1E293B' }}>
                        Destacada
                      </span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                      <div className="max-w-2xl">
                        <p className="text-xs tracking-[0.2em] uppercase text-white/60 mb-2">{prop.type}</p>
                        <h3 className="font-serif text-2xl sm:text-4xl text-white mb-3">{prop.title}</h3>
                        <p className="text-white/60 font-light flex items-center gap-2 text-sm mb-4">
                          <MapPin className="w-3.5 h-3.5" /> {prop.location}
                        </p>
                        <div className="flex items-center gap-6 mb-6">
                          {prop.beds > 0 && (
                            <span className="flex items-center gap-2 text-white/70 text-sm font-light">
                              <Bed className="w-4 h-4" /> {prop.beds} Hab.
                            </span>
                          )}
                          {prop.baths > 0 && (
                            <span className="flex items-center gap-2 text-white/70 text-sm font-light">
                              <Bath className="w-4 h-4" /> {prop.baths} Baños
                            </span>
                          )}
                          <span className="flex items-center gap-2 text-white/70 text-sm font-light">
                            <Maximize className="w-4 h-4" /> {prop.area}
                          </span>
                        </div>
                        <div className="flex items-center gap-8">
                          <span className="font-serif text-2xl sm:text-3xl text-white">{prop.price}</span>
                          <a href="#contacto" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity" style={{ color: '#D4A853' }}>
                            Me interesa <ChevronRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              if (isFirstOfPair) {
                return (
                  <div key={prop.title} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[prop, nextProp].filter(Boolean).map((p, j) => (
                      <motion.div
                        key={p!.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, delay: j * 0.15, ease: 'easeOut' as const }}
                        className="group"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden mb-6">
                          <img src={p!.image} alt={p!.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
                          <button
                            onClick={() => toggleFavorite(p!.title)}
                            className="absolute top-4 right-4 p-2.5 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
                          >
                            <Heart className={`w-4 h-4 transition-colors ${favorites.includes(p!.title) ? 'text-red-400 fill-red-400' : 'text-white/70'}`} />
                          </button>
                          {p!.featured && (
                            <span className="absolute top-4 left-4 px-3 py-1 text-[10px] tracking-[0.3em] uppercase" style={{ backgroundColor: '#D4A853', color: '#1E293B' }}>
                              Destacada
                            </span>
                          )}
                          <div className="absolute bottom-4 left-4">
                            <span className="font-serif text-xl text-white bg-slate-900/60 backdrop-blur-sm px-4 py-2">{p!.price}</span>
                          </div>
                        </div>
                        <p className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-2">{p!.type}</p>
                        <h3 className="font-serif text-xl text-slate-900 mb-2">{p!.title}</h3>
                        <p className="text-slate-500 font-light flex items-center gap-1.5 text-sm mb-4">
                          <MapPin className="w-3.5 h-3.5" /> {p!.location}
                        </p>
                        <div className="flex items-center gap-5 text-sm text-slate-400 font-light">
                          {p!.beds > 0 && (
                            <span className="flex items-center gap-1.5">
                              <Bed className="w-4 h-4" /> {p!.beds} Hab.
                            </span>
                          )}
                          {p!.baths > 0 && (
                            <span className="flex items-center gap-1.5">
                              <Bath className="w-4 h-4" /> {p!.baths} Baños
                            </span>
                          )}
                          <span className="flex items-center gap-1.5">
                            <Maximize className="w-4 h-4" /> {p!.area}
                          </span>
                        </div>
                        <div className="h-px bg-slate-100 mt-6" />
                        <a href="#contacto" className="inline-flex items-center gap-2 mt-4 text-xs tracking-[0.2em] uppercase text-slate-500 hover:text-slate-900 transition-colors">
                          Me interesa <ChevronRight className="w-3 h-3" />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      </section>

      <section id="servicios" className="py-28 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp} className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase font-light text-slate-400 mb-4">Servicios</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-slate-900">Te acompañamos en <em className="italic" style={{ color: '#D4A853' }}>cada paso</em></h2>
            <motion.div {...lineReveal} className="h-px w-20 mx-auto mt-8 origin-center" style={{ backgroundColor: '#D4A853' }} />
          </motion.div>

          <div>
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const num = String(i + 1).padStart(2, '0');
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, delay: i * 0.1, ease: 'easeOut' as const }}
                >
                  {i === 0 && <div className="h-px bg-slate-200" />}
                  <div className="py-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16">
                    <div className="flex-shrink-0">
                      <span className="font-serif text-7xl lg:text-8xl text-slate-900/[0.06] select-none">{num}</span>
                    </div>
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-slate-400" />
                    </div>
                    <div className="flex-shrink-0 min-w-[200px]">
                      <h3 className="font-serif text-xl text-slate-900">{svc.title}</h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-500 font-light leading-relaxed">{svc.desc}</p>
                    </div>
                  </div>
                  <div className="h-px bg-slate-200" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase font-light text-slate-400 mb-4">Alianzas Estratégicas</p>
          <h3 className="font-serif text-2xl text-slate-900 mb-12">Instituciones que <em className="italic" style={{ color: '#D4A853' }}>respaldan</em> nuestro trabajo</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[
              { Logo: BACLogo, name: 'BAC' },
              { Logo: FicohsaLogo, name: 'Ficohsa' },
              { Logo: DaviviendaLogo, name: 'Davivienda' },
              { Logo: CemcolLogo, name: 'Cemcol' },
              { Logo: InversaLogo, name: 'Inversa' },
            ].map(brand => (
              <div key={brand.name} className="group flex items-center justify-center">
                <brand.Logo className="h-9 opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonios" className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs tracking-[0.3em] uppercase font-light text-slate-400 mb-4">Testimonios</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-slate-900 mb-16">Familias que encontraron <em className="italic" style={{ color: '#D4A853' }}>su hogar</em></h2>
          </motion.div>

          <div className="relative min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: 'easeOut' as const }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <span className="font-serif text-8xl leading-none mb-6" style={{ color: '#D4A853', opacity: 0.3 }}>"</span>
                <p className="font-serif italic text-xl sm:text-2xl text-slate-700 leading-relaxed max-w-2xl mb-10">
                  {testimonials[activeTestimonial].text}
                </p>
                <div>
                  <p className="font-serif text-lg text-slate-900">{testimonials[activeTestimonial].name}</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-slate-400 mt-1 flex items-center justify-center gap-1.5">
                    <MapPin className="w-3 h-3" /> {testimonials[activeTestimonial].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  activeTestimonial === i ? 'w-8' : 'bg-slate-300'
                }`}
                style={activeTestimonial === i ? { backgroundColor: '#D4A853' } : {}}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80" alt="Propiedad" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs tracking-[0.3em] uppercase font-light mb-6" style={{ color: '#D4A853' }}>Su Próximo Paso</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-8">
              ¿Listo para encontrar<br /><em className="italic" style={{ color: '#D4A853' }}>su hogar</em>?
            </h2>
            <p className="text-white/60 font-light text-lg mb-12 leading-relaxed">
              Asesoría gratuita y sin compromiso. Agenda tu visita hoy.
            </p>
            <a href="#contacto" className="inline-flex items-center gap-3 px-12 py-4 border text-sm tracking-widest uppercase text-white hover:bg-white hover:text-slate-900 transition-all duration-500" style={{ borderColor: '#D4A853' }}>
              Agendar Visita Gratis <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="contacto" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            <div className="lg:col-span-3">
              <motion.div {...fadeUp}>
                <p className="text-xs tracking-[0.3em] uppercase font-light text-slate-400 mb-4">Contacto</p>
                <h2 className="font-serif text-4xl sm:text-5xl text-slate-900 mb-4">¿Encontraste algo<br />que te <em className="italic" style={{ color: '#D4A853' }}>gusta</em>?</h2>
                <p className="text-slate-500 font-light leading-relaxed mb-12 max-w-md">
                  Cuéntanos qué buscas y te contactaremos con opciones perfectas para ti.
                </p>
              </motion.div>
              <motion.form
                {...fadeUp}
                className="space-y-10"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-slate-400 font-light block mb-3">Nombre</label>
                    <input type="text" className="w-full py-3 bg-transparent border-b border-slate-200 focus:border-slate-900 outline-none transition-colors font-light text-slate-900 placeholder:text-slate-300" placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-slate-400 font-light block mb-3">Teléfono</label>
                    <input type="tel" className="w-full py-3 bg-transparent border-b border-slate-200 focus:border-slate-900 outline-none transition-colors font-light text-slate-900 placeholder:text-slate-300" placeholder="+504 0000-0000" />
                  </div>
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-slate-400 font-light block mb-3">Correo electrónico</label>
                  <input type="email" className="w-full py-3 bg-transparent border-b border-slate-200 focus:border-slate-900 outline-none transition-colors font-light text-slate-900 placeholder:text-slate-300" placeholder="tu@correo.com" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-slate-400 font-light block mb-3">Interés</label>
                    <select className="w-full py-3 bg-transparent border-b border-slate-200 focus:border-slate-900 outline-none transition-colors font-light text-slate-500 appearance-none cursor-pointer">
                      <option>Casas</option>
                      <option>Apartamentos</option>
                      <option>Terrenos</option>
                      <option>Inversión</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-slate-400 font-light block mb-3">Presupuesto</label>
                    <select className="w-full py-3 bg-transparent border-b border-slate-200 focus:border-slate-900 outline-none transition-colors font-light text-slate-500 appearance-none cursor-pointer">
                      <option>Menos de L.1,000,000</option>
                      <option>L.1,000,000 - L.2,500,000</option>
                      <option>L.2,500,000 - L.5,000,000</option>
                      <option>Más de L.5,000,000</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-slate-400 font-light block mb-3">Mensaje</label>
                  <textarea rows={3} className="w-full py-3 bg-transparent border-b border-slate-200 focus:border-slate-900 outline-none transition-colors font-light text-slate-900 placeholder:text-slate-300 resize-none" placeholder="Zona preferida, número de habitaciones, etc." />
                </div>
                <button type="submit" className="px-12 py-4 text-xs tracking-widest uppercase text-white transition-all duration-500 hover:opacity-80" style={{ backgroundColor: '#1E293B' }}>
                  Enviar Solicitud
                </button>
                <p className="text-slate-400 text-xs tracking-wider">Asesoría 100% gratuita y sin compromiso.</p>
              </motion.form>
            </div>

            <div className="lg:col-span-2 lg:pt-20">
              <motion.div {...fadeUp} className="space-y-12">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-slate-400 font-light mb-4">Información</p>
                  <div className="h-px bg-slate-200 mb-8" />
                </div>
                {[
                  { icon: Phone, label: 'Teléfono', value: '+504 2789-0123', href: 'tel:+50427890123' },
                  { icon: WhatsAppIcon, label: 'WhatsApp', value: '+504 9876-5432', href: 'https://wa.me/50498765432' },
                  { icon: MapPin, label: 'Oficina', value: 'Col. Palmira, Tegucigalpa', href: '#' },
                ].map(item => {
                  const Icon = item.icon;
                  return (
                    <a key={item.label} href={item.href} className="flex items-start gap-5 group">
                      <Icon className="w-5 h-5 text-slate-300 mt-0.5 group-hover:text-slate-500 transition-colors" />
                      <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-slate-400 mb-1">{item.label}</p>
                        <p className="text-slate-900 font-light group-hover:opacity-70 transition-opacity">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
                <div className="pt-8">
                  <div className="h-px bg-slate-200 mb-8" />
                  <p className="text-xs tracking-[0.2em] uppercase text-slate-400 font-light mb-4">Horario</p>
                  <p className="text-slate-900 font-light">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  <p className="text-slate-900 font-light">Sábado: 9:00 AM - 1:00 PM</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <Link to="/" className="font-serif text-2xl tracking-wide text-slate-900">
            Hogar <em className="italic" style={{ color: '#D4A853' }}>Prime</em>
          </Link>
          <div className="h-px w-16 mx-auto my-8" style={{ backgroundColor: '#D4A853' }} />
          <div className="flex justify-center gap-10 mb-8">
            {['Propiedades', 'Servicios', 'Testimonios', 'Contacto'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs tracking-[0.2em] uppercase text-slate-400 hover:text-slate-600 transition-colors font-light">
                {item}
              </a>
            ))}
          </div>
          <p className="text-slate-400 text-xs tracking-wider">
            © 2025 Hogar Prime — Todos los derechos reservados
          </p>
          <p className="text-slate-300 text-xs mt-3">
            Ejemplo creado por <Link to="/" className="hover:text-slate-500 transition-colors underline" style={{ color: '#D4A853' }}>Balam Code</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}