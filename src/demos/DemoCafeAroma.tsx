import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Coffee, Flame, Award, Users, CalendarDays, ChevronDown, Star } from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';
import { LavazzaLogo, HarioLogo, ChemexLogo, AeropressLogo, BaratzaLogo } from '../components/BrandLogos';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const menuCategories = [
  { name: 'Todos', count: 8 },
  { name: 'Cafe', count: 3 },
  { name: 'Postres', count: 2 },
  { name: 'Brunch', count: 1 },
  { name: 'Bebidas', count: 2 },
];

const menuItems = [
  { name: 'Espresso Hondureno', price: 'L.45', category: 'Cafe', image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80', desc: 'Espresso intenso con granos de Marcala, cuerpo robusto y notas de chocolate', popular: true },
  { name: 'Cappuccino Artesanal', price: 'L.65', category: 'Cafe', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80', desc: 'Cappuccino clasico con espuma de leche cremosa y arte latte', popular: false },
  { name: 'Cheesecake de Maracuya', price: 'L.95', category: 'Postres', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80', desc: 'Cheesecake cremoso con coulis de maracuya fresca hondurena', popular: true },
  { name: 'Latte de Vainilla', price: 'L.70', category: 'Cafe', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80', desc: 'Latte suave con extracto natural de vainilla y leche vaporizada', popular: false },
  { name: 'Brownie con Helado', price: 'L.110', category: 'Postres', image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&q=80', desc: 'Brownie tibio de chocolate oscuro acompanado de helado artesanal', popular: false },
  { name: 'Brunch Catracho', price: 'L.185', category: 'Brunch', image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&q=80', desc: 'Huevos revueltos, baleada, platano frito, frijoles y cafe incluido', popular: true },
  { name: 'Smoothie Tropical', price: 'L.75', category: 'Bebidas', image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&q=80', desc: 'Mezcla de mango, pina, banano y leche de coco natural', popular: false },
  { name: 'Te Chai Helado', price: 'L.60', category: 'Bebidas', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80', desc: 'Te chai especiado con canela, cardamomo y jengibre sobre hielo', popular: false },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80',
  'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80',
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=80',
  'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=400&q=80',
];

const grainOverlay = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`;

const timelineSteps = [
  { label: 'Finca', desc: 'Granos selectos de Marcala y Copan', icon: '🌱' },
  { label: 'Tostado', desc: 'Artesanal en pequenos lotes', icon: '🔥' },
  { label: 'Preparacion', desc: 'Metodos de especialidad', icon: '☕' },
  { label: 'Servido', desc: 'Con amor en cada taza', icon: '✨' },
];

export default function DemoCafeAroma() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [openAccordion, setOpenAccordion] = useState<string | null>('Todos');
  const [steamOffset, setSteamOffset] = useState(0);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const animate = (ts: number) => {
      if (!start) start = ts;
      setSteamOffset(Math.sin((ts - start) / 2000) * 12);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const filtered = menuItems.filter(item => activeCategory === 'Todos' || item.category === activeCategory);

  const categoryNames = menuCategories.map(c => c.name).filter(n => n !== 'Todos');

  const handleAccordionToggle = (cat: string) => {
    if (openAccordion === cat) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(cat);
      setActiveCategory(cat === 'Todos' ? 'Todos' : cat);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#FFFBEB' }}>
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{ backgroundImage: grainOverlay, backgroundRepeat: 'repeat', backgroundSize: '256px 256px' }}
      />

      <div className="fixed top-0 left-0 right-0 z-50 text-center py-2.5 text-sm font-medium shadow-lg" style={{ background: 'linear-gradient(to right, #78350F, #92400E)' }}>
        <span className="text-amber-100">Esto es un ejemplo creado por </span>
        <Link to="/" className="underline font-bold text-white hover:text-amber-200 transition-colors">Balam Code</Link>
        <span className="text-amber-100"> — </span>
        <Link to="/" className="underline text-white hover:text-amber-200 transition-colors">Solicita el tuyo</Link>
      </div>

      <nav className="sticky top-10 z-40 flex flex-col" style={{ backgroundColor: 'rgba(255, 251, 235, 0.97)', backdropFilter: 'blur(12px)' }}>
        <div className="flex items-center justify-center py-5">
          <Link to="/" className="text-center">
            <span className="block text-3xl sm:text-4xl font-serif italic tracking-wide" style={{ color: '#78350F' }}>
              Cafe Aroma
            </span>
            <span className="block text-[10px] uppercase tracking-[0.35em] mt-1 font-light" style={{ color: '#92400E' }}>
              Cafe de Especialidad · Tegucigalpa
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-8 py-2.5 border-t border-b" style={{ borderColor: '#D4A574' }}>
          <a href="#menu" className="text-xs uppercase tracking-[0.2em] font-medium hover:opacity-70 transition-opacity" style={{ color: '#78350F' }}>Menu</a>
          <a href="#historia" className="text-xs uppercase tracking-[0.2em] font-medium hover:opacity-70 transition-opacity" style={{ color: '#78350F' }}>Historia</a>
          <a href="#galeria" className="text-xs uppercase tracking-[0.2em] font-medium hover:opacity-70 transition-opacity" style={{ color: '#78350F' }}>Galeria</a>
          <a href="#reservar" className="text-xs uppercase tracking-[0.2em] font-medium hover:opacity-70 transition-opacity" style={{ color: '#78350F' }}>Reservar</a>
          <a href="https://wa.me/50495671234" className="hidden sm:flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium hover:opacity-70 transition-opacity" style={{ color: '#78350F' }}>
            <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp
          </a>
        </div>
      </nav>

      <section className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ backgroundColor: '#FDF6E3' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: grainOverlay, backgroundRepeat: 'repeat', backgroundSize: '256px 256px', opacity: 0.6 }}
        />
        <div className="absolute top-20 right-[-5%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #78350F 0%, transparent 70%)' }} />
        <div className="absolute bottom-10 left-[-3%] w-[25vw] h-[25vw] max-w-[350px] max-h-[350px] opacity-5" style={{ borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%', background: 'radial-gradient(circle, #B45309 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-2 mb-8">
                <MapPin className="w-4 h-4" style={{ color: '#B45309' }} />
                <span className="text-sm font-light tracking-wide" style={{ color: '#92400E' }}>Tegucigalpa, Honduras</span>
              </div>
              <h1 className="font-serif leading-tight mb-8" style={{ color: '#1C1917', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Donde cada taza{' '}
                <br />
                cuenta una{' '}
                <em className="font-serif" style={{ color: '#78350F' }}>historia</em>
              </h1>
              <p className="text-lg font-light leading-relaxed mb-10 max-w-lg" style={{ color: '#78716C' }}>
                Cafe de especialidad hondureno, tostado artesanal y un ambiente que te invita a quedarte. Descubre el verdadero sabor de Honduras en cada sorbo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#menu"
                  className="px-8 py-4 font-serif italic text-lg text-white transition-all duration-500 hover:shadow-xl text-center"
                  style={{ backgroundColor: '#78350F', borderRadius: '2rem', boxShadow: '0 4px 20px rgba(120, 53, 15, 0.3)' }}
                >
                  Ver Nuestro Menu
                </a>
                <a
                  href="#reservar"
                  className="px-8 py-4 font-serif italic text-lg text-center transition-all duration-500 hover:shadow-lg"
                  style={{ color: '#78350F', border: '1.5px solid #78350F', borderRadius: '2rem', backgroundColor: 'transparent' }}
                >
                  Reservar Mesa
                </a>
              </div>
              <div className="flex items-center gap-10">
                {[
                  { value: '5+', label: 'Anos' },
                  { value: '50+', label: 'Mezclas' },
                  { value: '4.9', label: 'Rating' },
                ].map(s => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-serif" style={{ color: '#78350F' }}>{s.value}</p>
                    <p className="text-xs uppercase tracking-widest font-light mt-1" style={{ color: '#A8A29E' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
              className="flex items-center justify-center relative"
            >
              <div
                className="relative w-72 h-72 sm:w-96 sm:h-96"
                style={{ borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%', background: 'linear-gradient(135deg, #78350F 0%, #B45309 50%, #D97706 100%)', boxShadow: '0 25px 60px rgba(120, 53, 15, 0.35)' }}
              >
                <div className="absolute inset-6 flex items-center justify-center" style={{ borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%', background: 'linear-gradient(135deg, #92400E 0%, #B45309 100%)' }}>
                  <Coffee className="w-24 h-24 sm:w-32 sm:h-32 text-amber-100 opacity-50" />
                </div>
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-3"
                  style={{ y: steamOffset }}
                >
                  {[0, 1, 2].map(i => (
                    <div
                      key={i}
                      className="w-1.5 rounded-full opacity-20"
                      style={{
                        height: `${30 + i * 10}px`,
                        backgroundColor: '#78350F',
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                  ))}
                </motion.div>
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 opacity-20"
                style={{ borderRadius: '50% 60% 40% 55% / 55% 45% 60% 40%', backgroundColor: '#B45309' }}
              />
              <div
                className="absolute -top-8 -right-8 w-16 h-16 opacity-15"
                style={{ borderRadius: '45% 55% 60% 40% / 50% 40% 55% 50%', backgroundColor: '#D97706' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="h-24" style={{ background: 'linear-gradient(to bottom, #FDF6E3, #FFFBEB)' }} />

      <section className="py-6" style={{ backgroundColor: '#78350F' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {[
              { icon: Clock, text: 'Lun-Sab 7AM-9PM | Dom 8AM-6PM' },
              { icon: Phone, text: '+504 2231-4567' },
              { icon: MapPin, text: 'Col. Palmira, Tegucigalpa' },
            ].map(item => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-2 text-sm" style={{ color: '#FBBF24' }}>
                  <Icon className="w-4 h-4" />
                  <span className="font-light">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10" style={{ backgroundColor: '#FFFBEB' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-[0.3em] font-light mb-8" style={{ color: '#B45309' }}>equipos y marcas que utilizamos</p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {[
              { Logo: LavazzaLogo, name: 'Lavazza' },
              { Logo: HarioLogo, name: 'Hario' },
              { Logo: ChemexLogo, name: 'Chemex' },
              { Logo: AeropressLogo, name: 'Aeropress' },
              { Logo: BaratzaLogo, name: 'Baratza' },
            ].map(brand => (
              <div key={brand.name} className="group flex items-center justify-center">
                <brand.Logo className="h-7 opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-24" style={{ background: 'linear-gradient(to bottom, #FFFBEB, #FEF3C7)' }} />

      <section id="menu" className="py-20 relative" style={{ backgroundColor: '#FEF3C7' }}>
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5" style={{ borderRadius: '40% 60% 50% 50% / 55% 45% 55% 45%', background: 'radial-gradient(circle, #78350F 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-light" style={{ color: '#B45309' }}>Nuestro Menu</span>
            <h2 className="text-4xl sm:text-5xl font-serif mt-3 mb-4" style={{ color: '#1C1917' }}>
              Sabores que <em style={{ color: '#78350F' }}>Enamoran</em>
            </h2>
            <p className="font-light text-lg max-w-xl mx-auto" style={{ color: '#78716C' }}>
              Preparados con ingredientes frescos y el mejor cafe de altura hondureno.
            </p>
          </motion.div>

          <div className="space-y-3">
            {['Todos', ...categoryNames].map((cat) => {
              const isOpen = openAccordion === cat;
              const catItems = cat === 'Todos' ? menuItems : menuItems.filter(item => item.category === cat);
              const catCount = menuCategories.find(c => c.name === cat)?.count || catItems.length;

              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <button
                    onClick={() => handleAccordionToggle(cat)}
                    className="w-full flex items-center justify-between px-6 py-4 transition-all duration-500"
                    style={{
                      backgroundColor: isOpen ? '#78350F' : 'rgba(255,255,255,0.7)',
                      color: isOpen ? '#FEF3C7' : '#78350F',
                      borderRadius: isOpen ? '1.5rem 1.5rem 0 0' : '1.5rem',
                      border: isOpen ? 'none' : '1px solid rgba(120, 53, 15, 0.15)',
                    }}
                  >
                    <span className="font-serif text-lg italic">{cat}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono opacity-70">{catCount} items</span>
                      <ChevronDown
                        className="w-4 h-4 transition-transform duration-500"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="overflow-hidden"
                        style={{ backgroundColor: 'rgba(255,255,255,0.85)', borderRadius: '0 0 1.5rem 1.5rem', border: '1px solid rgba(120, 53, 15, 0.1)', borderTop: 'none' }}
                      >
                        <div className="overflow-x-auto">
                          <div className="flex gap-0 min-w-max">
                            {catItems.map((item, i) => (
                              <div
                                key={item.name}
                                className="flex-shrink-0 px-6 py-5"
                                style={{ width: '320px', borderRight: i < catItems.length - 1 ? '1px solid rgba(120, 53, 15, 0.08)' : 'none' }}
                              >
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                      <h4 className="font-serif text-base" style={{ color: '#1C1917' }}>{item.name}</h4>
                                      {item.popular && (
                                        <Star className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#B45309', fill: '#B45309' }} />
                                      )}
                                    </div>
                                    <p className="text-xs font-light mt-1 leading-relaxed" style={{ color: '#A8A29E' }}>{item.desc}</p>
                                  </div>
                                  <div className="flex items-center gap-2 flex-shrink-0">
                                    <span className="text-xs opacity-30" style={{ color: '#78350F' }}>·····</span>
                                    <span className="font-mono text-sm font-medium" style={{ color: '#78350F' }}>{item.price}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="h-24" style={{ background: 'linear-gradient(to bottom, #FEF3C7, #FFFBEB)' }} />

      <section id="historia" className="relative overflow-hidden" style={{ minHeight: '80vh' }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1400&q=80"
            alt="Cafe de especialidad"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(60, 21, 24, 0.92), rgba(60, 21, 24, 0.7), rgba(60, 21, 24, 0.4))' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="p-8 sm:p-12"
              style={{
                backgroundColor: 'rgba(255, 251, 235, 0.95)',
                borderRadius: '2rem',
                boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
              }}
            >
              <span className="text-xs uppercase tracking-[0.3em] font-light" style={{ color: '#B45309' }}>Nuestra Historia</span>
              <h2 className="text-3xl sm:text-4xl font-serif mt-3 mb-6" style={{ color: '#1C1917' }}>
                Mas que cafe, una <em style={{ color: '#78350F' }}>experiencia</em>
              </h2>
              <p className="font-light leading-relaxed mb-8" style={{ color: '#78716C' }}>
                Trabajamos directamente con productores de Marcala, Copan y Santa Barbara para obtener los mejores granos de altura. Cada lote se tuesta en pequenas cantidades para garantizar frescura y un perfil de sabor unico.
              </p>

              <div className="flex items-start gap-0 mb-10">
                {timelineSteps.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                    className="flex-1 text-center relative"
                  >
                    <div className="text-2xl mb-2">{step.icon}</div>
                    <div className="w-3 h-3 rounded-full mx-auto mb-2" style={{ backgroundColor: '#78350F' }} />
                    {i < timelineSteps.length - 1 && (
                      <div className="absolute top-[3.25rem] left-[calc(50%+6px)] h-px" style={{ width: 'calc(100% - 12px)', backgroundColor: '#D4A574' }} />
                    )}
                    <p className="text-xs font-serif italic" style={{ color: '#78350F' }}>{step.label}</p>
                    <p className="text-[10px] font-light mt-0.5" style={{ color: '#A8A29E' }}>{step.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Coffee, title: 'Granos Seleccionados', desc: 'Directamente de fincas hondurenas' },
                  { icon: Flame, title: 'Tostado Artesanal', desc: 'Pequenos lotes, sabor unico' },
                  { icon: Award, title: 'Ambiente Unico', desc: 'Disenado para inspirar' },
                  { icon: Users, title: 'Baristas Expertos', desc: 'Certificados y apasionados' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-3 items-start">
                      <div className="p-2 flex-shrink-0" style={{ backgroundColor: 'rgba(120, 53, 15, 0.08)', borderRadius: '1rem' }}>
                        <Icon className="w-4 h-4" style={{ color: '#78350F' }} />
                      </div>
                      <div>
                        <h4 className="text-sm font-serif" style={{ color: '#1C1917' }}>{item.title}</h4>
                        <p className="text-xs font-light" style={{ color: '#A8A29E' }}>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="h-24" style={{ background: 'linear-gradient(to bottom, #FFFBEB, #FEF3C7)' }} />

      <section id="galeria" className="py-20 overflow-hidden" style={{ backgroundColor: '#FEF3C7' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] font-light" style={{ color: '#B45309' }}>Galeria</span>
            <h2 className="text-4xl font-serif mt-3" style={{ color: '#1C1917' }}>
              Nuestro <em style={{ color: '#78350F' }}>Espacio</em>
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          <div
            className="flex gap-6"
            style={{
              animation: 'marquee 30s linear infinite',
              width: 'max-content',
            }}
          >
            {[...galleryImages, ...galleryImages, ...galleryImages].map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 overflow-hidden"
                style={{
                  width: '280px',
                  height: '320px',
                  borderRadius: '2rem',
                  boxShadow: '0 8px 30px rgba(120, 53, 15, 0.12)',
                }}
              >
                <img
                  src={img}
                  alt={`Cafe Aroma ${(i % galleryImages.length) + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-280px * 6 - 1.5rem * 6)); }
          }
        `}</style>
      </section>

      <div className="h-24" style={{ background: 'linear-gradient(to bottom, #FEF3C7, #FFFBEB)' }} />

      <section id="reservar" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#FFFBEB' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full opacity-[0.04]" style={{ background: 'radial-gradient(circle, #78350F 0%, transparent 60%)' }} />
        <div className="absolute top-10 left-10 w-32 h-32 opacity-5" style={{ borderRadius: '50% 60% 40% 55% / 55% 45% 60% 40%', backgroundColor: '#B45309' }} />
        <div className="absolute bottom-10 right-10 w-20 h-20 opacity-5" style={{ borderRadius: '45% 55% 60% 40% / 50% 40% 55% 50%', backgroundColor: '#D97706' }} />

        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="p-8 sm:p-10"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '2rem',
              boxShadow: '0 20px 60px rgba(120, 53, 15, 0.12)',
              border: '1px solid rgba(120, 53, 15, 0.08)',
            }}
          >
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-[0.3em] font-light" style={{ color: '#B45309' }}>Reservaciones</span>
              <h2 className="text-3xl font-serif mt-2 mb-2" style={{ color: '#1C1917' }}>
                Reserva tu <em style={{ color: '#78350F' }}>mesa</em>
              </h2>
              <p className="font-light text-sm" style={{ color: '#78716C' }}>
                Te confirmaremos tu reserva por WhatsApp en menos de 1 hora.
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full px-4 py-3.5 outline-none transition-all duration-500 font-light"
                  style={{ backgroundColor: 'rgba(254, 243, 199, 0.5)', border: '1px solid rgba(120, 53, 15, 0.15)', borderRadius: '1rem', color: '#1C1917' }}
                  onFocus={(e) => { e.target.style.borderColor = '#78350F'; e.target.style.boxShadow = '0 0 0 3px rgba(120, 53, 15, 0.1)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(120, 53, 15, 0.15)'; e.target.style.boxShadow = 'none'; }}
                />
                <input
                  type="tel"
                  placeholder="Telefono / WhatsApp"
                  className="w-full px-4 py-3.5 outline-none transition-all duration-500 font-light"
                  style={{ backgroundColor: 'rgba(254, 243, 199, 0.5)', border: '1px solid rgba(120, 53, 15, 0.15)', borderRadius: '1rem', color: '#1C1917' }}
                  onFocus={(e) => { e.target.style.borderColor = '#78350F'; e.target.style.boxShadow = '0 0 0 3px rgba(120, 53, 15, 0.1)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(120, 53, 15, 0.15)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>
              <input
                type="email"
                placeholder="Correo electronico"
                className="w-full px-4 py-3.5 outline-none transition-all duration-500 font-light"
                style={{ backgroundColor: 'rgba(254, 243, 199, 0.5)', border: '1px solid rgba(120, 53, 15, 0.15)', borderRadius: '1rem', color: '#1C1917' }}
                onFocus={(e) => { e.target.style.borderColor = '#78350F'; e.target.style.boxShadow = '0 0 0 3px rgba(120, 53, 15, 0.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(120, 53, 15, 0.15)'; e.target.style.boxShadow = 'none'; }}
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <select
                  className="w-full px-4 py-3.5 outline-none transition-all duration-500 font-light"
                  style={{ backgroundColor: 'rgba(254, 243, 199, 0.5)', border: '1px solid rgba(120, 53, 15, 0.15)', borderRadius: '1rem', color: '#78716C' }}
                  onFocus={(e) => { e.target.style.borderColor = '#78350F'; e.target.style.boxShadow = '0 0 0 3px rgba(120, 53, 15, 0.1)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(120, 53, 15, 0.15)'; e.target.style.boxShadow = 'none'; }}
                >
                  <option>Personas</option>
                  <option>1 persona</option>
                  <option>2 personas</option>
                  <option>3 personas</option>
                  <option>4 personas</option>
                  <option>5 personas</option>
                  <option>6+ personas</option>
                </select>
                <input
                  type="date"
                  className="w-full px-4 py-3.5 outline-none transition-all duration-500 font-light"
                  style={{ backgroundColor: 'rgba(254, 243, 199, 0.5)', border: '1px solid rgba(120, 53, 15, 0.15)', borderRadius: '1rem', color: '#78716C' }}
                  onFocus={(e) => { e.target.style.borderColor = '#78350F'; e.target.style.boxShadow = '0 0 0 3px rgba(120, 53, 15, 0.1)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(120, 53, 15, 0.15)'; e.target.style.boxShadow = 'none'; }}
                />
                <select
                  className="w-full px-4 py-3.5 outline-none transition-all duration-500 font-light"
                  style={{ backgroundColor: 'rgba(254, 243, 199, 0.5)', border: '1px solid rgba(120, 53, 15, 0.15)', borderRadius: '1rem', color: '#78716C' }}
                  onFocus={(e) => { e.target.style.borderColor = '#78350F'; e.target.style.boxShadow = '0 0 0 3px rgba(120, 53, 15, 0.1)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(120, 53, 15, 0.15)'; e.target.style.boxShadow = 'none'; }}
                >
                  <option>Hora</option>
                  <option>7:00 AM</option>
                  <option>8:00 AM</option>
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>1:00 PM</option>
                  <option>2:00 PM</option>
                  <option>3:00 PM</option>
                  <option>4:00 PM</option>
                  <option>5:00 PM</option>
                  <option>6:00 PM</option>
                  <option>7:00 PM</option>
                  <option>8:00 PM</option>
                </select>
              </div>
              <textarea
                placeholder="Mensaje o solicitud especial (opcional)"
                rows={3}
                className="w-full px-4 py-3.5 outline-none transition-all duration-500 font-light resize-none"
                style={{ backgroundColor: 'rgba(254, 243, 199, 0.5)', border: '1px solid rgba(120, 53, 15, 0.15)', borderRadius: '1rem', color: '#1C1917' }}
                onFocus={(e) => { e.target.style.borderColor = '#78350F'; e.target.style.boxShadow = '0 0 0 3px rgba(120, 53, 15, 0.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(120, 53, 15, 0.15)'; e.target.style.boxShadow = 'none'; }}
              />
              <button
                type="submit"
                className="w-full py-4 text-white font-serif italic text-lg transition-all duration-500 hover:shadow-xl"
                style={{ backgroundColor: '#78350F', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(120, 53, 15, 0.3)' }}
              >
                Confirmar Reservacion
              </button>
              <p className="text-center text-xs font-light" style={{ color: '#A8A29E' }}>
                Te confirmaremos por WhatsApp en menos de 1 hora.
              </p>
            </form>

            <div className="mt-8 pt-6 grid grid-cols-2 gap-4" style={{ borderTop: '1px solid rgba(120, 53, 15, 0.08)' }}>
              {[
                { icon: Phone, label: 'Telefono', value: '+504 2231-4567' },
                { icon: WhatsAppIcon, label: 'WhatsApp', value: '+504 9567-1234' },
                { icon: MapPin, label: 'Direccion', value: 'Col. Palmira, Ave. Republica de Chile #234' },
                { icon: Clock, label: 'Horario', value: 'Lun-Sab: 7AM-9PM | Dom: 8AM-6PM' },
              ].map(item => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-2 items-start">
                    <Icon className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#B45309' }} />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider font-light" style={{ color: '#A8A29E' }}>{item.label}</p>
                      <p className="text-xs font-light" style={{ color: '#57534E' }}>{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-10" style={{ backgroundColor: '#3C1518' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="font-serif italic text-lg" style={{ color: '#FBBF24' }}>Cafe Aroma</span>
            <p className="text-xs font-light mt-1" style={{ color: 'rgba(251, 191, 36, 0.5)' }}>
              &copy; 2025 — Todos los derechos reservados
            </p>
          </div>
          <p className="text-sm font-light" style={{ color: 'rgba(251, 191, 36, 0.5)' }}>
            Ejemplo creado por <Link to="/" className="font-medium hover:underline" style={{ color: '#FBBF24' }}>Balam Code</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
