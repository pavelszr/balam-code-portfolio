import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingCart, Package, Users, DollarSign,
  Search, Bell, ChevronDown, ArrowUpRight, ArrowDownRight,
  MoreHorizontal, Filter, Download, Calendar, Settings,
  Home, Layers, Tag, Truck, CreditCard, PieChart, AlertTriangle,
  CheckCircle2, Clock, RefreshCw, ChevronLeft, ChevronRight, Menu, X
} from 'lucide-react';

const kpiData = [
  { label: 'Ingresos Totales', value: 'L.847,523', change: '+23.5%', positive: true, icon: DollarSign, sub: 'vs L.686K mes anterior' },
  { label: 'Pedidos', value: '1,284', change: '+12.3%', positive: true, icon: ShoppingCart, sub: '184 hoy' },
  { label: 'Clientes Activos', value: '3,847', change: '+8.7%', positive: true, icon: Users, sub: '342 nuevos este mes' },
  { label: 'Ticket Promedio', value: 'L.660', change: '-2.1%', positive: false, icon: CreditCard, sub: 'vs L.674 mes anterior' },
];

const recentOrders = [
  { id: '#ORD-4821', customer: 'María García', email: 'maria@email.com', products: 3, total: 'L.24,500', status: 'completed', date: '20 Feb', method: 'Tarjeta' },
  { id: '#ORD-4820', customer: 'Carlos López', email: 'carlos@email.com', products: 1, total: 'L.6,200', status: 'processing', date: '20 Feb', method: 'Transferencia' },
  { id: '#ORD-4819', customer: 'Ana Martínez', email: 'ana@email.com', products: 2, total: 'L.32,800', status: 'shipped', date: '19 Feb', method: 'Tarjeta' },
  { id: '#ORD-4818', customer: 'Roberto Hernández', email: 'roberto@email.com', products: 5, total: 'L.8,450', status: 'completed', date: '19 Feb', method: 'Efectivo' },
  { id: '#ORD-4817', customer: 'Laura Sánchez', email: 'laura@email.com', products: 1, total: 'L.15,900', status: 'pending', date: '18 Feb', method: 'Tarjeta' },
];

