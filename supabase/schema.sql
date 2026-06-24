-- =====================================================================
-- Bella Terra Travels — Esquema de base de datos para el panel de admin
-- Ejecutar completo en Supabase → SQL Editor → New Query
-- =====================================================================

-- Tabla de ofertas
CREATE TABLE ofertas (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  ubicacion TEXT NOT NULL,
  fechas TEXT,
  duracion TEXT,
  personas TEXT,
  incluye TEXT,
  precio TEXT NOT NULL,
  precio_nota TEXT,
  badge TEXT,
  imagen_url TEXT,
  activo BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Tabla de destinos
CREATE TABLE destinos (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  tag TEXT,
  descripcion TEXT,
  highlights TEXT[],
  imagen_url TEXT,
  activo BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Tabla de eventos/tours
CREATE TABLE eventos (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo TEXT NOT NULL,
  tipo TEXT NOT NULL,
  ubicacion TEXT,
  fecha TEXT,
  descripcion TEXT,
  imagen_url TEXT,
  activo BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Tabla de galería de hoteles
CREATE TABLE galeria (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  destino TEXT,
  descripcion TEXT,
  imagen_url TEXT,
  activo BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Política de acceso público de solo lectura
ALTER TABLE ofertas ENABLE ROW LEVEL SECURITY;
ALTER TABLE destinos ENABLE ROW LEVEL SECURITY;
ALTER TABLE eventos ENABLE ROW LEVEL SECURITY;
ALTER TABLE galeria ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Lectura pública" ON ofertas FOR SELECT USING (true);
CREATE POLICY "Lectura pública" ON destinos FOR SELECT USING (true);
CREATE POLICY "Lectura pública" ON eventos FOR SELECT USING (true);
CREATE POLICY "Lectura pública" ON galeria FOR SELECT USING (true);

CREATE POLICY "Admin insert ofertas" ON ofertas FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update ofertas" ON ofertas FOR UPDATE
  USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete ofertas" ON ofertas FOR DELETE
  USING (auth.role() = 'authenticated');

CREATE POLICY "Admin insert destinos" ON destinos FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update destinos" ON destinos FOR UPDATE
  USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete destinos" ON destinos FOR DELETE
  USING (auth.role() = 'authenticated');

CREATE POLICY "Admin insert eventos" ON eventos FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update eventos" ON eventos FOR UPDATE
  USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete eventos" ON eventos FOR DELETE
  USING (auth.role() = 'authenticated');

CREATE POLICY "Admin insert galeria" ON galeria FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update galeria" ON galeria FOR UPDATE
  USING (auth.role() = 'authenticated');
CREATE POLICY "Admin delete galeria" ON galeria FOR DELETE
  USING (auth.role() = 'authenticated');

-- Bucket de Storage para imágenes
INSERT INTO storage.buckets (id, name, public)
  VALUES ('bella-terra-images', 'bella-terra-images', true);

CREATE POLICY "Imágenes públicas" ON storage.objects
  FOR SELECT USING (bucket_id = 'bella-terra-images');
CREATE POLICY "Admin sube imágenes" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'bella-terra-images'
    AND auth.role() = 'authenticated'
  );
CREATE POLICY "Admin elimina imágenes" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'bella-terra-images'
    AND auth.role() = 'authenticated'
  );

-- =====================================================================
-- Datos iniciales (seed) — tomados de src/data/content.js
-- Para que la página no quede vacía mientras se agregan publicaciones
-- desde el panel de admin.
-- =====================================================================

INSERT INTO ofertas (nombre, ubicacion, fechas, duracion, personas, incluye, precio, precio_nota, badge, imagen_url) VALUES
('PlayaBachata Resort', 'Puerto Plata, República Dominicana', 'Jun – Ago 2026', '3 noches', '2 personas', 'Todo incluido · Traslados desde SDQ', 'RD$16,995', 'por persona · hab. doble', 'OFERTA', 'https://images.pexels.com/photos/29221468/pexels-photo-29221468.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Hotel Royalton Splash', 'Punta Cana, República Dominicana', 'Jun – Sep 2026', '3 noches', '2 personas', 'Todo incluido · Vuelos opcionales', 'Desde US$135', 'por noche · por habitación', 'MÁS VENDIDO', 'https://images.pexels.com/photos/2646070/pexels-photo-2646070.jpeg?auto=compress&cs=tinysrgb&w=800'),
('PlayaBachata Resort', 'Puerto Plata, República Dominicana', 'Jul – Oct 2026', '4 noches', 'Familia 4 pax', 'Todo incluido · Traslados · Kids Club', 'RD$20,764', 'por familia (2 adultos + 2 niños)', 'IDEAL FAMILIAS', 'https://images.pexels.com/photos/11556613/pexels-photo-11556613.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Grand Palladium Punta Cana', 'Punta Cana, República Dominicana', 'Jul – Nov 2026', '4 noches', '2 personas', 'Todo incluido · Butler service · 7 piscinas', 'Desde USD$150', 'por noche · por habitación', 'LUJO', 'https://images.pexels.com/photos/14259595/pexels-photo-14259595.jpeg?auto=compress&cs=tinysrgb&w=800');

INSERT INTO destinos (nombre, tag, descripcion, highlights, imagen_url) VALUES
('Santo Domingo', 'Cultura e historia', 'La Ciudad Colonial más antigua del Nuevo Mundo. Historia, gastronomía y vida nocturna en la vibrante capital dominicana.', ARRAY['Ciudad Colonial UNESCO', 'Malecón', 'Gastronomía', 'Vida nocturna'], 'https://images.pexels.com/photos/5961909/pexels-photo-5961909.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Punta Cana', 'Playa y sol', 'Playas de arena blanca y aguas turquesas en el extremo oriental de la isla. El destino número uno del Caribe.', ARRAY['Playa Bávaro', 'Resorts 5 estrellas', 'Golf', 'Snorkel y buceo'], 'https://images.pexels.com/photos/2646070/pexels-photo-2646070.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Samaná', 'Naturaleza', 'Una joya escondida: playas vírgenes, cascadas imponentes y avistamiento de ballenas jorobadas (ene–mar).', ARRAY['Ballenas jorobadas', 'Las Terrenas', 'Cascada El Limón', 'Playa Rincón'], 'https://images.pexels.com/photos/30160752/pexels-photo-30160752.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Puerto Plata', 'Playa y montaña', 'La Costa de Ámbar combina playa, montaña y cultura. Teleférico, Fuerte San Felipe y resorts todo incluido.', ARRAY['Teleférico', 'Playa Dorada', 'Fuerte San Felipe', 'Surf en Cabarete'], 'https://images.pexels.com/photos/29221468/pexels-photo-29221468.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Jarabacoa & Constanza', 'Ecoturismo', 'El corazón verde de la isla. Cascadas, ríos de montaña y bosques de pinos para el ecoturismo y la aventura.', ARRAY['Rafting', 'Cascada Jimenoa', 'Pico Duarte', 'Fresas y flores'], 'https://images.pexels.com/photos/32027250/pexels-photo-32027250.jpeg?auto=compress&cs=tinysrgb&w=800');
