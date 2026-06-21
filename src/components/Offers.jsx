import { MapPin, Calendar, Clock, Users } from 'lucide-react';
import { offers, waLink } from '../data/content';
import useInView from '../hooks/useInView';

export default function Offers() {
  const [ref, inView] = useInView();

  return (
    <section
      id="ofertas"
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            OFERTAS
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
            Resorts y paquetes listos para reservar
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Selección curada por nuestro equipo. Tarifas y disponibilidad sujetas a cambio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.hotel}
                  className="w-full h-52 object-cover"
                />
                <span className="absolute top-3 left-3 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                  {offer.badge}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-navy text-xl mb-1">{offer.hotel}</h3>

                <div className="flex items-center gap-1.5 text-navy/60 text-sm mb-4">
                  <MapPin size={14} className="shrink-0" />
                  <span>{offer.location}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 bg-cream text-navy/70 text-xs px-3 py-1 rounded-full">
                    <Calendar size={12} />
                    {offer.dates}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-cream text-navy/70 text-xs px-3 py-1 rounded-full">
                    <Clock size={12} />
                    {offer.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-cream text-navy/70 text-xs px-3 py-1 rounded-full">
                    <Users size={12} />
                    {offer.persons}
                  </span>
                </div>

                <p className="text-navy/60 text-sm mb-5">
                  <span className="font-semibold text-navy">Incluye:</span> {offer.includes}
                </p>

                <div className="mt-auto">
                  <p className="font-display font-bold text-navy text-2xl">{offer.price}</p>
                  <p className="text-navy/50 text-xs mb-4">{offer.priceNote}</p>

                  <a
                    href={waLink(
                      `Hola, me interesa la oferta de ${offer.hotel}. ¿Pueden darme más información?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-whatsapp text-white font-semibold py-3 rounded-xl hover:brightness-95 transition text-sm"
                  >
                    Reservar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
