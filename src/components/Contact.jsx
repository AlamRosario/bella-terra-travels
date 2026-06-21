import { MessageCircle, Mail, MapPin } from 'lucide-react';
import { contactInfo, waLink } from '../data/content';
import useInView from '../hooks/useInView';

const cards = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: contactInfo.whatsapp,
    href: waLink('Hola, me gustaría recibir información sobre viajes.'),
  },
  {
    icon: Mail,
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: MapPin,
    label: 'Dirección',
    value: contactInfo.address,
    href: null,
  },
];

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section
      id="contacto"
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            CONTACTO
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-3">
            Hablemos de tu próximo viaje
          </h2>
          <p className="text-navy/60 text-lg">Estamos a un mensaje de distancia.</p>
        </div>

        <div className="flex justify-center mb-12">
          <a
            href={waLink('Hola, me gustaría recibir información sobre viajes.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-whatsapp text-white font-semibold text-lg px-10 py-4 rounded-full hover:brightness-95 transition shadow-sm"
          >
            <MessageCircle size={24} />
            Escribir por WhatsApp
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {cards.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="bg-white border border-navy/8 rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mx-auto mb-3">
                <Icon size={22} className="text-navy" />
              </div>
              <p className="font-display font-semibold text-navy text-sm mb-1">{label}</p>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy/65 text-sm hover:text-navy transition break-all"
                >
                  {value}
                </a>
              ) : (
                <p className="text-navy/65 text-sm">{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
