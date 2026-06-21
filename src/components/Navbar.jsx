import { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import logo from '../assets/logo-blanco.jpeg';
import { waLink } from '../data/content';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes somos', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Ofertas', href: '#ofertas' },
  { label: 'Destinos', href: '#destinos' },
  { label: 'Preguntas frecuentes', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Bella Terra Travels Tours" className="h-12 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/80 hover:text-navy transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink('Hola, me gustaría recibir información sobre viajes.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-whatsapp text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:brightness-95 transition"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-navy"
            aria-label="Abrir menú"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-cream border-t border-navy/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-navy font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href={waLink('Hola, me gustaría recibir información sobre viajes.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white font-semibold px-5 py-3 rounded-full"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
