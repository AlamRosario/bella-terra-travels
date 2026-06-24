import { useEffect, useState } from 'react';
import { MapPin, Calendar, MessageCircle } from 'lucide-react';
import { waLink } from '../data/content';
import { supabase } from '../lib/supabase';
import useInView from '../hooks/useInView';
import Skeleton from './Skeleton';

export default function Eventos() {
  const [ref, inView] = useInView();
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('eventos')
      .select('*')
      .eq('activo', true)
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        if (data) setEventos(data);
        setLoading(false);
      });
  }, []);

  if (!loading && eventos.length === 0) return null;

  return (
    <section
      id="eventos"
      ref={ref}
      className={`py-16 md:py-24 bg-white transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            EVENTOS Y TOURS
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
            Vive experiencias únicas
          </h2>
        </div>

        {loading ? (
          <Skeleton columns="md:grid-cols-2 lg:grid-cols-3" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventos.map((evento) => (
              <div
                key={evento.id}
                className="bg-white border border-navy/8 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative">
                  <img
                    src={evento.imagen_url}
                    alt={evento.titulo}
                    className="w-full h-52 object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                    {evento.tipo}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-navy text-xl mb-2">
                    {evento.titulo}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {evento.ubicacion && (
                      <span className="inline-flex items-center gap-1 bg-cream text-navy/70 text-xs px-3 py-1 rounded-full">
                        <MapPin size={12} />
                        {evento.ubicacion}
                      </span>
                    )}
                    {evento.fecha && (
                      <span className="inline-flex items-center gap-1 bg-cream text-navy/70 text-xs px-3 py-1 rounded-full">
                        <Calendar size={12} />
                        {evento.fecha}
                      </span>
                    )}
                  </div>

                  {evento.descripcion && (
                    <p className="text-navy/60 text-sm leading-relaxed mb-5">
                      {evento.descripcion}
                    </p>
                  )}

                  <div className="mt-auto">
                    <a
                      href={waLink(
                        `Hola, me interesa el evento "${evento.titulo}". ¿Pueden darme más información?`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-whatsapp border border-whatsapp px-4 py-2 rounded-xl hover:bg-whatsapp/5 transition"
                    >
                      <MessageCircle size={16} />
                      Pregunta por este evento
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
