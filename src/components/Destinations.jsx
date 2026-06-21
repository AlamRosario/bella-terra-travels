import { MessageCircle } from 'lucide-react';
import { destinations, waLink } from '../data/content';
import useInView from '../hooks/useInView';

export default function Destinations() {
  const [ref, inView] = useInView();

  return (
    <section
      id="destinos"
      ref={ref}
      className={`py-16 md:py-24 bg-white transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            DESTINOS DESTACADOS
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
            Inspírate. Atrévete. Viaja.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white border border-navy/8 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-navy text-xl mb-2">{dest.name}</h3>
                <p className="text-navy/65 text-sm leading-relaxed mb-4">{dest.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {dest.highlights.map((h) => (
                    <span
                      key={h}
                      className="bg-cream text-navy/70 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <a
                    href={waLink(
                      `Hola, me gustaría saber más sobre el destino ${dest.name}. ¿Pueden informarme?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-whatsapp border border-whatsapp px-4 py-2 rounded-xl hover:bg-whatsapp/5 transition"
                  >
                    <MessageCircle size={16} />
                    Pregunta por este destino
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
