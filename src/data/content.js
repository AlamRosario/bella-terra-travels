const PHONE = '18295949060';

export const waLink = (msg) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

export const contactInfo = {
  whatsapp: '+1 (829) 594-9060',
  whatsappRaw: PHONE,
  email: 'bellaterratravel01@gmail.com',
  address: 'Santo Domingo, República Dominicana',
  instagram: '#',
  facebook: '#',
};

export const services = [
  {
    id: 1,
    icon: 'Building2',
    title: 'Resorts Todo Incluido',
    text: 'Las mejores opciones de resorts all-inclusive en Punta Cana, Puerto Plata, La Romana y más destinos de RD.',
  },
  {
    id: 2,
    icon: 'Plane',
    title: 'Boletos Aéreos',
    text: 'Conseguimos los mejores precios en boletos aéreos nacionales e internacionales para tu destino.',
  },
  {
    id: 3,
    icon: 'Globe',
    title: 'Tours Internacionales',
    text: 'Paquetes completos a México, Cancún, Europa, Caribe y los destinos más soñados del mundo.',
  },
  {
    id: 4,
    icon: 'Compass',
    title: 'Excursiones',
    text: 'Actividades y excursiones en los destinos más emocionantes de República Dominicana.',
  },
  {
    id: 5,
    icon: 'Sun',
    title: 'Daypass',
    text: 'Acceso de un día a los mejores resorts de República Dominicana sin necesidad de hospedarte.',
  },
  {
    id: 6,
    icon: 'Car',
    title: 'Traslados',
    text: 'Servicio de traslado aeropuerto-hotel y transporte terrestre en todo el país.',
  },
  {
    id: 7,
    icon: 'Home',
    title: 'Villas / Airbnb',
    text: 'Selección de villas privadas y alquileres vacacionales para grupos y familias.',
  },
];

