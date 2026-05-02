import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles, Loader2, CreditCard } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, Timestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

interface SchoolDoc {
  schoolName?: string;
  trialEndsAt?: Timestamp;
  subscriptionStatus?: string;
}

const OWNER_DASHBOARD_URL =
  import.meta.env.VITE_OWNER_DASHBOARD_URL || 'https://owner-dashboard-blue.vercel.app/';

const WelcomePage = () => {
  const navigate = useNavigate();
  const [school, setSchool] = useState<SchoolDoc | null>(null);
  const [loading, setLoading] = useState(true);

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
        setSchool(snap.data() as SchoolDoc);
      } catch (err) {
        console.error('[welcome] school doc read failed:', err);
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

  const daysLeft = school?.trialEndsAt
    ? Math.max(0, Math.ceil((school.trialEndsAt.toDate().getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
    : 14;

  const trialEndStr = school?.trialEndsAt
    ? school.trialEndsAt.toDate().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
    : '';

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 bg-[#fbfbfd]">
      <div className="max-w-[760px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[24px] border border-[#d2d2d7]/40 p-10 md:p-14 shadow-sm text-center"
        >
          <div className="w-16 h-16 bg-[#34c759]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-[#34c759]" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#34c759]/10 text-[#1f8a3c] text-[12px] font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Free trial active
          </div>

          <h1 className="text-[32px] md:text-[40px] font-normal text-[#1d1d1f] tracking-[-0.025em] mb-3">
            Welcome to Edullent{school?.schoolName ? `, ${school.schoolName}` : ''}.
          </h1>
          <p className="text-[#86868b] text-[17px] leading-[1.5] max-w-[520px] mx-auto mb-8">
            Your 14-day free trial has started. Explore every feature across all four portals — owner, principal, teacher, and parent — with no card on file.
          </p>

          {/* Trial countdown card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[560px] mx-auto mb-10">
            <Stat label="Days left" value={`${daysLeft}`} accent="#0071e3" />
            <Stat label="Trial ends" value={trialEndStr || '—'} small accent="#1d1d1f" />
            <Stat label="Status" value="Active" accent="#34c759" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <a
              href={OWNER_DASHBOARD_URL}
              className="inline-flex items-center gap-2 bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-medium px-6 py-3 rounded-[12px] transition-all"
            >
              Continue to Dashboard <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/activate"
              className="inline-flex items-center gap-2 text-[#0071e3] hover:text-[#0077ed] text-[15px] font-medium px-4 py-3 transition-colors"
            >
              <CreditCard className="w-4 h-4" /> Activate now
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-[#f0f0f2] text-left">
            <p className="text-[12px] font-medium tracking-[0.16em] uppercase text-[#86868b] mb-4">What's next</p>
            <ul className="space-y-3">
              {[
                'Add your branches and class structure from the Owner dashboard',
                'Invite your principal — they get their own portal automatically',
                'Bulk-import students or add manually; parents get logins instantly',
                'Set up fees, timetable, and exam patterns at your pace',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-[#424245]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0071e3] mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Stat = ({ label, value, accent, small }: { label: string; value: string; accent: string; small?: boolean }) => (
  <div className="bg-[#fbfbfd] border border-[#d2d2d7]/40 rounded-[14px] p-4">
    <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#86868b] mb-1">{label}</div>
    <div
      className={`${small ? 'text-[14px]' : 'text-[28px]'} font-light tracking-[-0.02em]`}
      style={{ color: accent }}
    >
      {value}
    </div>
  </div>
);

export default WelcomePage;
