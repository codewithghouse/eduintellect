import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Loader2,
  ShieldCheck,
  AlertCircle,
  Send,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAuth } from '../../lib/auth';

const GoogleMark = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.61z"
    />
    <path
      fill="#34A853"
      d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.92v2.33A9 9 0 0 0 9 18z"
    />
    <path
      fill="#FBBC05"
      d="M3.97 10.71A5.4 5.4 0 0 1 3.68 9c0-.59.1-1.17.29-1.71V4.96H.92A9 9 0 0 0 0 9c0 1.45.35 2.82.92 4.04l3.05-2.33z"
    />
    <path
      fill="#EA4335"
      d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 9 0C5.48 0 2.44 2.02.92 4.96l3.05 2.33C4.68 5.16 6.66 3.58 9 3.58z"
    />
  </svg>
);

type RequestState = 'idle' | 'submitting' | 'pending' | 'submitted';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAdmin, loading, signInWithGoogle, signOut } = useAuth();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [reason, setReason] = useState('');
  const [requestState, setRequestState] = useState<RequestState>('idle');

  const from = (location.state as { from?: string } | null)?.from ?? '/admin';

  useEffect(() => {
    if (!loading && user && isAdmin) {
      navigate(from, { replace: true });
    }
  }, [loading, user, isAdmin, navigate, from]);

  // When a non-admin signs in, check whether they've already submitted a request
  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!user || isAdmin) return;
      try {
        const snap = await getDoc(doc(db, 'accessRequests', user.uid));
        if (!cancelled && snap.exists()) setRequestState('pending');
      } catch (err) {
        console.warn('[login] request lookup failed:', err);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user, isAdmin]);

  const handleGoogle = async () => {
    setSubmitting(true);
    setError('');
    try {
      await signInWithGoogle();
    } catch (err: unknown) {
      const code =
        typeof err === 'object' && err && 'code' in err
          ? String((err as { code: unknown }).code)
          : '';
      if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
        setError('Sign-in was cancelled.');
      } else if (code === 'auth/popup-blocked') {
        setError('Popup blocked by your browser. Please allow popups and try again.');
      } else if (code === 'auth/network-request-failed') {
        setError('Network error. Check your internet connection.');
      } else {
        setError('Could not sign in. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const submitRequest = async () => {
    if (!user) return;
    setRequestState('submitting');
    setError('');
    try {
      await setDoc(doc(db, 'accessRequests', user.uid), {
        uid: user.uid,
        email: user.email ?? null,
        displayName: user.displayName ?? null,
        photoURL: user.photoURL ?? null,
        reason: reason.trim().slice(0, 500) || null,
        status: 'pending',
        requestedAt: serverTimestamp(),
      });
      setRequestState('submitted');
    } catch (err) {
      console.error('[login] submit request failed:', err);
      setError('Could not submit request. Please try again.');
      setRequestState('idle');
    }
  };

  const showAccessGate = !loading && user && !isAdmin;

  return (
    <div className="min-h-screen bg-[#fbfbfd] flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[440px]"
      >
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-[#0071e3]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-[#0071e3]/20">
            <ShieldCheck className="w-7 h-7 text-[#0071e3]" />
          </div>
          <h1 className="text-[28px] font-normal text-[#1d1d1f] tracking-[-0.02em]">
            Admin Console
          </h1>
          <p className="text-[#86868b] text-[14px] mt-1">
            Sign in to manage the Edullent platform
          </p>
        </div>

        <div className="bg-white rounded-[20px] border border-[#d2d2d7]/40 p-8 shadow-sm">
          {error && (
            <div className="mb-5 p-3.5 rounded-[12px] bg-[#ff3b30]/5 border border-[#ff3b30]/20 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#ff3b30] mt-0.5 shrink-0" />
              <p className="text-[#ff3b30] text-[13px] leading-snug">{error}</p>
            </div>
          )}

          {showAccessGate ? (
            requestState === 'submitted' || requestState === 'pending' ? (
              <div className="space-y-5">
                <div className="p-4 rounded-[12px] bg-[#0071e3]/5 border border-[#0071e3]/20 flex items-start gap-3">
                  {requestState === 'submitted' ? (
                    <CheckCircle2 className="w-5 h-5 text-[#0071e3] mt-0.5 shrink-0" />
                  ) : (
                    <Clock className="w-5 h-5 text-[#0071e3] mt-0.5 shrink-0" />
                  )}
                  <div>
                    <p className="text-[#1d1d1f] text-[14px] font-medium mb-1">
                      {requestState === 'submitted'
                        ? 'Request submitted'
                        : 'Request pending'}
                    </p>
                    <p className="text-[#86868b] text-[13px] leading-snug">
                      A superadmin will review your request for{' '}
                      <span className="text-[#1d1d1f]">{user?.email}</span>. You'll
                      get access as soon as it's approved.
                    </p>
                  </div>
                </div>
                <button
                  onClick={async () => {
                    await signOut();
                    setRequestState('idle');
                    setReason('');
                    setError('');
                  }}
                  className="w-full bg-[#1d1d1f] hover:bg-black text-white py-3 rounded-[12px] text-[14px] font-medium transition"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="p-4 rounded-[12px] bg-[#ff9500]/5 border border-[#ff9500]/20">
                  <p className="text-[#1d1d1f] text-[14px] font-medium mb-1">
                    Access required
                  </p>
                  <p className="text-[#86868b] text-[13px] leading-snug">
                    <span className="text-[#1d1d1f]">{user?.email}</span> isn't an
                    authorized admin yet. Send a request below — a superadmin will
                    review it.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[12px] font-medium text-[#86868b] ml-1">
                    Why do you need access? (optional)
                  </label>
                  <textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    rows={3}
                    maxLength={500}
                    placeholder="e.g. I'm the operations lead at Oakridge Academy."
                    className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] py-2.5 px-3 text-[14px] outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition resize-none placeholder:text-[#b0b0b8]"
                  />
                </div>

                <button
                  onClick={submitRequest}
                  disabled={requestState === 'submitting'}
                  className="w-full bg-[#0071e3] hover:bg-[#0077ed] disabled:opacity-60 text-white py-3 rounded-[12px] text-[14px] font-medium flex items-center justify-center gap-2 transition"
                >
                  {requestState === 'submitting' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Request access
                    </>
                  )}
                </button>

                <button
                  onClick={async () => {
                    await signOut();
                    setRequestState('idle');
                    setReason('');
                    setError('');
                  }}
                  className="w-full text-[#86868b] hover:text-[#1d1d1f] py-1 text-[13px] transition"
                >
                  Sign out and use a different account
                </button>
              </div>
            )
          ) : (
            <button
              onClick={handleGoogle}
              disabled={submitting || loading}
              className="w-full bg-white hover:bg-[#fafafa] active:bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] py-3 rounded-[12px] text-[14px] font-medium flex items-center justify-center gap-3 transition disabled:opacity-60"
            >
              {submitting || loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <GoogleMark />
                  Continue with Google
                </>
              )}
            </button>
          )}

          {!showAccessGate && (
            <p className="mt-6 text-center text-[#86868b] text-[12px] leading-snug">
              Admin access is restricted to authorized Google accounts.
              If you're not approved, you can request access after signing in.
            </p>
          )}
        </div>

        <button
          onClick={() => navigate('/')}
          className="mt-7 text-[#86868b] hover:text-[#1d1d1f] transition text-[13px] flex items-center justify-center gap-2 mx-auto"
        >
          ← Back to homepage
        </button>
      </motion.div>
    </div>
  );
}
