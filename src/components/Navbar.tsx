import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#pricing', label: 'Precios' },
  { href: '#portfolio', label: 'Portafolio' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#about', label: 'Nosotros' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isScrolled
            ? 'w-full max-w-4xl bg-white/70 backdrop-blur-2xl border border-white/50 shadow-xl shadow-slate-900/[0.06] rounded-full px-6 py-2.5'
            : 'w-full max-w-7xl bg-transparent px-6 py-3'
        }`}
      >
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img
              src="/balam-logo.png"
              alt="Balam Code"
              className={`h-14 w-auto transition-all duration-500 ${isScrolled ? '' : 'brightness-0 invert'}`}
            />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 tracking-tight ${
                  isScrolled
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/50433672227?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo%20web.%20Me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
                  : 'text-white/80 hover:text-white border border-white/20 hover:bg-white/10'
              }`}
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className={`magnetic-btn px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-white text-slate-900 hover:bg-cyan-50'
              }`}
            >
              Solicitar Demo
            </button>
          </div>

          <button
            className={`lg:hidden p-2 rounded-full ${
              isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed top-20 left-4 right-4 bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/50 transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 py-3 px-4 rounded-xl transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 space-y-3 border-t border-slate-100 mt-4">
            <a
              href="https://wa.me/50433672227?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo%20web.%20Me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 border border-slate-200 text-slate-700 font-medium rounded-xl"
            >
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full py-3 bg-cyan-500 text-white font-semibold rounded-xl"
            >
              Solicitar Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
