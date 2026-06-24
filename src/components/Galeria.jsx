import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { supabase } from '../lib/supabase';
import useInView from '../hooks/useInView';
import Skeleton from './Skeleton';

export default function Galeria() {
  const [ref, inView] = useInView();
  const [galeria, setGaleria] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('galeria')
      .select('*')
      .eq('activo', true)
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        if (data) setGaleria(data);
        setLoading(false);
      });
  }, []);

  if (!loading && galeria.length === 0) return null;

  return (
    <section
      id="galeria"
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            GALERÍA
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
            Conoce nuestros hoteles
          </h2>
        </div>

        {loading ? (
          <Skeleton columns="md:grid-cols-2 lg:grid-cols-3" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galeria.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white border border-navy/8 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="overflow-hidden">
                  <img
                    src={hotel.imagen_url}
                    alt={hotel.nombre}
                    className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-navy text-xl mb-2">
                    {hotel.nombre}
                  </h3>
                  {hotel.destino && (
                    <div className="flex items-center gap-1.5 text-navy/60 text-sm mb-3">
                      <MapPin size={14} className="shrink-0" />
                      <span>{hotel.destino}</span>
                    </div>
                  )}
                  {hotel.descripcion && (
                    <p className="text-navy/65 text-sm leading-relaxed">{hotel.descripcion}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