export const offers = [
  {
    id: 1,
    badge: 'OFERTA',
    hotel: 'PlayaBachata Resort',
    location: 'Puerto Plata, República Dominicana',
    dates: 'Jun – Ago 2026',
    duration: '3 noches',
    persons: '2 personas',
    includes: 'Todo incluido · Traslados desde SDQ',
    price: 'RD$16,995',
    priceNote: 'por persona · hab. doble',
    image:
      'https://images.pexels.com/photos/29221468/pexels-photo-29221468.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    badge: 'MÁS VENDIDO',
    hotel: 'Hotel Royalton Splash',
    location: 'Punta Cana, República Dominicana',
    dates: 'Jun – Sep 2026',
    duration: '3 noches',
    persons: '2 personas',
    includes: 'Todo incluido · Vuelos opcionales',
    price: 'Desde US$135',
    priceNote: 'por noche · por habitación',
    image:
      'https://images.pexels.com/photos/2646070/pexels-photo-2646070.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    badge: 'IDEAL FAMILIAS',
    hotel: 'PlayaBachata Resort',
    location: 'Puerto Plata, República Dominicana',
    dates: 'Jul – Oct 2026',
    duration: '4 noches',
    persons: 'Familia 4 pax',
    includes: 'Todo incluido · Traslados · Kids Club',
    price: 'RD$20,764',
    priceNote: 'por familia (2 adultos + 2 niños)',
    image:
      'https://images.pexels.com/photos/11556613/pexels-photo-11556613.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    badge: 'LUJO',
    hotel: 'Grand Palladium Punta Cana',
    location: 'Punta Cana, República Dominicana',
    dates: 'Jul – Nov 2026',
    duration: '4 noches',
    persons: '2 personas',
    includes: 'Todo incluido · Butler service · 7 piscinas',
    price: 'Desde USD$150',
    priceNote: 'por noche · por habitación',
    image:
      'https://images.pexels.com/photos/14259595/pexels-photo-14259595.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const destinations = [
  {
    id: 1,
    name: 'Santo Domingo',
    description:
      'La Ciudad Colonial más antigua del Nuevo Mundo. Historia, gastronomía y vida nocturna en la vibrante capital dominicana.',
    highlights: ['Ciudad Colonial UNESCO', 'Malecón', 'Gastronomía', 'Vida nocturna'],
    image:
      'https://images.pexels.com/photos/5961909/pexels-photo-5961909.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    name: 'Punta Cana',
    description:
      'Playas de arena blanca y aguas turquesas en el extremo oriental de la isla. El destino número uno del Caribe.',
    highlights: ['Playa Bávaro', 'Resorts 5 estrellas', 'Golf', 'Snorkel y buceo'],
    image:
      'https://images.pexels.com/photos/2646070/pexels-photo-2646070.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    name: 'Samaná',
    description:
      'Una joya escondida: playas vírgenes, cascadas imponentes y avistamiento de ballenas jorobadas (ene–mar).',
    highlights: ['Ballenas jorobadas', 'Las Terrenas', 'Cascada El Limón', 'Playa Rincón'],
    image:
      'https://images.pexels.com/photos/30160752/pexels-photo-30160752.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    name: 'Puerto Plata',
    description:
      'La Costa de Ámbar combina playa, montaña y cultura. Teleférico, Fuerte San Felipe y resorts todo incluido.',
    highlights: ['Teleférico', 'Playa Dorada', 'Fuerte San Felipe', 'Surf en Cabarete'],
    image:
      'https://images.pexels.com/photos/29221468/pexels-photo-29221468.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    name: 'Jarabacoa & Constanza',
    description:
      'El corazón verde de la isla. Cascadas, ríos de montaña y bosques de pinos para el ecoturismo y la aventura.',
    highlights: ['Rafting', 'Cascada Jimenoa', 'Pico Duarte', 'Fresas y flores'],
    image:
      'https://images.pexels.com/photos/32027250/pexels-photo-32027250.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const howToBook = [
  {
    step: 1,
    title: 'Escríbenos por WhatsApp',
    text: 'Cuéntanos tus fechas, destino y número de viajeros. Respondemos en minutos.',
  },
  {
    step: 2,
    title: 'Recibe tu cotización',
    text: 'Te enviamos opciones personalizadas con precios claros, sin letra pequeña ni sorpresas.',
  },
  {
    step: 3,
    title: '¡Confirma y viaja!',
    text: 'Elige tu plan, realiza el pago y prepárate para vivir una experiencia inolvidable.',
  },
];

export const benefits = [
  {
    icon: 'UserCheck',
    title: 'Atención personalizada',
    text: 'Te asesoramos de forma personalizada para encontrar la opción perfecta según tu presupuesto y gustos.',
  },
  {
    icon: 'Tag',
    title: 'Mejores precios',
    text: 'Accedemos a tarifas preferenciales y negociamos los mejores precios para ti.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Confianza & seguridad',
    text: 'Somos una agencia comprometida con la transparencia y la satisfacción total de nuestros clientes.',
  },
  {
    icon: 'Award',
    title: 'Experiencia local',
    text: 'Años de experiencia en el mercado dominicano nos permiten conocer cada destino como la palma de la mano.',
  },
];

export const faqCategories = [
  {
    category: 'Reservas y Pagos',
    faqs: [
      {
        q: '¿Cómo puedo hacer una reserva?',
        a: 'Escríbenos por WhatsApp al +1 (829) 594-9060. Cuéntanos tus fechas y preferencias, y te enviamos opciones con precios claros en minutos.',
      },
      {
        q: '¿Qué formas de pago aceptan?',
        a: 'Aceptamos transferencias bancarias, tarjetas de crédito/débito y pagos en efectivo. Contáctanos para coordinar el método más conveniente para ti.',
      },
      {
        q: '¿Puedo reservar con anticipación y pagar después?',
        a: 'Sí. Trabajamos con un depósito inicial para asegurar tu reserva y el saldo restante lo pagas antes de viajar según el acuerdo.',
      },
      {
        q: '¿Tienen planes de financiamiento?',
        a: 'Sí, ofrecemos planes de pago en cuotas según disponibilidad del proveedor. Consúltanos al momento de cotizar.',
      },
    ],
  },
  {
    category: 'Vuelos y Paquetes',
    faqs: [
      {
        q: '¿Los paquetes incluyen vuelos?',
        a: 'Depende del paquete. Algunos incluyen vuelos desde Santo Domingo u otros aeropuertos; otros son solo tierra (hotel + traslados). Te lo indicamos claramente en la cotización.',
      },
      {
        q: '¿Trabajan con todas las aerolíneas?',
        a: 'Trabajamos con las principales aerolíneas que operan en República Dominicana: American, JetBlue, Copa, Iberia, entre otras.',
      },
      {
        q: '¿Puedo personalizar mi itinerario?',
        a: 'Absolutamente. Diseñamos viajes a medida según tus fechas, presupuesto, número de viajeros y preferencias personales.',
      },
    ],
  },
  {
    category: 'Documentación y Visas',
    faqs: [
      {
        q: '¿Necesito pasaporte para viajar al exterior?',
        a: 'Sí, para cualquier destino internacional necesitas pasaporte vigente con al menos 6 meses de validez desde la fecha de regreso.',
      },
      {
        q: '¿Me ayudan con el proceso de visa?',
        a: 'Ofrecemos asesoría completa para la solicitud de visa. No somos consulado, pero te orientamos y te ayudamos a preparar la documentación requerida.',
      },
      {
        q: '¿Qué documentos necesito para viajar dentro de República Dominicana?',
        a: 'Para turismo nacional solo necesitas tu cédula de identidad dominicana o pasaporte vigente.',
      },
    ],
  },
  {
    category: 'Cancelaciones y Cambios',
    faqs: [
      {
        q: '¿Puedo cancelar mi reserva?',
        a: 'Las políticas de cancelación varían según el proveedor (hotel, aerolínea). Te informamos claramente las condiciones al momento de la cotización para que decidas con toda la información.',
      },
      {
        q: '¿Qué pasa si necesito cambiar mis fechas?',
        a: 'Gestionamos los cambios de fecha sujeto a disponibilidad y penalidades del proveedor. Nos ponemos en contacto inmediatamente para encontrar la mejor solución.',
      },
    ],
  },
];