const topProducts = [
  { name: 'iPhone 15 Pro Max', sku: 'IPH-15PM', price: 'L.28,500', sold: 94, stock: 23, revenue: 'L.2.6M', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&q=80', trend: '+18%' },
  { name: 'MacBook Air M3', sku: 'MBA-M3', price: 'L.32,800', sold: 67, stock: 12, revenue: 'L.2.1M', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&q=80', trend: '+24%' },
  { name: 'AirPods Pro 2', sku: 'APP-2', price: 'L.6,200', sold: 156, stock: 45, revenue: 'L.967K', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=200&q=80', trend: '+9%' },
  { name: 'Samsung S24 Ultra', sku: 'SAM-S24U', price: 'L.26,900', sold: 52, stock: 31, revenue: 'L.1.3M', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=200&q=80', trend: '+31%' },
  { name: 'iPad Pro M4', sku: 'IPD-PM4', price: 'L.19,500', sold: 41, stock: 8, revenue: 'L.799K', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200&q=80', trend: '+5%' },
  { name: 'Sony WH-1000XM5', sku: 'SNY-XM5', price: 'L.8,400', sold: 89, stock: 56, revenue: 'L.747K', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=200&q=80', trend: '+14%' },
];

const inventoryAlerts = [
  { product: 'iPad Pro M4', stock: 8, severity: 'critical' },
  { product: 'MacBook Air M3', stock: 12, severity: 'warning' },
  { product: 'iPhone 15 Pro Max', stock: 23, severity: 'warning' },
];

const salesByCategory = [
  { name: 'Smartphones', percentage: 38, revenue: 'L.322K', color: '#06B6D4' },
  { name: 'Laptops', percentage: 28, revenue: 'L.237K', color: '#3B82F6' },
  { name: 'Audio', percentage: 18, revenue: 'L.153K', color: '#8B5CF6' },
  { name: 'Tablets', percentage: 10, revenue: 'L.85K', color: '#F59E0B' },
  { name: 'Accesorios', percentage: 6, revenue: 'L.51K', color: '#10B981' },
];

const monthlyRevenue = [
  { month: 'Sep', value: 520000, formatted: '520K' },
  { month: 'Oct', value: 610000, formatted: '610K' },
  { month: 'Nov', value: 780000, formatted: '780K' },
  { month: 'Dic', value: 920000, formatted: '920K' },
  { month: 'Ene', value: 690000, formatted: '690K' },
  { month: 'Feb', value: 847523, formatted: '848K' },
];

const sidebarItems = [
  { label: 'Dashboard', icon: Home, id: 'dashboard' },
  { label: 'Pedidos', icon: ShoppingCart, id: 'orders', badge: '12' },
  { label: 'Productos', icon: Package, id: 'products' },
  { label: 'Clientes', icon: Users, id: 'customers' },
  { label: 'Categorías', icon: Layers, id: 'categories' },
  { label: 'Cupones', icon: Tag, id: 'coupons' },
  { label: 'Envíos', icon: Truck, id: 'shipping' },
  { label: 'Analíticas', icon: PieChart, id: 'analytics' },
  { label: 'Configuración', icon: Settings, id: 'settings' },
];

type ActivePage = 'dashboard' | 'orders' | 'products' | 'customers' | 'categories' | 'coupons' | 'shipping' | 'analytics' | 'settings';

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { bg: string; text: string; label: string; icon: typeof CheckCircle2 }> = {
    completed: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', label: 'Completado', icon: CheckCircle2 },
    processing: { bg: 'bg-blue-500/10', text: 'text-blue-400', label: 'Procesando', icon: RefreshCw },
    shipped: { bg: 'bg-purple-500/10', text: 'text-purple-400', label: 'Enviado', icon: Truck },
    pending: { bg: 'bg-amber-500/10', text: 'text-amber-400', label: 'Pendiente', icon: Clock },
  };
  const c = config[status] || config.pending;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 ${c.bg} ${c.text} text-xs font-medium rounded-full`}>
      <c.icon className="w-3 h-3" />
      {c.label}
    </span>
  );
}

function DashboardPage() {
  const maxRevenue = Math.max(...monthlyRevenue.map(m => m.value));
  const [chartAnimated, setChartAnimated] = useState(false);
  const [liveVisitors, setLiveVisitors] = useState(247);

  useEffect(() => {
    const t = setTimeout(() => setChartAnimated(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveVisitors(prev => prev + Math.floor(Math.random() * 7) - 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white font-display">Dashboard</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">Resumen de tu tienda en tiempo real</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-2 bg-white/[0.03] border border-white/[0.06] rounded-xl text-xs sm:text-sm text-slate-400">
            <Calendar className="w-4 h-4 hidden sm:block" />
            Feb 2026
          </div>
          <button className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl text-xs sm:text-sm font-medium hover:bg-cyan-500/20 transition-colors">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Exportar</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {kpiData.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.label} className="bg-slate-900/60 border border-slate-800/60 rounded-xl sm:rounded-2xl p-3 sm:p-5 group hover:border-cyan-500/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/[0.04] rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <span className={`inline-flex items-center gap-0.5 text-[10px] sm:text-xs font-mono font-semibold px-1.5 sm:px-2 py-0.5 rounded-full ${
                  kpi.positive ? 'text-emerald-400 bg-emerald-400/10' : 'text-red-400 bg-red-400/10'
                }`}>
                  {kpi.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {kpi.change}
                </span>
              </div>
              <p className="text-lg sm:text-2xl font-bold text-white font-mono mb-0.5 sm:mb-1">{kpi.value}</p>
              <p className="text-[10px] sm:text-xs text-slate-500 truncate">{kpi.sub}</p>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800/60 rounded-xl sm:rounded-2xl p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div>
              <h3 className="text-white font-semibold text-sm sm:text-base">Ingresos Mensuales</h3>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-1">Últimos 6 meses</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-mono">{liveVisitors} online</span>
            </div>
          </div>
          <div className="flex items-end gap-1.5 sm:gap-3 h-32 sm:h-48">
            {monthlyRevenue.map((m, i) => (
              <div key={m.month} className="flex-1 flex flex-col items-center gap-1 sm:gap-2">
                <div className="w-full bg-white/[0.03] rounded-t-lg overflow-hidden group relative" style={{ height: '100%' }}>
                  <div
                    className="absolute bottom-0 w-full rounded-t-lg transition-all duration-1000 ease-out"
                    style={{
                      height: chartAnimated ? `${(m.value / maxRevenue) * 100}%` : '0%',
                      background: i === monthlyRevenue.length - 1
                        ? 'linear-gradient(to top, #06B6D4, #22D3EE)'
                        : 'linear-gradient(to top, rgba(6, 182, 212, 0.3), rgba(6, 182, 212, 0.5))',
                      transitionDelay: `${i * 100}ms`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-[10px] text-white font-mono font-bold bg-slate-900/80 px-1.5 py-0.5 rounded">L.{m.formatted}</span>
                  </div>
                </div>
                <span className={`text-[10px] sm:text-xs font-mono ${i === monthlyRevenue.length - 1 ? 'text-cyan-400 font-semibold' : 'text-slate-500'}`}>{m.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/60 rounded-xl sm:rounded-2xl p-4 sm:p-6">
          <h3 className="text-white font-semibold text-sm sm:text-base mb-1">Ventas por Categoría</h3>
          <p className="text-[10px] sm:text-xs text-slate-500 mb-4 sm:mb-6">Distribución del mes</p>
          <div className="space-y-3 sm:space-y-4">
            {salesByCategory.map((cat, i) => (
              <div key={cat.name}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full flex-shrink-0" aria-hidden="true" style={{ backgroundColor: cat.color }} />
                    <span className="text-xs sm:text-sm text-slate-300">{cat.name}</span>
                  </div>
                  <span className="text-xs text-white font-mono font-semibold">{cat.percentage}%</span>
                </div>
                <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: chartAnimated ? `${cat.percentage}%` : '0%',
                      backgroundColor: cat.color,
                      transitionDelay: `${i * 100 + 300}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {inventoryAlerts.length > 0 && (
        <div className="bg-amber-500/[0.05] border border-amber-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <h3 className="text-amber-400 font-semibold text-xs sm:text-sm">Alertas de Inventario</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-2 sm:gap-3">
            {inventoryAlerts.map((alert) => (
              <div key={alert.product} className="flex items-center justify-between p-3 bg-white/[0.02] rounded-xl">
                <div>
                  <p className="text-xs sm:text-sm text-white">{alert.product}</p>
                  <p className="text-[10px] sm:text-xs text-slate-500">{alert.stock} uds</p>
                </div>
                <span className={`text-[10px] sm:text-xs font-mono font-bold ${alert.severity === 'critical' ? 'text-red-400' : 'text-amber-400'}`}>
                  {alert.severity === 'critical' ? 'CRÍTICO' : 'BAJO'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-slate-900/60 border border-slate-800/60 rounded-xl sm:rounded-2xl overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-800/60 flex items-center justify-between">
          <h3 className="text-white font-semibold text-sm sm:text-base">Pedidos Recientes</h3>
          <button className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-xs text-slate-400 bg-white/[0.03] border border-white/[0.06] rounded-lg hover:bg-white/[0.06] transition-colors">
            <Filter className="w-3 h-3" /> Filtrar
          </button>
        </div>

        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800/40">
                <th className="text-left text-xs text-slate-500 font-mono font-medium uppercase tracking-wider px-5 py-3">Pedido</th>
                <th className="text-left text-xs text-slate-500 font-mono font-medium uppercase tracking-wider px-5 py-3">Cliente</th>
                <th className="text-left text-xs text-slate-500 font-mono font-medium uppercase tracking-wider px-5 py-3">Total</th>
                <th className="text-left text-xs text-slate-500 font-mono font-medium uppercase tracking-wider px-5 py-3">Estado</th>
                <th className="text-left text-xs text-slate-500 font-mono font-medium uppercase tracking-wider px-5 py-3">Fecha</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-slate-800/20 hover:bg-white/[0.02] transition-colors group">
                  <td className="px-5 py-4"><span className="text-sm text-cyan-400 font-mono font-semibold">{order.id}</span></td>
                  <td className="px-5 py-4">
                    <p className="text-sm text-white">{order.customer}</p>
                    <p className="text-xs text-slate-500">{order.email}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm text-white font-mono font-semibold">{order.total}</span>
                    <p className="text-xs text-slate-500">{order.method}</p>
                  </td>
                  <td className="px-5 py-4"><StatusBadge status={order.status} /></td>
                  <td className="px-5 py-4"><span className="text-sm text-slate-400">{order.date}</span></td>
                  <td className="px-5 py-4">
                    <button aria-label="Más opciones" className="opacity-0 group-hover:opacity-100 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-white/[0.06] rounded-lg transition-all">
                      <MoreHorizontal className="w-4 h-4 text-slate-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden divide-y divide-slate-800/30">
          {recentOrders.map((order) => (
            <div key={order.id} className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-cyan-400 font-mono font-semibold">{order.id}</span>
                <StatusBadge status={order.status} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white font-medium">{order.customer}</p>
                  <p className="text-[10px] text-slate-500">{order.date} · {order.method}</p>
                </div>
                <span className="text-sm text-white font-mono font-bold">{order.total}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 sm:p-4 border-t border-slate-800/40 flex items-center justify-between">
          <span className="text-[10px] sm:text-xs text-slate-500">5 de 1,284</span>
          <div className="flex items-center gap-1">
            <button aria-label="Página anterior" className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/[0.06] text-slate-500 transition-colors"><ChevronLeft className="w-4 h-4" /></button>
            <button className="min-w-[44px] min-h-[44px] rounded-lg text-xs font-medium bg-cyan-500/20 text-cyan-400 flex items-center justify-center">1</button>
            <button className="min-w-[44px] min-h-[44px] rounded-lg text-xs text-slate-500 hover:bg-white/[0.04] transition-colors flex items-center justify-center">2</button>
            <button className="min-w-[44px] min-h-[44px] rounded-lg text-xs text-slate-500 hover:bg-white/[0.04] transition-colors flex items-center justify-center">3</button>
            <button aria-label="Página siguiente" className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/[0.06] text-slate-500 transition-colors"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </>
  );
}

function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = topProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white font-display">Productos</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">{topProducts.length} productos</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-400 text-white rounded-xl text-sm font-semibold hover:from-cyan-400 hover:to-cyan-300 transition-all shadow-lg shadow-cyan-500/20">
          <Package className="w-4 h-4" /> Agregar Producto
        </button>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="flex-1 flex items-center gap-2 px-3 sm:px-4 py-2.5 bg-slate-900/60 border border-slate-800/60 rounded-xl">
          <Search className="w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Buscar producto..."
            className="bg-transparent text-sm text-white placeholder-slate-500 outline-none w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-1.5 px-3 sm:px-4 py-2.5 bg-white/[0.03] border border-white/[0.06] rounded-xl text-sm text-slate-400 hover:bg-white/[0.06] transition-colors">
          <Filter className="w-4 h-4" />
          <span className="hidden sm:inline">Filtros</span>
        </button>
      </div>

      <div className="hidden lg:block bg-slate-900/60 border border-slate-800/60 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800/40">
                <th className="text-left text-xs text-slate-500 font-mono font-medium uppercase tracking-wider px-5 py-3">Producto</th>
                <th className="text-left text-xs text-slate-500 font-mono font-medium uppercase tracking-wider px-5 py-3">Precio</th>
                <th className="text-left text-xs text-slate-500 font-mono font-medium uppercase tracking-wider px-5 py-3">Vendidos</th>
                <th className="text-left text-xs text-slate-500 font-mono font-medium uppercase tracking-wider px-5 py-3">Stock</th>
                <th className="text-left text-xs text-slate-500 font-mono font-medium uppercase tracking-wider px-5 py-3">Ingresos</th>
                <th className="text-left text-xs text-slate-500 font-mono font-medium uppercase tracking-wider px-5 py-3">Tendencia</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((product) => (
                <tr key={product.sku} className="border-b border-slate-800/20 hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/[0.05] flex-shrink-0">
                        <img src={product.image} alt={product.name} width={40} height={40} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="text-sm text-white font-medium">{product.name}</span>
                        <p className="text-xs text-slate-500 font-mono">{product.sku}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4"><span className="text-sm text-white font-mono font-semibold">{product.price}</span></td>
                  <td className="px-5 py-4"><span className="text-sm text-slate-300">{product.sold}</span></td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-mono ${product.stock < 15 ? 'text-red-400 font-semibold' : 'text-slate-300'}`}>{product.stock}</span>
                      <div className="w-16 h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${product.stock < 15 ? 'bg-red-400' : product.stock < 35 ? 'bg-amber-400' : 'bg-emerald-400'}`} style={{ width: `${Math.min((product.stock / 60) * 100, 100)}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4"><span className="text-sm text-cyan-400 font-mono font-semibold">{product.revenue}</span></td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-emerald-400">
                      <ArrowUpRight className="w-3 h-3" />{product.trend}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="lg:hidden space-y-3">
        {filtered.map((product) => (
          <div key={product.sku} className="bg-slate-900/60 border border-slate-800/60 rounded-xl p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/[0.05] flex-shrink-0">
                <img src={product.image} alt={product.name} width={48} height={48} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white font-medium truncate">{product.name}</p>
                <p className="text-[10px] text-slate-500 font-mono">{product.sku}</p>
              </div>
              <span className="inline-flex items-center gap-0.5 text-xs font-mono font-semibold text-emerald-400">
                <ArrowUpRight className="w-3 h-3" />{product.trend}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-mono">Precio</p>
                <p className="text-sm text-white font-mono font-semibold">{product.price}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-mono">Vendidos</p>
                <p className="text-sm text-slate-300">{product.sold}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-mono">Stock</p>
                <div className="flex items-center gap-1.5">
                  <span className={`text-sm font-mono ${product.stock < 15 ? 'text-red-400 font-semibold' : 'text-slate-300'}`}>{product.stock}</span>
                  <div className="w-10 h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${product.stock < 15 ? 'bg-red-400' : product.stock < 35 ? 'bg-amber-400' : 'bg-emerald-400'}`} style={{ width: `${Math.min((product.stock / 60) * 100, 100)}%` }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-800/40 flex items-center justify-between">
              <span className="text-[10px] text-slate-500 uppercase font-mono">Ingresos</span>
              <span className="text-sm text-cyan-400 font-mono font-bold">{product.revenue}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function CustomersPage() {
  const customers = [
    { name: 'María García', email: 'maria@email.com', orders: 12, spent: 'L.148,200', lastOrder: '20 Feb 2026', status: 'VIP' },
    { name: 'Carlos López', email: 'carlos@email.com', orders: 8, spent: 'L.96,400', lastOrder: '20 Feb 2026', status: 'Regular' },
    { name: 'Ana Martínez', email: 'ana@email.com', orders: 23, spent: 'L.287,500', lastOrder: '19 Feb 2026', status: 'VIP' },
    { name: 'Roberto Hernández', email: 'roberto@email.com', orders: 5, spent: 'L.42,100', lastOrder: '19 Feb 2026', status: 'Nuevo' },
    { name: 'Laura Sánchez', email: 'laura@email.com', orders: 15, spent: 'L.189,300', lastOrder: '18 Feb 2026', status: 'VIP' },
    { name: 'Diego Ramírez', email: 'diego@email.com', orders: 3, spent: 'L.28,700', lastOrder: '18 Feb 2026', status: 'Nuevo' },
  ];

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white font-display">Clientes</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">3,847 registrados</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl text-xs sm:text-sm font-medium hover:bg-cyan-500/20 transition-colors">
          <Download className="w-4 h-4" /> Exportar CSV
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
        <div className="bg-slate-900/60 border border-slate-800/60 rounded-xl sm:rounded-2xl p-3 sm:p-5">
          <p className="text-[10px] sm:text-xs text-slate-500 mb-1 sm:mb-2">Nuevos (Mes)</p>
          <p className="text-lg sm:text-2xl font-bold text-white font-mono">342</p>
          <span className="text-[10px] sm:text-xs text-emerald-400 font-mono">+18%</span>
        </div>
        <div className="bg-slate-900/60 border border-slate-800/60 rounded-xl sm:rounded-2xl p-3 sm:p-5">
          <p className="text-[10px] sm:text-xs text-slate-500 mb-1 sm:mb-2">Retención</p>
          <p className="text-lg sm:text-2xl font-bold text-white font-mono">73.2%</p>
          <span className="text-[10px] sm:text-xs text-emerald-400 font-mono">+5.4%</span>
        </div>
        <div className="bg-slate-900/60 border border-slate-800/60 rounded-xl sm:rounded-2xl p-3 sm:p-5">
          <p className="text-[10px] sm:text-xs text-slate-500 mb-1 sm:mb-2">LTV</p>
          <p className="text-lg sm:text-2xl font-bold text-white font-mono">L.24.8K</p>
          <span className="text-[10px] sm:text-xs text-emerald-400 font-mono">+12%</span>
        </div>
      </div>

      <div className="hidden md:block bg-slate-900/60 border border-slate-800/60 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-800/40">
              <th className="text-left text-xs text-slate-500 font-mono font-medium uppercase tracking-wider px-5 py-3">Cliente</th>
              <th className="text-left text-xs text-slate-500 font-mono font-medium uppercase tracking-wider px-5 py-3">Pedidos</th>
              <th className="text-left text-xs text-slate-500 font-mono font-medium uppercase tracking-wider px-5 py-3">Total Gastado</th>
              <th className="text-left text-xs text-slate-500 font-mono font-medium uppercase tracking-wider px-5 py-3">Último Pedido</th>
              <th className="text-left text-xs text-slate-500 font-mono font-medium uppercase tracking-wider px-5 py-3">Segmento</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.email} className="border-b border-slate-800/20 hover:bg-white/[0.02] transition-colors">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                      {c.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm text-white font-medium">{c.name}</p>
                      <p className="text-xs text-slate-500">{c.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4"><span className="text-sm text-slate-300">{c.orders}</span></td>
                <td className="px-5 py-4"><span className="text-sm text-white font-mono font-semibold">{c.spent}</span></td>
                <td className="px-5 py-4"><span className="text-sm text-slate-400">{c.lastOrder}</span></td>
                <td className="px-5 py-4">
                  <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                    c.status === 'VIP' ? 'bg-amber-500/10 text-amber-400' :
                    c.status === 'Nuevo' ? 'bg-cyan-500/10 text-cyan-400' :
                    'bg-slate-500/10 text-slate-400'
                  }`}>{c.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-3">
        {customers.map((c) => (
          <div key={c.email} className="bg-slate-900/60 border border-slate-800/60 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                  {c.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm text-white font-medium">{c.name}</p>
                  <p className="text-[10px] text-slate-500">{c.email}</p>
                </div>
              </div>
              <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${
                c.status === 'VIP' ? 'bg-amber-500/10 text-amber-400' :
                c.status === 'Nuevo' ? 'bg-cyan-500/10 text-cyan-400' :
                'bg-slate-500/10 text-slate-400'
              }`}>{c.status}</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-mono">Pedidos</p>
                <p className="text-sm text-white font-semibold">{c.orders}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-mono">Gastado</p>
                <p className="text-sm text-white font-mono font-semibold">{c.spent}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-mono">Último</p>
                <p className="text-xs text-slate-400">{c.lastOrder}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function AnalyticsPage() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => { const t = setTimeout(() => setAnimated(true), 300); return () => clearTimeout(t); }, []);

  const hourlyData = [12, 8, 4, 3, 2, 5, 15, 42, 67, 78, 85, 92, 88, 76, 82, 95, 89, 72, 58, 45, 38, 28, 20, 15];
  const maxHourly = Math.max(...hourlyData);

  const conversionFunnel = [
    { stage: 'Visitantes', count: 28470, percentage: 100 },
    { stage: 'Vieron Producto', count: 14235, percentage: 50 },
    { stage: 'Al Carrito', count: 4270, percentage: 15 },
    { stage: 'Checkout', count: 2562, percentage: 9 },
    { stage: 'Compra', count: 1284, percentage: 4.5 },
  ];

  const trafficSources = [
    { source: 'Google Orgánico', visits: '12,450', percentage: 44 },
    { source: 'Directo', visits: '6,230', percentage: 22 },
    { source: 'Instagram Ads', visits: '4,850', percentage: 17 },
    { source: 'Facebook Ads', visits: '3,120', percentage: 11 },
    { source: 'WhatsApp', visits: '1,820', percentage: 6 },
  ];

  return (
    <>
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-white font-display">Analíticas</h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">Métricas de rendimiento</p>
      </div>

      <div className="bg-slate-900/60 border border-slate-800/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-8">
        <h3 className="text-white font-semibold text-sm sm:text-base mb-1">Tráfico por Hora</h3>
        <p className="text-[10px] sm:text-xs text-slate-500 mb-4 sm:mb-6">Visitantes únicos hoy</p>
        <div className="flex items-end gap-0.5 sm:gap-1 h-24 sm:h-32">
          {hourlyData.map((v, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1 relative" style={{ height: '100%' }}>
              <div className="w-full h-full bg-white/[0.02] rounded-t-sm overflow-hidden relative">
                <div
                  className="absolute bottom-0 w-full rounded-t-sm transition-all duration-700 ease-out"
                  style={{
                    height: animated ? `${(v / maxHourly) * 100}%` : '0%',
                    background: v === maxHourly ? 'linear-gradient(to top, #06B6D4, #22D3EE)' : 'rgba(6, 182, 212, 0.25)',
                    transitionDelay: `${i * 30}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[10px] text-slate-600 font-mono">0h</span>
          <span className="text-[10px] text-slate-600 font-mono">6h</span>
          <span className="text-[10px] text-slate-600 font-mono">12h</span>
          <span className="text-[10px] text-slate-600 font-mono">18h</span>
          <span className="text-[10px] text-slate-600 font-mono">23h</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-slate-900/60 border border-slate-800/60 rounded-xl sm:rounded-2xl p-4 sm:p-6">
          <h3 className="text-white font-semibold text-sm sm:text-base mb-1">Embudo de Conversión</h3>
          <p className="text-[10px] sm:text-xs text-slate-500 mb-4 sm:mb-6">Del visitante a la compra</p>
          <div className="space-y-3">
            {conversionFunnel.map((step, i) => (
              <div key={step.stage}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs sm:text-sm text-slate-300">{step.stage}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">{step.count.toLocaleString()}</span>
                    <span className="text-xs text-cyan-400 font-mono font-semibold">{step.percentage}%</span>
                  </div>
                </div>
                <div className="h-2 sm:h-3 bg-white/[0.03] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: animated ? `${step.percentage}%` : '0%',
                      background: `linear-gradient(90deg, #06B6D4, ${i === 0 ? '#22D3EE' : '#3B82F6'})`,
                      transitionDelay: `${i * 150}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/60 rounded-xl sm:rounded-2xl p-4 sm:p-6">
          <h3 className="text-white font-semibold text-sm sm:text-base mb-1">Fuentes de Tráfico</h3>
          <p className="text-[10px] sm:text-xs text-slate-500 mb-4 sm:mb-6">De dónde vienen tus visitantes</p>
          <div className="space-y-3 sm:space-y-4">
            {trafficSources.map((src, i) => (
              <div key={src.source} className="flex items-center gap-3 sm:gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs sm:text-sm text-slate-300">{src.source}</span>
                    <span className="text-[10px] sm:text-xs text-slate-500 font-mono">{src.visits}</span>
                  </div>
                  <div className="h-1.5 sm:h-2 bg-white/[0.03] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: animated ? `${src.percentage}%` : '0%',
                        background: ['#06B6D4', '#3B82F6', '#E879F9', '#3B82F6', '#10B981'][i],
                        transitionDelay: `${i * 100 + 500}ms`,
                      }}
                    />
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-mono font-semibold text-white w-8 sm:w-10 text-right">{src.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function PlaceholderPage({ title, description, icon: Icon }: { title: string; description: string; icon: typeof Home }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 sm:py-24 text-center px-4">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400" />
      </div>
      <h1 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">{title}</h1>
      <p className="text-slate-500 text-sm max-w-md mb-6">{description}</p>
      <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium rounded-xl">
        Disponible en tu tienda personalizada
      </span>
    </div>
  );
}

export default function DemoEcommerceAdmin() {
  const [activePage, setActivePage] = useState<ActivePage>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifications] = useState(5);

  const renderPage = useCallback(() => {
    switch (activePage) {
      case 'dashboard': return <DashboardPage />;
      case 'products': return <ProductsPage />;
      case 'customers': return <CustomersPage />;
      case 'analytics': return <AnalyticsPage />;
      case 'orders': return <PlaceholderPage title="Gestión de Pedidos" description="Panel completo para gestionar todos los pedidos, cambiar estados, imprimir facturas y coordinar envíos." icon={ShoppingCart} />;
      case 'categories': return <PlaceholderPage title="Categorías" description="Organiza tu catálogo con categorías y subcategorías." icon={Layers} />;
      case 'coupons': return <PlaceholderPage title="Cupones y Descuentos" description="Crea cupones de descuento y promociones especiales." icon={Tag} />;
      case 'shipping': return <PlaceholderPage title="Gestión de Envíos" description="Configura zonas de envío, tarifas y rastreo de paquetes." icon={Truck} />;
      case 'settings': return <PlaceholderPage title="Configuración" description="Personaliza tu tienda: métodos de pago, impuestos y más." icon={Settings} />;
      default: return <DashboardPage />;
    }
  }, [activePage]);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col lg:flex-row" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-950 border-b border-cyan-500/30 text-cyan-400 text-center py-1.5 sm:py-2 text-[10px] sm:text-xs font-mono uppercase tracking-widest">
        DEMO <span className="hidden sm:inline">PANEL ADMIN //</span> <Link to="/" className="underline font-bold hover:text-white transition-colors">Balam Code</Link> <span className="hidden sm:inline">&mdash; <Link to="/" className="underline hover:text-white transition-colors">Solicita el tuyo</Link></span>
      </div>

      <aside className={`fixed top-[34px] sm:top-[38px] left-0 bottom-0 z-40 bg-slate-900/95 border-r border-slate-800/60 backdrop-blur-xl transition-all duration-300 ${
        sidebarCollapsed ? 'w-[72px]' : 'w-60'
      } hidden lg:flex flex-col`}>
        <div className="p-3 sm:p-4 border-b border-slate-800/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <ShoppingCart className="w-4 h-4 text-white" />
            </div>
            {!sidebarCollapsed && (
              <div>
                <p className="text-sm font-bold text-white">TechStore</p>
                <p className="text-[10px] text-slate-500 font-mono">Panel Admin</p>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 p-2 sm:p-3 space-y-1 overflow-y-auto">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id as ActivePage)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activePage === item.id
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!sidebarCollapsed && (
                  <>
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-[10px] font-mono font-bold rounded-full">{item.badge}</span>
                    )}
                  </>
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-3 border-t border-slate-800/60">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            aria-label={sidebarCollapsed ? 'Expandir menú' : 'Colapsar menú'}
            className="w-full flex items-center gap-3 px-3 py-2.5 min-h-[44px] rounded-xl text-sm text-slate-500 hover:text-white hover:bg-white/[0.04] transition-colors"
          >
            {sidebarCollapsed ? <ChevronRight className="w-5 h-5" /> : <><ChevronLeft className="w-5 h-5" /><span>Colapsar</span></>}
          </button>
        </div>
      </aside>

      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-[72px]' : 'lg:ml-60'}`}>
        <header className="sticky top-[34px] sm:top-[38px] z-30 bg-slate-950/[0.97] md:bg-slate-950/80 md:backdrop-blur-xl border-b border-slate-800/40">
          <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menú"
                aria-expanded={mobileMenuOpen}
                className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-white/[0.04] rounded-xl text-slate-400 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <div className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded-xl w-48 lg:w-72">
                <Search className="w-4 h-4 text-slate-500" />
                <input type="text" placeholder="Buscar..." className="bg-transparent text-sm text-white placeholder-slate-500 outline-none w-full" />
              </div>
              <span className="lg:hidden text-sm font-bold text-white">TechStore</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button aria-label="Notificaciones" className="relative min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-white/[0.04] rounded-xl text-slate-400 transition-colors">
                <Bell className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">{notifications}</span>
                )}
              </button>
              <div className="h-6 w-px bg-slate-800 hidden sm:block" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">AD</div>
                <div className="hidden md:block">
                  <p className="text-sm text-white font-medium">Admin</p>
                  <p className="text-[10px] text-slate-500">admin@techstore.hn</p>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-500 hidden sm:block" />
              </div>
            </div>
          </div>
        </header>

        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 top-[34px]">
            <div className="absolute inset-0 bg-black/60" onClick={() => setMobileMenuOpen(false)} />
            <div className="absolute left-0 top-0 bottom-0 w-64 bg-slate-900 border-r border-slate-800/60 overflow-y-auto">
              <div className="p-4 border-b border-slate-800/60">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <ShoppingCart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">TechStore</p>
                    <p className="text-[10px] text-slate-500 font-mono">Panel Admin</p>
                  </div>
                </div>
              </div>
              <nav className="p-3 space-y-1">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => { setActivePage(item.id as ActivePage); setMobileMenuOpen(false); }}
                      className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                        activePage === item.id
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                          : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="ml-auto px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-[10px] font-mono font-bold rounded-full">{item.badge}</span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        )}

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {renderPage()}
        </main>

        <footer className="border-t border-slate-800/40 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <p className="text-[10px] sm:text-xs text-slate-600">
            Demo por <Link to="/" className="text-cyan-500 hover:text-cyan-400 transition-colors font-medium">Balam Code</Link>
          </p>
          <Link to="/" className="text-[10px] sm:text-xs text-cyan-500 hover:text-cyan-400 transition-colors font-medium flex items-center gap-1">
            Quiero mi tienda <ArrowUpRight className="w-3 h-3" />
          </Link>
        </footer>
      </div>
    </div>
  );
}
