import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Loader2, ArrowRight, ShieldCheck } from 'lucide-react';
import { auth, db } from '../lib/firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';

const OwnerLoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 1. Sign in with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // 2. Verify if user is an owner in Firestore
      const userDoc = await getDoc(doc(db, 'schools', user.uid));
      
      if (userDoc.exists() && userDoc.data().role === 'owner') {
        // Successful login for owner
        // Redirect to live Vercel dashboard or internal portal
        window.location.href = import.meta.env.VITE_OWNER_DASHBOARD_URL || 'https://owner-dashboard-blue.vercel.app/';
      } else {
        await auth.signOut();
        setError('Access Denied. You are not registered as a school owner.');
      }

    } catch (err: any) {
      if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        setError('Invalid email or password.');
      } else {
        setError(err.message || 'Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(60,130,246,0.1),transparent)] pointer-events-none"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-brand-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-brand-500/20">
            <ShieldCheck className="w-8 h-8 text-brand-500" />
          </div>
          <h1 className="text-3xl font-light text-white mb-2">Owner Login</h1>
          <p className="text-slate-500">Access your central management console</p>
        </div>

        <div className="glass-card p-8 border-white/10 relative overflow-hidden">
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
              {error}
            </div>
          )}

          {resetSent && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
              Password reset email sent! Check your inbox.
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-normal text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@school.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3.5 pl-12 pr-4 text-white focus:border-brand-500 transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-normal text-slate-400 uppercase tracking-widest">Password</label>
                <button
                  type="button"
                  disabled={resetLoading}
                  onClick={async () => {
                    if (!formData.email) {
                      setError('Please enter your email address first.');
                      return;
                    }
                    setResetLoading(true);
                    setError('');
                    try {
                      await sendPasswordResetEmail(auth, formData.email);
                      setResetSent(true);
                    } catch {
                      setError('Could not send reset email. Please check your email address.');
                    } finally {
                      setResetLoading(false);
                    }
                  }}
                  className="text-[10px] font-light text-brand-400 hover:text-brand-300 disabled:opacity-50"
                >
                  {resetLoading ? 'Sending...' : 'Forgot Password?'}
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  required
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3.5 pl-12 pr-4 text-white focus:border-brand-500 transition-all outline-none"
                />
              </div>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full btn-primary py-4 text-white font-light flex items-center justify-center gap-2 group shadow-xl shadow-brand-600/20 mt-4"
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  Enter Dashboard <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Need to register your school? <Link to="/register" className="text-brand-400 font-light hover:underline">Sign Up</Link>
            </p>
          </div>
        </div>

        <button 
          onClick={() => navigate('/')}
          className="mt-8 text-slate-500 hover:text-white transition-colors text-sm font-medium flex items-center justify-center gap-2 mx-auto"
        >
          ← Back to Homepage
        </button>
      </motion.div>
    </div>
  );
};

export default OwnerLoginPage;
