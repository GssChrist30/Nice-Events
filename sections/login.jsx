'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Validation basique
      if (!email || !password) {
        setError('Veuillez remplir tous les champs');
        setIsLoading(false);
        return;
      }

      // Validation email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError('Veuillez entrer une adresse email valide');
        setIsLoading(false);
        return;
      }

      // Appel API (à adapter selon votre backend)
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          rememberMe,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Erreur de connexion');
      } else {
        // Redirection après connexion réussie
        console.log('Connecté avec succès');
        // window.location.href = '/dashboard';
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Container principal */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
          {/* En-tête */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Connexion</h1>
            <p className="text-slate-400">Accédez à votre compte</p>
          </div>

          {/* Message d'erreur */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Adresse email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@exemple.com"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                disabled={isLoading}
              />
            </div>

            {/* Mot de passe */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition pr-12"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition"
                  disabled={isLoading}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Se souvenir de moi */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 bg-slate-700 border border-slate-600 rounded cursor-pointer accent-blue-500"
                disabled={isLoading}
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-slate-400 cursor-pointer">
                Se souvenir de moi
              </label>
            </div>

            {/* Bouton de connexion */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isLoading ? 'Connexion en cours...' : 'Se connecter'}
            </button>
          </form>

          {/* Lien mot de passe oublié */}
          <div className="text-center mt-6">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-400 hover:text-blue-300 transition"
            >
              Mot de passe oublié ?
            </Link>
          </div>

          {/* Lien inscription */}
          <div className="text-center mt-6 pt-6 border-t border-slate-700">
            <p className="text-slate-400 text-sm">
              Pas encore de compte ?{' '}
              <Link href="/signup" className="text-blue-400 hover:text-blue-300 transition font-medium">
                S&apos;inscrire
              </Link>
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center mt-8 mb-8">
            <div className="flex-1 border-t border-slate-700"></div>
            <div className="px-3 text-slate-500 text-xs">OU</div>
            <div className="flex-1 border-t border-slate-700"></div>
          </div>

          {/* Login social */}
          <div className="space-y-3">
            <button
              type="button"
              className="w-full py-3 px-4 bg-slate-700 hover:bg-slate-600 text-slate-200 font-medium rounded-lg transition flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              <span>🔷</span>
              Continuer avec Google
            </button>
            <button
              type="button"
              className="w-full py-3 px-4 bg-slate-700 hover:bg-slate-600 text-slate-200 font-medium rounded-lg transition flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              <span>📘</span>
              Continuer avec GitHub
            </button>
          </div>
        </div>

        {/* Pied de page */}
        <p className="text-center text-slate-500 text-xs mt-8">
          En vous connectant, vous acceptez nos{' '}
          <Link href="/terms" className="text-slate-400 hover:text-slate-300 transition">
            conditions d&apos;utilisation
          </Link>
        </p>
      </div>
    </section>
  );
}
