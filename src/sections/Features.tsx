import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Clock, MessageCircle, Paintbrush, Gauge, Palette, Smartphone, Search, Zap, Shield, Server, Globe } from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';
import { MayanCornerGlyph, MayanStepPattern } from '../components/MayanElements';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function DiagnosticShuffler() {
  const [order, setOrder] = useState([0, 1, 2]);
  const cards = [
    { label: 'Landing Page', metric: 'Performance 98/100', color: 'border-cyan-500/30' },
    { label: 'SEO Score', metric: 'Ranking Top 10', color: 'border-blue-500/30' },
    { label: 'Mobile Speed', metric: '< 1.2s Load', color: 'border-emerald-500/30' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder(prev => {
        const next = [...prev];
        const last = next.pop()!;
        next.unshift(last);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-48 w-full">
      {order.map((cardIndex, position) => (
        <div
          key={cardIndex}
          className={`absolute left-0 right-0 mx-auto w-[90%] bg-white rounded-2xl border ${cards[cardIndex].color} p-5 shadow-lg transition-all duration-700`}
          style={{
            top: `${position * 20}px`,
            zIndex: 3 - position,
            transform: `scale(${1 - position * 0.04})`,
            opacity: 1 - position * 0.15,
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">{cards[cardIndex].label}</p>
              <p className="text-sm font-semibold text-slate-800 mt-1">{cards[cardIndex].metric}</p>
            </div>
            <div aria-hidden="true" className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full border-2 border-cyan-500 border-t-transparent animate-spin" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function TelemetryTypewriter() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const messages = [
    'Optimizando velocidad de carga...',
    'Configurando SEO on-page...',
    'Comprimiendo assets visuales...',
    'Desplegando certificado SSL...',
    'Integrando WhatsApp Business...',
    'Verificando responsive design...',
  ];

  useEffect(() => {
    const msg = messages[messageIndex];
    if (isTyping) {
      if (text.length < msg.length) {
        const timeout = setTimeout(() => setText(msg.slice(0, text.length + 1)), 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      setText('');
      setMessageIndex((prev) => (prev + 1) % messages.length);
      setIsTyping(true);
    }
  }, [text, isTyping, messageIndex]);

  return (
    <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 font-mono text-sm h-48 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <span aria-hidden="true" className="relative flex h-2.5 w-2.5">
          <span className="animate-pulse-live absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
        </span>
        <span className="text-cyan-400 text-xs tracking-wider uppercase">Live Feed</span>
      </div>
      <div className="flex-1 flex items-start">
        <div>
          <span className="text-slate-500">{'> '}</span>
          <span className="text-cyan-300">{text}</span>
          <span className="inline-block w-2 h-4 bg-cyan-400 ml-0.5 animate-teletype-cursor" />
        </div>
      </div>
      <div className="mt-auto pt-3 border-t border-slate-800 flex items-center justify-between">
        <span className="text-slate-600 text-xs">balam-engine v2.0</span>
        <span className="text-emerald-500 text-xs">STATUS: ACTIVE</span>
      </div>
    </div>
  );
}

function CursorScheduler() {
  const days = ['L', 'M', 'Mi', 'J', 'V'];
  const [activeDay, setActiveDay] = useState(-1);
  const [cursorPos, setCursorPos] = useState({ x: 20, y: 60 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [saved, setSaved] = useState(false);
  const [activeDays, setActiveDays] = useState<number[]>([]);
  const runningRef = useRef(true);

  useEffect(() => {
    runningRef.current = true;
    const sequence = async () => {
      while (runningRef.current) {
        setCursorVisible(true);
        setSaved(false);
        setActiveDays([]);
        const dayPositions = [
          { x: 18, y: 70 }, { x: 56, y: 70 }, { x: 94, y: 70 },
          { x: 132, y: 70 }, { x: 170, y: 70 },
        ];
        for (let i = 0; i < 3; i++) {
          if (!runningRef.current) return;
          const dayIdx = [0, 2, 4][i];
          await new Promise(r => setTimeout(r, 600));
          setCursorPos(dayPositions[dayIdx]);
          await new Promise(r => setTimeout(r, 400));
          setActiveDay(dayIdx);
          setActiveDays(prev => [...prev, dayIdx]);
          await new Promise(r => setTimeout(r, 300));
          setActiveDay(-1);
        }
        await new Promise(r => setTimeout(r, 500));
        setCursorPos({ x: 90, y: 120 });
        await new Promise(r => setTimeout(r, 500));
        setSaved(true);
        await new Promise(r => setTimeout(r, 2000));
        setCursorVisible(false);
        await new Promise(r => setTimeout(r, 1000));
      }
    };
    sequence();
    return () => { runningRef.current = false; };
  }, []);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 h-48 relative overflow-hidden">
      <p className="text-xs text-slate-400 font-mono uppercase tracking-wider mb-4">Agenda Semanal</p>
      <div className="flex gap-2 mb-4">
        {days.map((day, i) => (
          <div
            key={day}
            className={`w-10 h-10 min-w-[44px] min-h-[44px] rounded-lg flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
              activeDays.includes(i)
                ? 'bg-cyan-500 text-white scale-90'
                : activeDay === i
                ? 'bg-cyan-100 text-cyan-700 scale-95'
                : 'bg-slate-50 text-slate-400'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
      <div
        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
          saved ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-500'
        }`}
      >
        {saved ? 'Guardado' : 'Guardar'}
      </div>
      {cursorVisible && (
        <svg
          aria-hidden="true"
          className="absolute pointer-events-none transition-all duration-500 ease-out"
          style={{ left: cursorPos.x, top: cursorPos.y }}
          width="20" height="20" viewBox="0 0 24 24" fill="none"
        >
          <path d="M5 3L19 12L12 14L9 21L5 3Z" fill="#06B6D4" stroke="#0E7490" strokeWidth="1" />
        </svg>
      )}
    </div>
  );
}

const services = [
  { title: 'Diseño Personalizado', desc: 'Tu marca, no una plantilla genérica. Destacas desde el primer segundo.', icon: Palette, accent: 'from-cyan-500 to-blue-500', bg: 'bg-cyan-50' },
  { title: '100% Responsive', desc: 'El 78% de tus clientes te buscan desde el celular. Estamos listos.', icon: Smartphone, accent: 'from-blue-500 to-indigo-500', bg: 'bg-blue-50' },
  { title: 'SEO Optimizado', desc: 'Que te encuentren en Google cuando buscan lo que vendes.', icon: Search, accent: 'from-emerald-500 to-cyan-500', bg: 'bg-emerald-50' },
  { title: 'Velocidad Ultra-Rápida', desc: 'Cada segundo de carga lenta = 7% menos ventas. Cargamos en <2s.', icon: Zap, accent: 'from-amber-500 to-orange-500', bg: 'bg-amber-50' },
  { title: 'SSL y Seguridad', desc: 'Sin HTTPS, Google marca tu sitio como "No Seguro". Ya lo incluimos.', icon: Shield, accent: 'from-green-500 to-emerald-500', bg: 'bg-green-50' },
  { title: 'WhatsApp Integrado', desc: 'Tus clientes te escriben directo. Sin formularios complicados.', icon: WhatsAppIcon, accent: 'from-green-500 to-teal-500', bg: 'bg-green-50' },
  { title: 'Hosting Incluido', desc: 'Hosting premium por 1 año. Te ahorras L.2,000+ anuales.', icon: Server, accent: 'from-violet-500 to-purple-500', bg: 'bg-violet-50' },
  { title: 'Dominio .com', desc: 'tunegocio.com incluido. Tu dirección profesional en internet.', icon: Globe, accent: 'from-cyan-500 to-teal-500', bg: 'bg-cyan-50' },
];

const processSteps = [
  { step: '01', title: 'Consulta', desc: 'Tu visión y necesidades', icon: MessageCircle },
  { step: '02', title: 'Diseño', desc: 'Mockup personalizado', icon: Paintbrush },
  { step: '03', title: 'Desarrollo', desc: 'Código limpio y óptimo', icon: Gauge },
  { step: '04', title: 'Lanzamiento', desc: 'Online en 5-7 días', icon: Clock },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.feature-card') as HTMLElement[];
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.06,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
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
    <section id="servicios" ref={sectionRef} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MayanCornerGlyph className="text-cyan-500 opacity-40" position="left" />
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-medium rounded-full">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
              Nuestros Servicios
            </span>
            <MayanCornerGlyph className="text-cyan-500 opacity-40" position="right" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Todo Incluido, Cero{' '}
            <span className="font-serif italic text-gradient-cyan">Sorpresas</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Mientras otros cobran extras por cada detalle, nosotros incluimos todo lo que
            tu negocio necesita para vender online desde el primer día.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-24">
          <div className="bg-gradient-to-br from-slate-50 to-cyan-50/30 rounded-[2rem] p-8 border border-slate-100">
            <h3 className="font-display text-lg font-bold text-slate-900 mb-2">Auditoría Digital</h3>
            <p className="text-sm text-slate-500 mb-6">Analizamos y optimizamos cada métrica de tu sitio.</p>
            <DiagnosticShuffler />
          </div>
          <div className="rounded-[2rem] p-8 border border-slate-800 bg-slate-950">
            <h3 className="font-display text-lg font-bold text-white mb-2">Motor Balam</h3>
            <p className="text-sm text-slate-400 mb-6">Nuestro pipeline de desarrollo en tiempo real.</p>
            <TelemetryTypewriter />
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-[2rem] p-8 border border-slate-100">
            <h3 className="font-display text-lg font-bold text-slate-900 mb-2">Protocolo de Entrega</h3>
            <p className="text-sm text-slate-500 mb-6">Agenda automatizada para cada fase del proyecto.</p>
            <CursorScheduler />
          </div>
        </div>

        <div className="feature-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24" style={{ contain: 'content' }}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="feature-card card-hover-lift group p-6 rounded-[1.5rem] bg-white border border-slate-100 hover:border-cyan-200/60 cursor-default relative overflow-hidden">
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 via-transparent to-blue-50/0 group-hover:from-cyan-50/50 group-hover:to-blue-50/30 transition-all duration-700 pointer-events-none" />
                <div className={`relative w-11 h-11 ${service.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <Icon className={`w-5 h-5 bg-gradient-to-br ${service.accent} bg-clip-text`} style={{ color: 'rgb(6, 182, 212)' }} />
                </div>
                <h3 className="relative text-base font-semibold text-slate-900 mb-1.5 group-hover:text-cyan-700 transition-colors tracking-tight">{service.title}</h3>
                <p className="relative text-sm text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MayanStepPattern className="text-cyan-500 opacity-30" />
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                ¿Cómo <span className="font-serif italic">Funciona</span>?
              </h3>
              <MayanStepPattern className="text-cyan-500 opacity-30 scale-x-[-1]" />
            </div>
            <p className="text-slate-500 max-w-xl mx-auto">De la idea al lanzamiento en 4 pasos simples</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div aria-hidden="true" className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
            {processSteps.map((step) => (
              <div key={step.step} className="relative text-center group">
                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[1.5rem] rotate-3 opacity-10 group-hover:opacity-20 group-hover:rotate-6 transition-all duration-500" />
                  <div className="relative w-full h-full bg-white border-2 border-cyan-100 rounded-[1.5rem] flex items-center justify-center group-hover:border-cyan-300 group-hover:shadow-lg group-hover:shadow-cyan-100/50 transition-all duration-500">
                    <span className="font-mono text-2xl font-bold text-cyan-600">{step.step}</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-1">{step.title}</h4>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-slate-50 via-cyan-50/50 to-slate-50 rounded-[2rem] border border-cyan-100/60 shadow-lg shadow-cyan-50/50">
            <p className="text-slate-700 font-medium">Cada día sin landing page, pierdes clientes potenciales</p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="magnetic-btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              Quiero mi Landing Page <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
