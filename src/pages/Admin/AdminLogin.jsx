import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import logo from '../../assets/logo-blanco.jpeg';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (signInError) {
      setError('Email o contraseña incorrectos.');
      return;
    }

    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Bella Terra Travels Tours" className="h-16 w-auto" />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="font-display font-bold text-navy text-xl mb-1 text-center">
            Panel de administración
          </h1>
          <p className="text-navy/60 text-sm text-center mb-6">
            Inicia sesión para continuar
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-navy/15 rounded-xl px-4 py-2.5 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="admin@bellaterratravels.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-1.5" htmlFor="password">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-navy/15 rounded-xl px-4 py-2.5 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-navy text-white font-semibold py-3 rounded-xl hover:brightness-110 transition disabled:opacity-60 text-sm"
            >
              <LogIn size={16} />
              {loading ? 'Ingresando...' : 'Ingresar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
