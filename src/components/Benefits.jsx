import * as Icons from 'lucide-react';
import { benefits } from '../data/content';
import useInView from '../hooks/useInView';

export default function Benefits() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-navy transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            POR QUÉ BELLA TERRA
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Beneficios de reservar con nosotros
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = Icons[benefit.icon] || Icons.Star;
            return (
              <div
                key={i}
                className="bg-white/8 border border-white/10 rounded-2xl p-6 hover:bg-white/12 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-gold" />
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">{benefit.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
