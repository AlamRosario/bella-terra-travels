import { MessageCircle } from 'lucide-react';
import heroImg from '../assets/hero.png';
import { waLink } from '../data/content';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Bella Terra Travels Tours"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/60" />

      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-4">
          Agencia de Viajes · República Dominicana
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
          Viaja sin complicaciones.{' '}
          <span className="text-gold">Disfruta cada momento.</span>
        </h1>
        <p className="text-white/85 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Diseñamos experiencias de viaje a la medida para familias dominicanas.
          Resorts todo incluido, tours internacionales y escapadas nacionales.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={waLink('Hola, me gustaría recibir información sobre viajes.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white font-semibold px-8 py-4 rounded-full hover:brightness-95 transition text-lg"
          >
            <MessageCircle size={22} />
            Reserva por WhatsApp
          </a>
          <a
            href="#ofertas"
            className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/15 transition text-lg"
          >
            Ver Ofertas
          </a>
        </div>
      </div>
    </section>
  );
}
