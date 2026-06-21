import * as Icons from 'lucide-react';
import { services } from '../data/content';
import useInView from '../hooks/useInView';

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section
      id="servicios"
      ref={ref}
      className={`py-16 md:py-24 bg-white transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            SERVICIOS
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
            Todo lo que necesitas para viajar
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Reserva con un solo equipo, sin complicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = Icons[service.icon] || Icons.Star;
            return (
              <div
                key={service.id}
                className="bg-white border border-navy/8 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mb-4">
                  <Icon size={24} className="text-navy" />
                </div>
                <h3 className="font-display font-semibold text-navy text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed">{service.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
