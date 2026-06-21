import { MessageCircle, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo-blanco.jpeg';
import { contactInfo } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Bella Terra Travels Tours"
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Imagina. Atrévete. Disfruta.{' '}
              <span className="text-white/90">Nosotros lo hacemos realidad.</span>
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <MessageCircle size={16} className="shrink-0 text-gold" />
                {contactInfo.whatsapp}
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Mail size={16} className="shrink-0 text-gold" />
                {contactInfo.email}
              </li>
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin size={16} className="shrink-0 text-gold mt-0.5" />
                {contactInfo.address}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              >
                {/* Instagram icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              >
                {/* Facebook icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
            <p className="text-white/40 text-xs mt-4">
              {/* TODO: update instagram and facebook links */}
              Redes sociales próximamente activas.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-white/40 text-xs px-4">
        © 2026 Bella Terra Travels Tours. Todos los derechos reservados.
      </div>
    </footer>
  );
}
