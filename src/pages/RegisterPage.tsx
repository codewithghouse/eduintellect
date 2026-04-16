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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

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
      <div className="min-h-[80vh] flex items-center justify-center p-6 bg-[#fbfbfd]">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[20px] border border-[#d2d2d7]/40 p-12 text-center max-w-md w-full shadow-lg"
        >
          <div className="w-16 h-16 bg-[#34c759]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-[#34c759]" />
          </div>
          <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-3 tracking-[-0.02em]">Registration Successful</h2>
          <p className="text-[#86868b] text-[15px] mb-8 leading-[1.47]">
            Your school <strong className="text-[#1d1d1f]">{formData.schoolName}</strong> is now part of the EduIntellect ecosystem. Redirecting you...
          </p>
          <Loader2 className="w-5 h-5 text-[#0071e3] animate-spin mx-auto" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 bg-[#fbfbfd]">
      <div className="max-w-[980px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-[40px] md:text-[48px] font-semibold text-[#1d1d1f] mb-5 leading-[1.08] tracking-[-0.035em]">
                Empower your{' '}
                <span className="gradient-text">institution</span> today.
              </h1>
              <p className="text-[#86868b] text-[17px] leading-[1.47] tracking-[0.011em]">
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
                <div key={item} className="flex items-center gap-3 text-[#424245]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0071e3]"></div>
                  <span className="text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[20px] border border-[#d2d2d7]/40 p-8 md:p-10 shadow-sm"
          >
            <div className="mb-8">
              <h2 className="text-[22px] font-semibold text-[#1d1d1f] mb-1 tracking-[-0.02em]">Register Your School</h2>
              <p className="text-[#86868b] text-[14px]">Become a part of the future of education.</p>
            </div>

            {error && (
              <div className="mb-6 p-4 rounded-[12px] bg-[#ff3b30]/5 border border-[#ff3b30]/20 text-[#ff3b30] text-[14px]">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-medium text-[#86868b] ml-1">School Name</label>
                  <div className="relative">
                    <School className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" />
                    <input
                      required
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      placeholder="e.g. Oakridge Academy"
                      className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] py-2.5 pl-10 pr-4 text-[#1d1d1f] text-[15px] focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition-all outline-none placeholder:text-[#b0b0b8]"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-medium text-[#86868b] ml-1">Owner Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" />
                    <input
                      required
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] py-2.5 pl-10 pr-4 text-[#1d1d1f] text-[15px] focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition-all outline-none placeholder:text-[#b0b0b8]"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-medium text-[#86868b] ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" />
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="owner@school.com"
                    className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] py-2.5 pl-10 pr-4 text-[#1d1d1f] text-[15px] focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition-all outline-none placeholder:text-[#b0b0b8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-medium text-[#86868b] ml-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" />
                    <input
                      required
                      type="password"
                      name="password"
                      minLength={6}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Min. 6 characters"
                      className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] py-2.5 pl-10 pr-4 text-[#1d1d1f] text-[15px] focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition-all outline-none placeholder:text-[#b0b0b8]"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-medium text-[#86868b] ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" />
                    <input
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567 890"
                      className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] py-2.5 pl-10 pr-4 text-[#1d1d1f] text-[15px] focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition-all outline-none placeholder:text-[#b0b0b8]"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-medium text-[#86868b] ml-1">School Address</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-[#86868b]" />
                  <textarea
                    required
                    name="address"
                    rows={3}
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Full address of the school"
                    className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] py-2.5 pl-10 pr-4 text-[#1d1d1f] text-[15px] focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition-all outline-none resize-none placeholder:text-[#b0b0b8]"
                  />
                </div>
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-3.5 rounded-[12px] text-[15px] font-medium flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Complete Registration <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-center text-[#86868b] text-[12px]">
                By registering, you agree to our <Link to="#" className="text-[#0071e3] hover:underline">Terms</Link> and <Link to="#" className="text-[#0071e3] hover:underline">Privacy Policy</Link>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
