import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { School, User, Mail, Lock, Phone, MapPin, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { auth, db } from '../lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    schoolName: '',
    ownerName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (!/^\+?[\d\s\-()]{7,15}$/.test(formData.phone)) {
      setError('Please enter a valid phone number.');
      return;
    }

    setLoading(true);

    try {
      // 1. Create User in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // 2. Save School & Owner details in Firestore
      await setDoc(doc(db, 'schools', user.uid), {
        schoolName: formData.schoolName,
        ownerName: formData.ownerName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        ownerId: user.uid,
        role: 'owner',
        status: 'active',
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setTimeout(() => {
        window.location.href = import.meta.env.VITE_OWNER_DASHBOARD_URL || 'https://owner-dashboard-blue.vercel.app/';
      }, 3000);

    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError('This email is already registered. Please login instead.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password must be at least 6 characters.');
      } else {
        setError(err.message || 'Something went wrong during registration.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-card p-12 text-center max-w-md w-full"
        >
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-emerald-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Registration Successful!</h2>
          <p className="text-slate-400 mb-8">
            Masha Allah! Your school <strong>{formData.schoolName}</strong> is now part of the EduIntellect ecosystem. Redirecting you...
          </p>
          <Loader2 className="w-6 h-6 text-brand-500 animate-spin mx-auto" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Empower Your <span className="gradient-text">Institution</span> Today.
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                Join hundreds of visionary schools using EduIntellect to revolutionize education management. Register now and get full access to all portals.
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                'Centralized Multi-branch Control',
                'AI-Powered Student Risk Monitoring',
                'Integrated Parent-Teacher Communication',
                'Advanced Financial & Academic Reports'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 md:p-10 border-white/10"
          >
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">Register Your School</h2>
              <p className="text-slate-500 text-sm">Become a part of the future of education.</p>
            </div>

            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">School Name</label>
                  <div className="relative">
                    <School className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      required
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      placeholder="e.g. Oakridge Academy"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-white focus:border-brand-500 transition-all outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Owner Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      required
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-white focus:border-brand-500 transition-all outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="owner@school.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-white focus:border-brand-500 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      required
                      type="password"
                      name="password"
                      minLength={6}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Min. 6 characters"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-white focus:border-brand-500 transition-all outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567 890"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-white focus:border-brand-500 transition-all outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">School Address</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-4 w-5 h-5 text-slate-500" />
                  <textarea
                    required
                    name="address"
                    rows={3}
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Full Address of the school"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-white focus:border-brand-500 transition-all outline-none resize-none"
                  />
                </div>
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2 group"
              >
                {loading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    Complete Registration <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-center text-slate-500 text-sm">
                By registering, you agree to our <Link to="#" className="text-brand-400 hover:underline">Terms</Link> and <Link to="#" className="text-brand-400 hover:underline">Privacy Policy</Link>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
