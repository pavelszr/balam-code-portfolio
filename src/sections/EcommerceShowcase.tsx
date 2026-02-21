import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ShoppingCart, BarChart3, Package, Users, TrendingUp, DollarSign, Eye, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function LiveRevenueCounter() {
  const [revenue, setRevenue] = useState(0);
  const target = 847523;

  useEffect(() => {
    let frame: number;
    const duration = 2500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setRevenue(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    const timeout = setTimeout(() => {
      frame = requestAnimationFrame(animate);
    }, 500);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="font-mono text-3xl sm:text-4xl font-bold text-white tabular-nums">
      L.{revenue.toLocaleString()}
    </div>
  );
}

function MiniBarChart() {
  const bars = [35, 52, 78, 45, 92, 67, 88, 55, 95, 72, 60, 85];
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex items-end gap-1 h-16">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm transition-all duration-700 ease-out"
          style={{
            height: animated ? `${h}%` : '4%',
            background: h > 80 ? 'linear-gradient(to top, #06B6D4, #22D3EE)' : 'rgba(6, 182, 212, 0.3)',
            transitionDelay: `${i * 60}ms`,
          }}
        />
      ))}
    </div>
  );
}

function OrderFeed() {
  const allOrders = [
    { id: '#4821', product: 'iPhone 15 Pro', amount: 'L.24,500', time: 'Hace 2 min', status: 'confirmed' },
    { id: '#4820', product: 'AirPods Pro 2', amount: 'L.6,200', time: 'Hace 5 min', status: 'confirmed' },
    { id: '#4819', product: 'MacBook Air M3', amount: 'L.32,800', time: 'Hace 8 min', status: 'processing' },
    { id: '#4822', product: 'Samsung S24 Ultra', amount: 'L.28,900', time: 'Hace 1 min', status: 'confirmed' },
    { id: '#4823', product: 'iPad Pro M4', amount: 'L.19,500', time: 'Ahora', status: 'confirmed' },
    { id: '#4824', product: 'Sony WH-1000XM5', amount: 'L.8,400', time: 'Ahora', status: 'processing' },
  ];

  const [startIdx, setStartIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx(prev => (prev + 1) % allOrders.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visible = [
    allOrders[startIdx % allOrders.length],
    allOrders[(startIdx + 1) % allOrders.length],
    allOrders[(startIdx + 2) % allOrders.length],
  ];

  return (
    <div className="space-y-2">
      {visible.map((order) => (
        <div
          key={order.id}
          className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] transition-all duration-500"
        >
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${order.status === 'confirmed' ? 'bg-emerald-400' : 'bg-amber-400'} animate-pulse`} />
            <div>
              <p className="text-sm text-white font-medium">{order.product}</p>
              <p className="text-xs text-slate-500 font-mono">{order.id} · {order.time}</p>
            </div>
          </div>
          <span className="text-sm font-semibold text-cyan-400 font-mono">{order.amount}</span>
        </div>
      ))}
    </div>
  );
}

function TopProductsChart() {
  const products = [
    { name: 'iPhone 15 Pro', sales: 94, revenue: 'L.2.3M' },
    { name: 'MacBook Air M3', sales: 78, revenue: 'L.2.5M' },
    { name: 'AirPods Pro 2', sales: 65, revenue: 'L.403K' },
    { name: 'Samsung S24', sales: 52, revenue: 'L.1.4M' },
    { name: 'iPad Pro M4', sales: 41, revenue: 'L.780K' },
  ];

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="space-y-3">
      {products.map((p, i) => (
        <div key={p.name} className="group">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-slate-400 group-hover:text-white transition-colors">{p.name}</span>
            <span className="text-xs text-cyan-400 font-mono font-semibold">{p.revenue}</span>
          </div>
          <div className="h-2 bg-white/[0.04] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                width: animated ? `${p.sales}%` : '0%',
                background: `linear-gradient(90deg, #06B6D4, ${i === 0 ? '#22D3EE' : i === 1 ? '#3B82F6' : '#8B5CF6'})`,
                transitionDelay: `${i * 150}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

const kpis = [
  { label: 'Ingresos del Mes', value: 'L.847K', change: '+23.5%', icon: DollarSign, positive: true },
  { label: 'Pedidos Hoy', value: '184', change: '+12.3%', icon: ShoppingCart, positive: true },
  { label: 'Visitantes Activos', value: '2,847', change: '+8.7%', icon: Users, positive: true },
  { label: 'Tasa de Conversión', value: '4.2%', change: '+0.8%', icon: TrendingUp, positive: true },
];

const features = [
  { title: 'Dashboard en Tiempo Real', desc: 'Visualiza ventas, pedidos y métricas clave al instante. Toma decisiones con datos, no con intuición.', icon: BarChart3 },
  { title: 'Gestión de Inventario', desc: 'Control de stock automático, alertas de inventario bajo y reabastecimiento inteligente.', icon: Package },
  { title: 'Catálogo Inteligente', desc: 'Productos con variantes, filtros, búsqueda y categorización profesional.', icon: Layers },
  { title: 'Análisis de Clientes', desc: 'Conoce a tu cliente ideal: frecuencia de compra, ticket promedio y productos favoritos.', icon: Users },
];

export default function EcommerceShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.ecom-dashboard',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.ecom-dashboard', start: 'top 85%', toggleActions: 'play none none none' },
        }
      );

      const cards = gsap.utils.toArray('.ecom-feature-card') as HTMLElement[];
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, delay: i * 0.1, ease: 'power2.out',
            scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="ecommerce" ref={sectionRef} className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      <div className="hidden md:block absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/[0.04] rounded-full blur-[120px]" />
      <div className="hidden md:block absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full mb-6">
            <ShoppingCart className="w-3.5 h-3.5" />
            E-Commerce Profesional
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Tu Tienda Online con{' '}
            <span className="font-serif italic text-cyan-400" style={{ textShadow: '0 0 30px rgba(6, 182, 212, 0.3)' }}>
              Panel de Control
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            No solo una tienda bonita. Un sistema completo con dashboard de ventas,
            inventario inteligente y analíticas que te dicen exactamente qué está funcionando.
          </p>
        </div>

        <div className="ecom-dashboard mb-20">
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 lg:p-8 backdrop-blur-sm shadow-2xl shadow-cyan-500/[0.05]">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold font-display">Dashboard E-Commerce</h3>
                  <p className="text-xs text-slate-500 font-mono">Actualizado en tiempo real</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs text-emerald-400 font-mono">LIVE</span>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl sm:rounded-2xl p-3 sm:p-5 group hover:bg-white/[0.06] hover:border-cyan-500/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <kpi.icon className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">{kpi.change}</span>
                  </div>
                  <p className="text-lg sm:text-2xl font-bold text-white font-mono mb-1">{kpi.value}</p>
                  <p className="text-xs text-slate-500">{kpi.label}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="lg:col-span-2 bg-white/[0.02] border border-white/[0.05] rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-white font-semibold text-sm">Ingresos Mensuales</h4>
                    <LiveRevenueCounter />
                  </div>
                  <div className="flex gap-2">
                    {['7D', '1M', '3M'].map((period, i) => (
                      <button key={period} className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors ${i === 1 ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-500 hover:text-slate-300'}`}>
                        {period}
                      </button>
                    ))}
                  </div>
                </div>
                <MiniBarChart />
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-semibold text-sm">Productos Top</h4>
                  <Eye className="w-4 h-4 text-slate-500" />
                </div>
                <TopProductsChart />
              </div>
            </div>

            <div className="mt-4 sm:mt-6 bg-white/[0.02] border border-white/[0.05] rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-semibold text-sm">Pedidos Recientes</h4>
                <span className="text-xs text-cyan-400 font-mono">Ver todos →</span>
              </div>
              <OrderFeed />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {features.map((f) => (
            <div key={f.title} className="ecom-feature-card group p-6 rounded-[1.5rem] bg-white/[0.03] border border-white/[0.06] hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all duration-500 cursor-default">
              <div className="w-11 h-11 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-500">
                <f.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-cyan-300 transition-colors tracking-tight">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 bg-white/[0.03] rounded-2xl sm:rounded-[2rem] border border-white/[0.06] shadow-2xl">
            <p className="text-slate-300 font-medium">Mira cómo funciona el panel de administración completo</p>
            <Link
              to="/demo/ecommerce-admin"
              className="magnetic-btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              Ver Demo Admin <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
