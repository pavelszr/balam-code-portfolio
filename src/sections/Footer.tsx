import { Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from '../components/SocialIcons';

const footerLinks = {
  services: [
    { label: 'Landing Pages', href: '#servicios' },
    { label: 'E-commerce', href: '#servicios' },
    { label: 'Diseño Web', href: '#servicios' },
    { label: 'SEO y Marketing', href: '#servicios' },
  ],
  company: [
    { label: 'Sobre Nosotros', href: '#about' },
    { label: 'Portafolio', href: '#portfolio' },
    { label: 'Precios', href: '#pricing' },
    { label: 'Testimonios', href: '#testimonios' },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-white relative overflow-hidden rounded-t-[3rem] lg:rounded-t-[4rem]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10">
        <div className="border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <img src="/balam-logo.png" alt="Balam Code" className="h-14 w-auto brightness-0 invert" />
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
                    Cada día que pasa,{' '}
                    <span className="font-serif italic text-cyan-400" style={{ textShadow: '0 0 30px rgba(6, 182, 212, 0.3)' }}>pierdes clientes</span>
                  </h2>
                  <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    Mientras lo piensas, tu competencia ya está captando a tus clientes
                    potenciales. Una consulta gratuita de 15 minutos puede cambiar tu negocio.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/50433672227?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo%20web.%20Me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="magnetic-btn flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-400 hover:to-emerald-300 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-green-500/20"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      Escribir Ahora
                    </a>
                    <button
                      onClick={() => window.location.href = 'mailto:contacto@balamcode.com'}
                      className="magnetic-btn flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] text-white font-semibold rounded-full transition-all duration-300"
                    >
                      <Mail className="w-5 h-5" />
                      Enviar Email
                    </button>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 rounded-[2rem] p-8 backdrop-blur-sm">
                  <h3 className="font-display text-lg font-semibold mb-6">Información de Contacto</h3>
                  <div className="space-y-5">
                    <a href="mailto:contacto@balamcode.com" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                        <Mail className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-mono">Email</p>
                        <p className="text-slate-300 group-hover:text-white transition-colors">contacto@balamcode.com</p>
                      </div>
                    </a>
                    <a href="tel:+50433672227" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                        <Phone className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-mono">Teléfono</p>
                        <p className="text-slate-300 group-hover:text-white transition-colors">+504 3367-2227</p>
                      </div>
                    </a>
                    <a href="https://wa.me/50433672227?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo%20web.%20Me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                        <WhatsAppIcon className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-mono">WhatsApp</p>
                        <p className="text-slate-300 group-hover:text-white transition-colors">+504 3367-2227</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-mono">Ubicación</p>
                        <p className="text-slate-300">Honduras</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-800">
                    <p className="text-xs text-slate-500 mb-3 font-mono">Clientes en</p>
                    <div className="flex gap-3">
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium rounded-full">Estados Unidos</span>
                      <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">Honduras</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="col-span-2 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/balam-logo.png" alt="Balam Code" className="h-12 w-auto brightness-0 invert" />
              </div>
              <p className="text-slate-400 text-sm mb-6 max-w-xs leading-relaxed">
                Desarrollo web profesional desde Honduras para el mundo.
                Landing pages, e-commerce y soluciones digitales a medida.
              </p>
              <div className="flex gap-3">
                <a href="https://wa.me/50433672227?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo%20web.%20Me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-green-500/10 hover:border-green-500/20 hover:text-green-400 transition-all duration-300">
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/balamcodehn/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-500/10 hover:border-pink-500/20 hover:text-pink-400 transition-all duration-300">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href="mailto:contacto@balamcode.com" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-500/10 hover:border-cyan-500/20 hover:text-cyan-400 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-[0.15em] text-slate-400 font-mono">Servicios</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-slate-500 hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-[0.15em] text-slate-400 font-mono">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-slate-500 hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate-600 flex items-center gap-1">
                © 2026 Balam Code. Hecho con <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> en Honduras.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Sistema Operativo</span>
                </div>
                <a href="#" className="text-sm text-slate-600 hover:text-slate-400 transition-colors">Privacidad</a>
                <a href="#" className="text-sm text-slate-600 hover:text-slate-400 transition-colors">Términos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
