import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Star, Calendar, ArrowRight, ChevronLeft, ChevronRight, Menu, X, Leaf, Heart, Sparkles, Brain } from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

const sage = '#2D5A3D';
const stone = '#D4C5A9';
const cream = '#F5F1EB';
const gold = '#C5A55A';

const services = [
  { name: 'Jacuzzi Premium', price: 'Desde L.500', desc: 'Sumergite en aguas termales con aromaterapia y cromoterapia', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80', size: 'large' },
  { name: 'Sauna Finlandés', price: 'Desde L.400', desc: 'Calor seco purificante con esencias de eucalipto y cedro', image: '/demos/spa-sauna.jpg', size: 'medium' },
  { name: 'Masaje Zen', price: 'Desde L.600', desc: 'Técnicas milenarias de relajación profunda con aceites esenciales', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80', size: 'medium' },
  { name: 'Baño de Vapor', price: 'Desde L.350', desc: 'Vapor herbal que desintoxica y revitaliza cada poro de tu piel', image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80', size: 'small' },
  { name: 'Ritual de Piedras Calientes', price: 'Desde L.800', desc: 'Piedras volcánicas que liberan la tensión muscular profunda', image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80', size: 'small' },
  { name: 'Circuito Spa Completo', price: 'Desde L.1,200', desc: 'La experiencia completa: jacuzzi, sauna, vapor y masaje', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', size: 'small' },
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80', height: 'h-80' },
  { src: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80', height: 'h-64' },
  { src: '/demos/spa-amenities.jpg', height: 'h-72' },
  { src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80', height: 'h-56' },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80', height: 'h-80' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', height: 'h-64' },
];

const benefits = [
  { icon: Leaf, title: 'Alivio del Estrés', desc: 'Técnicas ancestrales que disuelven la tensión acumulada y restauran la calma interior' },
  { icon: Heart, title: 'Recuperación Muscular', desc: 'Calor terapéutico y masajes que regeneran los tejidos y eliminan contracturas' },
  { icon: Sparkles, title: 'Rejuvenecimiento', desc: 'Tratamientos que revitalizan tu piel dejándola radiante y profundamente hidratada' },
  { icon: Brain, title: 'Claridad Mental', desc: 'Espacios de silencio y meditación que reconectan tu mente con la serenidad' },
];

const testimonials = [
  { name: 'Andrea Castillo', text: 'El circuito completo es una experiencia transformadora. Desde el jacuzzi hasta el masaje final, cada momento fue de absoluta paz. Salí renovada por completo.', rating: 5, service: 'Circuito Spa' },
  { name: 'Roberto Méndez', text: 'La sauna finlandesa es excepcional. El aroma de eucalipto, la temperatura perfecta y después el contraste con agua fría. Una experiencia que necesitaba mi cuerpo.', rating: 5, service: 'Sauna' },
  { name: 'Lucía Fernández', text: 'El masaje con piedras calientes fue lo mejor que he probado. Las terapeutas tienen manos mágicas. Es mi escape mensual del estrés y no lo cambio por nada.', rating: 5, service: 'Piedras Calientes' },
];

const memberships = [
  { name: 'Zen', price: 'L.999', period: '/mes', features: ['2 visitas al mes', 'Acceso jacuzzi y sauna', '10% desc. en masajes', 'Toallas y amenidades'], popular: false },
  { name: 'Harmony', price: 'L.1,799', period: '/mes', features: ['4 visitas al mes', 'Circuito completo', '1 masaje gratis', '15% desc. adicionales', 'Bata y sandalias'], popular: true },
  { name: 'Nirvana', price: 'L.2,999', period: '/mes', features: ['Visitas ilimitadas', 'Todos los servicios', 'Masaje semanal', 'Acceso VIP', '1 invitado gratis/mes', 'Casillero personal'], popular: false },
];

const FloatingBlob = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full opacity-20 blur-3xl will-change-transform hidden md:block ${className}`}
    animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay }}
    style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
  />
);

const SectionDivider = () => (
  <div className="flex items-center justify-center py-4">
    <div className="h-px w-16" style={{ background: `linear-gradient(to right, transparent, ${stone})` }} />
    <Leaf className="w-4 h-4 mx-4 opacity-30" style={{ color: sage }} />
    <div className="h-px w-16" style={{ background: `linear-gradient(to left, transparent, ${stone})` }} />
  </div>
);

export default function DemoEstiloSalon() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const nextTestimonial = useCallback(() => {
    setActiveTestimonial(prev => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: cream }}>
      <div className="fixed top-0 left-0 right-0 z-50 text-white text-center py-2.5 text-sm font-light tracking-wide" style={{ background: `linear-gradient(135deg, ${sage}, #3D7A52, #4A8B5E)` }}>
        Esto es un ejemplo creado por <Link to="/" className="underline font-medium hover:opacity-80 transition-opacity">Balam Code</Link> &mdash; <Link to="/" className="underline hover:opacity-80 transition-opacity">Solicita el tuyo</Link>
      </div>

      <motion.nav
        className="sticky top-10 z-40 transition-all duration-500 border-b"
        style={{ borderColor: `${stone}40` }}
        animate={{
          backgroundColor: scrolled ? 'rgba(245, 241, 235, 0.97)' : cream,
          boxShadow: scrolled ? '0 4px 24px rgba(45, 90, 61, 0.08)' : '0 0px 0px rgba(0,0,0,0)',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
        }}
      >
        <div className={`max-w-6xl mx-auto px-6 transition-all duration-500 ${scrolled ? 'py-2.5' : 'py-4'}`}>
          <div className="flex items-center justify-between">
            <motion.a href="#" animate={{ scale: scrolled ? 0.9 : 1 }} transition={{ duration: 0.4 }}>
              <img src="/demos/aura-zen.png" alt="Aura Zen" className={`w-auto transition-all duration-500 ${scrolled ? 'h-9' : 'h-11'}`} />
            </motion.a>
            <div className="hidden md:flex items-center gap-8">
              {['experiencias', 'galería', 'bienestar', 'testimonios'].map(item => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-sm font-light tracking-[0.12em] transition-colors duration-300 hover:opacity-100 opacity-70"
                  style={{ color: sage }}
                >
                  {item}
                </a>
              ))}
              <a
                href="#reservar"
                className="text-sm font-medium tracking-wider px-5 py-2 rounded-full text-white transition-all duration-300 hover:brightness-110"
                style={{ backgroundColor: sage }}
              >
                Reservar
              </a>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu" aria-expanded={mobileMenuOpen} className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" style={{ color: sage }}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="flex flex-col items-center gap-4 py-5 border-t mt-3" style={{ borderColor: `${stone}60` }}>
                  {['experiencias', 'galería', 'bienestar', 'testimonios', 'reservar'].map(item => (
                    <a
                      key={item}
                      href={`#${item}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-light tracking-[0.12em]"
                      style={{ color: sage }}
                    >
                      {item}
                    </a>
                  ))}
                  <a href="https://wa.me/50422567890" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-sm font-medium tracking-wider px-5 py-2 rounded-full text-white" style={{ backgroundColor: sage }}>
                    <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/demos/spa-amenities.jpg" alt="Spa atmosphere" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-sm tracking-[0.3em] font-light mb-8 text-white/70"
          >
            spa &middot; jacuzzi &middot; sauna
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6"
          >
            Tu Santuario de{' '}
            <span className="italic" style={{ color: gold }}>Paz</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Desconectate del estrés y encontrá tu equilibrio interior. Un espacio diseñado para renovar tu cuerpo, calmar tu mente y despertar tus sentidos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#reservar"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-light tracking-wider rounded-full transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
              style={{ backgroundColor: sage, boxShadow: `0 8px 30px rgba(45, 90, 61, 0.4)` }}
            >
              <Calendar className="w-4 h-4" />
              Reservar Experiencia
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
            </a>
            <a
              href="https://wa.me/50422567890"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 font-light tracking-wider rounded-full transition-all duration-500 hover:scale-[1.02] border border-white/30 text-white hover:bg-white/10"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            className="flex justify-center gap-8 sm:gap-12"
          >
            {[
              { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80', label: 'Jacuzzi' },
              { src: '/demos/spa-sauna.jpg', label: 'Sauna' },
              { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80', label: 'Masaje' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 + i * 0.1, ease: 'easeOut' }}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-2 ring-white/20">
                  <img src={item.src} alt={item.label} loading="lazy" width={96} height={96} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs tracking-wider text-white/50 font-light">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center gap-12 mt-14"
          >
            {[
              { value: '12+', label: 'años' },
              { value: '20,000+', label: 'visitantes' },
              { value: '4.9', label: 'calificación' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-serif text-white">{s.value}</p>
                <p className="text-xs tracking-wider text-white/40 font-light">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section id="experiencias" className="py-20" style={{ backgroundColor: cream }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-sm tracking-[0.25em] font-light mb-3"
              style={{ color: sage }}
            >
              nuestras experiencias
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl text-slate-800"
            >
              Experiencias <span className="italic" style={{ color: gold }}>Sensoriales</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-500 font-light mt-4 max-w-lg mx-auto leading-relaxed"
            >
              Cada experiencia está diseñada para llevar tu cuerpo y mente a un estado de armonía total.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[200px] sm:auto-rows-[180px] md:auto-rows-[200px]">
            {services.map((svc, i) => {
              const spanClass = svc.size === 'large'
                ? 'col-span-1 sm:col-span-2 row-span-1 sm:row-span-2'
                : svc.size === 'medium'
                  ? 'col-span-1 sm:col-span-2 row-span-1 md:col-span-1 md:row-span-2'
                  : 'col-span-1 row-span-1';

              return (
                <motion.div
                  key={svc.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: 'easeOut' }}
                  className={`group relative overflow-hidden cursor-pointer ${spanClass}`}
                  style={{ borderRadius: '2rem' }}
                >
                  <img src={svc.image} alt={svc.name} loading="lazy" width={600} height={400} className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                    <h3 className="font-serif text-white text-lg mb-1">{svc.name}</h3>
                    <p className="text-white/70 text-sm font-light">{svc.desc}</p>
                    <p className="text-sm font-light mt-2" style={{ color: stone }}>{svc.price}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-sm font-light rounded-full" style={{ color: sage }}>
                      {svc.price}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="galería" className="py-20" style={{ backgroundColor: '#FAFAF7' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-sm tracking-[0.25em] font-light mb-3"
              style={{ color: sage }}
            >
              nuestro espacio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl text-slate-800"
            >
              Galería de <span className="italic" style={{ color: gold }}>Serenidad</span>
            </motion.h2>
          </div>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: 'easeOut' }}
                className={`group relative overflow-hidden break-inside-avoid ${img.height}`}
                style={{ borderRadius: '1.5rem' }}
              >
                <img src={img.src} alt={`Spa ${i + 1}`} loading="lazy" width={600} height={450} className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]" />
                <div className="absolute inset-0 transition-colors duration-700" style={{ backgroundColor: 'rgba(45, 90, 61, 0)' }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(45, 90, 61, 0.15)'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(45, 90, 61, 0)'}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="bienestar" className="py-20 relative overflow-hidden" style={{ backgroundColor: sage }}>
        <FloatingBlob className="w-96 h-96 bg-emerald-300 -top-20 -left-32" />
        <FloatingBlob className="w-80 h-80 bg-green-200 top-40 -right-20" delay={2} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-sm tracking-[0.25em] font-light mb-3 text-white/60"
            >
              bienestar integral
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl text-white"
            >
              Bienestar <span className="italic" style={{ color: gold }}>Integral</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/60 font-light mt-4 max-w-lg mx-auto leading-relaxed"
            >
              Cada tratamiento está pensado para nutrir tu cuerpo, restaurar tu energía y renovar tu espíritu.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                  className="rounded-3xl p-8 text-center"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)' }}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}>
                    <Icon className="w-6 h-6" style={{ color: gold }} />
                  </div>
                  <h3 className="font-serif text-lg text-white mb-3">{b.title}</h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="testimonios" className="py-20" style={{ backgroundColor: cream }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-sm tracking-[0.25em] font-light mb-3"
              style={{ color: sage }}
            >
              testimonios
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl text-slate-800"
            >
              Lo que dicen nuestros <span className="italic" style={{ color: gold }}>visitantes</span>
            </motion.h2>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-8 sm:p-12 relative overflow-hidden" style={{ backgroundColor: '#EDE8E0' }}>
              <FloatingBlob className="w-40 h-40 bg-emerald-200 -top-10 -right-10" delay={1} />

              <div className="relative z-10">
                <span className="font-serif text-7xl sm:text-8xl leading-none block mb-4" style={{ color: `${sage}20` }}>
                  &ldquo;
                </span>

                <div className="min-h-[160px] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                      <p className="font-serif text-xl sm:text-2xl text-slate-700 leading-relaxed italic mb-8">
                        {testimonials[activeTestimonial].text}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex gap-0.5">
                          {[...Array(testimonials[activeTestimonial].rating)].map((_, j) => (
                            <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="w-px h-4 bg-slate-300" />
                        <p className="font-serif text-slate-800">{testimonials[activeTestimonial].name}</p>
                        <span className="text-slate-400 font-light text-sm">&mdash; {testimonials[activeTestimonial].service}</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      className="w-2 h-2 rounded-full transition-all duration-500"
                      style={{ backgroundColor: activeTestimonial === i ? sage : `${sage}30` }}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    aria-label="Testimonio anterior"
                    className="w-11 h-11 rounded-full flex items-center justify-center border transition-colors duration-300 hover:bg-white"
                    style={{ borderColor: `${sage}30`, color: sage }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    aria-label="Siguiente testimonio"
                    className="w-11 h-11 rounded-full flex items-center justify-center border transition-colors duration-300 hover:bg-white"
                    style={{ borderColor: `${sage}30`, color: sage }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20" style={{ backgroundColor: '#FAFAF7' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-sm tracking-[0.25em] font-light mb-3"
              style={{ color: sage }}
            >
              membresías
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl text-slate-800"
            >
              Membresías <span className="italic" style={{ color: gold }}>Exclusivas</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-500 font-light mt-4 max-w-lg mx-auto leading-relaxed"
            >
              Convertí el bienestar en un hábito. Elegí el plan que mejor se adapte a tu estilo de vida.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {memberships.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                className={`relative rounded-3xl p-8 ${plan.popular ? 'ring-2' : 'border'}`}
                style={{
                  backgroundColor: plan.popular ? sage : 'white',
                  borderColor: plan.popular ? gold : `${stone}60`,
                  boxShadow: plan.popular ? `0 0 0 2px ${gold}` : undefined,
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-light tracking-wider text-white" style={{ backgroundColor: gold }}>
                    Más Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className={`font-serif text-2xl mb-2 ${plan.popular ? 'text-white' : 'text-slate-800'}`}>{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`font-serif text-4xl ${plan.popular ? 'text-white' : 'text-slate-800'}`}>{plan.price}</span>
                    <span className={`text-sm font-light ${plan.popular ? 'text-white/60' : 'text-slate-400'}`}>{plan.period}</span>
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-center gap-3">
                      <Leaf className="w-4 h-4 flex-shrink-0" style={{ color: plan.popular ? gold : sage }} />
                      <span className={`text-sm font-light ${plan.popular ? 'text-white/80' : 'text-slate-600'}`}>{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#reservar"
                  className={`block w-full py-3.5 rounded-full text-center text-sm font-light tracking-wider transition-all duration-500 hover:scale-[1.02] ${plan.popular ? 'text-slate-800' : 'text-white'}`}
                  style={{ backgroundColor: plan.popular ? gold : sage }}
                >
                  Elegir {plan.name}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1600&q=80" alt="Spa ambiance" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(45, 90, 61, 0.85), rgba(30, 60, 40, 0.9))` }} />
        </div>

        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl text-white mb-6"
          >
            Reserva tu escape <span className="italic" style={{ color: gold }}>hoy</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white/70 font-light text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Regalate un momento de paz absoluta. Tu cuerpo y tu mente te lo van a agradecer.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#reservar"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 text-white font-light tracking-wider rounded-full transition-all duration-500 hover:scale-[1.02]"
              style={{ backgroundColor: gold, boxShadow: `0 8px 30px rgba(197, 165, 90, 0.3)` }}
            >
              <Calendar className="w-4 h-4" />
              Reservar Experiencia
            </a>
            <a
              href="https://wa.me/50422567890"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 font-light tracking-wider rounded-full transition-all duration-500 hover:scale-[1.02] border border-white/30 text-white hover:bg-white/10"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section id="reservar" className="py-20" style={{ backgroundColor: cream }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-sm tracking-[0.25em] font-light mb-3"
              style={{ color: sage }}
            >
              reservaciones
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl text-slate-800"
            >
              Reserva tu <span className="italic" style={{ color: gold }}>experiencia</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-8 mb-14"
          >
            {[
              { icon: Phone, value: '+504 2256-7890', href: 'tel:+50422567890' },
              { icon: WhatsAppIcon, value: '+504 9812-3456', href: 'https://wa.me/50498123456' },
              { icon: Clock, value: 'Lun-Sáb 8AM-8PM', href: undefined },
              { icon: MapPin, value: 'Col. Lomas del Guijarro', href: undefined },
            ].map(item => {
              const Icon = item.icon;
              const inner = (
                <div className="flex items-center gap-2 text-sm text-slate-500 font-light">
                  <Icon className="w-4 h-4" style={{ color: sage }} />
                  <span>{item.value}</span>
                </div>
              );
              return item.href ? (
                <a key={item.value} href={item.href} className="hover:opacity-70 transition-opacity">{inner}</a>
              ) : (
                <div key={item.value}>{inner}</div>
              );
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs tracking-wider text-slate-400 font-light mb-2 block">nombre completo</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full py-3 bg-transparent border-0 border-b text-slate-700 font-light placeholder:text-slate-300 focus:outline-none transition-colors duration-500"
                  style={{ borderColor: `${sage}30` }}
                  onFocus={(e) => e.target.style.borderColor = sage}
                  onBlur={(e) => e.target.style.borderColor = `${sage}30`}
                />
              </div>
              <div>
                <label className="text-xs tracking-wider text-slate-400 font-light mb-2 block">teléfono / whatsapp</label>
                <input
                  type="tel"
                  placeholder="+504 0000-0000"
                  className="w-full py-3 bg-transparent border-0 border-b text-slate-700 font-light placeholder:text-slate-300 focus:outline-none transition-colors duration-500"
                  style={{ borderColor: `${sage}30` }}
                  onFocus={(e) => e.target.style.borderColor = sage}
                  onBlur={(e) => e.target.style.borderColor = `${sage}30`}
                />
              </div>
            </div>

            <div>
              <label className="text-xs tracking-wider text-slate-400 font-light mb-2 block">correo electrónico</label>
              <input
                type="email"
                placeholder="tu@correo.com"
                className="w-full py-3 bg-transparent border-0 border-b text-slate-700 font-light placeholder:text-slate-300 focus:outline-none transition-colors duration-500"
                style={{ borderColor: `${sage}30` }}
                onFocus={(e) => e.target.style.borderColor = sage}
                onBlur={(e) => e.target.style.borderColor = `${sage}30`}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs tracking-wider text-slate-400 font-light mb-2 block">experiencia</label>
                <select
                  className="w-full py-3 bg-transparent border-0 border-b text-slate-500 font-light focus:outline-none transition-colors duration-500 appearance-none cursor-pointer"
                  style={{ borderColor: `${sage}30` }}
                  onFocus={(e) => e.target.style.borderColor = sage}
                  onBlur={(e) => e.target.style.borderColor = `${sage}30`}
                >
                  <option>Seleccionar experiencia</option>
                  <option>Jacuzzi Premium</option>
                  <option>Sauna Finlandés</option>
                  <option>Masaje Zen</option>
                  <option>Baño de Vapor</option>
                  <option>Ritual de Piedras Calientes</option>
                  <option>Circuito Spa Completo</option>
                </select>
              </div>
              <div>
                <label className="text-xs tracking-wider text-slate-400 font-light mb-2 block">fecha preferida</label>
                <input
                  type="date"
                  className="w-full py-3 bg-transparent border-0 border-b text-slate-500 font-light focus:outline-none transition-colors duration-500"
                  style={{ borderColor: `${sage}30` }}
                  onFocus={(e) => e.target.style.borderColor = sage}
                  onBlur={(e) => e.target.style.borderColor = `${sage}30`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="text-xs tracking-wider text-slate-400 font-light mb-2 block">hora preferida</label>
                <select
                  className="w-full py-3 bg-transparent border-0 border-b text-slate-500 font-light focus:outline-none transition-colors duration-500 appearance-none cursor-pointer"
                  style={{ borderColor: `${sage}30` }}
                  onFocus={(e) => e.target.style.borderColor = sage}
                  onBlur={(e) => e.target.style.borderColor = `${sage}30`}
                >
                  <option>Hora</option>
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
                </select>
              </div>
              <div>
                <label className="text-xs tracking-wider text-slate-400 font-light mb-2 block">personas</label>
                <select
                  className="w-full py-3 bg-transparent border-0 border-b text-slate-500 font-light focus:outline-none transition-colors duration-500 appearance-none cursor-pointer"
                  style={{ borderColor: `${sage}30` }}
                  onFocus={(e) => e.target.style.borderColor = sage}
                  onBlur={(e) => e.target.style.borderColor = `${sage}30`}
                >
                  <option>Personas</option>
                  <option>1 persona</option>
                  <option>2 personas</option>
                  <option>3 personas</option>
                  <option>4 personas</option>
                  <option>5 personas</option>
                  <option>6 personas</option>
                </select>
              </div>
              <div>
                <label className="text-xs tracking-wider text-slate-400 font-light mb-2 block">notas adicionales</label>
                <input
                  type="text"
                  placeholder="Opcional"
                  className="w-full py-3 bg-transparent border-0 border-b text-slate-700 font-light placeholder:text-slate-300 focus:outline-none transition-colors duration-500"
                  style={{ borderColor: `${sage}30` }}
                  onFocus={(e) => e.target.style.borderColor = sage}
                  onBlur={(e) => e.target.style.borderColor = `${sage}30`}
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 text-white font-light tracking-wider rounded-full transition-all duration-500 hover:scale-[1.01]"
                style={{ backgroundColor: sage, boxShadow: `0 8px 30px rgba(45, 90, 61, 0.3)` }}
              >
                Reservar Mi Experiencia
              </button>
              <p className="text-center text-slate-400 text-xs font-light mt-4 tracking-wide">
                Te confirmaremos tu reserva por WhatsApp en menos de 1 hora.
              </p>
            </div>
          </motion.form>
        </div>
      </section>

      <footer className="py-12" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-4">
          <img src="/demos/aura-zen.png" alt="Aura Zen" className="h-12 w-auto opacity-70" />
          <div className="flex items-center gap-6 text-sm font-light text-slate-500">
            <span>Col. Lomas del Guijarro, Blvd. Morazán, Tegucigalpa</span>
          </div>
          <div className="w-16 h-px bg-slate-800 my-2" />
          <p className="text-sm font-light text-slate-500">&copy; 2025 Aura Zen Spa</p>
          <p className="text-xs font-light text-slate-600">
            Ejemplo creado por <Link to="/" className="hover:underline font-medium" style={{ color: stone }}>Balam Code</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
