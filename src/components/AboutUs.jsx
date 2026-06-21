import useInView from '../hooks/useInView';

const FAMILY_IMG =
  'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=900';

export default function AboutUs() {
  const [ref, inView] = useInView();

  return (
    <section
      id="nosotros"
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src={FAMILY_IMG}
              alt="Familia disfrutando en resort"
              className="w-full h-80 md:h-[480px] object-cover"
            />
          </div>

          <div>
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
              QUIÉNES SOMOS
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              Tu agencia de confianza para viajes inolvidables
            </h2>
            <p className="text-navy/70 text-lg leading-relaxed mb-5">
              En <strong className="text-navy">BELLA TERRA TRAVELS TOURS</strong> diseñamos
              experiencias hechas a la medida: desde resorts todo incluido en Punta Cana hasta tours
              internacionales y escapadas familiares.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed">
              Trabajamos con cercanía, transparencia y pasión por el detalle. Te acompañamos antes,
              durante y después de tu viaje para que solo te preocupes por disfrutar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
