import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Sparkles, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

interface SchoolDoc {
  schoolName?: string;
  ownerName?: string;
  email?: string;
  phone?: string;
  subscriptionStatus?: string;
  paymentStatus?: string;
}

// NOTE: The Razorpay payment gateway was removed from the activation flow.
// This page is now a neutral placeholder that holds the /activate route while
// the replacement activation experience is built. Owners whose schools are
// already marked `paid` are still forwarded straight to the owner dashboard.
const ActivatePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [school, setSchool] = useState<SchoolDoc | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        navigate('/login');
        return;
      }
      try {
        const snap = await getDoc(doc(db, 'schools', u.uid));
        if (!snap.exists()) {
          navigate('/register');
          return;
        }
        const data = snap.data() as SchoolDoc;
        setSchool(data);
        if (data.paymentStatus === 'paid') {
          window.location.href =
            import.meta.env.VITE_OWNER_DASHBOARD_URL || 'https://owner-dashboard-blue.vercel.app/';
          return;
        }
      } catch (err) {
        console.error('[activate] school doc read failed:', err);
      } finally {
        setLoading(false);
      }
    });
    return unsub;
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#fbfbfd]">
        <Loader2 className="w-6 h-6 text-[#0071e3] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 bg-[#fbfbfd] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
        className="bg-white border border-[#d2d2d7]/40 rounded-[20px] p-10 sm:p-12 text-center max-w-md w-full shadow-[0_24px_60px_-24px_rgba(0,0,0,0.18)]"
      >
        <div className="w-16 h-16 bg-[#0071e3]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-8 h-8 text-[#0071e3]" />
        </div>
        <h1 className="text-[26px] sm:text-[28px] font-normal text-[#1d1d1f] mb-3 tracking-[-0.02em]">
          Activate {school?.schoolName || 'your school'}
        </h1>
        <p className="text-[#86868b] text-[15px] mb-8 leading-[1.5]">
          Our team is setting up your school account. We'll reach out shortly to
          complete activation and walk you through onboarding.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-medium px-6 py-3 rounded-full transition-colors"
        >
          Talk to our team
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
};

export default ActivatePage;
