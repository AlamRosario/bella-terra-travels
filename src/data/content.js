const PHONE = '18097775050';

export const waLink = (msg) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

export const contactInfo = {
  whatsapp: '+1 (809) 777-5050',
  whatsappRaw: PHONE,
  email: 'info@bellaterratravels.com',
  address: 'Santo Domingo, República Dominicana',
  instagram: '#',
  facebook: '#',
};

export const services = [
  {
    id: 1,
    icon: 'Building2',
    title: 'Resorts Todo Incluido',
    text: 'Las mejores tarifas en resorts de Punta Cana, Puerto Plata, La Romana y más.',
  },
  {
    id: 2,
    icon: 'Globe',
    title: 'Tours Internacionales',
    text: 'Paquetes a México, Europa, el Caribe y los destinos más soñados del mundo.',
  },
  {
    id: 3,
    icon: 'Car',
    title: 'Transfers y Excursiones',
    text: 'Traslados aeropuerto-hotel y excursiones locales con guías especializados.',
  },
  {
    id: 4,
    icon: 'Shield',
    title: 'Seguro de Viaje',
    text: 'Protege tu inversión con cobertura médica, de cancelación y equipaje.',
  },
  {
    id: 5,
    icon: 'FileText',
    title: 'Asesoría de Visa',
    text: 'Te orientamos en el proceso de solicitud para que viajes sin contratiempos.',
  },
  {
    id: 6,
    icon: 'Users',
    title: 'Paquetes Familiares',
    text: 'Experiencias diseñadas para que toda la familia disfrute al máximo.',
  },
  {
    id: 7,
    icon: 'Plane',
    title: 'Reserva de Vuelos',
    text: 'Encontramos las mejores tarifas aéreas nacionales e internacionales.',
  },
  {
    id: 8,
    icon: 'MapPin',
    title: 'Turismo Receptivo',
    text: 'Planes especiales para turistas que desean descubrir la República Dominicana.',
  },
];

export const offers = [
  {
    id: 1,
    badge: 'OFERTA ESPECIAL',
    hotel: 'Excellence Punta Cana',
    location: 'Punta Cana, República Dominicana',
    dates: 'Jul – Sep 2026',
    duration: '4 noches',
    persons: '2 personas',
    includes: 'Todo incluido · Vuelos desde SDQ · Traslados',
    price: 'Desde $1,250',
    priceNote: 'por persona · doble ocupación',
    image:
      'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    badge: 'MÁS VENDIDO',
    hotel: 'Casa Marina Beach Resort',
    location: 'Puerto Plata, República Dominicana',
    dates: 'Ago – Oct 2026',
    duration: '3 noches',
    persons: '2 personas',
    includes: 'Todo incluido · Traslados desde SDQ',
    price: 'Desde $890',
    priceNote: 'por persona · doble ocupación',
    image:
      'https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    badge: 'IDEAL FAMILIAS',
    hotel: 'Majestic Elegance Punta Cana',
    location: 'Punta Cana, República Dominicana',
    dates: 'Sep – Nov 2026',
    duration: '5 noches',
    persons: 'Familia 4 pax',
    includes: 'Todo incluido · Vuelos · Kids Club incluido',
    price: 'Desde $3,200',
    priceNote: 'por familia (2 adultos + 2 niños)',
    image:
      'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    name: 'Punta Cana',
    description:
      'Playas de arena blanca y aguas turquesas en el extremo oriental de la isla. El destino número uno del Caribe.',
    highlights: ['Playa Bávaro', 'Resorts 5 estrellas', 'Golf', 'Snorkel y buceo'],
    image:
      'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    name: 'Samaná',
    description:
      'Una joya escondida: playas vírgenes, cascadas imponentes y avistamiento de ballenas jorobadas (ene–mar).',
    highlights: ['Ballenas jorobadas', 'Las Terrenas', 'Cascada El Limón', 'Playa Rincón'],
    image:
      'https://images.pexels.com/photos/4352127/pexels-photo-4352127.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    name: 'Puerto Plata',
    description:
      'La Costa de Ámbar combina playa, montaña y cultura. Teleférico, Fuerte San Felipe y resorts todo incluido.',
    highlights: ['Teleférico', 'Playa Dorada', 'Fuerte San Felipe', 'Surf en Cabarete'],
    image:
      'https://images.pexels.com/photos/2373582/pexels-photo-2373582.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    name: 'Jarabacoa & Constanza',
    description:
      'El corazón verde de la isla. Cascadas, ríos de montaña y bosques de pinos para el ecoturismo y la aventura.',
    highlights: ['Rafting', 'Cascada Jimenoa', 'Pico Duarte', 'Fresas y flores'],
    image:
      'https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    icon: 'ThumbsUp',
    title: 'Precios transparentes',
    text: 'Sin costos ocultos. El precio que cotizamos es exactamente lo que pagas.',
  },
  {
    icon: 'Clock',
    title: 'Atención rápida',
    text: 'Respondemos por WhatsApp en menos de una hora, todos los días.',
  },
  {
    icon: 'Star',
    title: 'Años de experiencia',
    text: 'Hemos ayudado a cientos de familias dominicanas a viajar sin estrés.',
  },
  {
    icon: 'Heart',
    title: 'Acompañamiento total',
    text: 'Estamos contigo antes, durante y después de tu viaje.',
  },
  {
    icon: 'CreditCard',
    title: 'Facilidades de pago',
    text: 'Planes de financiamiento para que el costo no sea un obstáculo.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Proveedores verificados',
    text: 'Solo trabajamos con hoteles y aerolíneas de confianza y reputación comprobada.',
  },
];

export const faqCategories = [
  {
    category: 'Reservas y Pagos',
    faqs: [
      {
        q: '¿Cómo puedo hacer una reserva?',
        a: 'Escríbenos por WhatsApp al +1 (809) 777-5050. Cuéntanos tus fechas y preferencias, y te enviamos opciones con precios claros en minutos.',
      },
      {
        q: '¿Qué formas de pago aceptan?',
        a: 'Aceptamos transferencias bancarias, tarjetas de crédito/débito y pagos en efectivo en nuestra oficina en Santo Domingo.',
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
