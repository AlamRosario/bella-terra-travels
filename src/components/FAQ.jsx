import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqCategories } from '../data/content';
import useInView from '../hooks/useInView';

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const [ref, inView] = useInView();

  const toggle = (key) => setOpen((prev) => (prev === key ? null : key));

  return (
    <section
      id="faq"
      ref={ref}
      className={`py-16 md:py-24 bg-white transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            PREGUNTAS FRECUENTES
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
            ¿Tienes dudas? Aquí te ayudamos
          </h2>
        </div>

        <div className="space-y-10">
          {faqCategories.map((cat, ci) => (
            <div key={ci}>
              <h3 className="font-display font-semibold text-navy text-lg mb-4 pb-2 border-b border-navy/10">
                {cat.category}
              </h3>
              <div className="space-y-2">
                {cat.faqs.map((faq, fi) => {
                  const key = `${ci}-${fi}`;
                  const isOpen = open === key;
                  return (
                    <div
                      key={fi}
                      className="border border-navy/10 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-cream/50 transition"
                      >
                        <span className="font-medium text-navy text-sm pr-4">{faq.q}</span>
                        <ChevronDown
                          size={18}
                          className={`shrink-0 text-navy/50 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-48' : 'max-h-0'
                        }`}
                      >
                        <p className="px-5 pb-4 text-navy/65 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
