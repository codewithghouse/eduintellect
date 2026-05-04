import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { School, User, Mail, Lock, Phone, MapPin, ArrowRight, Loader2, CheckCircle2, Sparkles } from 'lucide-react';
import { auth, db, googleProvider } from '../lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  type User as FirebaseUser,
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from '../components/GoogleIcon';

const MAX_SCHOOL_NAME = 120;
const MAX_OWNER_NAME  = 120;
const MAX_PHONE       = 20;
const MAX_ADDRESS     = 500;
const MIN_PASSWORD    = 10;
const TRIAL_DAYS      = 14;

const clean = (s: string, max: number) => s.trim().slice(0, max);

type Step = 'auth' | 'details' | 'success';
type AuthMode = 'google' | 'email';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('auth');
  const [authMode, setAuthMode] = useState<AuthMode>('google');
  const [user, setUser] = useState<FirebaseUser | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [authForm, setAuthForm] = useState({ email: '', password: '' });
  const [details, setDetails] = useState({
    schoolName: '',
    ownerName: '',
    phone: '',
    address: '',
  });

  // If user is already signed in (e.g. came from /login), skip auth step.
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) return;
      // If a school doc already exists for this user, send them straight to dashboard.
      try {
        const snap = await getDoc(doc(db, 'schools', u.uid));
        if (snap.exists()) {
          window.location.href = import.meta.env.VITE_OWNER_DASHBOARD_URL || 'https://owner-dashboard-blue.vercel.app/';
          return;
        }
      } catch { /* ignore — proceed to details */ }
      setUser(u);
      setDetails((d) => ({
        ...d,
        ownerName: d.ownerName || u.displayName || '',
      }));
      setStep('details');
    });
    return unsub;
  }, []);

  const handleGoogle = async () => {
    setError('');
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      // onAuthStateChanged will move to details step
    } catch (err: any) {
      const code = err?.code ?? '';
      if (code === 'auth/popup-closed-by-user') {
        // user cancelled — silent
      } else if (code === 'auth/popup-blocked') {
        setError('Popup was blocked. Please allow popups for this site.');
      } else {
        console.error('[register] google sign-in failed:', code, err?.message);
        setError('Google sign-in failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEmailCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (authForm.password.length < MIN_PASSWORD) {
      setError(`Password must be at least ${MIN_PASSWORD} characters.`);
      return;
    }
    if (!/[A-Z]/.test(authForm.password) || !/[0-9]/.test(authForm.password)) {
      setError('Password must include at least one uppercase letter and one number.');
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(
        auth,
        authForm.email.trim().toLowerCase(),
        authForm.password,
      );
      // onAuthStateChanged will move to details step
    } catch (err: any) {
      const code = err?.code ?? '';
      if (code === 'auth/email-already-in-use') {
        setError('This email is already registered. Please sign in instead.');
      } else if (code === 'auth/weak-password') {
        setError('Password is too weak.');
      } else if (code === 'auth/invalid-email') {
        setError('Invalid email address.');
      } else if (code === 'auth/network-request-failed') {
        setError('Network error. Check your internet connection.');
      } else if (code === 'auth/too-many-requests') {
        setError('Too many attempts. Please wait a few minutes and try again.');
      } else {
        console.error('[register] create-user failed:', code, err?.message);
        setError('Could not create account. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitDetails = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!user) {
      setError('Session expired. Please sign in again.');
      setStep('auth');
      return;
    }
    if (!/^\+?[\d\s\-()]{7,15}$/.test(details.phone)) {
      setError('Please enter a valid phone number.');
      return;
    }

    setLoading(true);
    try {
      const trialStart = new Date();
      const trialEnd = new Date(trialStart.getTime() + TRIAL_DAYS * 24 * 60 * 60 * 1000);

      await setDoc(doc(db, 'schools', user.uid), {
        schoolName: clean(details.schoolName, MAX_SCHOOL_NAME),
        ownerName: clean(details.ownerName, MAX_OWNER_NAME),
        email: (user.email ?? '').toLowerCase(),
        phone: clean(details.phone, MAX_PHONE),
        address: clean(details.address, MAX_ADDRESS),
        ownerId: user.uid,
        role: 'owner',
        status: 'active',
        // Trial / billing state — read by dashboards to gate access.
        subscriptionStatus: 'trial',
        paymentStatus: 'pending',
        trialStartedAt: Timestamp.fromDate(trialStart),
        trialEndsAt: Timestamp.fromDate(trialEnd),
        createdAt: serverTimestamp(),
      }, { merge: true });

      setStep('success');
      setTimeout(() => navigate('/welcome'), 1400);
    } catch (err: any) {
      console.error('[register] details write failed:', err);
      setError('Could not save school details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (step === 'success') {
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
          <h2 className="text-[28px] font-normal text-[#1d1d1f] mb-3 tracking-[-0.02em]">School Registered</h2>
          <p className="text-[#86868b] text-[15px] mb-8 leading-[1.47]">
            <strong className="text-[#1d1d1f]">{details.schoolName}</strong> is set up. Taking you to your dashboard...
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0071e3]/10 text-[#0055FF] text-[12px] font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Launch offer · 40 % off · limited time
              </div>
              <h1 className="text-[40px] md:text-[48px] font-normal text-[#1d1d1f] mb-5 leading-[1.08] tracking-[-0.035em]">
                Empower your{' '}
                <span className="gradient-text">institution</span> today.
              </h1>
              <p className="text-[#86868b] text-[17px] leading-[1.47] tracking-[0.011em]">
                Sign in once. Set up your school in under 2 minutes. Lock in launch pricing — 40 % off the regular plan, for the full first year.
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                'Centralized Multi-branch Control',
                'AI-Powered Student Risk Monitoring',
                'Integrated Parent-Teacher Communication',
                'Advanced Financial & Academic Reports',
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
            <StepHeader step={step} />

            {error && (
              <div className="mb-5 p-3.5 rounded-[12px] bg-[#ff3b30]/5 border border-[#ff3b30]/20 text-[#ff3b30] text-[14px]">
                {error}
              </div>
            )}

            {step === 'auth' ? (
              <AuthStep
                authMode={authMode}
                setAuthMode={setAuthMode}
                authForm={authForm}
                setAuthForm={setAuthForm}
                loading={loading}
                onGoogle={handleGoogle}
                onEmail={handleEmailCreate}
              />
            ) : (
              <DetailsStep
                user={user}
                details={details}
                setDetails={setDetails}
                loading={loading}
                onSubmit={handleSubmitDetails}
                onBack={async () => {
                  // Sign out so they can re-pick auth method.
                  await signOut(auth).catch(() => {});
                  setUser(null);
                  setStep('auth');
                }}
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// ── Sub-components ────────────────────────────────────────────────────────────

const StepHeader = ({ step }: { step: Step }) => (
  <div className="mb-7">
    <div className="flex items-center gap-2 mb-3">
      <StepDot active>1</StepDot>
      <div className={`h-px flex-1 ${step === 'details' ? 'bg-[#0071e3]' : 'bg-[#d2d2d7]'}`} />
      <StepDot active={step === 'details'}>2</StepDot>
    </div>
    <h2 className="text-[22px] font-normal text-[#1d1d1f] mb-1 tracking-[-0.02em]">
      {step === 'auth' ? 'Sign in to begin' : 'School details'}
    </h2>
    <p className="text-[#86868b] text-[14px]">
      {step === 'auth'
        ? 'Use Google or email to create your owner account.'
        : 'A few quick details and your school is live.'}
    </p>
  </div>
);

const StepDot = ({ active, children }: { active?: boolean; children: React.ReactNode }) => (
  <div
    className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-medium ${
      active ? 'bg-[#0071e3] text-white' : 'bg-[#f5f5f7] text-[#86868b]'
    }`}
  >
    {children}
  </div>
);

interface AuthStepProps {
  authMode: AuthMode;
  setAuthMode: (m: AuthMode) => void;
  authForm: { email: string; password: string };
  setAuthForm: (f: { email: string; password: string }) => void;
  loading: boolean;
  onGoogle: () => void;
  onEmail: (e: React.FormEvent) => void;
}

const AuthStep: React.FC<AuthStepProps> = ({
  authMode, setAuthMode, authForm, setAuthForm, loading, onGoogle, onEmail,
}) => (
  <div className="space-y-5">
    <button
      type="button"
      onClick={onGoogle}
      disabled={loading}
      className="w-full flex items-center justify-center gap-3 bg-white border border-[#d2d2d7] hover:border-[#86868b] text-[#1d1d1f] py-3 rounded-[12px] text-[15px] font-medium transition-all disabled:opacity-50"
    >
      {loading && authMode === 'google' ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          <GoogleIcon /> Continue with Google
        </>
      )}
    </button>

    <div className="flex items-center gap-3">
      <div className="h-px flex-1 bg-[#d2d2d7]/60" />
      <span className="text-[12px] text-[#86868b]">or</span>
      <div className="h-px flex-1 bg-[#d2d2d7]/60" />
    </div>

    <button
      type="button"
      onClick={() => setAuthMode(authMode === 'email' ? 'google' : 'email')}
      className="w-full text-center text-[13px] text-[#0071e3] hover:underline"
    >
      {authMode === 'email' ? 'Hide email option' : 'Use email & password instead'}
    </button>

    {authMode === 'email' && (
      <form onSubmit={onEmail} className="space-y-4 pt-1">
        <div className="space-y-1.5">
          <label className="text-[12px] font-medium text-[#86868b] ml-1">Work Email</label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" />
            <input
              required
              type="email"
              value={authForm.email}
              onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
              maxLength={254}
              placeholder="owner@school.com"
              className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] py-2.5 pl-10 pr-4 text-[#1d1d1f] text-[15px] focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition-all outline-none placeholder:text-[#b0b0b8]"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-[12px] font-medium text-[#86868b] ml-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" />
            <input
              required
              type="password"
              value={authForm.password}
              onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
              minLength={MIN_PASSWORD}
              placeholder={`Min. ${MIN_PASSWORD} chars, 1 uppercase, 1 number`}
              className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] py-2.5 pl-10 pr-4 text-[#1d1d1f] text-[15px] focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition-all outline-none placeholder:text-[#b0b0b8]"
            />
          </div>
        </div>
        <button
          disabled={loading}
          type="submit"
          className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-3 rounded-[12px] text-[15px] font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Create Account <ArrowRight className="w-4 h-4" /></>}
        </button>
      </form>
    )}

    <p className="text-center text-[#86868b] text-[12px]">
      Already have an account?{' '}
      <Link to="/login" className="text-[#0071e3] hover:underline">Sign in</Link>
    </p>
  </div>
);

interface DetailsStepProps {
  user: FirebaseUser | null;
  details: { schoolName: string; ownerName: string; phone: string; address: string };
  setDetails: React.Dispatch<React.SetStateAction<{ schoolName: string; ownerName: string; phone: string; address: string }>>;
  loading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}

const DetailsStep: React.FC<DetailsStepProps> = ({ user, details, setDetails, loading, onSubmit, onBack }) => {
  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setDetails((d) => ({ ...d, [e.target.name]: e.target.value }));

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="flex items-center gap-3 p-3 rounded-[12px] bg-[#f5f5f7] text-[13px] text-[#424245]">
        <div className="w-8 h-8 rounded-full bg-[#0071e3] text-white flex items-center justify-center text-[13px] font-medium">
          {(user?.email ?? '?')[0]?.toUpperCase()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="truncate">{user?.email ?? 'signed-in'}</div>
        </div>
        <button type="button" onClick={onBack} className="text-[12px] text-[#0071e3] hover:underline">
          Change
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-[12px] font-medium text-[#86868b] ml-1">School Name</label>
          <div className="relative">
            <School className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" />
            <input required name="schoolName" maxLength={MAX_SCHOOL_NAME} value={details.schoolName} onChange={change}
              placeholder="e.g. Oakridge Academy"
              className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] py-2.5 pl-10 pr-4 text-[#1d1d1f] text-[15px] focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition-all outline-none placeholder:text-[#b0b0b8]" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-[12px] font-medium text-[#86868b] ml-1">Owner Name</label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" />
            <input required name="ownerName" maxLength={MAX_OWNER_NAME} value={details.ownerName} onChange={change}
              placeholder="Full Name"
              className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] py-2.5 pl-10 pr-4 text-[#1d1d1f] text-[15px] focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition-all outline-none placeholder:text-[#b0b0b8]" />
          </div>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[12px] font-medium text-[#86868b] ml-1">Phone Number</label>
        <div className="relative">
          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" />
          <input required name="phone" maxLength={MAX_PHONE} value={details.phone} onChange={change}
            placeholder="+91 98765 43210"
            className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] py-2.5 pl-10 pr-4 text-[#1d1d1f] text-[15px] focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition-all outline-none placeholder:text-[#b0b0b8]" />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[12px] font-medium text-[#86868b] ml-1">School Address</label>
        <div className="relative">
          <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-[#86868b]" />
          <textarea required name="address" rows={3} maxLength={MAX_ADDRESS} value={details.address} onChange={change}
            placeholder="Full address of the school"
            className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] py-2.5 pl-10 pr-4 text-[#1d1d1f] text-[15px] focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition-all outline-none resize-none placeholder:text-[#b0b0b8]" />
        </div>
      </div>

      <button disabled={loading} type="submit"
        className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-3.5 rounded-[12px] text-[15px] font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50">
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Activate My School <ArrowRight className="w-4 h-4" /></>}
      </button>

      <p className="text-center text-[#86868b] text-[12px]">
        By continuing, you agree to our{' '}
        <Link to="/legal/terms" className="text-[#0071e3] hover:underline">Terms</Link> and{' '}
        <Link to="/legal/privacy" className="text-[#0071e3] hover:underline">Privacy Policy</Link>.
      </p>
    </form>
  );
};

export default RegisterPage;
