export const adminEntities = {
  ofertas: {
    table: 'ofertas',
    label: 'Ofertas',
    singular: 'oferta',
    columns: [
      { key: 'nombre', label: 'Nombre' },
      { key: 'ubicacion', label: 'Ubicación' },
      { key: 'precio', label: 'Precio' },
      { key: 'activo', label: 'Activo' },
    ],
    fields: [
      { name: 'nombre', label: 'Nombre del hotel', type: 'text', required: true },
      { name: 'ubicacion', label: 'Ubicación', type: 'text', required: true },
      { name: 'fechas', label: 'Fechas', type: 'text' },
      { name: 'duracion', label: 'Duración', type: 'text' },
      { name: 'personas', label: 'Personas', type: 'text' },
      { name: 'incluye', label: 'Incluye', type: 'text' },
      { name: 'precio', label: 'Precio', type: 'text', required: true },
      { name: 'precio_nota', label: 'Nota del precio', type: 'text' },
      { name: 'badge', label: 'Badge', type: 'text' },
      { name: 'imagen_url', label: 'Imagen', type: 'image' },
      { name: 'activo', label: 'Activo', type: 'toggle' },
    ],
  },
  destinos: {
    table: 'destinos',
    label: 'Destinos',
    singular: 'destino',
    columns: [
      { key: 'nombre', label: 'Nombre' },
      { key: 'tag', label: 'Tag' },
      { key: 'activo', label: 'Activo' },
    ],
    fields: [
      { name: 'nombre', label: 'Nombre', type: 'text', required: true },
      { name: 'tag', label: 'Tag', type: 'text' },
      { name: 'descripcion', label: 'Descripción', type: 'textarea' },
      { name: 'highlights', label: 'Highlights (separados por coma)', type: 'list' },
      { name: 'imagen_url', label: 'Imagen', type: 'image' },
      { name: 'activo', label: 'Activo', type: 'toggle' },
    ],
  },
  eventos: {
    table: 'eventos',
    label: 'Eventos',
    singular: 'evento',
    columns: [
      { key: 'titulo', label: 'Título' },
      { key: 'tipo', label: 'Tipo' },
      { key: 'activo', label: 'Activo' },
    ],
    fields: [
      { name: 'titulo', label: 'Título', type: 'text', required: true },
      {
        name: 'tipo',
        label: 'Tipo',
        type: 'select',
        required: true,
        options: ['Tour internacional', 'Concierto', 'Evento local'],
      },
      { name: 'ubicacion', label: 'Ubicación', type: 'text' },
      { name: 'fecha', label: 'Fecha', type: 'text' },
      { name: 'descripcion', label: 'Descripción', type: 'textarea' },
      { name: 'imagen_url', label: 'Imagen', type: 'image' },
      { name: 'activo', label: 'Activo', type: 'toggle' },
    ],
  },
  galeria: {
    table: 'galeria',
    label: 'Galería',
    singular: 'hotel',
    columns: [
      { key: 'nombre', label: 'Hotel' },
      { key: 'destino', label: 'Destino' },
      { key: 'activo', label: 'Activo' },
    ],
    fields: [
      { name: 'nombre', label: 'Nombre del hotel', type: 'text', required: true },
      { name: 'destino', label: 'Destino', type: 'text' },
      { name: 'descripcion', label: 'Descripción', type: 'textarea' },
      { name: 'imagen_url', label: 'Imagen', type: 'image' },
      { name: 'activo', label: 'Activo', type: 'toggle' },
    ],
  },
};

export const adminEntityKeys = Object.keys(adminEntities);
