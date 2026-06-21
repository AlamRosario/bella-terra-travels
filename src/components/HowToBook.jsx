import { howToBook } from '../data/content';
import useInView from '../hooks/useInView';

export default function HowToBook() {
  const [ref, inView] = useInView();

  return (
    <section
      id="reservar"
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            CÓMO RESERVAR
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
            Reservar es así de fácil
          </h2>
        </div>

        <div className="relative">
          {/* connector line — desktop only */}
          <div
            className="hidden md:block absolute top-7 left-[calc(100%/6)] right-[calc(100%/6)] h-0.5 bg-navy/15"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {howToBook.map((step) => (
              <div key={step.step} className="flex flex-col items-center text-center">
                <div className="relative z-10 w-14 h-14 rounded-full bg-navy text-white flex items-center justify-center font-display font-bold text-xl mb-5 shadow-sm">
                  {step.step}
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{step.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed max-w-xs">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
