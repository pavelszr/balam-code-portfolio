import { Link } from 'react-router-dom';
import { Phone, MapPin, Search, ShoppingCart, Star, Truck, Shield, Clock, Tag, ChevronRight, Package, Wrench, Zap, Droplets, HardHat, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { WhatsAppIcon, FacebookIcon, InstagramIcon, TikTokIcon, GoogleMapsIcon } from '../components/SocialIcons';

const categories = [
  { name: 'Todos', icon: Package, count: 8 },
  { name: 'Herramientas', icon: Wrench, count: 3 },
  { name: 'Pintura', icon: Tag, count: 2 },
  { name: 'Electricidad', icon: Zap, count: 1 },
  { name: 'Plomeria', icon: Droplets, count: 1 },
  { name: 'Construccion', icon: HardHat, count: 1 },
];

const products = [
  { name: 'Taladro Inalambrico DeWalt 20V', price: 'L.2,450', oldPrice: 'L.2,900', category: 'Herramientas', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&q=80', rating: 4.8, reviews: 124, badge: 'MAS VENDIDO', stock: 85 },
  { name: 'Pintura Acrilica Premium 1 Gal', price: 'L.650', oldPrice: '', category: 'Pintura', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&q=80', rating: 4.5, reviews: 67, badge: '', stock: 120 },
  { name: 'Kit Llaves Allen Chrome 30pcs', price: 'L.380', oldPrice: 'L.450', category: 'Herramientas', image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400&q=80', rating: 4.7, reviews: 89, badge: 'OFERTA', stock: 45 },
  { name: 'Cable Electrico THW 12AWG', price: 'L.45/m', oldPrice: '', category: 'Electricidad', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80', rating: 4.6, reviews: 156, badge: '', stock: 300 },
  { name: 'Tubo PVC Sanitario 4" x 6m', price: 'L.320', oldPrice: '', category: 'Plomeria', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&q=80', rating: 4.4, reviews: 43, badge: '', stock: 60 },
  { name: 'Cemento Gris Portland 42.5kg', price: 'L.245', oldPrice: '', category: 'Construccion', image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400&q=80', rating: 4.9, reviews: 201, badge: 'TOP', stock: 500 },
  { name: 'Sierra Circular Bosch 7-1/4"', price: 'L.3,200', oldPrice: 'L.3,800', category: 'Herramientas', image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&q=80', rating: 4.8, reviews: 95, badge: 'OFERTA', stock: 22 },
  { name: 'Set Rodillos Pro + Bandeja', price: 'L.185', oldPrice: '', category: 'Pintura', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&q=80', rating: 4.3, reviews: 38, badge: '', stock: 78 },
];

const brandLogos = [
  { name: 'DeWalt', src: '/brands/DeWalt_Logo.svg.png' },
  { name: 'Stanley', src: '/brands/stanley-thumb.png' },
  { name: 'Makita', src: '/brands/Makita_Logo.svg.png' },
];

const cautionStripe = 'repeating-linear-gradient(135deg, #EAB308 0px, #EAB308 10px, #171717 10px, #171717 20px)';

export default function DemoFerremax() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filtered = products.filter(p => {
    const matchCategory = activeCategory === 'Todos' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const getStockColor = (stock: number) => {
    if (stock > 100) return 'bg-green-500';
    if (stock > 30) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getStockWidth = (stock: number) => {
    return Math.min((stock / 500) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-neutral-950 overflow-x-hidden" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="fixed top-0 left-0 right-0 z-50 bg-neutral-950 border-b-2 border-yellow-500 text-yellow-500 text-center py-2 text-xs font-mono uppercase tracking-widest">
        // DEMO // Creado por <Link to="/" className="underline font-bold hover:text-white transition-colors">Balam Code</Link> &mdash; <Link to="/" className="underline hover:text-white transition-colors">Solicita el tuyo</Link> //
      </div>

      <nav className="sticky top-8 z-40 bg-neutral-900 border-b-4 border-yellow-500">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-yellow-500 flex items-center justify-center bg-neutral-950">
              <Wrench className="w-5 h-5 text-yellow-500" />
            </div>
            <span className="font-mono text-xl font-bold tracking-wider">
              <span className="text-yellow-500">FERRE</span>
              <span className="text-white">MAX</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center border-2 border-neutral-700 bg-neutral-950 px-4 py-2 w-96">
            <Search className="w-4 h-4 text-neutral-500 mr-3" />
            <input
              type="text"
              placeholder="BUSCAR PRODUCTOS..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent outline-none text-sm w-full font-mono text-neutral-300 placeholder-neutral-600 uppercase tracking-wider"
            />
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:+50425678901" className="hidden md:flex items-center gap-2 text-neutral-400 text-sm font-mono hover:text-yellow-500 transition-colors tracking-wider">
              <Phone className="w-4 h-4" />
              <span>2567-8901</span>
            </a>
            <button onClick={() => setCartCount(c => c)} aria-label="Carrito de compras" className="relative min-w-[44px] min-h-[44px] flex items-center justify-center border-2 border-neutral-700 bg-neutral-950 hover:border-yellow-500 transition-colors">
              <ShoppingCart className="w-5 h-5 text-neutral-400" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-500 text-neutral-950 text-xs font-mono font-bold flex items-center justify-center">{cartCount}</span>
              )}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menú" aria-expanded={mobileMenuOpen} className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center border-2 border-neutral-700 bg-neutral-950 hover:border-yellow-500 transition-colors">
              {mobileMenuOpen ? <X className="w-5 h-5 text-neutral-400" /> : <Menu className="w-5 h-5 text-neutral-400" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t-2 border-neutral-700 bg-neutral-900 px-4 py-4">
            <div className="flex items-center border-2 border-neutral-700 bg-neutral-950 px-4 py-2 mb-4">
              <Search className="w-4 h-4 text-neutral-500 mr-3" />
              <input
                type="text"
                placeholder="BUSCAR..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent outline-none text-sm w-full font-mono text-neutral-300 placeholder-neutral-600 uppercase tracking-wider"
              />
            </div>
            <div className="space-y-1">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.name}
                    onClick={() => { setActiveCategory(cat.name); setMobileMenuOpen(false); }}
                    className={`w-full flex items-center justify-between px-3 py-2 font-mono text-sm uppercase tracking-wider transition-colors ${
                      activeCategory === cat.name
                        ? 'bg-yellow-500 text-neutral-950'
                        : 'text-neutral-400 hover:text-yellow-500'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {cat.name}
                    </span>
                    <span className="font-bold">{cat.count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      <div className="h-2" style={{ background: cautionStripe }} />

      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #171717 50%, #0a0a0a 100%)' }}>
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 49px, #666 49px, #666 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, #666 49px, #666 50px)' }} />
        <div className="max-w-[1400px] mx-auto px-4 py-20 md:py-32 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-neutral-800 max-w-[100px]" />
              <span className="font-mono text-yellow-500 text-sm uppercase tracking-[0.3em]">Ferreteria Industrial</span>
              <div className="h-px flex-1 bg-neutral-800 max-w-[100px]" />
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase leading-[0.85] tracking-tight mb-8">
              TODO PARA
              <br />
              <span className="text-yellow-500">TU OBRA</span>
            </h1>
            <div className="h-1 w-32 bg-yellow-500 mb-8" />
            <p className="font-mono text-neutral-400 text-sm md:text-base max-w-xl leading-relaxed uppercase tracking-wider mb-10">
              +5,000 productos en stock. Herramientas profesionales, materiales de construccion y envio a todo Honduras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#catalogo" className="group px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-neutral-950 font-mono font-bold uppercase tracking-widest text-sm transition-colors text-center flex items-center justify-center gap-3">
                VER CATALOGO
                <ChevronRight className="w-4 h-4" />
              </a>
              <a href="https://wa.me/50425678901" className="px-10 py-4 border-2 border-neutral-700 hover:border-yellow-500 text-neutral-300 hover:text-yellow-500 font-mono font-bold uppercase tracking-widest text-sm transition-colors text-center flex items-center justify-center gap-3">
                <WhatsAppIcon className="w-4 h-4" />
                COTIZACION AL MAYOR
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-2 border-neutral-800 max-w-2xl">
              {[
                { icon: Truck, text: 'ENVIO A TODO HONDURAS' },
                { icon: Shield, text: 'GARANTIA EN TODO' },
                { icon: Clock, text: 'ENTREGA 24-48H' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className={`flex items-center gap-3 px-4 py-3 ${i < 2 ? 'border-b-2 sm:border-b-0 sm:border-r-2 border-neutral-800' : ''}`}>
                    <Icon className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                    <span className="font-mono text-neutral-500 text-xs uppercase tracking-wider">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-2" style={{ background: cautionStripe }} />

      <section className="py-0 bg-neutral-900 border-y-2 border-neutral-800">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {[
            { value: '5,000+', label: 'PRODUCTOS EN STOCK' },
            { value: '10,000+', label: 'CLIENTES' },
            { value: '24-48H', label: 'ENTREGA' },
            { value: '100%', label: 'GARANTIZADO' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-4 sm:p-6 md:p-8 text-center border-neutral-800 ${i % 2 === 0 ? 'border-r-2' : ''} ${i < 2 ? 'border-b-2' : ''} ${i === 2 ? 'lg:border-r-2' : ''} lg:border-b-0 ${i < 3 ? 'lg:border-r-2' : ''}`}
            >
              <p className="font-mono text-3xl md:text-5xl font-black text-yellow-500 mb-2">{stat.value}</p>
              <p className="font-mono text-neutral-500 text-[10px] md:text-xs uppercase tracking-[0.2em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="catalogo" className="bg-neutral-950">
        <div className="max-w-[1400px] mx-auto">
          <div className="px-4 pt-16 pb-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px flex-1 bg-neutral-800 max-w-[60px]" />
              <span className="font-mono text-yellow-500 text-xs uppercase tracking-[0.3em]">Catalogo</span>
            </div>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">PRODUCTOS</h2>
                <p className="font-mono text-neutral-600 text-sm mt-2 uppercase tracking-wider">{filtered.length} resultados</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <aside className="hidden lg:block w-64 flex-shrink-0 border-r-2 border-neutral-800 bg-neutral-900">
              <div className="sticky top-24">
                <div className="px-4 py-3 border-b-2 border-neutral-800">
                  <span className="font-mono text-neutral-500 text-[10px] uppercase tracking-[0.3em]">Categorias</span>
                </div>
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.name}
                      onClick={() => setActiveCategory(cat.name)}
                      className={`w-full flex items-center justify-between px-4 py-3 border-b border-neutral-800 font-mono text-sm uppercase tracking-wider transition-colors ${
                        activeCategory === cat.name
                          ? 'bg-yellow-500 text-neutral-950 border-yellow-500'
                          : 'text-neutral-500 hover:text-yellow-500 hover:bg-neutral-800/50'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="w-4 h-4" />
                        {cat.name}
                      </span>
                      <span className={`font-bold text-xs ${activeCategory === cat.name ? 'text-neutral-950' : 'text-neutral-700'}`}>{cat.count}</span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 border-t-2 border-neutral-800">
                {filtered.map((product, i) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group border-b-2 border-r-2 border-neutral-800 bg-neutral-950 hover:bg-neutral-900 transition-colors relative"
                  >
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500 transition-colors pointer-events-none z-10" aria-hidden="true" />
                    <div className="relative overflow-hidden bg-neutral-900 border-b-2 border-neutral-800">
                      <img src={product.image} alt={product.name} width={400} height={300} loading="lazy" className="w-full h-48 aspect-[4/3] object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                      {product.badge && (
                        <span className={`absolute top-0 left-0 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider ${
                          product.badge === 'OFERTA' ? 'bg-red-600 text-white' : product.badge === 'MAS VENDIDO' ? 'bg-yellow-500 text-neutral-950' : 'bg-orange-500 text-white'
                        }`}>
                          {product.badge}
                        </span>
                      )}
                      <button
                        onClick={() => setCartCount(c => c + 1)}
                        aria-label={`Agregar ${product.name} al carrito`}
                        className="absolute bottom-0 right-0 min-w-[44px] min-h-[44px] flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-neutral-950 transition-colors"
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-4">
                      <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-[0.2em]">{product.category}</span>
                      <h3 className="font-bold text-white text-sm mt-1 mb-2 uppercase leading-tight">{product.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          <span className="font-mono text-xs text-neutral-400">{product.rating}</span>
                        </div>
                        <span className="font-mono text-[10px] text-neutral-700">({product.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-xl font-black text-yellow-500">{product.price}</span>
                        {product.oldPrice && (
                          <span className="font-mono text-sm text-neutral-600 line-through">{product.oldPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-neutral-800">
                          <div className={`h-full ${getStockColor(product.stock)}`} style={{ width: `${getStockWidth(product.stock)}%` }} />
                        </div>
                        <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-wider">{product.stock} uds</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-2" style={{ background: cautionStripe }} />

      <section className="py-16 bg-neutral-900 border-b-2 border-neutral-800">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-px flex-1 bg-neutral-800 max-w-[60px]" />
            <span className="font-mono text-yellow-500 text-xs uppercase tracking-[0.3em]">Aliados</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-10">MARCAS QUE VENDEMOS</h2>
          <div className="grid grid-cols-3 gap-0">
            {brandLogos.map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border-2 border-neutral-800 p-8 flex items-center justify-center hover:border-yellow-500 hover:bg-neutral-800/30 transition-colors group h-28"
              >
                <div className="w-44 h-12 opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0 flex items-center justify-center">
                  <img src={brand.src} alt="" aria-hidden="true" width={176} height={48} loading="lazy" className="max-w-full max-h-full object-contain invert brightness-200" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #171717 100%)' }}>
        <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 49px, #EAB308 49px, #EAB308 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, #EAB308 49px, #EAB308 50px)' }} />
        <div className="h-2" style={{ background: cautionStripe }} />
        <div className="max-w-[1400px] mx-auto px-4 py-20 md:py-28 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-4">
              COTIZACION <span className="text-yellow-500">AL MAYOR</span>
            </h2>
            <p className="font-mono text-neutral-500 text-sm uppercase tracking-wider mb-10 max-w-xl mx-auto">
              Precios especiales para constructoras, contratistas y negocios. Envio gratis en compras mayores a L.5,000.
            </p>
            <a href="tel:+50425678901" className="inline-block font-mono text-5xl sm:text-6xl md:text-8xl font-black text-yellow-500 hover:text-yellow-400 transition-colors tracking-wider mb-10">
              2567-8901
            </a>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="https://wa.me/50425678901" className="px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-neutral-950 font-mono font-bold uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-3">
                <WhatsAppIcon className="w-5 h-5" />
                WHATSAPP
              </a>
              <a href="tel:+50425678901" className="px-10 py-4 border-2 border-neutral-700 hover:border-yellow-500 text-neutral-300 hover:text-yellow-500 font-mono font-bold uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                LLAMAR AHORA
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-neutral-600 font-mono text-xs uppercase tracking-wider">
              <span className="flex items-center gap-2"><GoogleMapsIcon className="w-4 h-4 flex-shrink-0" />Blvd. Morazan, Tegucigalpa</span>
              <span className="hidden sm:inline">|</span>
              <span>Lun-Sab 7AM-6PM</span>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-neutral-950 border-t-4 border-yellow-500">
        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border-2 border-yellow-500 flex items-center justify-center">
                  <Wrench className="w-4 h-4 text-yellow-500" />
                </div>
                <span className="font-mono text-lg font-bold tracking-wider">
                  <span className="text-yellow-500">FERRE</span>
                  <span className="text-white">MAX</span>
                </span>
              </div>
              <p className="font-mono text-neutral-600 text-xs uppercase tracking-wider leading-relaxed">
                La ferreteria mas completa de Honduras. Todo para tu obra en un solo lugar.
              </p>
            </div>

            <div>
              <h4 className="font-mono text-[10px] text-yellow-500 uppercase tracking-[0.3em] mb-4 pb-2 border-b border-neutral-800">Categorias</h4>
              <ul className="space-y-2">
                {['Herramientas', 'Pintura', 'Electricidad', 'Plomeria', 'Construccion', 'Tornilleria'].map(cat => (
                  <li key={cat}>
                    <span className="font-mono text-neutral-500 text-xs uppercase tracking-wider hover:text-yellow-500 transition-colors cursor-pointer">{cat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[10px] text-yellow-500 uppercase tracking-[0.3em] mb-4 pb-2 border-b border-neutral-800">Contacto</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                  <a href="tel:+50425678901" className="font-mono text-neutral-500 text-xs tracking-wider hover:text-yellow-500 transition-colors">+504 2567-8901</a>
                </li>
                <li className="flex items-center gap-2">
                  <WhatsAppIcon className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                  <a href="https://wa.me/50425678901" className="font-mono text-neutral-500 text-xs tracking-wider hover:text-yellow-500 transition-colors">WhatsApp</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3 h-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="font-mono text-neutral-500 text-xs tracking-wider">Blvd. Morazan, Tegucigalpa</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                  <span className="font-mono text-neutral-500 text-xs tracking-wider">Lun-Sab 7AM-6PM</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[10px] text-yellow-500 uppercase tracking-[0.3em] mb-4 pb-2 border-b border-neutral-800">Siguenos</h4>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-2 text-neutral-500 hover:text-yellow-500 transition-colors cursor-pointer">
                  <FacebookIcon className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase tracking-wider">Facebook</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-neutral-500 hover:text-yellow-500 transition-colors cursor-pointer">
                  <InstagramIcon className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase tracking-wider">Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-neutral-500 hover:text-yellow-500 transition-colors cursor-pointer">
                  <TikTokIcon className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase tracking-wider">TikTok</span>
                </a>
              </div>
              <div className="mt-6 border-2 border-dashed border-neutral-800 p-3">
                <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-wider block mb-1">Envio gratis desde</span>
                <span className="font-mono text-yellow-500 font-bold text-lg">L.5,000</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-neutral-800 mb-6" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-neutral-700 text-[10px] uppercase tracking-wider">&copy; 2025 FerreMax &mdash; Todos los derechos reservados</p>
            <p className="font-mono text-neutral-700 text-[10px] uppercase tracking-wider">
              Ejemplo creado por <Link to="/" className="text-yellow-500 hover:underline">Balam Code</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
