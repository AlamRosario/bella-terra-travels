import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Plus, Pencil, Trash2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import logo from '../../assets/logo-blanco.jpeg';
import { adminEntities, adminEntityKeys } from './adminEntities';
import AdminForm from './AdminForm';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [activeTab, setActiveTab] = useState(adminEntityKeys[0]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formState, setFormState] = useState(null);

  const entity = adminEntities[activeTab];

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUserEmail(data.user?.email || '');
    });
  }, []);

  const loadRows = async () => {
    setLoading(true);
    const { data } = await supabase
      .from(entity.table)
      .select('*')
      .order('created_at', { ascending: false });
    setRows(data || []);
    setLoading(false);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- loading flag toggle before fetch
    loadRows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const handleDelete = async (row) => {
    const confirmed = window.confirm(
      `¿Seguro que deseas eliminar este ${entity.singular}? Esta acción no se puede deshacer.`
    );
    if (!confirmed) return;

    await supabase.from(entity.table).delete().eq('id', row.id);
    loadRows();
  };

  const renderCell = (row, col) => {
    const value = row[col.key];
    if (col.key === 'activo') {
      return (
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
            value ? 'bg-green-100 text-green-700' : 'bg-navy/10 text-navy/60'
          }`}
        >
          {value ? 'Activo' : 'Inactivo'}
        </span>
      );
    }
    return <span className="text-navy/80">{value || '—'}</span>;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Bella Terra Travels Tours" className="h-9 w-auto" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/80 hidden sm:inline">{userEmail}</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition text-sm font-medium px-3 py-2 rounded-lg"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Cerrar sesión</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
          {adminEntityKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition ${
                activeTab === key
                  ? 'bg-gold text-white'
                  : 'bg-white text-navy/70 border border-navy/10 hover:bg-navy/5'
              }`}
            >
              {adminEntities[key].label}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <h1 className="font-display font-bold text-navy text-xl">{entity.label}</h1>
          <button
            onClick={() => setFormState({ mode: 'create' })}
            className="flex items-center gap-2 bg-navy text-white font-semibold text-sm px-4 py-2.5 rounded-xl hover:brightness-110 transition"
          >
            <Plus size={16} />
            Nueva publicación
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-navy/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy/10 bg-navy/[0.02]">
                  {entity.columns.map((col) => (
                    <th
                      key={col.key}
                      className="text-left font-semibold text-navy/70 px-5 py-3 whitespace-nowrap"
                    >
                      {col.label}
                    </th>
                  ))}
                  <th className="text-right font-semibold text-navy/70 px-5 py-3 whitespace-nowrap">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <tr>
                    <td colSpan={entity.columns.length + 1} className="text-center text-navy/50 px-5 py-8">
                      Cargando...
                    </td>
                  </tr>
                )}

                {!loading && rows.length === 0 && (
                  <tr>
                    <td colSpan={entity.columns.length + 1} className="text-center text-navy/50 px-5 py-8">
                      No hay registros todavía.
                    </td>
                  </tr>
                )}

                {!loading &&
                  rows.map((row) => (
                    <tr key={row.id} className="border-b border-navy/5 hover:bg-navy/[0.02] transition">
                      {entity.columns.map((col) => (
                        <td key={col.key} className="px-5 py-3 whitespace-nowrap">
                          {renderCell(row, col)}
                        </td>
                      ))}
                      <td className="px-5 py-3 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setFormState({ mode: 'edit', record: row })}
                            className="flex items-center gap-1.5 text-navy text-xs font-semibold px-3 py-1.5 rounded-lg border border-navy/15 hover:bg-navy/5 transition"
                          >
                            <Pencil size={13} />
                            Editar
                          </button>
                          <button
                            onClick={() => handleDelete(row)}
                            className="flex items-center gap-1.5 text-red-600 text-xs font-semibold px-3 py-1.5 rounded-lg border border-red-200 hover:bg-red-50 transition"
                          >
                            <Trash2 size={13} />
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {formState && (
        <AdminForm
          entityKey={activeTab}
          record={formState.mode === 'edit' ? formState.record : null}
          onClose={() => setFormState(null)}
          onSaved={() => {
            setFormState(null);
            loadRows();
          }}
        />
      )}
    </div>
  );
}
