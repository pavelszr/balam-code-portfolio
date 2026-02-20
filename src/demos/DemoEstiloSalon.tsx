import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Star, Calendar, ArrowRight, Scissors, ChevronLeft, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';
import { LorealLogo, SchwarzkopfLogo, WellaLogo, OPILogo, MoroccanoilLogo } from '../components/BrandLogos';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

const services = [
  { name: 'Corte y Estilo', price: 'Desde L.350', desc: 'Cortes modernos y cl\u00e1sicos con estilistas de primer nivel', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80', size: 'large' },
  { name: 'Coloraci\u00f3n', price: 'Desde L.800', desc: 'Tintes, mechas, balayage y t\u00e9cnicas de color personalizadas', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80', size: 'medium' },
  { name: 'Manicure & Pedicure', price: 'Desde L.400', desc: 'U\u00f1as perfectas con esmalte semipermanente y dise\u00f1os', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80', size: 'medium' },
  { name: 'Tratamientos Capilares', price: 'Desde L.600', desc: 'Keratina, botox capilar y restauraci\u00f3n profunda', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=80', size: 'small' },
  { name: 'Maquillaje Profesional', price: 'Desde L.500', desc: 'Maquillaje para eventos, bodas y sesiones fotogr\u00e1ficas', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80', size: 'small' },
  { name: 'Spa & Masajes', price: 'Desde L.700', desc: 'Masajes relajantes, faciales y tratamientos corporales', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80', size: 'small' },
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1521590832167-7228fcb2c45e?w=600&q=80', height: 'h-80' },
  { src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80', height: 'h-64' },
  { src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&q=80', height: 'h-72' },
  { src: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=400&q=80', height: 'h-56' },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80', height: 'h-80' },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80', height: 'h-64' },
];

const team = [
  { name: 'Carolina Mej\u00eda', specialty: 'Coloraci\u00f3n & Balayage', years: 10, initials: 'CM', bio: 'Especialista en t\u00e9cnicas de color con formaci\u00f3n en Par\u00eds. Transforma cada cabello en una obra de arte.' },
  { name: 'Daniela Reyes', specialty: 'Corte & Estilo', years: 8, initials: 'DR', bio: 'Maestra del corte con visi\u00f3n vanguardista. Cada estilo es personalizado para realzar tu belleza \u00fanica.' },
  { name: 'Sof\u00eda Hern\u00e1ndez', specialty: 'Maquillaje & U\u00f1as', years: 6, initials: 'SH', bio: 'Artista del maquillaje profesional y nail art. Perfeccionista en cada detalle.' },
  { name: 'Valentina Cruz', specialty: 'Spa & Tratamientos', years: 7, initials: 'VC', bio: 'Terapeuta certificada con t\u00e9cnicas de relajaci\u00f3n que renuevan cuerpo y esp\u00edritu.' },
];

const testimonials = [
  { name: 'Gabriela Pineda', text: 'El mejor sal\u00f3n de Tegucigalpa. Carolina me hizo un balayage incre\u00edble y el ambiente es s\u00faper relajante. Siempre salgo encantada.', rating: 5, service: 'Coloraci\u00f3n' },
  { name: 'Melissa Rodr\u00edguez', text: 'Me prepararon para mi boda y qued\u00e9 perfecta. Maquillaje, peinado y u\u00f1as, todo impecable. Las recomiendo al 100%.', rating: 5, service: 'Maquillaje' },
  { name: 'Patricia \u00c1vila', text: 'Los masajes de spa son lo m\u00e1ximo. Despu\u00e9s de una semana de trabajo, este lugar te renueva completamente. Atenci\u00f3n de primera.', rating: 5, service: 'Spa & Masajes' },
];

const WaveDivider = ({ flip = false, color = '#fff7f7' }: { flip?: boolean; color?: string }) => (
  <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`}>
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-16 md:h-24">
      <path d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,20 1440,40 L1440,100 L0,100 Z" fill={color} />
    </svg>
  </div>
);

const WaveDivider2 = ({ color = '#fff7f7' }: { color?: string }) => (
  <div className="w-full overflow-hidden leading-[0]">
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-20">
      <path d="M0,60 C240,20 480,80 720,40 C960,0 1200,60 1440,30 L1440,80 L0,80 Z" fill={color} />
    </svg>
  </div>
);

const WaveDivider3 = ({ color = '#fff7f7' }: { color?: string }) => (
  <div className="w-full overflow-hidden leading-[0]">
    <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-14 md:h-22">
      <path d="M0,30 C180,80 360,10 540,50 C720,90 900,20 1080,60 C1260,100 1380,30 1440,50 L1440,90 L0,90 Z" fill={color} />
    </svg>
  </div>
);

const FloatingBlob = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full opacity-30 blur-3xl ${className}`}
    animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay }}
    style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
  />
);

const roseGold = '#B76E79';
const roseGoldLight = '#D4A0A7';

export default function DemoEstiloSalon() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);

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
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#FFFBFB' }}>
      <div className="fixed top-0 left-0 right-0 z-50 text-white text-center py-2.5 text-sm font-light tracking-wide" style={{ background: `linear-gradient(135deg, ${roseGold}, #E8B4B8, ${roseGoldLight})` }}>
        Esto es un ejemplo creado por <Link to="/" className="underline font-medium hover:opacity-80 transition-opacity">Balam Code</Link> &mdash; <Link to="/" className="underline hover:opacity-80 transition-opacity">Solicita el tuyo</Link>
      </div>

      <motion.nav
        className="sticky top-10 z-40 transition-all duration-700"
        animate={{
          backgroundColor: scrolled ? 'rgba(255, 251, 251, 0.97)' : 'rgba(255, 251, 251, 0)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          boxShadow: scrolled ? '0 1px 20px rgba(183, 110, 121, 0.08)' : '0 0px 0px rgba(0,0,0,0)',
        }}
      >
        <div className={`max-w-5xl mx-auto px-4 transition-all duration-700 ${scrolled ? 'py-3' : 'py-6'}`}>
          <div className="flex flex-col items-center gap-3">
            <motion.div animate={{ scale: scrolled ? 0.85 : 1 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
              <Link to="/" className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${roseGold}, ${roseGoldLight})` }}>
                  <Scissors className="w-4 h-4 text-white" />
                </div>
                <span className="font-serif text-2xl tracking-widest text-slate-800" style={{ fontStyle: 'italic' }}>
                  Estilo <span style={{ color: roseGold }}>Sal&oacute;n</span> & Spa
                </span>
              </Link>
            </motion.div>
            <motion.div
              className="hidden md:flex items-center gap-10"
              animate={{ opacity: scrolled ? 0.9 : 1, gap: scrolled ? '2rem' : '2.5rem' }}
              transition={{ duration: 0.5 }}
            >
              {['servicios', 'galer\u00eda', 'equipo', 'testimonios', 'contacto'].map(item => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-sm font-light tracking-wider text-slate-500 hover:text-slate-800 transition-colors duration-500"
                  style={{ textTransform: 'lowercase' }}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.nav>

      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <FloatingBlob className="w-96 h-96 bg-rose-200 -top-20 -left-32" />
        <FloatingBlob className="w-80 h-80 bg-pink-200 top-40 -right-20" delay={2} />
        <FloatingBlob className="w-64 h-64 bg-purple-100 bottom-10 left-1/4" delay={4} />

        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #B76E79 0.5px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-sm tracking-[0.3em] font-light mb-8"
            style={{ color: roseGold }}
          >
            tegucigalpa, honduras
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl text-slate-800 leading-tight mb-6"
          >
            Tu belleza, nuestra{' '}
            <span className="italic" style={{ color: roseGold }}>pasi&oacute;n</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="text-lg sm:text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto mb-12"
          >
            El sal&oacute;n de belleza y spa m&aacute;s exclusivo de Honduras. Estilistas de primer nivel, productos premium y un ambiente dise&ntilde;ado para consentirte.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-light tracking-wider rounded-full transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
              style={{ background: `linear-gradient(135deg, ${roseGold}, #C4868F)`, boxShadow: `0 8px 30px ${roseGold}40` }}
            >
              <Calendar className="w-4 h-4" />
              Reservar Cita
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
            </a>
            <a
              href="https://wa.me/50422567890"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 font-light tracking-wider rounded-full transition-all duration-500 hover:scale-[1.02] border"
              style={{ color: roseGold, borderColor: `${roseGold}40` }}
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
              { src: services[0].image, label: 'Corte' },
              { src: services[1].image, label: 'Color' },
              { src: services[5].image, label: 'Spa' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 + i * 0.1, ease: 'easeOut' }}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-lg" style={{ boxShadow: `0 4px 20px ${roseGold}30` }}>
                  <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs tracking-wider text-slate-400 font-light">{item.label}</span>
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
              { value: '8+', label: 'a\u00f1os' },
              { value: '15,000+', label: 'clientas' },
              { value: '4.9', label: 'calificaci\u00f3n' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-serif text-slate-700">{s.value}</p>
                <p className="text-xs tracking-wider text-slate-400 font-light">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-12" style={{ backgroundColor: '#FFFBFB' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center text-sm font-light tracking-[0.25em] mb-8" style={{ color: roseGold }}>productos premium que utilizamos</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[
              { Logo: LorealLogo, name: "L'Oréal" },
              { Logo: SchwarzkopfLogo, name: 'Schwarzkopf' },
              { Logo: WellaLogo, name: 'Wella' },
              { Logo: OPILogo, name: 'OPI' },
              { Logo: MoroccanoilLogo, name: 'Moroccanoil' },
            ].map(brand => (
              <div key={brand.name} className="group flex items-center justify-center">
                <brand.Logo className="h-8 opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="#FFF1F2" />

      <section id="servicios" className="py-20 bg-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-sm tracking-[0.25em] font-light mb-3"
              style={{ color: roseGold }}
            >
              nuestros servicios
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl text-slate-800"
            >
              Servicios de <span className="italic" style={{ color: roseGold }}>Belleza</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-500 font-light mt-4 max-w-lg mx-auto leading-relaxed"
            >
              Tratamientos personalizados con productos de alta gama para resaltar tu belleza natural.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[180px] md:auto-rows-[200px]">
            {services.map((svc, i) => {
              const spanClass = svc.size === 'large'
                ? 'col-span-2 row-span-2'
                : svc.size === 'medium'
                  ? 'col-span-2 row-span-1 md:col-span-1 md:row-span-2'
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
                  <img src={svc.image} alt={svc.name} className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                    <h3 className="font-serif text-white text-lg mb-1">{svc.name}</h3>
                    <p className="text-white/70 text-sm font-light">{svc.desc}</p>
                    <p className="text-sm font-light mt-2" style={{ color: roseGoldLight }}>{svc.price}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-sm font-light rounded-full" style={{ color: roseGold }}>
                      {svc.price}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <WaveDivider2 color="#FFFBFB" />

      <section id="galer&iacute;a" className="py-20" style={{ backgroundColor: '#FFFBFB' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-sm tracking-[0.25em] font-light mb-3"
              style={{ color: roseGold }}
            >
              nuestro trabajo
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl text-slate-800"
            >
              Galer&iacute;a de <span className="italic" style={{ color: roseGold }}>Estilos</span>
            </motion.h2>
          </div>

          <div className="columns-2 md:columns-3 gap-4 space-y-4" id="galeria">
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
                <img src={img.src} alt={`Estilo ${i + 1}`} className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-rose-400/0 group-hover:bg-rose-400/15 transition-colors duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider3 color="#FFF1F2" />

      <section id="equipo" className="py-20 bg-rose-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-sm tracking-[0.25em] font-light mb-3"
              style={{ color: roseGold }}
            >
              nuestro equipo
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl text-slate-800"
            >
              Estilistas <span className="italic" style={{ color: roseGold }}>Profesionales</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-500 font-light mt-4 max-w-lg mx-auto leading-relaxed"
            >
              Un equipo apasionado por la belleza con formaci&oacute;n internacional y a&ntilde;os de experiencia.
            </motion.p>
          </div>

          <div className="space-y-16">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                className={`flex flex-col items-center gap-8 md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-shrink-0">
                  <div
                    className="w-32 h-44 sm:w-36 sm:h-52 flex items-center justify-center"
                    style={{
                      borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%',
                      background: `linear-gradient(135deg, ${roseGold}20, ${roseGoldLight}40)`,
                      border: `2px solid ${roseGold}30`,
                    }}
                  >
                    <span className="font-serif text-4xl sm:text-5xl italic" style={{ color: roseGold }}>
                      {member.initials}
                    </span>
                  </div>
                </div>
                <div className={`text-center md:text-left ${i % 2 !== 0 ? 'md:text-right' : ''} flex-1`}>
                  <h3 className="font-serif text-2xl text-slate-800 mb-1">{member.name}</h3>
                  <p className="text-sm tracking-wider font-light mb-3" style={{ color: roseGold }}>{member.specialty}</p>
                  <p className="text-slate-500 font-light leading-relaxed max-w-md">{member.bio}</p>
                  <p className="text-slate-400 text-sm font-light mt-3">{member.years} a&ntilde;os de experiencia</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="#FFFBFB" />

      <section id="testimonios" className="py-20" style={{ backgroundColor: '#FFFBFB' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-sm tracking-[0.25em] font-light mb-3"
              style={{ color: roseGold }}
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
              Lo que dicen nuestras <span className="italic" style={{ color: roseGold }}>clientas</span>
            </motion.h2>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-8 sm:p-12 relative overflow-hidden" style={{ backgroundColor: '#FFF1F2' }}>
              <FloatingBlob className="w-40 h-40 bg-rose-200 -top-10 -right-10" delay={1} />

              <div className="relative z-10">
                <span className="font-serif text-7xl sm:text-8xl leading-none block mb-4" style={{ color: `${roseGold}30` }}>
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
                      style={{ backgroundColor: activeTestimonial === i ? roseGold : `${roseGold}30` }}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300 hover:bg-white"
                    style={{ borderColor: `${roseGold}30`, color: roseGold }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300 hover:bg-white"
                    style={{ borderColor: `${roseGold}30`, color: roseGold }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider2 color="#FFF1F2" />

      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#FFF1F2' }}>
        <motion.div
          className="absolute w-72 h-72 opacity-20 blur-3xl bg-purple-200 -top-20 -left-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
        />
        <motion.div
          className="absolute w-96 h-96 opacity-20 blur-3xl bg-rose-300 -bottom-20 -right-20"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
        />
        <motion.div
          className="absolute w-48 h-48 opacity-15 blur-3xl bg-pink-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ borderRadius: '50% 50% 30% 70% / 50% 70% 30% 50%' }}
        />

        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl text-slate-800 mb-6"
          >
            Agenda tu cita <span className="italic" style={{ color: roseGold }}>hoy</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-slate-500 font-light text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Date el regalo de verte y sentirte incre&iacute;ble. Reserva tu espacio y d&eacute;janos consentirte.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 text-white font-light tracking-wider rounded-full transition-all duration-500 hover:scale-[1.02]"
              style={{ background: `linear-gradient(135deg, ${roseGold}, #C4868F)`, boxShadow: `0 8px 30px ${roseGold}40` }}
            >
              <Calendar className="w-4 h-4" />
              Reservar Cita
            </a>
            <a
              href="https://wa.me/50422567890"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white/80 backdrop-blur-sm font-light tracking-wider rounded-full transition-all duration-500 hover:scale-[1.02] hover:bg-white"
              style={{ color: roseGold }}
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      <WaveDivider3 color="#FFFBFB" />

      <section id="contacto" className="py-20" style={{ backgroundColor: '#FFFBFB' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-sm tracking-[0.25em] font-light mb-3"
              style={{ color: roseGold }}
            >
              contacto
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl text-slate-800"
            >
              Reserva tu <span className="italic" style={{ color: roseGold }}>cita</span>
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
              { icon: Clock, value: 'Lun-S\u00e1b 9AM-7PM', href: undefined },
              { icon: MapPin, value: 'Col. Lomas del Guijarro', href: undefined },
            ].map(item => {
              const Icon = item.icon;
              const inner = (
                <div className="flex items-center gap-2 text-sm text-slate-500 font-light">
                  <Icon className="w-4 h-4" style={{ color: roseGold }} />
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
                  style={{ borderColor: `${roseGold}30`, focusBorderColor: roseGold } as any}
                  onFocus={(e) => e.target.style.borderColor = roseGold}
                  onBlur={(e) => e.target.style.borderColor = `${roseGold}30`}
                />
              </div>
              <div>
                <label className="text-xs tracking-wider text-slate-400 font-light mb-2 block">tel&eacute;fono / whatsapp</label>
                <input
                  type="tel"
                  placeholder="+504 0000-0000"
                  className="w-full py-3 bg-transparent border-0 border-b text-slate-700 font-light placeholder:text-slate-300 focus:outline-none transition-colors duration-500"
                  style={{ borderColor: `${roseGold}30` }}
                  onFocus={(e) => e.target.style.borderColor = roseGold}
                  onBlur={(e) => e.target.style.borderColor = `${roseGold}30`}
                />
              </div>
            </div>

            <div>
              <label className="text-xs tracking-wider text-slate-400 font-light mb-2 block">correo electr&oacute;nico</label>
              <input
                type="email"
                placeholder="tu@correo.com"
                className="w-full py-3 bg-transparent border-0 border-b text-slate-700 font-light placeholder:text-slate-300 focus:outline-none transition-colors duration-500"
                style={{ borderColor: `${roseGold}30` }}
                onFocus={(e) => e.target.style.borderColor = roseGold}
                onBlur={(e) => e.target.style.borderColor = `${roseGold}30`}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs tracking-wider text-slate-400 font-light mb-2 block">servicio</label>
                <select
                  className="w-full py-3 bg-transparent border-0 border-b text-slate-500 font-light focus:outline-none transition-colors duration-500 appearance-none cursor-pointer"
                  style={{ borderColor: `${roseGold}30` }}
                  onFocus={(e) => e.target.style.borderColor = roseGold}
                  onBlur={(e) => e.target.style.borderColor = `${roseGold}30`}
                >
                  <option>Seleccionar servicio</option>
                  <option>Corte y Estilo</option>
                  <option>Coloraci&oacute;n</option>
                  <option>Manicure & Pedicure</option>
                  <option>Tratamientos Capilares</option>
                  <option>Maquillaje Profesional</option>
                  <option>Spa & Masajes</option>
                </select>
              </div>
              <div>
                <label className="text-xs tracking-wider text-slate-400 font-light mb-2 block">fecha preferida</label>
                <input
                  type="date"
                  className="w-full py-3 bg-transparent border-0 border-b text-slate-500 font-light focus:outline-none transition-colors duration-500"
                  style={{ borderColor: `${roseGold}30` }}
                  onFocus={(e) => e.target.style.borderColor = roseGold}
                  onBlur={(e) => e.target.style.borderColor = `${roseGold}30`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs tracking-wider text-slate-400 font-light mb-2 block">hora preferida</label>
                <select
                  className="w-full py-3 bg-transparent border-0 border-b text-slate-500 font-light focus:outline-none transition-colors duration-500 appearance-none cursor-pointer"
                  style={{ borderColor: `${roseGold}30` }}
                  onFocus={(e) => e.target.style.borderColor = roseGold}
                  onBlur={(e) => e.target.style.borderColor = `${roseGold}30`}
                >
                  <option>Hora preferida</option>
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
                </select>
              </div>
              <div>
                <label className="text-xs tracking-wider text-slate-400 font-light mb-2 block">notas adicionales</label>
                <input
                  type="text"
                  placeholder="Opcional"
                  className="w-full py-3 bg-transparent border-0 border-b text-slate-700 font-light placeholder:text-slate-300 focus:outline-none transition-colors duration-500"
                  style={{ borderColor: `${roseGold}30` }}
                  onFocus={(e) => e.target.style.borderColor = roseGold}
                  onBlur={(e) => e.target.style.borderColor = `${roseGold}30`}
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 text-white font-light tracking-wider rounded-full transition-all duration-500 hover:scale-[1.01]"
                style={{ background: `linear-gradient(135deg, ${roseGold}, #C4868F)`, boxShadow: `0 8px 30px ${roseGold}30` }}
              >
                Reservar Mi Cita
              </button>
              <p className="text-center text-slate-400 text-xs font-light mt-4 tracking-wide">
                Te confirmaremos tu cita por WhatsApp en menos de 1 hora.
              </p>
            </div>
          </motion.form>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-500 py-12">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-4">
          <span className="font-serif text-lg tracking-widest text-slate-400 italic">
            Estilo <span style={{ color: roseGoldLight }}>Sal&oacute;n</span> & Spa
          </span>
          <div className="flex items-center gap-6 text-sm font-light">
            <span>Col. Lomas del Guijarro, Blvd. Moraz&aacute;n, Tegucigalpa</span>
          </div>
          <div className="w-16 h-px bg-slate-800 my-2" />
          <p className="text-sm font-light">&copy; 2025 Estilo Sal&oacute;n & Spa</p>
          <p className="text-xs font-light">
            Ejemplo creado por <Link to="/" className="hover:underline font-medium" style={{ color: roseGoldLight }}>Balam Code</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
