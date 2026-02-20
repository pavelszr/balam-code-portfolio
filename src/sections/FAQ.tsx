import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';

const faqs = [
  {
    question: '¿Cuánto cuesta una landing page?',
    answer: 'Desde L.6,000 en pago único o L.1,000/mes por 12 meses. Piénsalo así: por menos de L.35 al día tienes un vendedor digital trabajando para ti las 24 horas. Incluye absolutamente todo — hosting, dominio, SSL y soporte.',
  },
  {
    question: '¿Y si no funciona? ¿Pierdo mi dinero?',
    answer: 'Antes de pagar un centavo, te mostramos un mockup gratuito de cómo se verá TU landing page. Si no te convence, no pagas nada. Además, el 100% de nuestros clientes han quedado satisfechos con el resultado final.',
  },
  {
    question: '¿Cuánto tiempo toma tener mi sitio listo?',
    answer: '5-7 días hábiles. Cada día sin presencia digital son clientes que van directo a tu competencia. Por eso trabajamos rápido — para que empieces a captar clientes lo antes posible.',
  },
  {
    question: '¿Realmente necesito una landing page?',
    answer: 'Si tus clientes te buscan en Google y no te encuentran, están encontrando a tu competencia. El 97% de las personas buscan negocios locales online antes de comprar. Sin landing page, esos clientes no saben que existes.',
  },
  {
    question: '¿Qué incluye exactamente?',
    answer: 'Todo: diseño personalizado, responsive para celular/tablet/desktop, hosting por 1 año, dominio .com, certificado SSL, formulario de contacto, integración con WhatsApp, SEO configurado y soporte post-lanzamiento. Otros cobran por separado cada una de estas cosas.',
  },
  {
    question: '¿Trabajan solo en Honduras?',
    answer: 'Somos de Honduras pero empresas en Estados Unidos como Carilly y Helpher ya confían en nosotros. Trabajamos remoto con la misma calidad, comunicación directa por WhatsApp y en tu horario.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-medium rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                Preguntas Frecuentes
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                Antes de{' '}
                <span className="font-serif italic text-gradient-cyan">Decidir</span>
              </h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Entendemos que invertir en tu negocio es una decisión importante.
                Aquí respondemos las dudas más comunes para que decidas con confianza.
              </p>
              <div className="p-6 bg-white rounded-[1.5rem] border border-slate-100 shadow-sm">
                <p className="text-slate-700 font-medium mb-4">¿Tienes otra duda? Respondemos en minutos</p>
                <a
                  href="https://wa.me/50433672227?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo%20web.%20Me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-medium rounded-full transition-all duration-300"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Hablar con un Experto
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-[1.5rem] overflow-hidden transition-all duration-500 ${
                    isOpen
                      ? 'shadow-lg shadow-cyan-100/50 border border-cyan-200/60'
                      : 'border border-slate-100 hover:border-slate-200 hover:shadow-md hover:shadow-slate-100/50'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
                  >
                    <span className={`font-semibold pr-4 transition-colors duration-300 ${isOpen ? 'text-cyan-700' : 'text-slate-900 group-hover:text-slate-700'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      isOpen ? 'bg-gradient-to-br from-cyan-500 to-blue-500 rotate-180 shadow-lg shadow-cyan-500/20' : 'bg-slate-100 group-hover:bg-slate-200'
                    }`}>
                      <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? 'text-white' : 'text-slate-500'}`} />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
