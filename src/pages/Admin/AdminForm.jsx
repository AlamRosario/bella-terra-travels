import { useState } from 'react';
import { X, Upload } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { adminEntities } from './adminEntities';

function buildInitialValues(entity, record) {
  const values = {};
  entity.fields.forEach((field) => {
    if (field.type === 'toggle') {
      values[field.name] = record ? !!record[field.name] : true;
    } else if (field.type === 'list') {
      values[field.name] = record?.[field.name]?.join(', ') || '';
    } else {
      values[field.name] = record?.[field.name] || '';
    }
  });
  return values;
}

export default function AdminForm({ entityKey, record, onClose, onSaved }) {
  const entity = adminEntities[entityKey];
  const isEditing = !!record;

  const [values, setValues] = useState(() => buildInitialValues(entity, record));
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const setField = (name, value) => setValues((prev) => ({ ...prev, [name]: value }));

  const handleImageUpload = async (e, fieldName) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError('');

    // eslint-disable-next-line react-hooks/purity -- unique storage path for upload, not render logic
    const path = `${entity.table}/${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage
      .from('bella-terra-images')
      .upload(path, file);

    if (uploadError) {
      setError('No se pudo subir la imagen.');
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from('bella-terra-images').getPublicUrl(path);
    setField(fieldName, data.publicUrl);
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    const payload = {};
    entity.fields.forEach((field) => {
      if (field.type === 'list') {
        payload[field.name] = values[field.name]
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean);
      } else {
        payload[field.name] = values[field.name];
      }
    });

    const query = isEditing
      ? supabase.from(entity.table).update(payload).eq('id', record.id)
      : supabase.from(entity.table).insert(payload);

    const { error: saveError } = await query;

    setSaving(false);

    if (saveError) {
      setError('No se pudo guardar. Intenta de nuevo.');
      return;
    }

    onSaved();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-navy/40" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white h-full overflow-y-auto shadow-xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-navy/10">
          <h2 className="font-display font-bold text-navy text-lg">
            {isEditing ? `Editar ${entity.singular}` : `Nueva publicación · ${entity.label}`}
          </h2>
          <button
            onClick={onClose}
            className="text-navy/60 hover:text-navy p-1"
            aria-label="Cerrar"
          >
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          <div className="flex-1 p-6 space-y-5">
            {entity.fields.map((field) => {
              if (field.type === 'toggle') {
                return (
                  <div key={field.name} className="flex items-center justify-between">
                    <label className="text-sm font-medium text-navy">{field.label}</label>
                    <button
                      type="button"
                      onClick={() => setField(field.name, !values[field.name])}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        values[field.name] ? 'bg-gold' : 'bg-navy/20'
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                          values[field.name] ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                );
              }

              if (field.type === 'select') {
                return (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      {field.label}
                    </label>
                    <select
                      required={field.required}
                      value={values[field.name]}
                      onChange={(e) => setField(field.name, e.target.value)}
                      className="w-full border border-navy/15 rounded-xl px-4 py-2.5 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }

              if (field.type === 'textarea') {
                return (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      {field.label}
                    </label>
                    <textarea
                      required={field.required}
                      value={values[field.name]}
                      onChange={(e) => setField(field.name, e.target.value)}
                      rows={4}
                      className="w-full border border-navy/15 rounded-xl px-4 py-2.5 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                    />
                  </div>
                );
              }

              if (field.type === 'image') {
                return (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      {field.label}
                    </label>
                    {values[field.name] && (
                      <img
                        src={values[field.name]}
                        alt=""
                        className="w-full h-32 object-cover rounded-xl mb-2"
                      />
                    )}
                    <label className="flex items-center justify-center gap-2 border border-dashed border-navy/25 rounded-xl px-4 py-3 text-navy/70 text-sm cursor-pointer hover:bg-cream/50 transition">
                      <Upload size={16} />
                      {uploading ? 'Subiendo...' : 'Subir imagen'}
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        disabled={uploading}
                        onChange={(e) => handleImageUpload(e, field.name)}
                      />
                    </label>
                  </div>
                );
              }

              return (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    required={field.required}
                    value={values[field.name]}
                    onChange={(e) => setField(field.name, e.target.value)}
                    className="w-full border border-navy/15 rounded-xl px-4 py-2.5 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
              );
            })}

            {error && (
              <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}
          </div>

          <div className="flex gap-3 px-6 py-5 border-t border-navy/10">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-navy/15 text-navy font-semibold py-2.5 rounded-xl hover:bg-navy/5 transition text-sm"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={saving || uploading}
              className="flex-1 bg-navy text-white font-semibold py-2.5 rounded-xl hover:brightness-110 transition disabled:opacity-60 text-sm"
            >
              {saving ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
